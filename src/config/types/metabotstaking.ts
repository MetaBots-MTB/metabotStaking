/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
    BaseContract,
    BigNumber,
    BigNumberish,
    BytesLike,
    CallOverrides,
    ContractTransaction,
    Overrides,
    PayableOverrides,
    PopulatedTransaction,
    Signer,
    utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";


type configureLock = [BigNumber, BigNumber] & { time: BigNumber, apy: BigNumber }

type accountStake = [boolean, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
    active: boolean,
    apy: BigNumber,
    started: BigNumber,
    unlock: BigNumber,
    lastUpdated: BigNumber,
    stake: BigNumber,
    currentRewards: BigNumber,
    withdrawnRewards: BigNumber
}

export interface MTB_StakingInterface extends utils.Interface {
    functions: {
        "initialize(address,address,uint256)": FunctionFragment;
        "allConfiguredLocks()": FunctionFragment;
        "accountStakes(address,bool)": FunctionFragment;
        "earned(address,uint256)": FunctionFragment;
        "stake(uint256, uint256)": FunctionFragment;
        "withdraw(uint256 , uint256 )": FunctionFragment;
        "getReward(uint256 )": FunctionFragment;
        "exit(uint256 )": FunctionFragment;
        "getAllRewards()": FunctionFragment;
        "exitUnlocked()": FunctionFragment;
        "updateStartTime(uint256)": FunctionFragment;
        "updateConfiguredLock(uint256, uint64, uint32)": FunctionFragment;
        "updateConfiguredLocks((uint64,uint32 ))": FunctionFragment;
        "startTime()": FunctionFragment;
    };

    events: {
        "Staked(address,uint256,uint256)": EventFragment;
        "Withdrawn(address,uint256,uint256 )": EventFragment;
        "RewardPaid(address,uint256,uint256)": EventFragment;
    }
    getEvent(nameOrSignatureOrTopic: "Staked"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Withdrawn"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RewardPaid"): EventFragment;

    encodeFunctionData(
        functionFragment: "initialize",
        values: [string, string, BigNumber]
    ): string;
    encodeFunctionData(
        functionFragment: "allConfiguredLocks",
        values: undefined
    ): string;
    encodeFunctionData(
        functionFragment: "accountStakes",
        values: [string, boolean]
    ): string;
    encodeFunctionData(
        functionFragment: "earned",
        values: [string, BigNumber]
    ): string;
    encodeFunctionData(
        functionFragment: "stake",
        values: [BigNumber, BigNumber]
    ): string;
    encodeFunctionData(
        functionFragment: "withdraw",
        values: [BigNumber, BigNumber]
    ): string;
    encodeFunctionData(
        functionFragment: "getReward",
        values: [BigNumber]
    ): string;
    encodeFunctionData(
        functionFragment: "exit",
        values: [BigNumber]
    ): string;
    encodeFunctionData(
        functionFragment: "getAllRewards",
        values: undefined
    ): string;
    encodeFunctionData(
        functionFragment: "exitUnlocked",
        values: undefined
    ): string;
    encodeFunctionData(
        functionFragment: "updateStartTime",
        values: [BigNumber]
    ): string;
    encodeFunctionData(
        functionFragment: "updateConfiguredLock",
        values: [BigNumber, BigNumber, BigNumber]
    ): string;
    encodeFunctionData(
        functionFragment: "updateConfiguredLocks",
        values: [configureLock]
    ): string;


