const ethereumButton = document.querySelector('.enableEthereumButton');
const showAccount = document.querySelector('.showAccount');
const provider = new ethers.providers.Web3Provider(window.ethereum)
let signer;
let accounts;

ethereumButton.addEventListener('click', () => {
  getAccount();
  signer = provider.getSigner();
});

async function getAccount() {
  const redardContractSigner = await redardContract.connect(signer);
  accounts = await ethereum.request({ method: 'eth_requestAccounts' });
  
  let { chainId } = await provider.getNetwork();
  console.log("chainid", chainId);
  
  ethereumButton.style.display = "none";
  showAccount.style.display = "block";
}