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
  });

function paintBurgers(burgers) {
  let contador = 1;
  burgers.forEach((element) => {
    console.log("cardB" + contador);
    let card = document.getElementById("cardB" + contador);
    card.children[0].src = element.image;
    card.children[1].innerHTML = ` <div class="card-body">
    <h5 class="card-title">${element.name}</h5>
    <p class="card-text">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae saepe officia voluptatem aspernatur ratione fugit, temporibus quas minima corrupti vero fuga, nihil asperiores, nostrum quos nisi qui perferendis hic? Tempora.</p>
    <h5 class="card-title"> $${element.price}</h5>
    <a href="#" id="addButton" class="btn btn-dark">Add to cart</a>

  </div>`;
    contador++;
  });
  console.log(document.getElementById("addButton"));
}
