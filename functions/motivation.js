const toggleSwitch = document.querySelector('[data-switch]'),
      toggleBtn = document.querySelector('[data-toggle]'),
      btn = document.querySelector('[data-button]'),
      theQuote = document.querySelector('[data-quote]'),
      author = document.querySelector('[data-author]');
let num;

toggleSwitch.addEventListener('click', () =>{
  toggleBtn.classList.toggle('active');
  toggleSwitch.classList.toggle('switches-active');
  document.body.classList.toggle('bg');
})

fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    quotes(data);
  });

function quotes(quote) {
  let quoteArr = quote;

  btn.addEventListener('click', () =>{
    getRandomInt(0, quoteArr.length);
    displayQuote(num, quoteArr);
  })
}

function getRandomInt(min, max) {
  let randomNumber = Math.floor(Math.random() * (max - min) + min);
  num = randomNumber;
}

function displayQuote(randomNum, theArr){
  let quoteSaver = theArr[randomNum].text;
  let quoteAuthor = theArr[randomNum].author;

  theQuote.innerHTML = `<blockquote><q class='the-quote'>${quoteSaver}</q></blockquote>`;
  if (quoteAuthor === null || quoteAuthor === undefined){
    author.innerHTML = `<blockquote><q class='the-author'>No authors found :(</q></blockquote>`;
  } else{
    author.innerHTML = `<blockquote><q class='the-author'>${quoteAuthor}</q></blockquote>`;
  } 
}