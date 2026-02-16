<<<<<<< HEAD
const btnAddUser = document.getElementById("btnAddUser");
const btnDoubleMoney = document.getElementById("btnDoubleMoney");
const btnShowMillionaires = document.getElementById("btnShowMillionaires");
const btnSort = document.getElementById("btnSort");
const btnShowMale = document.getElementById("btnShowMale");
const btnShowFemale = document.getElementById("btnShowFemale");
const btnCalculateTotal = document.getElementById("btnCalculateTotal");
const main = document.getElementById("main");

let persons = [];

// add the random person inside the main section
const addToDom = (person) => {
  let element = document.createElement("div"); 
    element.classList.add("person");
    // <div class="person"> </div>
  element.innerHTML = `<span>${person.name}</span> <span>$${formatMoney(person.wealth)}</span>`;

  main.appendChild(element);
};

const getRandomUser = async () => {
  let response = await fetch("https://randomuser.me/api");
  let res = await response.json();

  const random = res.results[0];

  const person = {
    name: random.name.first + " " + random.name.last,
    wealth: Math.floor(Math.random() * 1_000_000),
    gender: random.gender

  };
   console.log(person)

  persons.push(person);
  addToDom(person);
};
const formatMoney = (num) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(num);
};
const showMale = () => {
  persons = persons.filter(p => p.gender === "male")
  refreshDom();
  

}
const showFemale = () => {
  persons = persons.filter(p => p.gender === "female")
  refreshDom();
}


const doubleMoney = () => {
  persons = persons.map(p => {
    return {name: p.name, wealth: p.wealth * 2}
  })
  refreshDom();
};

const showOnlyMillionairs = () => {
  persons = persons.filter(p => p.wealth >= 1_000_000)
  refreshDom();
}

const sortPersons = () => {
  persons = persons.sort((p1, p2) => p2.wealth - p1.wealth);
  refreshDom();
}

const refreshDom = () =>{
  main.innerHTML = `<h2><span>Person </span> <span>Wealth</span></h2>`
  persons.forEach(p => addToDom(p))
}

const calculateTotal = () => {
  let total = 0;
  persons.forEach(p => total += p.wealth)
  let element = document.createElement("div");
  element.classList.add("total");
  element.innerHTML = `<span>Total Wealth</span><span>$${formatMoney(total)}</span>`
  main.appendChild(element)
}
const clearTotalwealth = () => {
  const totalElement = document.querySelector(".total");
  if (totalElement) {
    totalElement.remove();
  }
}



btnAddUser.addEventListener("click", () => {
  clearTotalwealth();
  getRandomUser();
});
 
btnDoubleMoney.addEventListener("click", () => {
  clearTotalwealth();
  doubleMoney();
});
btnShowMillionaires.addEventListener("click", () => {
  clearTotalwealth();
  showOnlyMillionairs();
});
btnSort.addEventListener("click", () => {
  clearTotalwealth();
  sortPersons();
});
btnCalculateTotal.addEventListener("click", () => {
 clearTotalwealth();
  calculateTotal();
});
 btnShowMale.addEventListener("click", () => {

   showMale();
  
 });
btnShowFemale.addEventListener("click", () => {     
  showFemale();
});
=======
const btnAddUser = document.getElementById("btnAddUser");
const btnDoubleMoney = document.getElementById("btnDoubleMoney");
const btnShowMillionaires = document.getElementById("btnShowMillionaires");
const btnSort = document.getElementById("btnSort");
const btnCalculateTotal = document.getElementById("btnCalculateTotal");
const main = document.getElementById("main");

let persons = [];

// add the random person inside the main section
const addToDom = (person) => {
  let element = document.createElement("div"); 
    element.classList.add("person");
    // <div class="person"> </div>
  element.innerHTML = `<span>${person.name}</span> <span>$${person.wealth.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}</span>`;

  main.appendChild(element);
};

const getRandomUser = async () => {
  let response = await fetch("https://jsonplaceholder.typicode.com/users");
  let res = await response.json();

  const random = res[Math.floor(Math.random() * res.length)];

  const person = {
    name: random.name,
    wealth: Math.floor(Math.random() * 1_000_000),
  };

  persons.push(person);
  addToDom(person);
};

const doubleMoney = () => {
  persons = persons.map(p => {
    return {name: p.name, wealth: p.wealth * 2}
  })
  refreshDom();
};

const showOnlyMillionairs = () => {
  persons = persons.filter(p => p.wealth >= 1_000_000)
  refreshDom();
}

const sortPersons = () => {
  persons = persons.sort((p1, p2) => p2.wealth - p1.wealth);
  refreshDom();
}

const refreshDom = () =>{
  main.innerHTML = `<h2><span>Person</span> <span>Wealth</span></h2>`
  persons.forEach(p => addToDom(p))
}

const calculateTotal = () => {
  let total = 0;
  persons.forEach(p => total += p.wealth)
  let element = document.createElement("div");
  element.classList.add("total");
  element.innerHTML = `<span>Total Wealth</span><span>$${total.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}</span>`
  main.appendChild(element)
}
const clearTotalwealth = () => {
  const totalElement = document.querySelector(".total");
  if (totalElement) {
    totalElement.remove();
  }
}



btnAddUser.addEventListener("click", () => {
  clearTotalwealth();
  getRandomUser();
});
 
btnDoubleMoney.addEventListener("click", () => {
  clearTotalwealth();
  doubleMoney();
});
btnShowMillionaires.addEventListener("click", () => {
  clearTotalwealth();
  showOnlyMillionairs();
});
btnSort.addEventListener("click", () => {
  clearTotalwealth();
  sortPersons();
});
btnCalculateTotal.addEventListener("click", () => {
 clearTotalwealth();
  calculateTotal();
});
>>>>>>> 59383d0965cf37489072a74f8247cc100a328775
