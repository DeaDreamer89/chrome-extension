let myLeads = [];

// myLeads = `["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]`;
// myLeads = JSON.parse(myLeads);
// myLeads.push("www.epic.com");
// console.log(myLeads);

// myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"];
// myLeads = JSON.stringify(myLeads);
// console.log(typeof myLeads);

// myLeads = `["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]`;
// myLeads = JSON.parse(myLeads);
// myLeads.push("www.epic.com");
// myLeads = JSON.stringify(myLeads);
// console.log(typeof myLeads);
// console.log(myLeads);

const inputBtn = document.getElementById("input-btn");
const inputEl = document.querySelector("#input-el");
const ulEl = document.querySelector("#ul-el");
const deleteBtn = document.querySelector("#delete-btn");
// localStorage.setItem("myName", "Krzy Zaj");
// let name = localStorage.getItem("myName"));
// console.log(name)
// localStorage.clear();
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if (leadsFromLocalStorage) {
  (myLeads = leadsFromLocalStorage), renderLeads();
}
// console.log(Boolean(leadsFromLocalStorage));

function renderLeads() {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    // ulEl.innerHTML += "<li>" + myLeads[i] + "</li> ";

    // const li = document.createElement("li");
    // li.textContent = myLeads[i];
    // ulEl.append(li);

    // listItems +=
    //   "<li><a target='_blank' href='" +
    //   myLeads[i] +
    //   "'>" +
    //   myLeads[i] +
    //   "</a></li> ";

    listItems += `
      <li>
        <a target='_blank'
          href='${myLeads[i]}'>
            ${myLeads[i]}
        </a>
      </li>
      `;
  }
  ulEl.innerHTML = listItems;
}

inputEl.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    inputBtn.click();
  }
});

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  renderLeads();
  console.log(localStorage.getItem("myLeads"));
});

deleteBtn.addEventListener("dblclick", function () {
  let confirmAction = confirm("Are you sure to execute this action?");
  if (confirmAction) {
    alert("Action successfully executed");
    localStorage.clear();
    myLeads = [];
    renderLeads();
  } else {
    alert("Action canceled");
  }
});

//  EXERCISES
// let box = document.getElementById("box");

// box.addEventListener("click", function () {
//   console.log("I want to open the box!");
// });

// const basePrice = 520;
// const discount = 120;
// let shippingCost = 12;
// let shippingTime = "5-12 days";

// shippingCost = 15;
// shippingTime = "7-14 days";

// const fullPrice = basePrice - discount + shippingCost;

// console.log("Total cost: " + fullPrice + ". It will arrive in " + shippingTime);

// const container = document.getElementById("container");
// container.innerHTML = "<button>BUY!</button>";
// container.addEventListener("click", function () {
//   container.innerHTML += "<p>Thank you for buying!</p>";
// });

// const recipient = "James";
// const sender = "Chris Zach";
// const email = `
//   Hey
//   ${recipient}
//   !
//   How is it going? Cheers
//   ${sender}
// `;

// console.log(email);

// const credits = 0;

// if (credits > 0) {
//   console.log("Let's play!");
// } else {
//   console.log("Not enough credits");
// }
// truthy
// falsy = false, 0, "", null = how you as developer signalize emptiness, undefined = how JS signalizes emptiness, NaN (Not a Number)

// let currentViewers = null;
// currentViewers = ["Jane", "Nick"];
// // currentViewers = null;
// if (currentViewers) {
//   console.log("we have viewers");
// } else {
//   console.log("we don't have viewers");
// }

// let currentViewers;
// console.log(currentViewers);

// let trueOrFalse = Boolean("");
// console.log(trueOrFalse);

// console.log(Boolean("")); // false
// console.log(Boolean("0")); // true
// console.log(Boolean(100)); // true
// console.log(Boolean(null)); // false
// console.log(Boolean([0])); // true
// console.log(Boolean(-0)); // false
