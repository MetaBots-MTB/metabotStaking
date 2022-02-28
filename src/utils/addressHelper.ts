import addresses from 'config/constants/contracts'
import { Address } from 'config/constants/types'


export const getAddress = (address: Address): string => {
    const mainNetChainId = 97
    const chainId = process.env.REACT_APP_CHAIN_ID
    if (!address) return null;
    return address[chainId] ? address[chainId] : address[mainNetChainId]
}

export const getstakeAddress = () => {
    return getAddress(addresses.MTB_staking)
}

export const getTokenAddress = () => {
    return getAddress(addresses.MetaBotToken)
}
export const getMulticallAddress = () => {
    return getAddress(addresses.multiCall)
}