var xhr = new XMLHttpRequest();
var products;

xhr.open('GET', 'https://cdn.rawgit.com/LucasRuy/1d4a5d45e2ea204d712d0b324af28bab/raw/342e0e9277be486102543c7f50ef5fcf193234b6/potions.json');
xhr.send(null);

xhr.onreadystatechange = function(){
    if (xhr.readyState === 4 && this.status == 200) {
      products = (JSON.parse(xhr.responseText));
      listaProdutos();
    }
}

// DECLARAR VARIAVEL potion QUE TOMA O VALOR DE O OBJECTO
// pottions DENTRO DO JSON

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
              <p>${descProduct.price}</p>

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
