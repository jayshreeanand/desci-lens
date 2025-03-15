import { HETU_TESTNET_CONFIG } from '@/services/hetu';

export default function HetuInfo() {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-8">
      <div className="px-4 py-5 sm:px-6">
        <h2 className="text-lg leading-6 font-medium text-gray-900">
          Hetu Protocol Integration
        </h2>
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
        <p className="text-base text-gray-700 mb-4">
          DeSciLens integrates with the Hetu Protocol to store project metadata and scores in a decentralized manner, ensuring transparency and verifiability of scientific research data.
        </p>
        
        <h3 className="text-md font-medium text-gray-900 mb-2">Hetu Testnet Information</h3>
        <div className="bg-gray-50 p-4 rounded-md mb-4">
          <dl className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Network Name</dt>
              <dd className="mt-1 text-sm text-gray-900">{HETU_TESTNET_CONFIG.networkName}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Chain ID</dt>
              <dd className="mt-1 text-sm text-gray-900">{HETU_TESTNET_CONFIG.chainId}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">RPC URL</dt>
              <dd className="mt-1 text-sm text-gray-900 break-all">{HETU_TESTNET_CONFIG.rpcUrl}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Symbol</dt>
              <dd className="mt-1 text-sm text-gray-900">{HETU_TESTNET_CONFIG.symbol}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Block Explorer</dt>
              <dd className="mt-1 text-sm text-gray-900">
                <a 
                  href={HETU_TESTNET_CONFIG.blockExplorerUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-primary-600 hover:text-primary-900"
                >
                  {HETU_TESTNET_CONFIG.blockExplorerUrl}
                </a>
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Faucet</dt>
              <dd className="mt-1 text-sm text-gray-900">
                <a 
                  href={HETU_TESTNET_CONFIG.faucetUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-primary-600 hover:text-primary-900"
                >
                  {HETU_TESTNET_CONFIG.faucetUrl}
                </a>
              </dd>
            </div>
          </dl>
        </div>
        
        <h3 className="text-md font-medium text-gray-900 mb-2">How to Connect</h3>
        <p className="text-base text-gray-700 mb-2">
          To connect to the Hetu testnet with MetaMask or another wallet:
        </p>
        <ol className="list-decimal pl-5 mb-4 text-base text-gray-700 space-y-2">
          <li>Open your wallet and go to the networks dropdown</li>
          <li>Select "Add Network" or "Custom RPC"</li>
          <li>Enter the network details provided above</li>
          <li>Save the network configuration</li>
          <li>Visit the faucet to get test tokens if needed</li>
        </ol>
        
        <p className="text-base text-gray-700">
          Once connected, DeSciLens can store project metadata and verification hashes on the Hetu blockchain, providing a transparent and immutable record of scientific research projects.
        </p>
      </div>
    </div>
  );
} 