let cards=[]
let sum=0
let cardsEl=document.querySelector(".cards-el")
let messageEl=document.querySelector(".message-el")
let sumEl=document.querySelector(".sum-el")
let message= "" // declaring message variable and assig its value with empty string. 
let isAlive= false 
let isBlackjack= false
// console.log(cards)

function getRandomCard(){
    let random=Math.floor(Math.random()*12)+1
    if(random===1){
        return 11
    }
    else if(random>=11){
        return 10
    }
    else {
        return random
    }
}
function startgame(){
    let firstcard=getRandomCard()
    let secondcard=getRandomCard()
    cards=[firstcard, secondcard]
    sum=firstcard+secondcard
    // if above those code not added here(kepping in on outside),through console panel anyone would get know what will be the cards appering after hiting start game button.
    isAlive=true
    rendergame()
    // creating a new function startgame() that calls rendergame()
}
 function rendergame(){
    // // cardsEl.innerText="cards: " +cards[0]+ " "+ cards[1]
    cardsEl.innerText="cards: "
    for(let i=0; i<cards.length;i++){
       cardsEl.textContent+=cards[i]+ " "
    // " "-> it is added to make a space after a number.nothing much!. you can check it though.
    }
    sumEl.innerText="sum:" +sum

    if(sum<=20) {
        message="Do you want to draw a new card?"
        //reassign the message variable to the string we're logging out.
    }
    else if(sum===21) {
        message="You've got a blackjack"
        isBlackjack=true
    }
    else{
        message="You're out of game"
        isAlive=false
    }
    messageEl.innerText= message
}

function newcard(){
    if(isAlive==true && isBlackjack===false) { 
     let recentcard=getRandomCard()
     cards.push(recentcard)
     sum+=recentcard
     rendergame()
    }
}


