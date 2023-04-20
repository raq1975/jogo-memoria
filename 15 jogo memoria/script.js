const cards = document.querySelectorAll('.Carta');

let hasFlipperdcard = false;
let lockBoard = false;
let firstcard, secondcard;


function flipCard() {

    if ( lockBoard)return;
    if(this === firstcard) return;

    this.classlist.add('flip');

    if ( ! hasFlipperdcard) {
        hasFlipperdcard = true;
        firstcard = this;
        return;

    }


    secondcard = this;
    lockBoard = true;


    checkForMatch();
      }



      function checkForMatch() { 

        let isMatch = firstcard.dataset.framework === secondcard.
        dataset.framework;
        isMatch ? disableCards() : unflipCards();

      }

function disableCards(){
    firstcard.removerEventListener('click', flipcard);
    secondcard.removerEventListener('click',flipcard);

    resetBoard();

}

function unflipCards() {

    setTimeout(() => {
        firstcard.classlist.remove( 'FLIP');
        secondcard.classlist.remove('flip');


        resetBoard();


    },500);

}

function resetBoard() {

[ hasFlipperdcard, lockBoard]= [ false,false];
[ firstcard, secondcard] = [ null, null];

}


( function shuffle() {

    cards.forEach(card => {
        let ramdomPos = Math.floor(Math.random()* 12);
        card.style.order = ramdomPos;

         })

})();

cards.forEach( card => card.addEventListener('CLICK',FLIPcARD));

Window.Onload = function() {
    let clickDiv = document.getElementById(" click=div");
    clickDiv.onclick = incrementclickDiv;



    let resetBth = document.getElementById ( "reset=button");
    resetBth.onclick = resetCounter;



}

var counterVal =0

incrementclick= function(){
    updateDisplay(++counterVal)

}


function resetCounter(){

    counterVal = 0;
    updateDisplay( counterVal);


}


function updateDisplay(val){
    document.getElementById("conter-label").innerHTML= val;
}




