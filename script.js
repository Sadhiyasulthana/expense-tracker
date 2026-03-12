let total = 0;

function addExpense(){

let desc = document.getElementById("desc").value;
let amount = document.getElementById("amount").value;

if(desc === "" || amount === ""){
alert("Please enter details");
return;
}

let list = document.getElementById("list");

let li = document.createElement("li");

let text = document.createElement("span");
text.textContent = desc + " - ₹" + amount;

let btn = document.createElement("button");
btn.textContent = "Delete";

btn.onclick = function(){
list.removeChild(li);
total -= Number(amount);
document.getElementById("total").textContent = total;
};

li.appendChild(text);
li.appendChild(btn);

list.appendChild(li);

total += Number(amount);
document.getElementById("total").textContent = total;

}