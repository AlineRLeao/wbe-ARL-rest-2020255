$('.options').slick({
    dots: true,
    Infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplayspeed: 2000
});

/*--Menu---*/
const menuOptions = document.querySelector(".menu-options");
menuOptions.addEventListener("click", function(e){

    if(e.target.classList.contains("menu-option-item") && !e.target.classList.contains("select-btn")){

        const target = e.target.getAttribute("data-target");
        menuOptions.querySelector(".select-btn").classList.remove("select-btn");
        e.target.classList.add("select-btn");          
        const menuCarte = document.querySelector(".menucarte");
        menuCarte.querySelector(".menu-content.select-btn").classList.remove("select-btn");
        menuCarte.querySelector(target).classList.add("select-btn");
    }
});

/*--client---*/

$(document).ready(function(){

    var url = "https://api.randomuser.me/?results=5&nat=IE";
    var clien = "";
    clientInformation(url);
    function clientInformation(url){

        fetch(url)
        .then((response) => (response.json()))
        .then(function(data){

            data.results.forEach(person => {

                client =  `<div class="well">  
                <img src="${person.picture.large}" class="img=rounded">
                <br>
                <span>${person.name.title}:</span>
                <br>
                <span>${person.name.first}</span>
                <span>${person.name.last}</span>
                <span>(${person.nat})</span>
                </div>`;
                $("#results").append(client);
            })
        });
    }
});

/*--login---*/

const checkMark = '\u2802';

const lowerCaseRegex = new RegExp('^(?=.*[a-z])(?=.{1,})');
const upperCaseRegex = new RegExp('^(?=.*[A-Z])(?=.{1,})');
const containsNumberRegex = new RegExp('^(?=.*[0-9])(?=.{1,})')
const specialCharacterRegex = new RegExp('^(?=.*[!@#$%^&*])(?=.{1,})');
const eightCharactersRegex = new RegExp('^(?=.{8,})');

const checkValidity = () => {
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  const fulfilled = [];
  const unfulfilled = [];
  

  lowerCaseRegex.test(password) ?
    fulfilled.push(document.getElementById('lowercase')) :
    unfulfilled.push(document.getElementById('lowercase'));

  upperCaseRegex.test(password) ?
    fulfilled.push(document.getElementById('UPPERCase')) :
    unfulfilled.push(document.getElementById('UPPERCase'));

  containsNumberRegex.test(password) ?
    fulfilled.push(document.getElementById('number')) :
    unfulfilled.push(document.getElementById('number'));

  specialCharacterRegex.test(password) ?
    fulfilled.push(document.getElementById('specialCharacter')) :
    unfulfilled.push(document.getElementById('specialCharacter'));

  eightCharactersRegex.test(password) ?
    fulfilled.push(document.getElementById('length')) :
    unfulfilled.push(document.getElementById('length'));

  password && password === confirmPassword ?
    fulfilled.push(document.getElementById('passwordsMatch')) :
    unfulfilled.push(document.getElementById('passwordsMatch'));

  fulfilled.forEach(el => {
    el.classList.remove('unfulfilled');
    el.classList.add('fulfilled');
  });
  unfulfilled.forEach(el => {
    el.classList.remove('fulfilled');
    el.classList.add('unfulfilled');
  });

  if(fulfilled.length === 6)
    document.getElementById('submitBtn').disabled = false;
  else
    document.getElementById('submitBtn').disabled = true;
  

};

Array.from(document.getElementsByClassName('listener')).forEach(input => {
  input.addEventListener('keyup',  checkValidity)
});







/*--Shopping Bag---*/

// let add_toBill =document.getElementsByClassName('.add-item');

// for (let i = 0; i< add_toBill.length; i++){
//     add_toBill[i].addEventListener('click', addToBill)
// }

// function addToBill(event){
//     let btn = event.target
//     let btn_parent = btn.parentElement
//     let btn_grandparent = btn.parentElement.parentElement
//     let itemName = btn_parent.children[0].innerText
//     let itemPrice = btn_parent.children[0].innerText
//     let itemImg = btn_grandparent.children[0].src


//     console.log(btn)
// }




let bill = document.querySelectorAll('.btn.add-item');

