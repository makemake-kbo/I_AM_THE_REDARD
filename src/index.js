const redardContract = new ethers.Contract(address, abi, provider);

const commitButton = document.getElementById('commitButton');
const submitButton = document.getElementById('submitButton');

async function commit(_commitment) {
  try{
    var redardContractSigner = await redardContract.connect(signer);
    if (_commitment == null) {
      throw 'You need to input a number!';
    }
    tx = await redardContractSigner.commit(_commitment);
  } catch(err){
    alert('Something went wrong. You most likely need to connect a wallet or input a random number.');
  }
}
commitButton.addEventListener('click', () => {
  commit(document.getElementById('randomNumber').value);
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
