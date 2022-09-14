const redardContract = new ethers.Contract(address, abi, provider);

const commitButton = document.getElementById('commitButton');
const submitButton = document.getElementById('submitButton');

async function commit(_commitment) {
  var redardContractSigner = await redardContract.connect(signer);
  tx = await redardContractSigner.commit(_commitment);
}
commitButton.addEventListener('click', () => {
  commit('1');
});

async function BECOME_THE_RETARD() {
  var redardContractSigner = await redardContract.connect(signer);
  tx = await redardContractSigner.BECOME_THE_RETARD({
    gasLimit: 100000,
  });
  
  commitButton.disabled = false;
  submitButton.disabled = true;
}
submitButton.addEventListener('click', () => {
  BECOME_THE_RETARD();
});

redardContract.on("Commited", (victim, commitment) => {
  console.log("commited", victim)
  adasd = victim;
  if (victim.toLowerCase() == accounts[0].toLowerCase()) {
    commitButton.disabled = true;
    submitButton.disabled = false;
  }
})
