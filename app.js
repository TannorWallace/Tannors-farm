//define your money count at 0/
let wallet = 0;

//now set up an object array that contains your animals

let animals = [
  {
    name: "Pig",
    image: '/images/pork.jpg',
    water: 0,
    food: 0,
    value: 250,
    currVal: 250
  },
  {
    name: "Goats",
    image: '/images/goat.jpg',
    water: 0,
    food: 0,
    value: 70,
    currVal: 70
  },
  {
    name: "Cow",
    image: '/images/steak.jpg',
    water: 0,
    food: 0,
    value: 1000,
    currVal: 1000
  }
];
//now set up your function that will draw() the JS on screen

function drawAnimals() {
  //animals placeholder

  let animalsRow = document.querySelector("#animals-placeholder")
  //now set up the money?

  let moneyElem = document.querySelector("#money-placeholder")
  //now set up and empty variable for the template
  let template = ""

  //now...the FOR loop :(

  for (let index = 0; index < animals.length; index++) {
    let animal = animals[index];
    //don't forget the template counter?
    //attempt a for loop for the cost of feed
    // for (let index = 0; index < cost.length; index++) {
    //   let price = cost[index];

    template += `
    <div class="col-md-4 border border-dark pb-2">
        <h1>${animal.name}</h1>
        <img src="${animal.image}"alt"">
        <p>water: ${animal.water}</p>
        <p>feed: ${animal.food}</p>
        <p>value: ${animal.value}</p>
        <button class="btn btn-primary border border-dark" onclick="water(${index})">Water</button>
           <button class="btn btn-warning border border-dark" onclick="feed(${index})">Feed</button>
        <button class="btn btn-danger border border-dark" onclick="sell(${index})">Sell</button>
      </div>
    
    `

  }
  //hopefully this template will update along with the button clicks?
  animalsRow.innerHTML = template
  moneyElem.textContent = wallet.toString()
}
//now for the funtion calls to add..well...function 
function water(i) {
  let animal = animals[i]
  animal.water++
  drawAnimals()
}
function feed(i) {
  let animal = animals[i]
  animal.food++
  animal.value -= 10
  drawAnimals()
}
function sell(i) {
  let animal = animals[i]
  wallet += animal.value
  animal.food = 0
  animal.water = 0
  animal.currVal = animal.value
  drawAnimals()

}
drawAnimals()















