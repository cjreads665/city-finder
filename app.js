let raw='https://raw.githubusercontent.com/nshntarora/Indian-Cities-JSON/master/cities.json'
var cities=[]
function pushMe(data){
    return cities.push(...data)
}

fetch(raw)
.then(blob=>blob.json())
.then(pushMe)

//function that finds the word
function findMatches(wordToFind){
    //the word will work as a pattern
    const regex= new RegExp(wordToFind, 'ig') //looking for the pattern of the word
   //filtering out the pattern from each object in the array
    return cities.filter(place=>{
        return place.name.match(regex)
    })
}

function displayMatch(){
    if(this.value==""| " "){
        console.log('hi');
    }
    //get the array of cities matching the keyword
    let found= findMatches(this.value)
    let html = found.map(eachCity=>{
        // let regex = new RegExp(this.value, 'ig')
        // let cityName= eachCity.name.replace(regex, `<span class="hl">${this.value}</span>`)
        // let stateName = eachCity.state.replace(regex,`<span class="hl">${this.value}</span>`)
        // return `
        //     <li>
        //     <span>${cityName}, ${stateName}</span>
        //     </li>
        // `
        return `
            <li>${eachCity.name}, ${eachCity.state}</li>
        `
        
    }).join(' ')
    // console.log(html);
    suggestionsList.innerHTML=html
}



let cityField= document.getElementById('city-name')
let stateField=document.getElementById('state')
let suggestionsList=document.querySelector('#sug-city')

cityField.addEventListener('input',displayMatch)
// cityField.addEventListener('change',displayMatch)
// stateField.addEventListener('input',displayState)

//api

