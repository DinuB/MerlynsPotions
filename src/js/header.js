function changeIcon() {
  var button = document.getElementById("mobileMenu");

  var menu = document.getElementById("nav");
  var search = document.getElementById("search");
  var logo = document.getElementById("logo");
  var promo = document.getElementById("promo");
  var cart = document.getElementById("cart");

    if (button.className === "fas fa-bars") {

      button.className += "fas fa-times";

      logo.className += "hide";
      promo.className += "hide";

      cart.style.display = "none";

      search.style.display="flex";
      menu.style.display="block";

    } else {
      button.className = "fas fa-bars";

      logo.className = "";
      promo.className = "";
      cart.style.display = "flex";

      search.style.display = "";
      menu.style.display = "";
    }
}
