import { useBEP20, useStakingContract } from "hooks/useContract"
import { useCallback, useEffect, useState } from "react"
import { addstakes, addStake, configureLocks, getReward, handleTransaction, withDrawStake, startTime, approve } from "utils/callHelper"
import { BigNumber } from '@ethersproject/bignumber';
import { useActiveWeb3React } from "hooks/web3"
import { useToast } from "hooks/useToast";
import { formatBN, formatDate, formatDuration } from "utils/formatters";
import {
    BigNumberish,
    BytesLike,
    CallOverrides,
    ContractTransaction,
    Overrides,
    PopulatedTransaction,
    Signer,
    utils,
} from "ethers";


export const useStaking = () => {

    const { account } = useActiveWeb3React()
    const stakingContract = useStakingContract()
    const tokenContract = useBEP20("0x09861d8c3C1350699f8522253E5485f751D6fA78")
    const { toast, toastTypes } = useToast()

    const [loading, setLoading] = useState(false)
    const [locks, setLocks] = useState<any>()

    const [stakes, setStakes] = useState<any>([])
    const [earn, setEarn] = useState<any>([])

    const getStakes = useCallback(
        async (_account: string) => {
            setLoading(true)
            try {
                let temp: any = await addstakes(stakingContract, _account, true)
                setStakes(temp.stakes)
                setEarn(temp.stakesEarned)
            } catch (error) {
                // alert((error as any).message)
            } finally {
                setLoading(false)
            }
        }, [stakingContract])

    const configLock = useCallback(
        async () => {
            try {
                setLoading(true)
                const configLog = await configureLocks(stakingContract)
                setLocks(configLog)
            } catch (error) {
                console.log('err', error)
            } finally {
                setLoading(false)
            }
        }, [stakingContract])

    useEffect(() => {
        configLock()
        if (account) getStakes(account)
    }, [account, getStakes, configLock])

    const create = useCallback(
        async (amount: BigNumber, lockIndex: number) => {
            try {
                setLoading(true)
                let temp1: ContractTransaction = await approve(tokenContract, amount, account)
                toast(toastTypes.info, "Info", "Approve Amount is in proceess")
                const success1 = await handleTransaction(temp1)
                if (success1) {
                    toast(toastTypes.success, "Success", "Amount Approved")
                    const tx: ContractTransaction = await addStake(stakingContract, amount, lockIndex, account)
                    toast(toastTypes.info, "transaction Info", "Creating Stake is in proceess")
                    const success = await handleTransaction(tx)
                    if (success) getStakes(account); toast(toastTypes.success, "Success", "Stake created")
                }
            } catch (err) {
                toast(toastTypes.error, "transaction Failed", (err as any).message)
            } finally {
                setLoading(false)
            }
        }, [stakingContract])

    const withDraw = useCallback(
        async (amount, stakeID) => {
            setLoading(true)
            try {
                const tx: ContractTransaction = await withDrawStake(stakingContract, amount, stakeID, account)
                toast(toastTypes.info, "Info", "Transaction is in proceess")
                const success = await handleTransaction(tx)
                if (success) getStakes(account);toast(toastTypes.success, "Success", "WithDrawn Succeed")
            } catch (error) {
                alert((error as any).message)
            } finally {
                setLoading(false)
            }
        }, [stakingContract])

    const reward = useCallback(
        async (stakeID) => {
            setLoading(true)
            const tx: ContractTransaction = await getReward(stakingContract, stakeID, account)
            toast(toastTypes.info, "Info", "Transaction is in proceess")
            const success = await handleTransaction(tx)
            if (success) getStakes(account);toast(toastTypes.success, "Success", "Rewards sent")
            setLoading(false)
        }, [stakingContract])


    return { loading, locks, create, stakes, earn, withDraw, reward }
}