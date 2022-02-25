import { BigNumber } from "ethers"
import { useEffect, useState } from "react"
import { getTokenAddress } from "utils/addressHelper"
import { tokenBalance } from "utils/callHelper"
import { useBEP20 } from "./useContract"
import { useActiveWeb3React } from "./web3"



export const useToken = () => {

    const { account } = useActiveWeb3React()
    const tokenContract = useBEP20(getTokenAddress())
    const [balance, setBalance] = useState<BigNumber>()

    const getBalance = async () => {
        const temp = await tokenBalance(tokenContract, account)
        setBalance(temp)
    }
    useEffect(() => {
        if (account) getBalance()
    }, [account])

    return { balance }
}