import { ethers } from "ethers";
import abi from "../abi.json"


let provider;
if (typeof window.ethereum !== 'undefined') {
    provider = new ethers.providers.Web3Provider(window.ethereum);
    // Continue with your logic using the provider

} else {
    // Handle the case where the provider is not available
    console.log("Web3 provider (window.ethereum) not found!");
    provider = new ethers.providers.JsonRpcProvider();
}
const signer = provider.getSigner();
const contractAddress = "0x27dD2fad119644771020D9f50c9Da11bA5db1859"
const contract = new ethers.Contract(contractAddress, abi, signer);

export const getManager = async () => {
    try {
        const tx = await contract.getManager();
        return tx
    } catch (error) {
        console.log(error)
        return  error
    }
}