import { useMemo } from 'react'
import {
    getstakeContract,
    getBep20Contract
} from 'utils/contractHelper'
import { useActiveWeb3React } from './web3'


export const useSigner = () => {
    const { library, account } = useActiveWeb3React()
    const signer = useMemo(() => (account ? library?.getSigner(account) : library), [library, account])
    return signer ?? library
}

export const useBEP20 = (address: string) => {
    const signer = useSigner()
    return useMemo(() => address ? getBep20Contract(address, signer) : null, [address, signer])
}
export const useStakingContract = () => {
    const signer = useSigner()
    return useMemo(() => getstakeContract(signer), [signer])
}