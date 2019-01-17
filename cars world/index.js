class Car {
  constructor(name, make, model, price, year, description) {
    this.name = name;
    this.make = make;
    this.model = model;
    this.price = price;
    this.year = year;
    this.description = description;
  }
}
class User {
  addCarList(car) {
    const list = document.getElementById("car-list");
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${car.name}</td>
      <td>${car.make}</td>
      <td>${car.model}</td>
      <td>${car.price}</td>
      <td>${car.year}</td>
      <td>${car.description}</td>
      <td><a href="#" class="delete">X</a></td>
    `;
    list.appendChild(row);
  }
  deleteCar(target) {
    if (target.className === "delete") {
      if (confirm("Are you sure")) {
        target.parentElement.parentElement.remove();
      }
    }
  }
  clearFields() {
    document.getElementById("name").value = "";
    document.getElementById("make").value = "";
    document.getElementById("model").value = "";
    document.getElementById("price").value = "";
    document.getElementById("year").value = "";
    document.getElementById("description").value = "";
  }
}
//----------Class for Local Storage----------
class Store {
  static getCars() {
    let cars;
    if (localStorage.getItem("cars") === null) {
      cars = [];
    } else {
      cars = JSON.parse(localStorage.getItem("cars"));
    }
    return cars;
  }
  static displayCars() {
    const cars = Store.getCars();
    cars.forEach(function(car) {
      const use = new User();
      use.addCarList(car);
    });
  }
  static addCar(car) {
    const cars = Store.getCars();
    cars.push(car);
    localStorage.setItem("cars", JSON.stringify(cars));
  }
  static removeCar(description) {
    const cars = Store.getCars();

    cars.forEach(function(car, arrayIndex) {
      if (car.description === description) {
        cars.splice(arrayIndex, 1);
      }
    });
    localStorage.setItem("cars", JSON.stringify(cars));
  }
}

document.addEventListener("DOMContentLoaded", Store.displayCars);

//----------Event Listener for addCar----------

document.getElementById("car-form").addEventListener("submit", function(e) {
  const name = document.getElementById("name").value,
    make = document.getElementById("make").value,
    model = document.getElementById("model").value,
    price = document.getElementById("price").value,
    year = document.getElementById("year").value,
    description = document.getElementById("description").value;
  const car = new Car(name, make, model, price, year, description);
  const use = new User();
  if (
    name === "" ||
    make === "" ||
    model === "" ||
    price === "" ||
    year === "" ||
    description === ""
  ) {
    alert("Please fill all inputs");
  } else {
    use.addCarList(car);
    Store.addCar(car);
    use.clearFields();
  }
  e.preventDefault();
});

//----------Event Listener for deleteCar----------
document.getElementById("car-list").addEventListener("click", function(e) {
  const use = new User();
  use.deleteCar(e.target);
  Store.removeCar(e.target.parentElement.previousElementSibling.innerHTML);
  e.preventDefault();
});
