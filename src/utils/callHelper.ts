// import BigNumber from 'bignumber.js'
import { MTB_Staking } from 'config/types/metabotstaking';
import { IBEP20 } from 'config/types/IBEP20';
import { getstakeAddress } from './addressHelper';
import { Contract, ContractTransaction, ContractReceipt } from '@ethersproject/contracts'
import { BigNumber } from '@ethersproject/bignumber';


export const handleTransaction = async (transaction: ContractTransaction) => {
    const receipt = await transaction.wait()
    // if (dispatch) handleReceipt(receipt, dispatch)
    return receipt.status > 0
}

// token calls
export const tokenBalance = async (contract: IBEP20, account: string) => {
    return contract.balanceOf(account);
}
export const approve = (contract: IBEP20, amount: BigNumber, account: string) => {
    return contract.approve(getstakeAddress(), amount, { from: account })
}

// stake calls
export const configureLocks = async (contract: MTB_Staking) => {
    return contract.allConfiguredLocks()
}
export const addStake = async (contract: MTB_Staking, amount: BigNumber, configId: number, account: string) => {
    return contract.stake(amount, configId, { from: account })
}
export const userStakes = (contract: MTB_Staking, account: string, addEarned: boolean) => {
    return contract.accountStakes(account, addEarned);
}
export const withDrawStake = async (contract: MTB_Staking, amount: BigNumber, stakeID: number, account: string) => {
    return contract.withdraw(amount, stakeID, { from: account })
}
export const getReward = async (contract: MTB_Staking, stakeID: number, account: string) => {
    return contract.getReward(stakeID, { from: account })
}
export const earnAmount = async (contract: MTB_Staking, acount: string, index: number) => {
    return contract.earned(acount, index);
}