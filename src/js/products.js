var xhr = new XMLHttpRequest();
var products = {
  "1": {
    "id": 1,
    "name": "Aging Potion",
    "image": "aging-potion.png",
    "price": 29.99,
    "effect": "Causes the drinker to advance in age",
    "ingredients": [
      "Red Wine",
      "Prune Juice",
      "Hairy Fungus",
      "Tortoise Shell",
      "Caterpillar",
      "Bat Tongue"
    ]
  },
  "2": {
    "id": 2,
    "name": "Bulgeye Potion",
    "image": "bulgeye-potion.png",
    "price": 19.99,
    "effect": "It affects one's eyes, causing them to swell",
    "ingredients": [
      "Beetle eyes",
      "Eel eyes"
    ]
  },
  "3": {
    "id": 3,
    "name": "Dragon Tonic",
    "image": "dragon-tonic.png",
    "price": 64.99,
    "effect": "A tonic used to cure sick dragons",
    "ingredients": [
      "Eagle Owl feathers",
      "Peacock feathers",
      "Giant Purple Toad warts"
    ]
  },
  "4": {
    "id": 4,
    "name": "Love Potion",
    "image": "love-potion.png",
    "price": 29.99,
    "effect": "The one who drinks it falls deeply in love with the first person they see",
    "ingredients": [
      "Petals from a red rose",
      "Essence of violet",
      "Canary flight and down feathers",
      "Newt eyes"
    ]
  },
  "5": {
    "id": 5,
    "name": "Polyjuice Potion",
    "image": "polyjuice-potion.png",
    "price": 99.99,
    "effect": "Allows the drinker to assume the form of someone else",
    "ingredients": [
      "Lacewing flies",
      "Leeches",
      "Powdered bicorn horn",
      "Knotgrass",
      "Fluxweed",
      "Shredded Boomslang skin"
    ]
  },
  "6": {
    "id": 6,
    "name": "Sleeping Draught",
    "image": "sleeping-draught.png",
    "price": 29.99,
    "effect": "Causes the drinker to fall almost instantaneously into a deep but temporary sleep",
    "ingredients": [
      "Sprigs of Lavender",
      "Measures of Standard Ingredient",
      "Blobs of Flobberworm Mucus",
      "Valerian sprigs"
    ]
  }
}

// CHAMAR API JSON
// xhr.open('GET', 'https://cdn.rawgit.com/LucasRuy/1d4a5d45e2ea204d712d0b324af28bab/raw/342e0e9277be486102543c7f50ef5fcf193234b6/potions.json');
// xhr.send(null);

// xhr.onreadystatechange = function(){
//     if (xhr.readyState === 4 && this.status == 200) {
//       products = (JSON.parse(xhr.responseText));
//       listaProdutos();
//     }
// }

// lISTAGEM DE PRODUTOS
function listaProdutos(){
  var potion = products.potions;

  for (var key in potion){
    console.log('ID: ' + potion[key].id + '; Potion: ' + potion[key].name + '; Efect: ' + potion[key].effect + '.');

    document.getElementById('products').innerHTML += `
    <div data-id="${potion[key].id}" class="potion" onclick="openLightbox(this)">
      <img class="potionImg  cursor" src="src/assets/products/${potion[key].image}" alt="">
      <div class="ptionText">
        <span class="potionName">${potion[key].name} - </span>
        <span class="potionPrice"> $${potion[key].price}</span>
      </div>
    </div>
    `;
  }
}


////ABRIR E FECHAR DESC DO PRODUTO - LIGHTBOX

var box = document.getElementById('lightbox');

function openLightbox(component) {

     var id = component.getAttribute("data-id");

     var descProduct = products.potions[id];

     box.innerHTML =
     `
        <div class="lightbox">
        <div class="box">
          <span class="close cursor" onclick="closeLightbox()">&times;</span>
          <div class="productDesc">
            <div>
              <img class="potionImg" src="src/assets/products/${descProduct.image}">
            </div>
            <div>
              <h3>${descProduct.name}</h3>
              <h3>Use/Effect: </h3>
              <p>${descProduct.effect}</p>
              <h3>Ingredients: </h3>
              <p>${descProduct.ingredients.join("<br>")}</p>
              <h3>Price: </h3>
              <p class="potionPrice">${descProduct.price}</p>

              <input onclick="addProduto()" class="button cursor" type="submit" name="" value="ADD TO CART">
            </div>
          </div>
        </div>
        </div>

      `;

};

function closeLightbox(){
  box.innerHTML = '';
}

// ADD ITEM NO CARINHO
var bag = 0;
function addProduto(){
  bag++
  document.getElementById('bag').innerHTML = bag;
}

listaProdutos();
