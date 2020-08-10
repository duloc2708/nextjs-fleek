const initializeFortmatic = () => {
  const fm = new Fortmatic(formatic_api_key);
  const web3 = new Web3(fm.getProvider());
  window.web3 = web3;
  // Get current user account address.
  // Will authenticate the user if needed.
  web3.eth.getAccounts().then((accounts) => {
    // You can use the wallet address as a key
    // to store and retrieve user data for your DApp.
    console.log(accounts);
  });
};

export default initializeFortmatic;
