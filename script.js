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

// For each 
// Create the Element
const newImg = document.createElement("img");
// Tell the img element to point it's src attribute towards the lexusObj image string
newImg.src = lexusObject.image
console.log(lexusObject)


// append images to the DOM 
// add click event listener to the new image element
newImg.addEventListener("click", function(e){
    console.log('click')
    
//grab the div with the id=lexus catalogue
//append the image to the div


// grab the elements for name, style, rating and comment
const lexName = document.getElementById("name")
lexName.innerText = lexusObject.name

const lexStyle = document.getElementById("style")
lexStyle.innerText = lexusObject.style

const lexRating = document.getElementById("rating-display")
lexRating.innerText = lexusObject.rating

const lexComment = document.getElementById("comment-display")
lexComment.innerText = lexusObject.comment









})

const newCatalogue = document.getElementById("lexus-catalogue")
newCatalogue.append(newImg)



}


// grab the new-lexus form

const newLexusForm = document.getElementById("new-lexus")

//attach a 'submit' eventListener to the "new-lexus" form
newLexusForm.addEventListener('submit', submitHandler)

function submitHandler(e){
    e.preventDefault

    // create a new lexus Object using the values from the form
    const newLexus = {
        name: e.target["name"].value,
        style: e.target["style"].value,
        image: e.target["image"].value,
        rating: 0,
        comment: e.target["new-comment"].value,
        }
        debugger

        e.target.reset()
}
