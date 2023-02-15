"use strict"


// console.log(document);

// let heads = document.getElementsByTagName("h1");
// console.log(heads);   //HTML collection weklinde verir
// console.log(heads[0]);    //array kimi goturur h1 i verir
// console.log(heads);

// for (const item of heads) {
//     console.log(item);
// }



// let elem = document.getElementById("header");                    //id sine gore element  verir

// let elem = document.getElementsByClassName("header");            // classina gore verir array weklinde cunki chox class opla biler

// let elem = document.querySelector("#header1");                   // bunnan istediyimiz elementi yazib noqte qoyub goture bilirik


// let elem = document.querySelectorAll("#header1");                   // neche eyni idli element varsa hamsina chata bilmek uchun

// for (const item of elem) {                                          // for a salib elementleri tektek gosteririk
// console.log(item);
// }

// let h1 = document.querySelector("#products .card-item2 h1:nth-child(2)");      //h1 lerden 2cisini gosterir

// let elems = document.querySelectorAll("#products .card-item2 h1" );  //h1 olanlari gosterir

// for (let i = 0; i < elems.length; i++) {    // fora salanda h1 olanlari tektek gosterir
//   console.log(elems[i]);
// }
// console.log(elems[0]);     //sifirinci indexde olan h1 i gosterir

// let a = document.querySelector("#products .card-item1 h1");

// console.log(elem.innerText);   // elementin ichine sadece text elave etmek isteyirsense innertext,  

// let elemText = elem.innerText; 

// if(elemText == "Salam"){       // h1 deki yazi salama beraberdir ya yox
//     console.log("correct");
// }

// let elemText = elem.innerHTML;   //elementin ichine teg qoymaq isteyirsense innerHtml yazirsan

// if (elemText == "Salam") {
//     console.log("correct");
// } 

// let a = document.querySelector("#products .card-item1 a");

// elem.innerText = "Roya";

// a.innerText = "Roya";   // innerText yazib burdan bawqa deyer versek htmlde hemin text deyisir
// a.innerText = "<span>Roya</span>";   //ekranda yazini tegin ichinde gosterir (ne yassaq onu gosterir)
// a.innerHTML = "<span>Roya</span>";    //ekranda teg kimi oxusun, tegin ozunu gostermesin tegin ichindeki text gorsensin (tegi arxa planda oxuyur tegin ichindekinin gosterir)

// console.log(a);



let element = document.querySelector("#products .card-item1 h1");

// element.style.color = "red";
// element.style.backgroundColor = "yellow";
// // element.style.position = "relative";
// // element.style.top = "100px";

// element.className = "active"   //  var olan classin name ni deyiwdirmek

// console.log(element.classList);   //elementin var olan classlarinin listini gosteri

// element.classList.add("active");   // var olan classa yeni class elave etmek

// element.classList.add("Roya");
// element.classList.remove("header");   // var olan classi silmek


// let button =  document.querySelector("#products .switch");

// button.onclick = function() {    // buttona click edende function ishlesin
//    alert("Clicked1")
// }


// button.onclick = function() {   // bir elemente 2-3 defe onclick yazsaqda axirincini goturur
//     alert("Clicked2")
// }

// button.addEventListener("click", function(){   // bir elemente ardicil addEventListener etsekde hamsini dinleyir
//     alert("Clicked1")
// })

// button.addEventListener("click", function(event){   //buradaki  event ---click olunan elementin objectini goturmek uchun functiona gelen bir parametrdir. neceki this buttonun verirdise eynen buda eledi.this in alternativi kimi 
//     // this.style.backgroundColor = "red";           //this yazdiqda buttonun ozunu verir
//     event.target.style.backgroundColor = "red";                   // target yazdiqdada this kimi buttonun  ozunu verir
// })



// let button =  document.querySelector("#products .switch");


// let btnOn = document.querySelector("#products .buttons .on");
// let btnOff = document.querySelector("#products .buttons .off");

// let body = document.querySelector("body");
// let icon = document.querySelector("#products .icon i");



// btnOn.addEventListener("click", function(){   // button on clickinde ekran ag, icon sari olur
//     body.style.backgroundColor = "white";
//     icon.style.color = "yellow";
// })

// btnOff.addEventListener("click", function(){   // button off clickinde  ekran qara, icon boz olur
//     body.style.backgroundColor = "black";
//     icon.style.color = "gray";
// })



// icon.addEventListener("click", function () {

//     if (!this.classList.contains("active-icon") && !body.classList.contains("active-body")) {   //iconun ve bodynin active classi yoxdursa, 
//         this.classList.add("active-icon");                                                      //icona active classini add etki (cssde active classsindaki deyiwiklikleri istn ede bilesen) deyiwiklik olsun  
//         body.classList.add("activeedirik-body");                                                //body e active classini add etki (cssde active classsindaki deyiwiklikleri istn ede bilesen) deyiwiklik olsun 
//     } else {
//         this.classList.remove("active-icon");                                                    //remove etki deyiwiklikler geri qayitsin
//         body.classList.remove("active-body");
//     }

// })


// icon.addEventListener("mouseout",function(){
//     this.classList.remove("active-icon");                                                    //remove etki deyiwiklikler geri qayitsin
//     body.classList.remove("active-body");
// })

// icon.addEventListener("mouseover",function(){
//     this.classList.add("active-icon");                                                    //remove etki deyiwiklikler geri qayitsin
//     body.classList.add("active-body");
// })





// let btn = document.querySelector("#products button");
// let input = document.querySelector("#products input");
// // let header = document.querySelector("#products h1")
// let ul = document.querySelector("#products ul")



// btn.addEventListener("click", function () { // buttona click edende
//     let inputValue = input.value;         //inputun ichine yazdiqlarimiz onun valuesi adlanir
//     header.innerText = inputValue         // inputa yuazdigimiz value ni h1 in yerinde gostermek uchun
//     input.value = "";                      //inputa yazib add etdikden sonra inputun ichi bow qalsin

// })



// btn.addEventListener("click", function(){ 
//     if(input.value == " "){  
//         alert("Dont empty");                      // bosh daxil ederikse return etsin yazdirmasin
//         return;
//     }

//     let items = document.querySelectorAll("li");    //butun li lerin hamsini elde etmek uchun bir variable a beraber edirik

//     for (const item of items) {
//         if(item.innerText == input.value){
//             alert("Already exist");
//             input.value = "";
//             return;
//         }                                         //daxil olan inputvalue siyahida varsa inputun ichini bowaltsin return elesin yazmasin

//     }

//     let li = document.createElement("li");        //li yaradiriq
//     li.className = "list-group-item mt-2";        // li ye class veririrk
//     li.innerText = input.value;                     //li nin textini inputdan daxil etdiyimize beraber edirik

//    ul.append(li);                                  // append nen bir neche elementi harasa add ede bilirsen           
//    input.value = "";                               //inputun ichi add etdikden sonra bow qalsin
// })









//Homework


let btn = document.querySelector("#products button");
let input = document.querySelector("#products input");
let ul = document.querySelector("#products ul");


btn.addEventListener("click", function () {
    if (input.value == "") {
        alert("Dont empty");
        return;
    }

    let items = document.querySelectorAll("li");

    for (const item of items) {
        if (item.innerText == input.value) {
            alert("Already exist");
            input.value = "";
            return;
        }
    }

    let li = document.createElement("li");
    li.className = "list-group-item mt-2";
    li.innerText = input.value;
    ul.append(li);
    input.value = "";



    let itemsLi = document.querySelectorAll("#products ul li");
    for (const item of itemsLi) {
        item.addEventListener("click", function () {
            this.remove();
        })
    }

})






