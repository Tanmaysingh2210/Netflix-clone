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
let faq1 = document.querySelector(".info").querySelector(".faqs").querySelector(".faq-1");
console.log(faq1);
faq1.addEventListener("click", function () {
    faq1.getElementsByTagName("img").transform= ;

    
})

let faq2 = document.querySelector(".info").querySelector(".faqs").querySelector(".faq-2");
faq2.addEventListener("click", function () {
    faq2.getElementsByTagName("img").transform= ;

    

})

let faq3 = document.querySelector(".info").querySelector(".faqs").querySelector(".faq-3");
faq3.addEventListener("click", function () {
    faq3.getElementsByTagName("img").transform= ;

    


})

let faq4 = document.querySelector(".info").querySelector(".faqs").querySelector(".faq-4");
faq4.addEventListener("click", function () {
    faq4.getElementsByTagName("img").transform= ;

    
})

let faq5 = document.querySelector(".info").querySelector(".faqs").querySelector(".faq-5");
faq5.addEventListener("click", function () {
    faq5.getElementsByTagName("img").transform= ;

    let div5 = document.createElement("div");
    div5.classList.add("expanded", "expanded-5");
    div5.innerHTML = `<p>
                Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
            </p>`
    div5.after(faq5);
})

let faq6 = document.querySelector(".info").querySelector(".faqs").querySelector(".faq-6");
faq6.addEventListener("click", function () {
    faq6.getElementsByTagName("img").transform= ;

    let div6 = document.createElement("div");
    div6.classList.add("expanded", "expanded-6");
    div6.innerHTML = `<p>
                The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.
            </p>
            <br>
            <p>Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.</p>`
    div6.after(faq6);
});


