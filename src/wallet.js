const ethereumButton = document.querySelector('.enableEthereumButton');
const showAccount = document.querySelector('.showAccount');
const provider = new ethers.providers.Web3Provider(window.ethereum)
let signer;
let accounts;
let chainId;

ethereumButton.addEventListener('click', () => {
  getAccount();
  signer = provider.getSigner();
});

async function getAccount() {
  const redardContractSigner = await redardContract.connect(signer);
  accounts = await ethereum.request({ method: 'eth_requestAccounts' });
  
  chainId = await provider.getNetwork();
  if (chainId.chainId != '1') {
  	alert("Wrong network. Please change to mainnet ethereum and reload.");
  }
  
  ethereumButton.style.display = "none";
  showAccount.style.display = "block";
}