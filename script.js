// to focus on input tag of frontPage
let button = document.querySelector(".main").querySelector(".content").querySelector(".button");
let input = document.querySelector(".main").querySelector(".content").querySelector("#guessInput");
button.addEventListener("click", function () {
    // if(input.textContent.endsWith(".com")){
    //     button.getElementsByTagName("a").href = "https://www.netflix.com/signup/registration?locale=en-IN";

    // }
    // else{
    //     input.focus();
    // }



    input.focus();
    button.addEventListener("click", function () {
        if (input.textContent.endsWith(".com")) {
            button.getElementsByTagName("a").href = "https://www.netflix.com/signup/registration?locale=en-IN";
        }
    })


})



//To apply transitions to buttons and cards
let btn = document.querySelector("#click");
let btnz = document.querySelector("#click-2");
console.log(btn);
let cards = document.querySelector(".template");
console.log(cards);
let btn1 = document.querySelector(".container").querySelector(".button-1");
let btn2 = document.querySelector(".container").querySelector(".button-2");
console.log(btn2);
async function getNext() {
    btn.addEventListener("click", function () {

        cards.style.transform = "translateX(-35%)";
        btn1.style.transform = "translateX(140%)";
        btn2.style.transform = "translateX(110%)";


        btnz.addEventListener("click", function () {
            // Reset the cards' position
            cards.style.transform = "translateX(0%)";
            btn1.style.transform = "translateX(0%)";
            btn2.style.transform = "translateX(0%)";
        });
    });
}
getNext();




//To add answer divs for FREQUENTLY ASKED QUESTIONS
let faq = document.querySelector(".info").querySelector(".faqs").getElementsByClassName("faq");
console.log(faq);


// document.getElementById("faqs").addEventListener("click", function(event) {
//     if (event.target.classList.contains("faq")) {
//         handleClick(event.target);
//     }
// });

// function handleClick(div) {
//     console.log("Div clicked:", div);
//     div.lastElementChild.style.display = "block"
// }

faq.forEach(e => {
    e.addEventListener("click", function(){
        e.lastElementChild.style.display = "block";
        let img = e.getElementsByTagName("img")[0]; 
        if (img) {
            img.style.transform = "rotate(45deg)"; 
        }


    })
});





// faq.addEventListener("click", function ( ) {
//     faq.lastElementChild.style.display = "block";
// })



// async function getAns(){

//     let faq1 = document.querySelector(".info").querySelector(".faqs").querySelector(".faq-1");
//     faq1.addEventListener("click", function () {
//         faq1.lastElementChild.style.display = "block";
//         console.log(faq1.lastElementChild);
    
//         let img = faq1.getElementsByTagName("img")[0]; // Select first <img> inside .faq-1
//         if (img) { // Check if image exists
//             img.style.transform = "rotate(45deg)"; // Correct way to rotate image
//         }
        


//         faq1.addEventListener("click",function(){
//             this.style.cssText = "";
//         })
    
    
//     })
// }
// getAns();



// let faq2 = document.querySelector(".info").querySelector(".faqs").querySelector(".faq-2");
// faq2.addEventListener("click", function () {
//     faq2.lastElementChild.style.display = "block";
//     console.log(faq2.lastElementChild);

//     let img = faq2.getElementsByTagName("img")[0]; // Select first <img> inside .faq-1
//     if (img) { // Check if image exists
//         img.style.transform = "rotate(45deg)"; // Correct way to rotate image
//     }


// })

// let faq3 = document.querySelector(".info").querySelector(".faqs").querySelector(".faq-3");
// faq3.addEventListener("click", function () {
//     faq3.lastElementChild.style.display = "block";
//     console.log(faq3.lastElementChild);

//     let img = faq3.getElementsByTagName("img")[0]; // Select first <img> inside .faq-1
//     if (img) { // Check if image exists
//         img.style.transform = "rotate(45deg)"; // Correct way to rotate image
//     }
    
    
// })
// // faq3.addEventListener("click", function () {
// //     this.style.cssText = "";
// // })

// let faq4 = document.querySelector(".info").querySelector(".faqs").querySelector(".faq-4");
// faq4.addEventListener("click", function () {
//     faq4.lastElementChild.style.display = "block";
//     console.log(faq4.lastElementChild);

//     let img = faq4.getElementsByTagName("img")[0]; // Select first <img> inside .faq-1
//     if (img) { // Check if image exists
//         img.style.transform = "rotate(45deg)"; // Correct way to rotate image
//     }

// })

// let faq5 = document.querySelector(".info").querySelector(".faqs").querySelector(".faq-5");
// faq5.addEventListener("click", function () {

//     faq5.lastElementChild.style.display = "block";
//     console.log(faq5.lastElementChild);

//     let img = faq5.getElementsByTagName("img")[0]; // Select first <img> inside .faq-1
//     if (img) { // Check if image exists
//         img.style.transform = "rotate(45deg)"; // Correct way to rotate image
//     }
// })

// let faq6 = document.querySelector(".info").querySelector(".faqs").querySelector(".faq-6");
// faq6.addEventListener("click", function () {
//     faq6.lastElementChild.style.display = "block";
//     console.log(faq6.lastElementChild);

//     let img = faq6.getElementsByTagName("img")[0]; // Select first <img> inside .faq-1
//     if (img) { // Check if image exists
//         img.style.transform = "rotate(45deg)"; // Correct way to rotate image
//     }

// });


