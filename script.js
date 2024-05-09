console.log('OOOHHHHH LETS DO IT!');
console.log('Running.....');

const button = document.getElementById('nav');
const products = document.getElementById('postProducts');
const app = document.getElementById('app');
// * Use the fetch API or Axios to communicate with an external web API. Use the data provided by this API to populate your application’s content and features ====//

fetch('https://dummyjson.com/products/1')
.then(res => res.json())
.then(json => console.log(json))
            
// button.addEventListener('sumbit', logsubmit);
async function theShop() {
    try {
        const response = await fetch("https://dummyjson.com/products/10");
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
setTimeout(function() { myFunction("SHARE LINK AND GET 50% OFF!!!"); }, 7000);

function myFunction(value) {
  document.getElementById("message").innerHTML = value;
};
