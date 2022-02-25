import { BigNumber } from '@ethersproject/bignumber';
import { configureLock } from 'config/types/metabotstaking';

export interface istake {
    active: boolean,
    apy: number,
    started: BigNumber,
    unlock: BigNumber,
    lastUpdated: BigNumber,
    stake: BigNumber,
    currentRewards: BigNumber,
    withdrawnRewards: BigNumber
}

export interface IStakeCard {
    stake: istake,
    earn: BigNumber[],
    withDraw: (amount: BigNumber, id: number) => void,
    reward: (id: number) => void,
    index: number
}
export interface IConnectWallet {
    open: boolean,
    setIsOpen: (isOpen: boolean) => void,
}

export interface IDropDown {
    options: configureLock[],
    setIndex: (id: number) => void
}
