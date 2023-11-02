import React, { useEffect, useState } from 'react';
import Web3 from 'web3';

function Blockchain() {
    // const [web3, setWeb3] = useState(null);
    const [account, setAccount] = useState('');

    useEffect(() => {
        // Connect to the Ethereum blockchain using web3.js
        const connectBlockchain = async () => {
            if (window.ethereum) {
                try {
                    const web3Instance = new Web3(window.ethereum);
                    await window.ethereum.enable();
                    const accounts = await web3Instance.eth.getAccounts();
                    setWeb3(web3Instance);
                    setAccount(accounts[0]);
                } catch (error) {
                    console.error('Error connecting to blockchain:', error);
                }
            } else {
                console.error('Please install MetaMask or a compatible Ethereum wallet.');
            }
        };

        connectBlockchain();
    }, []);

    return (
        <div>
            <h1>Blockchain Website</h1>
            {web3 && (
                <div>
                    <p>Connected Account:</p>
                    <p>{account}</p>
                </div>
            )}
        </div>
    );
}

export default Blockchain;
