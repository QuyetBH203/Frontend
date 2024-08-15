import { useReadContract } from 'wagmi';
import { abi as tokenERC20Abi } from "../contracts/TokenERC20.json";
import { Token as tokenAddress } from "../contracts/TokenERC20-address.json";

type EthAddress = `0x${string}`;

/**
 * Function to get the ERC20 token balance of a specific account
 * @param account The Ethereum address of the account to query the balance for
 * @returns The balance of the account in the specified ERC20 token
 */
export function useTokenBalance(account: EthAddress | undefined) {
  // Use the useReadContract hook to call the balanceOf function from the ERC20 contract
  const { data: tokenBalance } = useReadContract({
    address: tokenAddress as EthAddress,
    abi: tokenERC20Abi,
    functionName: 'balanceOf',
    args: [account],
  });

  return tokenBalance;
}