    decodeFunctionResult(
        functionFragment: "initialize",
        data: BytesLike
    ): Result;
    decodeFunctionResult(
        functionFragment: "allConfiguredLocks",
        data: BytesLike
    ): Result;
    decodeFunctionResult(
        functionFragment: "accountStakes",
        data: BytesLike
    ): Result;
    decodeFunctionResult(
        functionFragment: "earned",
        data: BytesLike
    ): Result;
    decodeFunctionResult(
        functionFragment: "stake",
        data: BytesLike
    ): Result;
    decodeFunctionResult(
        functionFragment: "withdraw",
        data: BytesLike
    ): Result;
    decodeFunctionResult(
        functionFragment: "getReward",
        data: BytesLike
    ): Result;
    decodeFunctionResult(
        functionFragment: "exit",
        data: BytesLike
    ): Result;
    decodeFunctionResult(
        functionFragment: "getAllRewards",
        data: BytesLike
    ): Result;
    decodeFunctionResult(
        functionFragment: "exitUnlocked",
        data: BytesLike
    ): Result;
    decodeFunctionResult(
        functionFragment: "updateStartTime",
        data: BytesLike
    ): Result;
    decodeFunctionResult(
        functionFragment: "updateConfiguredLock",
        data: BytesLike
    ): Result;
    decodeFunctionResult(
        functionFragment: "updateConfiguredLocks",
        data: BytesLike
    ): Result;
}

type stakeEvent = TypedEvent<[string, BigNumber, BigNumber], { user: string, stakeId: BigNumber, amount: BigNumber }>
type stakeEventFilter = TypedEventFilter<stakeEvent>;

type WithdrawnEvent = TypedEvent<[string, BigNumber, BigNumber], { user: string, stakeId: BigNumber, amount: BigNumber }>
type WithdrawnFilter = TypedEventFilter<WithdrawnEvent>;

type RewardPaidEvent = TypedEvent<[string, BigNumber, BigNumber], { user: string, stakeId: BigNumber, reward: BigNumber }>
type RewardPaidEventFilter = TypedEventFilter<RewardPaidEvent>;

export interface MTB_Staking extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;

    interface: MTB_StakingInterface;

    queryFilter<TEvent extends TypedEvent>(
        event: TypedEventFilter<TEvent>,
        fromBlockOrBlockhash?: string | number | undefined,
        toBlock?: string | number | undefined
    ): Promise<Array<TEvent>>;

    listeners<TEvent extends TypedEvent>(
        eventFilter?: TypedEventFilter<TEvent>
    ): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(
        eventFilter: TypedEventFilter<TEvent>
    ): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;

    functions: {
        initialize(
            _stakingToken: string,
            _rewardsToken: string,
            _startTime: BigNumberish,
            overrides?: Overrides & { from?: string | Promise<string> }
        ): Promise<ContractTransaction>;

        allConfiguredLocks(overrides?: CallOverrides): Promise<configureLock[]>

        accountStakes(account: string, addEarned: boolean,
            overrides?: CallOverrides): Promise<accountStake[]>

        earned(account: string, stakeId: BigNumber,
            overrides?: CallOverrides): Promise<BigNumber>

        stake(_amount: BigNumber, _configuredLock: BigNumber,
            overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>

        withdraw(_amount: BigNumber, _stakeId: BigNumber,
            overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>

        getReward(_stakeId: BigNumber,
            overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>

        exit(_stakeId: BigNumber,
            overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>

        getAllRewards(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>

        exitUnlocked(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>

        updateStartTime(_startTime: BigNumber,
            overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>

        updateConfiguredLock(configuredLock: BigNumber, time: BigNumber, apy: BigNumber,
            overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>

        updateConfiguredLocks(locks: configureLock,
            overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>
    }

    allConfiguredLocks(overrides?: CallOverrides): Promise<configureLock[]>

    stake(_amount: BigNumber, _configuredLock: BigNumber | number,
        overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>

    accountStakes(account: string, addEarned: boolean,
        overrides?: CallOverrides): Promise<any[]>

    withdraw(_amount: BigNumber, _stakeId: BigNumber | number,
        overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>

    getReward(_stakeId: BigNumber | number,
        overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>

    earned(account: string, stakeId: BigNumber | number,
        overrides?: CallOverrides): Promise<BigNumber>

    startTime(overrides?: CallOverrides): Promise<number>

    filters: {
        Staked(user: string, stakeId: BigNumber, amount: BigNumber): stakeEventFilter;
        Withdrawn(user: string, stakeId: BigNumber, amount: BigNumber): WithdrawnFilter;
        RewardPaid(user: string, stakeId: BigNumber, reward: BigNumber): RewardPaidEventFilter;
    }
}
