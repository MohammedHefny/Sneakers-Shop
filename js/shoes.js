sneakers = document.querySelector(".sneakers ")

imgPopUp = document.querySelector(".imgPopUp ")

thumbnail = document.querySelectorAll(".sneakers  .thumbnail img")

clos = document.querySelector(".imgPopUp .close")

next = document.querySelector(".imgPopUp .next")

previous = document.querySelector(".imgPopUp .previous")

screen = document.querySelector(".imgPopUp .screen")

screenImg = document.querySelectorAll(".imgPopUp .screen img")[0]

thumbnail2 = document.querySelectorAll(".imgPopUp  .thumbnail img")

mainScreen = document.querySelector(".sneakers .one .mainScreen")

nextMobile = document.querySelector(".sneakers .next")

previousMobile = document.querySelector(".sneakers .previous")

thumbnail.forEach((thumb) => {

    thumb.addEventListener("click",(e)=> {

        window.localStorage.setItem("img",e.currentTarget.dataset.img)

        // change the big image in the pop up menu by clicking each small pic
        screenImg.src = e.currentTarget.dataset.img

        screenImg.style.zIndex = 24243; 
        
        imgPopUp.classList.remove("hide")

        let overlay = document.createElement("div") 

        overlay.className = "overlay" 

        sneakers.appendChild(overlay)
        
        // remove active from all images and add it on the cliked on image 
        handleImage(thumbnail) ;
        // remove active from all images and add it on the cliked on image in pop up

        handleImage(thumbnail2) ;

        // when click on the x close the popup menu and the overlay
        clos.onclick = function(e) {

            overlay.remove()

            imgPopUp.classList.add("hide")

            //when closing check if the itemsNum is bigger than zero and then 
            // change the small picture also
            if ( itemsNum.innerText > 0 && checkout.classList.contains("hide") === false ) {
        
        cartPop ();
    }
} 

        // change the big image in the pop up menu by clicking each small pic
        mainScreen.src = e.currentTarget.dataset.img 


    })
})


// when i click on the pop up images 
thumbnail2.forEach((thumb) => {

    thumb.addEventListener("click",(e)=> {

        // change the big image in the pop up menu by clicking each small pic
        mainScreen.src = e.currentTarget.dataset.img 


        window.localStorage.setItem("img",e.currentTarget.dataset.img)

        screenImg.src = e.currentTarget.dataset.img
        
        // when pop image is clicked on it will be change in the non pop up part
        handleImage(thumbnail) ;
        
        // remove active from all images and add it on the cliked on image in the pop up menu
        handleImage(thumbnail2) ;

        first.style.zIndex = 190; 

        first.style.position = "sticky";  
    })
})

// click on the right arrow to get the next element
starter = document.querySelector(".imgPopUp .screen .starter")

first = document.querySelector(".imgPopUp .screen .first")

seconed = document.querySelector(".imgPopUp .screen .seconed")

third = document.querySelector(".imgPopUp .screen .third")

fourth = document.querySelector(".imgPopUp .screen .fourth")

window.localStorage.getItem("img")

next.addEventListener("click",(e)=> {

    first.src = "images/image-product-1.jpg";

    imgStarter ();

        if (counter < 4) {

            counter ++
        }
        if ( counter === 1 ){

            one ()
        } 
        if ( counter === 2 ){

            two ()
        }
        if ( counter === 3 ){

            three ()    
        }else if ( counter === 4 ){

            four ()
        }

})
previous.addEventListener("click",(e)=> {  

    imgStarter ();

    if (counter > 1) {

        counter --
    } 
    if ( counter === 1 ){

        one ()
    }
    if ( counter === 2 ){

        two ()
    }
    if ( counter === 3 ){

        three ()

    }else if ( counter === 4 ){

        four ()
    }})

    nextMobile = document.querySelector(".sneakers .next")

    previousMobile = document.querySelector(".sneakers .previous")


    nextMobile.addEventListener("click",(e)=> {

        first.src = "images/image-product-1.jpg";
    
        imgStarter ();
    
            if (counter < 4) {
    
                counter ++
            }
            if ( counter === 1 ){
    
                one ()
            } 
            if ( counter === 2 ){
    
                two ()
            }
            if ( counter === 3 ){
    
                three ()    
            }else if ( counter === 4 ){
    
                four ()
            }
    
    })
    previousMobile.addEventListener("click",(e)=> {  
    
        imgStarter ();
    
        if (counter > 1) {
    
            counter --
        } 
        if ( counter === 1 ){
    
            one ()
        }
        if ( counter === 2 ){
    
            two ()
        }
        if ( counter === 3 ){
    
            three ()
    
        }else if ( counter === 4 ){
    
            four ()
        }})
