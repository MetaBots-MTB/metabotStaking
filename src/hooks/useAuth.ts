import { useCallback } from 'react'
import { useWeb3React, UnsupportedChainIdError } from '@web3-react/core'
// eslint-disable-next-line import/no-unresolved
// import { NoBscProviderError } from '@binance-chain/bsc-connector'
import {
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected,
} from '@web3-react/injected-connector'
import {
  UserRejectedRequestError as UserRejectedRequestErrorWalletConnect,
  WalletConnectConnector,
} from '@web3-react/walletconnect-connector'
import { connectorsByName } from 'utils/web3React'
import { setupNetwork } from 'utils/wallet'
import { ConnectorNames, connectorLocalStorageKey } from 'config/constants/wallets'
import { useToast } from './useToast'
import { toastTypes } from 'Components/Toast'

const useAuth = () => {
  const { activate, deactivate } = useWeb3React()
  const { toast } = useToast()

  const login = useCallback((connectorID: ConnectorNames) => {
    const connector = connectorsByName[connectorID]
    if (connector) {
      activate(connector, async (error: Error) => {
        console.log('error',error)
        if (error instanceof UnsupportedChainIdError) {
          const hasSetup = await setupNetwork()
          if (hasSetup) {
            activate(connector)
          }
        } else {
          window.localStorage.removeItem(connectorLocalStorageKey)
          if (error instanceof NoEthereumProviderError) {
            toast(toastTypes.error, 'Provider Error', 'No provider was found')
          } else if (
            error instanceof UserRejectedRequestErrorInjected ||
            error instanceof UserRejectedRequestErrorWalletConnect
          ) {
            if (connector instanceof WalletConnectConnector) {
              const walletConnector = connector as WalletConnectConnector
              walletConnector.walletConnectProvider = null
            }
            toast(toastTypes.error, "Authorization error", 'Please authorize to access your account')
          } else {
            toast(toastTypes.error, error.name, error.message)
          }
        }
      })
    } else {
      toast(toastTypes.error, "Can't find connector", 'The connector config is wrong')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { login, logout: deactivate }
}

export default useAuth
