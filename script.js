console.log('OOOHHHHH LETS DO IT!');
console.log('Running.....');

const button = document.getElementById('nav');
const products = document.getElementById('postProducts');
const app = document.getElementById('app');
const Http = new XMLHttpRequest();
// const url='https://jsonplaceholder.typicode.com/posts';
// Http.open("GET", url);
// Http.send();
// Http.onreadystatechange = (e) => {
//   console.log(Http.responseText)
// }
// * Use the fetch API or Axios to communicate with an external web API. Use the data provided by this API to populate your application’s content and features ====//

fetch('https://dummyjson.com/products/')
.then(res => res.json())
.then(json => console.log(json))
            
// button.addEventListener('sumbit', logsubmit);
async function theShop() {
    try {
        const response = await fetch("https://dummyjson.com/products/11");
        console.log(response);
        const jsonData = await response.json()
        console.log(jsonData);
        app.innerHTML = (`<h1>${jsonData.title}</h1>
       `);
    } catch (err) {
        console.log(err);

    }
}
theShop();

  
  const input = document.getElementById("input");
  

async function grabComments() {
    try{
    const response = await fetch(" https://dummyjson.com/comments/10");
    console.log(response);
    const jsonData = await response.json()
    console.log(jsonData);
    app.innerHTML = (`<h1>${jsonData.comments}</h1>
   `);
} catch (err) {
    console.log(err);

}
};
grabComments();

// button.addEventListener('click', theShop => {
//     console.log('Button clicked!'); 
// });
//* Promise for user message for 50% off ==================================//
const promise = new Promise((resolve, reject) => {
  setTimeout(function() { myFunction(" TEXT NEWCUST TO 34344 AND GET 50% OFF!!!"); }, 7000);
})
console.log(promise);

function myFunction(value) {
  document.getElementById("message").innerHTML = value;
};
