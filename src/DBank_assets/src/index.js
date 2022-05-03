import { DBank } from "../../declarations/DBank";

window.addEventListener("load",async function(){
  
  const currentBalance = Math.floor(await DBank.checkBal());

  document.getElementById("value").innerText = currentBalance;
});

document.querySelector("form").addEventListener("submit", async function(event){

  event.preventDefault();

  const button = event.target.querySelector("#submit-btn");
  const depositAmount = parseFloat(document.getElementById("input-amount").value);
  const witdrawalAmount = parseFloat(document.getElementById("withdrawal-amount").value);

  button.setAttribute("disabled", true);

  if (document.getElementById("input-amount").value.length != 0){
    await DBank.topUp(depositAmount);
    document.getElementById("input-amount").value = "";
    console.log("depositing..");
  }

  if(document.getElementById("withdrawal-amount").value.length != 0){
    await DBank.withdraw(witdrawalAmount);
    document.getElementById("withdrawal-amount").value = "";
    console.log("withdrawing..");
  }

  await DBank.compound();

  const currentBalance = Math.floor(await DBank.checkBal());
  document.getElementById("value").innerText = currentBalance;

  button.removeAttribute("disabled");

});
