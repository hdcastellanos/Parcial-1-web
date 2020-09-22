fetch(
  "https://gist.githubusercontent.com/josejbocanegra/9a28c356416badb8f9173daf36d1460b/raw/5ea84b9d43ff494fcbf5c5186544a18b42812f09/restaurant.json"
)
  .then((response) => response.json())
  .then((data) => {
    const burgers = data[0].products;
    let tacos = data[1].products;
    let salads = data[2].products;
    let desserts = data[3].products;
    let DandS = data[4].products;
    paintBurgers(burgers);
    paintTacos(tacos);
    paintSalads(salads);
    paintDesserts(desserts);
    paintDandS(DandS);
    let items = 1;
    let id = 1;
    let buttons = document.querySelectorAll("a");

    // agregar al carrito de compras y a la tabla
    buttons.forEach((element) => {
      if (element.id.match(/addButton.*/)) {
        element.addEventListener("click", function () {
          let table = document.getElementById("orderTable");
          let rows = table.rows;
          let name = element.parentElement.getElementsByTagName("h5")[0]
            .innerText;
          let price = element.parentElement.getElementsByTagName("h5")[1]
            .innerText;
          let quantity = 1;

          let priceNumber = parseFloat(price.substr(1, price.length));
          let itemsText = document.getElementById("cart-items");

          if (items === 1 || !checkRow(rows, name)) {
            itemsText.innerText = items + " items";
            items++;

            let newRow = table.insertRow();
            newRow.innerHTML = `<tr id ="item">
          <td> ${id} </td>
          <td> ${quantity} </td>
          <td> ${name} </td>
          <td> ${price} </td>
          <td> ${priceNumber * quantity}</td>
          </tr>`;
            id++;
          } else {
            itemsText.innerText = items + " items";
            items++;
            addQuantity(rows, name);
          }

          calculateTotal(rows);
        });
      }
    });
  });

function paintBurgers(burgers) {
  let contador = 1;
  burgers.forEach((element) => {
    let card = document.getElementById("cardB" + contador);
    card.children[0].src = element.image;
    card.children[1].innerHTML = ` <div class="card-body">
    <h5 class="card-title">${element.name}</h5>
    <p class="card-text">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione modi vitae, deserunt velit quos culpa dolores quidem cupiditate, aperiam molestias, ex tempora provident facilis a placeat sint nisi illo assumenda!
    </p>
    <h5 class="card-title"> $${element.price}</h5>
    <a  id="addButtonB${contador}" class="btn btn-dark">Add to cart</a>

  </div>`;
    contador++;
  });
}

function paintTacos(tacos) {
  let contador = 1;
  tacos.forEach((element) => {
    let card = document.getElementById("cardT" + contador);
    card.children[0].src = element.image;
    card.children[1].innerHTML = ` <div class="card-body">
    <h5 class="card-title">${element.name}</h5>
    <p class="card-text">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione modi vitae, deserunt velit quos culpa dolores quidem cupiditate, aperiam molestias, ex tempora provident facilis a placeat sint nisi illo assumenda!
    </p>
    <h5 class="card-title"> $${element.price}</h5>
    <a  id="addButtonT${contador}" class="btn btn-dark">Add to cart</a>

  </div>`;
    contador++;
  });
}

function paintSalads(salads) {
  let contador = 1;
  salads.forEach((element) => {
    let card = document.getElementById("cardS" + contador);
    card.children[0].src = element.image;
    card.children[1].innerHTML = ` <div class="card-body">
    <h5 class="card-title">${element.name}</h5>
    <p class="card-text">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione modi vitae, deserunt velit quos culpa dolores quidem cupiditate, aperiam molestias, ex tempora provident facilis a placeat sint nisi illo assumenda!
    </p>
    <h5 class="card-title"> $${element.price}</h5>
    <a  id="addButtonS${contador}" class="btn btn-dark">Add to cart</a>

  </div>`;
    contador++;
  });
}

function paintDesserts(desserts) {
  let contador = 1;
  desserts.forEach((element) => {
    let card = document.getElementById("cardD" + contador);
    card.children[0].src = element.image;
    card.children[1].innerHTML = ` <div class="card-body">
    <h5 class="card-title">${element.name}</h5>
    <p class="card-text">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione modi vitae, deserunt velit quos culpa dolores quidem cupiditate, aperiam molestias, ex tempora provident facilis a placeat sint nisi illo assumenda!
    </p>
    <h5 class="card-title"> $${element.price}</h5>
    <a  id="addButtonD${contador}" class="btn btn-dark">Add to cart</a>

  </div>`;
    contador++;
  });
}

function paintDandS(DandS) {
  let contador = 1;
  DandS.forEach((element) => {
    let card = document.getElementById("cardDS" + contador);
    card.children[0].src = element.image;
    card.children[1].innerHTML = ` <div class="card-body">
    <h5 class="card-title">${element.name}</h5>
    <p class="card-text">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione modi vitae, deserunt velit quos culpa dolores quidem cupiditate, aperiam molestias, ex tempora provident facilis a placeat sint nisi illo assumenda!
    </p>
    <h5 class="card-title"> $${element.price}</h5>
    <a  id="addButtonD${contador}" class="btn btn-dark">Add to cart</a>

  </div>`;
    contador++;
  });
}

function checkRow(rows, name) {
  for (let i = 1; i < rows.length; i++) {
    let row = rows[i];
    if (row.getElementsByTagName("td")[2].innerText === name) {
      return true;
    }
  }
  return false;
}

function addQuantity(rows, name) {
  for (let i = 1; i < rows.length; i++) {
    let row = rows[i];
    if (row.getElementsByTagName("td")[2].innerText === name) {
      row.getElementsByTagName("td")[1].innerText =
        parseInt(row.getElementsByTagName("td")[1].innerText) + 1;

      row.getElementsByTagName("td")[4].innerText =
        parseFloat(row.getElementsByTagName("td")[4].innerText) *
        parseInt(row.getElementsByTagName("td")[1].innerText);
    }
  }
}

function calculateTotal(rows) {
  let total = 0;
  for (let i = 1; i < rows.length; i++) {
    let row = rows[i];
    total = total + parseFloat(rows[i].getElementsByTagName("td")[4].innerText);
  }
  document.getElementById("total").innerText = "Total: " + total;
}

document.getElementById("confirmButton").addEventListener("click", function () {
  console.log("orden confirmada");
  let table = document.getElementById("orderTable");
  let rows = table.rows;
  printOrder(rows);
});

function printOrder(rows) {
  let resp = [];
  for (let i = 1; i < rows.length; i++) {
    let row = rows[i];

    let item = {
      item: row.getElementsByTagName("td")[0].innerHTML,
      quantity: row.getElementsByTagName("td")[1].innerHTML,
      description: row.getElementsByTagName("td")[2].innerHTML,
      unitPrice: row.getElementsByTagName("td")[3].innerHTML,
    };
    resp.push(item);
  }
  console.log(resp);
}

document.getElementById("modal-yes").addEventListener("click", function () {
  let parent = document.getElementById("orderTable");

  while (parent.hasChildNodes()) {
    parent.removeChild(parent.firstChild);
  }
  let itemsText = document.getElementById("cart-items");
  itemsText.innerText = 0 + " items";

  parent.innerHTML = ` <tr>
    <th>Item</th>
    <th>Qty.</th>
    <th>description</th>
    <th>unit price</th>
    <th>Amount</th>
  </tr>`;

  document.getElementById("total").innerText = "Total: " + 0;
});
