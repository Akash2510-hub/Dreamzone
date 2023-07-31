let previousContainer = document.querySelector('.products-previous');
let previousBox = previousContainer.querySelectorAll('.previous');

  document.querySelectorAll('.products-container .product').forEach(product=>{
    product.onclick = () =>{
        previousContainer.style.display="flex";
        let name = product.getAttribute('data-name');
        previousBox.forEach(previous=>{
            let target = previous.getAttribute('data-target');
            if(name == target){
                previous.classList.add('active');
            }
        });
    };
  });


   previousBox.forEach(close=>{
    close.querySelector('.fa-times').onclick =()=>{
     close.classList.remove('active');
     previousContainer.style.display="none";
    };
   })