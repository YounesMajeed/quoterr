const para = document.querySelector('p');
const btn = document.querySelector('.getButton');
const by = document.querySelector('.by');

// using async and await
async function randomQuote() {
    const response = await fetch(dataURL)
    const data = await response.json()
    //log just to check
    console.log(`${data.content} —${data.author}`)
    // showing content to the DOM
    para.textContent = (data.content);
    by.textContent = ('- ' + data.author);
  }
        
btn.addEventListener('click', randomQuote);
const dataURL = "https://api.quotable.io/random"
// using fetch function
   /* function randomQuote(){
        //fetch function passed dataURL from above
        fetch(dataURL)
        .then(function(response){
            return response.json();
        }).then(function(data){
            para.textContent = (data.content);
            by.textContent = ('- ' + data.author)
        })
    }
*/
// using async and await
    async function randomQuote() {
    const response = await fetch(dataURL)
    const data = await response.json()
    //log just to check
    console.log(`${data.content} —${data.author}`)
    // showing content to the DOM
    para.textContent = (data.content);
    by.textContent = ('- ' + data.author);
  }