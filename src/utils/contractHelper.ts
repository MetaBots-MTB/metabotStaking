import { Web3Provider } from '@ethersproject/providers'
import { Signer } from '@ethersproject/abstract-signer'
import { Contract, ContractInterface } from '@ethersproject/contracts'

//addresses
import { getstakeAddress } from '../utils/addressHelper'

// ABI
import bep20Abi from 'config/abi/IBEP20.json'
import stakingAbi from 'config/abi/MetaBotsStaking.json'

//types
import { IBEP20 } from 'config/types/IBEP20'
import { MTB_Staking } from 'config/types/metabotstaking'


// const getContract = ( address: string, abi: any, web3?: Web3) => {
//     const _web3 = web3 ?? web3NoAccount
//     return new _web3.eth.Contract(abi as unknown as AbiItem[], address)
// }

const getContract = (address: string, abi: ContractInterface, signerOrProvider?: Web3Provider | Signer) => {
    return new Contract(address, abi, signerOrProvider)
}

export const getBep20Contract = (address: string, signerOrProvider?: Web3Provider | Signer) => {
    return getContract(address, bep20Abi, signerOrProvider) as unknown as IBEP20
}
export const getstakeContract = (signerOrProvider?: Web3Provider | Signer) => {
    return getContract(getstakeAddress(), stakingAbi, signerOrProvider) as unknown as MTB_Staking
}