let product = [
    {
        name:"Takoyaki",
        tag:"1",
        price: 10,
        inBill: 0
    },
    {
        name:"Agedashi",
        tag:"2",
        price: 9,
        inBill: 0
    },
    {
        name:"Gyoza",
        tag:"3",
        price: 11,
        inBill: 0
    },
    {
        name:"Scallops",
        tag:"4",
        price: 30,
        inBill: 0
    },
    {
        name:"Mixed Sushi",
        tag:"5",
        price: 25,
        inBill: 0
    },
    {
        name:"Mixed Nigiri",
        tag:"6",
        price: 30,
        inBill: 0
    },
    {
        name:"Mochi",
        tag:"7",
        price: 7,
        inBill: 0
    },
    {
        name:"Kuro Mame",
        tag:"8",
        price: 7,
        inBill: 0
    },
    {
        name:"Tofu Soup",
        tag:" 9",
        price: 7,
        inBill: 0
    },
    {
        name:"Green Tea Ice-Cream",
        tag:"10",
        price: 8,
        inBill: 0
    },
    {
        name:"Madeleine",
        tag:"11",
        price: 11,
        inBill: 0
    },
    {
        name:"Dango",
        tag:"12",
        price: 15,
        inBill: 0
    },
    {
        name:"Green Tea",
        tag:"13",
        price: 3,
        inBill: 0
    },
    {
        name:"Sake",
        tag:"14",
        price: 8,
        inBill: 0
    },
    {
        name:"Asahi",
        tag:"15",
        price: 7,
        inBill: 0
    },
];
for ( let i=0; i < bill.length; i++){
    bill[i].addEventListener('click', () => {
        billNumbers(product[i]);
        totalCost(product[i]);
    })
}
function onLoadBillNumber(){
    let productNumbers = localStorage.getItem('billNumbers');

    if(setItem) {
        document.querySelector('.shoppingbag span').textContent = setItem;
    }
}
function billNumbers(product){
    let productNumbers = localStorage.getItem('billNumbers');

    productNumbers = parseInt(productNumbers);

    if(productNumbers){
        localStorage.setItem('billNumbers', productNumbers + 1);
        document.querySelector('.shoppingbag span').textContent = productNumbers +1;

    }else{
        localStorage.setItem('billNumbers', 1);
        document.querySelector('.shoppingbag span').textContent = 1;
    }
    setItem(product);
}


function setItem(product){
    
    
    let billItems = localStorage.getItem('productInBill');
    billItems = JSON.parse(billItems);


    if (billItems != null) {

        if(billItems[product.tag] == undefined){
            billItems = {
                ...billItems,
                [product.tag]:product
            }
        }
        billItems[product.tag].inBill +=1;
    }else{
        product.inBill = 1;
        billItems = {
            [product.tag]: product
        }
    }


    
    localStorage.setItem("productInBill", JSON.stringify(billItems) );
}



function totalCost(product){

    let billCost = localStorage.getItem('totalCost');
    console.log("My billCost is", billCost);
    console.log(typeof billCost);    

    if(billCost != null) {
        billCost = parseInt(billCost);
        localStorage.setItem("totalCost", billCost + product.price);
    }else{
    localStorage.setItem("totalCost", product.price);
    }
}


function displayBill(){
    let billItems = localStorage.getItem("productInBill");
    billItems = JSON.parse(billItems);
    let clientBill = document.querySelector(".total-bill");

    console.log(billItems);
    if(billItems && clientBill){
        clientBill.innerHTML = '';
        Object.values(billItems).map(item => {
            clientBill.innerHTML += `
                <div class="product">
                    <img scr="./IMG/remove.png">
                    <img scr="./IMG/${item.tag}.png">
                    <span>${item.name}</span>
                </div>
                <div class="price">
                    ${item.price}
                </div>
                <div class="quantity">
                    <img scr="./IMG/list-remove.svg">
                    <img scr="./IMG/${item.inBill}.png">
                    <img scr="./IMG/add.svg">
                </div>
                <div class="total">
                    ${item.inBill * item.price}
                </div>
                `;
            clientBill.innerHTML +=`
                <div class="finalcheck">
                    <h4 class="checktitle">
                        Check:
                    </h4>
                    <h4 class="Checktotal">
                        $${billCost},00
                    </h4>        
                `;

        });

    }
}

onLoadBillNumber();
displayBill();
