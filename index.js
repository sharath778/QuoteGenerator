const URL="https://api.quotable.io/random";
let quoteArea=$(".quote");
let quoteAuthor=$(".author");
let quoteCat=$(".catgeroy");
async function generateQuote(){
    let api= await fetch(URL);
    let data=await api.json();
    //console.log(data);
    quoteArea.text(data.content);
    quoteAuthor.text(data.author);
    quoteCat.text(data.tags[0]);
}

function spk(){
    let syn= window.speechSynthesis;
    let msg=quoteArea.text()+", this was written by, "+quoteAuthor.text()+", and this quote belongs to category, "+quoteCat.text();
    let utterance= new SpeechSynthesisUtterance(msg);
    
    syn.speak(utterance);
}
$("#gen-button").click(generateQuote)

$(".fa-volume-high").click(spk);

