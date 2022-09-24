

  var MenuItens = document.getElementById("MenuItens");

  MenuItens.style.maxHeight = "0px";

  function menu()
  {
    if(MenuItens.style.maxHeight == "0px")
    {
      MenuItens.style.maxHeight = "200px";
    }
    else{
      MenuItens.style.maxHeight ="opx";
    }
  }
  
// MUDAR AS FOTOS DOS PRODUTOS QUANDO APERTA ELAS.
  var product = document.getElementById("product-img");
  var smallImg = document.getElementsByClassName("small-img");

  smallImg[0].onclick = function()
  {
    product.src = smallImg[0].src
  }
  smallImg[1].onclick = function()
  {
    product.src = smallImg[1].src
  }
  smallImg[2].onclick = function()
  {
    product.src = smallImg[2].src
  }
  smallImg[3].onclick = function()
  {
    product.src = smallImg[3].src
  }

// Adicionando produtos no carrinho
let produtosAdd =[];
const product = document.querySelectorAll('.products')


function updateProducts(product){
  for(let i=0; i< productCar.lenght; i++){
    if(productCar[i].id == product.id){
       productCar[i].count +=1;
       productCar[i].price = productCar[i].basePrice * productCar[i].count;
       return;
    }
  }
  productCar.push(product);
}



const cartSumPrice = function(){
     let sumPrice =0;
     produtosAdd.forEach(product=>{
      sumPrice += product.price;
    });
    return sumPrice;

}



const updateShoppingCar = function(){
  if(productCar.lenght >0){
     let result = productCar.map(product=>{
      return `
            <li class = "buyItem">
               <img scr="${product.image}">
                 <div>
                   <h5>${product.name}</5>
                   <h6>${product.price}</6>
                  <div>
                     <button class="button-minus" data-id ='${product.id}'>-</button>
                     <span class="countOfProduct">1<span>
                     <button class="button-plus" data-id ='${product.id}'>+</button>
                  </div>
                </div>
            </li>
              `
     });
     parentElement.innerHTML = result.join('');
     document.querySelector('.checkout').classList.remove('hidden');
     cartSumPrice.innerHTML= "$"+ countTheSum();

  }else{
      document.querySelector('.checkout').classList.add('hidden');
      cartSumPrice.innerHTML="";
  }
}

product.forEach(product => {
  product.addEventListener('click',(e) =>{
     if( e.target.classList.contains('addToCart'))
     {
      const productID =e.target.dataset.productID;
      const productName = product.querySelectorAll('.productName').innerHTML;
      const productPrice = product.querySelectorAll('.productPrice').innerHTML;
      const productImg = product.querySelectorAll('img').src;

      let productCar={
        name: productName,
        image: productImg,
        id: productID,
        count: 1,
        price: +productPrice,
        basePrice: +productPrice
      }
      updateProducts(productCar);
      updateShoppingCar();

     }
  });
  
});



  