$(function(){
    $('[data-toggle="tooltip"]').tooltip();
});

const carouselText = [
    {text: "revolution.", color: "green"}
]
  
$( document ).ready(async function() {
    carousel(carouselText, "#feature-text")
});
  
async function typeSentence(sentence, eleRef, delay = 100) {
    const letters = sentence.split("");
    let i = 0;
    while(i < letters.length) {
      await waitForMs(delay);
      $(eleRef).append(letters[i]);
      i++
    }
    return;
}
  
async function deleteSentence(eleRef) {
    const sentence = $(eleRef).html();
    const letters = sentence.split("");
    let i = 0;
    while(letters.length > 0) {
      await waitForMs(100);
      letters.pop();
      $(eleRef).html(letters.join(""));
    }
}
  
async function carousel(carouselList, eleRef) {
      var i = 0;
      while(true) {
        updateFontColor(eleRef, carouselList[i].color)
        await typeSentence(carouselList[i].text, eleRef);
        await waitForMs(1500);
        await deleteSentence(eleRef);
        await waitForMs(500);
        i++
        if(i >= carouselList.length) {i = 0;}
      }
}
  
function updateFontColor(eleRef, color) {
    $(eleRef).css('color', color);
}
  
function waitForMs(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

  // When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("back-to-top").style.display = "block";
    } else {
      document.getElementById("back-to-top").style.display = "none";
    }
}

  // When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function enable(){
    document.getElementById("btn-cart").disabled = false;
}
function checkval(){
    let inputval = document.getElementById('input-number').value;
    if(inputval<=0){
        alert("Input Value cannot be 0 or negative!")
    }
}