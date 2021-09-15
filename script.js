const BASE_URL = "http://localhost:3000/lexus"

// when the page loads create an image element and place it inside the div with the lexus-catalogue


// Make a Get request for Lexus Data

 
fetch (BASE_URL)
    .then(function(res){
        return res.json()
    })
.then(function(lexusData){
// For every peace of data we will render it
    lexusData.forEach(renderLexus)

// for each take each element in the array and passes it to our call back function

})
function renderLexus(lexusObject) {
//console.log(lexusObject) 

// For each 
// Create the Element
const newImg = document.createElement("img");
// Connect images with SRC
newImg.src = lexusObject.image
// append images to the DOM 
const newCatalogue = document.getElementById("lexus-catalogue")
newCatalogue.append(newImg)

// add click event listener to the new image element
newImg.addEventListener("click", function(e){
    console.log(lexusObject)
// grab the elements for name, style, image, rating and comment

})



}


