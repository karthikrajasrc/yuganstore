document.addEventListener("DOMContentLoaded", () => {

/*     let cardbtn1 = document.getElementById("card-btn1");
    function addtocart1() {
        alert("Product Successfully, added to cart!");
    }
    cardbtn1.addEventListener("click", addtocart1);


    let cardbtn2 = document.getElementById("card-btn2");
    function addtocart2() {
        alert("Product Successfully, added to cart!");
    }
    cardbtn2.addEventListener("click", addtocart2);

    
    let cardbtn3 = document.getElementById("card-btn3");
    function addtocart3() {
        alert("Product Successfully, added to cart!");
    }
    cardbtn3.addEventListener("click", addtocart3);


    let cardbtn4 = document.getElementById("card-btn4");
    function addtocart4() {
        alert("Product Successfully, added to cart!");
    }
    cardbtn4.addEventListener("click", addtocart4);

    let cardbtn5 = document.getElementById("card-btn5");
    function addtocart5() {
        alert("Product Successfully, added to cart!");
    }
    cardbtn5.addEventListener("click", addtocart5);


    let cardbtn6 = document.getElementById("card-btn6");
    function addtocart6() {
        alert("Product Successfully, added to cart!");
    }
    cardbtn6.addEventListener("click", addtocart6);


    let cardbtn7 = document.getElementById("card-btn7");
    function addtocart7() {
        alert("Product Successfully, added to cart!");
    }
    cardbtn7.addEventListener("click", addtocart7);


    let cardbtn8 = document.getElementById("card-btn8");
    function addtocart8() {
        alert("Product Successfully, added to cart!");
    }
    cardbtn8.addEventListener("click", addtocart8);


    let cardbtn9 = document.getElementById("card-btn9");
    function addtocart9() {
        alert("Product Successfully, added to cart!");
    }
    cardbtn9.addEventListener("click", addtocart9);
 */

const cart = document.querySelector(".cartview");
const footer = document.querySelector("footer");

window.addEventListener("scroll", () => {
  const footerTop = footer.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (footerTop < windowHeight + 40) {
    cart.style.bottom = (windowHeight - footerTop + 20) + "px";
  } else {
    cart.style.bottom = "40px";
  }
});
    
    let togglebtn = document.getElementById("togglebtn");
    let sidebarxmark = document.querySelector(".side-barxmark")
    let cartview = document.querySelector(".cartview");

    togglebtn.addEventListener("click", () => {
        cartview.classList.add("show");
    });

    sidebarxmark.addEventListener("click", () => {
        cartview.classList.remove("show");
    });


    let cartviewhead = document.querySelector(".cartview-head");
    let count = 0;
    document.querySelectorAll(".cart-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            count++;
            cartviewhead.textContent = count + " Items Added";
           
        });
    });
    


});
