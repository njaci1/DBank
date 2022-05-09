import { DBank } from "../../declarations/DBank";

window.addEventListener("load",async function(){

  floatToCurrency();
  
  // const currentBalance = Math.floor(await DBank.checkBal());

  // document.getElementById("value").innerText = currentBalance;
});

document.querySelector("form").addEventListener("submit", async function(event){

  event.preventDefault();

  const button = event.target.querySelector("#submit-btn");
  const depositAmount = parseFloat(Number(document.getElementById("input-amount").value));
  const witdrawalAmount = parseFloat(Number(document.getElementById("withdrawal-amount").value));

  button.setAttribute("disabled", true);

  if (depositAmount){ // (document.getElementById("input-amount").value.length != 0)
    await DBank.topUp(depositAmount);
    document.getElementById("input-amount").value = "";
    console.log("depositing..");
  }

  if(witdrawalAmount){ // (document.getElementById("withdrawal-amount").value.length != 0)
    await DBank.withdraw(witdrawalAmount);
    document.getElementById("withdrawal-amount").value = "";
    console.log("withdrawing..");
  }

  await DBank.compound();

  // const currentBalance = Math.floor(await DBank.checkBal());
  // document.getElementById("value").innerText = currentBalance;

  floatToCurrency();

  button.removeAttribute("disabled");

});

async function floatToCurrency(){

  const balance = await DBank.checkBal();

  const currentBalance = balance.toLocaleString('en-US', {minimumFractionDigits: 2, MaximumFloatDigits: 2});

  document.getElementById("value").innerText = currentBalance;

}
