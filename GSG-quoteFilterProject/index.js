const dataAPI = [];
const searchFilter = document.getElementById('searchFilterID');
const txtArea = document.getElementById('txtArea');
let DATAapi = [];
fetchData();
async function fetchData(){
    try{
        const response = await fetch("https://dummyjson.com/quotes")
        if(!response.ok){
            throw new error('could not fetch data');
        }
        const data = await response.json();
        DATAapi = data.quotes;
        
    }
    catch(error) {
    console.log(error)
    }
}

function quotesFilter(){
    resultsList.innerHTML = '';
const filteredQuotes = DATAapi.filter((row)=>row.quote.includes(searchFilter.value));
 filteredQuotes.forEach((quoteObj) => {
        const li = document.createElement('li');
        li.textContent = quoteObj.quote;
        resultsList.appendChild(li);
    });
}
searchFilter.addEventListener("input", (event) => {
    quotesFilter();
});