// click on plus to increase the orderd by one and in the minus to dec it by one
let number = 0;

itemsNum = document.querySelector(".sneakers .add .itemsNum")

plus = document.querySelector(".sneakers .add .plus")

minus = document.querySelector(".sneakers .add .minus")

cart = document.querySelector(".sneakers .car")

cartPopUp = document.querySelector(".sneakers .cartPopUp")

addToCart = document.querySelector(".sneakers .addToCart")

theImg = document.querySelector(".sneakers .cartPopUp .hold  .itemChosen")

thePar = document.querySelector(".sneakers .thePar")

itemChosen = document.querySelector(".sneakers .itemOne")

total = document.querySelector(".sneakers .total")

delet = document.querySelector(".sneakers .delete")

checkout = document.querySelector(".sneakers .checkout")

plus.onclick = function () {

    number ++ 

    itemsNum.innerText = number

    // change the numbers in pop up menu 
    if ( itemsNum.innerText > 0 && checkout.classList.contains("hide") === false ) {

        cartPop () ;
    }
}
minus.onclick = function () {

    if ( number > 0 ) {

        number -- 
    }
    itemsNum.innerText = number

        // change the numbers in pop up menu 
        if ( itemsNum.innerText > 0 && checkout.classList.contains("hide") === false ) {

            cartPop () ;
        }

}
//  click on the cart to open the pop up menu
cart.onclick = function () {

    cartPopUp.classList.toggle("hide")

}
// click on the add to cart button to add your item
addToCart.onclick = function () {
    // check if it was already opened or not if it is close open it
    if( cartPopUp.classList.contains("hide") === true ) {

        cartPopUp.classList.toggle("hide")
    }
    // check if the number of items checked are bigger than zero
    // and then add the pop up items
    if ( itemsNum.innerText > 0 ) {
        cartPop () ;
    }
}

// click on delete to empty the cart pop up menu
delet.addEventListener("click",(e)=> {

    theImg.src = ""

    thePar.innerText = "Your Cart is Empty"

    itemChosen.innerText = ""

    total.innerText = ""

    delet.src = ""

    checkout.classList.add("hide")
})
// click on checkout to empty the cart pop up menu
checkout.addEventListener("click",(e)=> {

    theImg.src = ""

    thePar.innerText = "Your Order Has Been Completed"

    thePar.style.fontWeight = "bold"

    thePar.style.fontSize = "30px"

    itemChosen.innerText = ""

    total.innerText = ""

    delet.src = ""

    checkout.classList.add("hide")
})



menu = document.querySelector(".sneakers .menu")
leftMenu = document.querySelector(".sneakers .leftMenu")
overlay = document.querySelector(".sneakers .leftMenu .over")
shut = document.querySelector(".sneakers .leftMenu .shut")

if (menu.classList.contains("none") === true) {

    leftMenu.classList.add("hide")
}


// click on menu to open the pop up menu on the left
menu.addEventListener("click",(e)=> {
    leftMenu.classList.remove("hide")
    let overlay = document.createElement("div") 

    overlay.className = "overlay" 

    sneakers.appendChild(overlay)
    shut.onclick = function(e) {

        overlay.remove()

        leftMenu.classList.add("hide")

}
    
})
// functions

