let myLeads = [];
const inputBtn = document.getElementById("input-btn");
const inputEl = document.querySelector("#input-el");
const ulEl = document.querySelector("#ul-el");

// myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"];
inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  renderLeads();
});

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
