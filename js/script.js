const userFullnameEl = document.getElementById("fullname");
const kmToDoEl = document.getElementById("km-to-do");
const ageRangeEl = document.getElementById("age-range");

const createTicketButton = document.getElementById("create-ticket-button");
const cancelDataButton = document.getElementById("cancel-data-button");

const ticket = document.getElementById("ticket");

// costants for ticket price calculation
const ticketCostPerKm = 0.21;
const percDiscountUnder18 = 20;
const percDiscountOver65 = 40;

const priceCalculation = (km, age) => {
  let fullTicketPrice = 0;
  let discount = 0;

  fullTicketPriceWithoutDiscount = km * ticketCostPerKm;
  if (age === "Minorenne") {
    discount = (fullTicketPriceWithoutDiscount * percDiscountUnder18) / 100;
    fullTicketPrice = fullTicketPriceWithoutDiscount - discount;
  } else if (age === "Over 65") {
    discount = (fullTicketPriceWithoutDiscount * percDiscountOver65) / 100;
    fullTicketPrice = fullTicketPriceWithoutDiscount - discount;
  } else {
    fullTicketPrice = fullTicketPriceWithoutDiscount;
  }

  return fullTicketPrice;
};

const numberRandomizer = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
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

  let typeOfTicket = `Biglietto Standard`;
  const carriage = numberRandomizer(1, 10);
  const cpCodeNumber = numberRandomizer(0, 99999);
  const cpCodeFormatted = cpCodeNumber.toString().padStart(5, "0");
  const ticketPrice = priceCalculation(kmToDo, ageRange);

  if (ageRange === "Minorenne") {
    typeOfTicket = `Biglietto con ${percDiscountUnder18} % di sconto`;
  } else if (ageRange === "Over 65") {
    typeOfTicket = `Biglietto con ${percDiscountOver65} % di sconto`;
  }

  ticket.innerHTML = `<div id='ticket' class="card">
        <div class="card-body">
            <h2 class="card-title h5 fw-bold">DETTAGLIO PASSEGGERI</h2>
            <div class="row border-top border-bottom">
                <div class="col-4 text-bg-secondary">
                    <h5 class="fw-bold fs-6 mt-2 mb-0">NOME PASSEGGERO</h5>
                    <span>${userFullname}</span>
                </div>
                <div class="col-8">
                    <table class="table table-borderless">
                        <thead>
                        <tr>
                            <th scope="col">Offerta</th>
                            <th scope="col">Carrozza</th>
                            <th scope="col">Codice CP</th>
                            <th scope="col">Costo biglietto</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>${typeOfTicket}</td>
                            <td>${carriage}</td>
                            <td>${cpCodeFormatted}</td>
                            <td>${ticketPrice}€</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>`;

  // data cancel after operation
  cancelData();
});

// Cancel button
cancelDataButton.addEventListener("click", () => {
  cancelData();
});
