export default function initAddtoCart(){
  const addCartBtns = document.querySelectorAll(".add-to-cart");
  const cartSection = document.querySelector(".open-cart");
  const cartCloseBtn = document.querySelector(".close-cart");
  const backgroundCart = document.querySelector(".background-cart");
  let dataLayerAddToCart;

  addCartBtns.forEach((btn)=>{
    btn.addEventListener("click",enviarDataLayer);
    btn.addEventListener("click",ativarCart);
  });

  cartCloseBtn.addEventListener("click",desativarCart);

function enviarDataLayer(){
  const nomeProduto = this.parentNode.querySelector(".product-title").innerText;
  const precoProduto = +this.parentNode.querySelector(".new-price").innerText.replace("R$","").replaceAll(".","").replaceAll(",",".");
  const currency = "BRL";
    dataLayerAddToCart = {
    "event":"add_to_cart",
    "currency":currency,
    "value":precoProduto,
      add: {
        items: [{
         "item_name":nomeProduto,
        }]
     }
   
};
  window.dataLayer.push(dataLayerAddToCart);
  console.log(dataLayerAddToCart); 
}

function ativarCart(){
  const nomeProduto = this.parentNode.querySelector(".product-title").innerText;
  const precoProduto = this.parentNode.querySelector(".new-price").innerText;
  const imgProduto = this.parentNode.querySelector(".product-image").getAttribute("src");

  document.querySelector(".selected-product-img").setAttribute("src",imgProduto);
  document.querySelector(".selected-product-name").innerText = nomeProduto;
  document.querySelector(".selected-product-price").innerText = precoProduto;

  backgroundCart.style.display = "block";
  cartSection.classList.remove("desativar");
  cartSection.classList.add("ativar");

}
function desativarCart(){
  backgroundCart.style.display = "none";
  cartSection.classList.remove("ativar");
  cartSection.classList.add("desativar")
}
}

