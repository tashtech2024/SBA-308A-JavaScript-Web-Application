console.log('OOOHHHHH LETS DO IT!');
console.log('Running.....');
const button = document.getElementById('sumbit');
const products = document.getElementById('postProducts');


// * Use the fetch API or Axios to communicate with an external web API. Use the data provided by this API to populate your application’s content and features ====//
fetch('https://dummyjson.com/products/')
.then(res => res.json())
.then(json => console.log(json))
            
//? Product grab ===========================================//
async function theShop() {
    try {
        const response = await fetch("https://dummyjson.com/products/1");
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


//? Comment grab =======================================//
async function grabComments() {
    try{
    const response = await fetch(" https://dummyjson.com/comments/1");
    const jsonData = await response.json()
    console.log(jsonData);
    app.innerHTML = (`<h1>${jsonData.comments}</h1>
    </h1> 
    <h2>${jsonData.body}</h2>`);
  } catch (err) {
    console.log(err);
    console.log(response);

}
};
grabComments();


//* Promise for user message for 50% off ==================================//
const myFirstpromise = new Promise((resolve, reject) => {
  setTimeout(function() { myFunction(" TEXT NEWCUST TO 34344 AND GET 50% OFF!!!"); }, 7000);
})
console.log(myFirstpromise);

function myFunction(value) {
  document.getElementById("message").innerHTML = value;
};
