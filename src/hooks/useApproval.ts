import { BigNumber } from '@ethersproject/bignumber'
import { ContractTransaction } from 'ethers'
import { useCallback, useMemo, useState } from 'react'
import { getstakeAddress, getTokenAddress } from 'utils/addressHelper'
import { approve, handleTransaction } from 'utils/callHelper'
import { useBEP20 } from './useContract'
import { useToast } from './useToast'
import { useToken } from './useToken'
import { useActiveWeb3React } from './web3'


export const useTokenApproval = () => {
    return useApproval(getTokenAddress(), getstakeAddress())
}

export const useApproval = (tokenAddress: string, spender: string) => {

    const { account, chainId } = useActiveWeb3React()
    const tokenContract = useBEP20(tokenAddress)
    const [approving, setApproving] = useState(false)
    const { token, isLoadingToken, getToken } = useToken()
    const { toast, toastTypes } = useToast()

    const handleApprove = useCallback(async (amount?: BigNumber) => {
        if (account && spender && tokenContract) {
            try {
                setApproving(true)
                let transaction: ContractTransaction
                transaction = await approve(tokenContract, amount, spender, account)
                toast(toastTypes.info, "Info", "Approve is in proceess")
                const success = await handleTransaction(transaction)
                if (success) getToken(); toast(toastTypes.success, "Success", "Approve succeed")
                return success
            } catch (error: any) {
                toast(toastTypes.error, "transaction Failed", error.message)
            } finally {
                setApproving(false)
            }
        }
        return false
    }, [tokenAddress, account, chainId, spender, tokenContract])

    const approvedAmount = useMemo(() => {
        return spender && token?.approvals ? token?.approvals[spender] : BigNumber.from(0)
    }, [token?.approvals, spender])

    return { token, isLoadingToken, approve: handleApprove, approving, approvedAmount }
}
