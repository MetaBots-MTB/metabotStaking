import { useCallback, useEffect, useState } from "react"
import { getstakeAddress, getTokenAddress } from "utils/addressHelper"
import { fetchToken, Token } from "utils/callHelper"
import { useBEP20 } from "./useContract"
import { useActiveWeb3React } from "./web3"


export const useToken = () => {

    const { account } = useActiveWeb3React()
    const [token, setToken] = useState<Token>()
    const [isLoadingToken, setLoading] = useState(false)

    const getToken = useCallback(async () => {
        setLoading(true)
        try {
            const receipt = await fetchToken(getTokenAddress(), account,getstakeAddress())
            setToken(receipt)
        } catch (error) {
            console.log('err', error)
        } finally {
            setLoading(true)
        }
    }, [account, getTokenAddress()])

    useEffect(() => {
        if (account) getToken()
    }, [account])


    return { token, isLoadingToken ,getToken}
}