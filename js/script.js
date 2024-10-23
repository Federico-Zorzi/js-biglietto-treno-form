const userFullnameEl = document.getElementById("fullname");
const kmToDoEl = document.getElementById("km-to-do");
const ageRangeEl = document.getElementById("age-range");

const createTicketButton = document.getElementById("create-ticket-button");
const cancelDataButton = document.getElementById("cancel-data-button");

// costants for ticket price calculation
const ticketCostPerKm = 0.21;
const percDiscountUnder18 = 20 / 100;
const percDiscountOver65 = 40 / 100;

const priceCalculation = (km, age) => {
  let fullTicketPrice = 0;
  let discount = 0;

  fullTicketPriceWithoutDiscount = km * ticketCostPerKm;
  if (age === "Minorenne") {
    discount = fullTicketPriceWithoutDiscount * percDiscountUnder18;
    fullTicketPrice = fullTicketPriceWithoutDiscount - discount;
  } else if (age === "Over 65") {
    discount = fullTicketPriceWithoutDiscount * percDiscountOver65;
    fullTicketPrice = fullTicketPriceWithoutDiscount - discount;
  } else {
    fullTicketPrice = fullTicketPriceWithoutDiscount;
  }

  console.log(age, `Costo biglietto € ${fullTicketPrice}`);
};

const cancelData = () => {
  userFullnameEl.value = "";
  kmToDoEl.value = "";
};

// Create ticket button
createTicketButton.addEventListener("click", () => {
  const userFullname = userFullnameEl.value;
  const kmToDo = parseInt(kmToDoEl.value);
  const ageRange = ageRangeEl.value;

  priceCalculation(kmToDo, ageRange);

  // data cancel after operation
  cancelData();
});

// Cancel button
cancelDataButton.addEventListener("click", () => {
  cancelData();
});
