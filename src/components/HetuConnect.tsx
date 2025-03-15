'use client'

import { useState, useEffect } from 'react';
import { addHetuNetworkToMetaMask, isConnectedToHetuNetwork } from '@/lib/hetuUtils';
import { HETU_TESTNET_CONFIG } from '@/services/hetu';

export default function HetuConnect() {
  const [isConnected, setIsConnected] = useState(false);
  const [account, setAccount] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Check connection status on component mount
  useEffect(() => {
    const checkConnection = async () => {
      try {
        const connected = await isConnectedToHetuNetwork();
        setIsConnected(connected);
        
        // If connected, get the current account
        if (connected && typeof window !== 'undefined' && (window as any).ethereum) {
          const accounts = await (window as any).ethereum.request({ method: 'eth_accounts' });
          if (accounts.length > 0) {
            setAccount(accounts[0]);
          }
        }
      } catch (err) {
        console.error('Error checking connection:', err);
      }
    };
    
    checkConnection();
    
    // Listen for account changes
    if (typeof window !== 'undefined' && (window as any).ethereum) {
      (window as any).ethereum.on('accountsChanged', (accounts: string[]) => {
        if (accounts.length > 0) {
          setAccount(accounts[0]);
        } else {
          setAccount(null);
        }
      });
      
      // Listen for chain changes
      (window as any).ethereum.on('chainChanged', async () => {
        const connected = await isConnectedToHetuNetwork();
        setIsConnected(connected);
      });
    }
  }, []);

  // Connect to MetaMask and add Hetu network
  const connectToHetu = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Check if MetaMask is installed
      if (typeof window === 'undefined' || !(window as any).ethereum) {
        setError('MetaMask is not installed. Please install MetaMask to connect to Hetu.');
        setIsLoading(false);
        return;
      }
      
      // Request account access
      const accounts = await (window as any).ethereum.request({ method: 'eth_requestAccounts' });
      
      // Add Hetu network to MetaMask
      const added = await addHetuNetworkToMetaMask();
      if (!added) {
        setError('Failed to add Hetu network to MetaMask.');
        setIsLoading(false);
        return;
      }
      
      // Check if connected to Hetu network
      const connected = await isConnectedToHetuNetwork();
      setIsConnected(connected);
      
      if (connected && accounts.length > 0) {
        setAccount(accounts[0]);
      } else {
        setError('Connected to MetaMask but not to Hetu network. Please switch to Hetu network in MetaMask.');
      }
    } catch (err: any) {
      console.error('Error connecting to Hetu:', err);
      setError(err.message || 'Failed to connect to Hetu network.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg p-6">
      <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
        Connect to Hetu Network
      </h3>
      
      {isConnected ? (
        <div className="bg-green-50 p-4 rounded-md">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-green-800">Connected to Hetu Network</h3>
              {account && (
                <div className="mt-2 text-sm text-green-700">
                  <p>Account: {`${account.substring(0, 6)}...${account.substring(account.length - 4)}`}</p>
                </div>
              )}
              <div className="mt-2 text-sm text-green-700">
                <p>Network: {HETU_TESTNET_CONFIG.networkName}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <p className="text-base text-gray-700 mb-4">
            Connect to the Hetu testnet to enable storing project metadata on the blockchain.
          </p>
          
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            onClick={connectToHetu}
            disabled={isLoading}
          >
            {isLoading ? 'Connecting...' : 'Connect to Hetu Network'}
          </button>
          
          {error && (
            <div className="mt-4 bg-red-50 p-4 rounded-md">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-red-800">Error</h3>
                  <div className="mt-2 text-sm text-red-700">
                    <p>{error}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <div className="mt-4 text-sm text-gray-500">
            <p>Don't have MetaMask? <a href="https://metamask.io/download/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-900">Download here</a></p>
          </div>
        </div>
      )}
    </div>
  );
} 