// handle active state
function handleImage(elem1) {

    elem1.forEach((thumb) => {

        thumb.classList.remove("active")

        if (thumb.dataset.img === window.localStorage.getItem("img")) {

            thumb.classList.add("active")

    }
})
}

// switch between photos on click on the arrow

let one = function () {
    first.style.zIndex = 1; 

    seconed.style.zIndex = -1; 

    third.style.zIndex = -1; 

    fourth.style.zIndex = -1;

    window.localStorage.setItem("img","images/image-product-1.jpg")

    handleImage(thumbnail2);

    handleImage(thumbnail);

    mainScreen.src = window.localStorage.getItem("img")
}
let two = function () {
    seconed.style.zIndex = 1;
    
    first.style.zIndex = -1; 

    third.style.zIndex = -1; 

    fourth.style.zIndex = -1; 

    window.localStorage.setItem("img","images/image-product-2.jpg")

    handleImage(thumbnail2);

    handleImage(thumbnail);

    mainScreen.src = window.localStorage.getItem("img")

}
let three = function () {
    third.style.zIndex = 1;
    
    first.style.zIndex = -1; 

    seconed.style.zIndex = -1; 

    fourth.style.zIndex = -1; 

    window.localStorage.setItem("img","images/image-product-3.jpg")

    handleImage(thumbnail2);

    handleImage(thumbnail);

    mainScreen.src = window.localStorage.getItem("img")

}
let four = function () {
    fourth.style.zIndex = 1;
    
    first.style.zIndex = -1;  

    seconed.style.zIndex = -1; 

    third.style.zIndex = -1; 
    window.localStorage.setItem("img","images/image-product-4.jpg")

    handleImage(thumbnail2);

    handleImage(thumbnail);

    mainScreen.src = window.localStorage.getItem("img")

}
// control image starter 
let imgStarter = function () {

    if ( window.localStorage.getItem("img") === "images/image-product-1.jpg" ) {
        counter = 1 ;
    }else if ( window.localStorage.getItem("img") === "images/image-product-2.jpg"  ) {
        counter = 2 ;
    }else if ( window.localStorage.getItem("img") === "images/image-product-3.jpg"  ) {
        counter = 3 ;
    }else if ( window.localStorage.getItem("img") === "images/image-product-4.jpg"  ) {
        counter = 4 ;
    } 
    handleImage(thumbnail2);
    handleImage(thumbnail);
} 

// control the cart popupmenu
let cartPop = function () {
    theImg.src = window.localStorage.getItem("img")

    thePar.innerText = "Fall Limited Edition Sneakers"

    itemChosen.innerText = `$125 x ${itemsNum.innerText}`

    total.innerText = `$ ${125 * itemsNum.innerText}`

    delet.src = "images/icon-delete.svg"
    delet.style.width = "30px" 

    checkout.classList.remove("hide")
} 

// control changing in number of items chosen
let numChange = function () {

    itemChosen.innerText = `$125 x ${itemsNum.innerText}`

    total.innerText = `$ ${125 * itemsNum.innerText}`

}
// get the previous pic
let getPrevious = function () {
    imgStarter ();
    
    if (counter < 4) {

        counter ++
    }
    if ( counter === 1 ){

        one ()
    } 
    if ( counter === 2 ){

        two ()
    }
    if ( counter === 3 ){

        three ()    
    }else if ( counter === 4 ){

        four ()
    }
}
let getNext = function () {
    first.src = "images/image-product-1.jpg";
    
    imgStarter ();

        if (counter < 4) {

            counter ++
        }
        if ( counter === 1 ){

            one ()
        } 
        if ( counter === 2 ){

            two ()
        }
        if ( counter === 3 ){

            three ()    
        }else if ( counter === 4 ){

            four ()
        }
}
