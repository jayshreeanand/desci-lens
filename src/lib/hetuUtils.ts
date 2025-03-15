import { HETU_TESTNET_CONFIG } from '@/services/hetu';
import { Project, HetuMetadata } from '@/types';

/**
 * Format project data for blockchain storage
 * This prepares the project data in a format suitable for storing on the blockchain
 */
export function formatProjectForBlockchain(project: Project): string {
  // In a real implementation, this would format the data for blockchain storage
  // For example, converting it to a JSON string or a specific format required by a smart contract
  const metadata: HetuMetadata = {
    projectId: project.id,
    scores: project.scores,
    timestamp: new Date().toISOString(),
    verificationHash: generateVerificationHash(project)
  };
  
  return JSON.stringify(metadata);
}

/**
 * Generate a verification hash for a project
 * This creates a unique hash that can be used to verify the integrity of the project data
 */
export function generateVerificationHash(project: Project): string {
  // In a real implementation, this would create a cryptographic hash of the project data
  // For example, using a library like crypto-js to create a SHA-256 hash
  const projectString = JSON.stringify({
    id: project.id,
    name: project.name,
    description: project.description,
    category: project.category,
    scores: project.scores,
    url: project.url,
    lastUpdated: project.lastUpdated
  });
  
  // Mock hash generation
  return `hetu-${project.id}-${Date.now().toString(36)}`;
}

/**
 * Get Hetu network configuration for wallet connection
 * This returns the configuration needed to connect to the Hetu testnet
 */
export function getHetuNetworkConfig() {
  return {
    chainId: `0x${HETU_TESTNET_CONFIG.chainId.toString(16)}`, // Convert to hex
    chainName: HETU_TESTNET_CONFIG.networkName,
    nativeCurrency: {
      name: HETU_TESTNET_CONFIG.symbol,
      symbol: HETU_TESTNET_CONFIG.symbol,
      decimals: 18
    },
    rpcUrls: [HETU_TESTNET_CONFIG.rpcUrl],
    blockExplorerUrls: [HETU_TESTNET_CONFIG.blockExplorerUrl]
  };
}

/**
 * Add Hetu network to MetaMask
 * This function attempts to add the Hetu testnet to the user's MetaMask wallet
 */
export async function addHetuNetworkToMetaMask(): Promise<boolean> {
  try {
    // Check if window.ethereum is available (MetaMask or similar wallet)
    if (typeof window !== 'undefined' && (window as any).ethereum) {
      const ethereum = (window as any).ethereum;
      
      // Request to add the Hetu network
      await ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [getHetuNetworkConfig()]
      });
      
      return true;
    }
    
    return false;
  } catch (error) {
    console.error('Error adding Hetu network to MetaMask:', error);
    return false;
  }
}

/**
 * Check if connected to Hetu network
 * This function checks if the user's wallet is connected to the Hetu testnet
 */
export async function isConnectedToHetuNetwork(): Promise<boolean> {
  try {
    if (typeof window !== 'undefined' && (window as any).ethereum) {
      const ethereum = (window as any).ethereum;
      
      // Get the current chain ID
      const chainId = await ethereum.request({ method: 'eth_chainId' });
      
      // Check if it matches the Hetu testnet chain ID
      return chainId === `0x${HETU_TESTNET_CONFIG.chainId.toString(16)}`;
    }
    
    return false;
  } catch (error) {
    console.error('Error checking Hetu network connection:', error);
    return false;
  }
} 