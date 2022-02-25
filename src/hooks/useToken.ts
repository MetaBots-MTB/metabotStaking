import { BigNumber } from "ethers"
import { useCallback, useEffect, useMemo, useState } from "react"
import { getTokenAddress } from "utils/addressHelper"
import { tokenBalance } from "utils/callHelper"
import { toBigNumber } from "utils/converters"
import { formatBN } from "utils/formatters"
import { useBEP20 } from "./useContract"
import { useActiveWeb3React } from "./web3"



export const useToken = () => {

    const { account } = useActiveWeb3React()
    const tokenContract = useBEP20(getTokenAddress())

    const [balance,setBalance] =useState<string>()

    const getBalance = async () => {
        const temp = await tokenBalance(tokenContract, account)
        // const temp1 =  toBigNumber(temp)
        setBalance(temp.toString())
    }

    useEffect(() => {
        if (account) getBalance()
    }, [account])

    return { balance }
}