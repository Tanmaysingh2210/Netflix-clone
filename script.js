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
    faq1.getElementsByTagName("img").src = "assets/svgs/cross.svg";

    let div1 = document.createElement("div");
    div1.classList.add("expanded", "expanded-1");
    div1.innerHTML = `<p>
                Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.
            </p>
            <br>
            <p>You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!</p>`

    div1.after(faq1);
})

let faq2 = document.querySelector(".info").querySelector(".faqs").querySelector(".faq-2");
faq2.addEventListener("click", function () {
    faq2.getElementsByTagName("img").src = "assets/svgs/cross.svg";

    let div2 = document.createElement("div");
    div2.classList.add("expanded", "expanded-2");
    div2.innerHTML = `<p>
                Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.
            </p>`
    div2.after(faq2);

})

let faq3 = document.querySelector(".info").querySelector(".faqs").querySelector(".faq-3");
faq3.addEventListener("click", function () {
    faq3.getElementsByTagName("img").src = "assets/svgs/cross.svg";

    let div3 = document.createElement("div");
    div3.classList.add("expanded", "expanded-3");
    div3.innerHTML = `<p>
                Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
            </p>
            <br>
            <p>You can also download your favourite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</p>`
    div3.after(faq3)
})

let faq4 = document.querySelector(".info").querySelector(".faqs").querySelector(".faq-4");
faq4.addEventListener("click", function () {
    faq4.getElementsByTagName("img").src = "assets/svgs/cross.svg";

    let div4 = document.createElement("div");
    div4.classList.add("expanded", "expanded-4");
    div4.innerHTML = `<p>
                Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
            </p>`
    div4.after(faq4);
})

let faq5 = document.querySelector(".info").querySelector(".faqs").querySelector(".faq-5");
faq5.addEventListener("click", function () {
    faq5.getElementsByTagName("img").src = "assets/svgs/cross.svg";

    let div5 = document.createElement("div");
    div5.classList.add("expanded", "expanded-5");
    div5.innerHTML = `<p>
                Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
            </p>`
    div5.after(faq5);
})

let faq6 = document.querySelector(".info").querySelector(".faqs").querySelector(".faq-6");
faq6.addEventListener("click", function () {
    faq6.getElementsByTagName("img").src = "assets/svgs/cross.svg";

    let div6 = document.createElement("div");
    div6.classList.add("expanded", "expanded-6");
    div6.innerHTML = `<p>
                The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.
            </p>
            <br>
            <p>Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.</p>`
    div6.after(faq6);
});


