'use strict';


const onSearchClick=()=>{
    const countryInput=document.getElementById("countryInput");
    const countryName=countryInput.value;
    if(!countryName){
        alert("Please enter a country name");
        return;
    }
   
    fetchCountryInfo(countryName);
   
}

const fetchCountryInfo=(countryName)=>{
    const apiUrl=`https://restcountries.com/v3.1/name/${countryName}`;
    fetch(apiUrl)
    .then(res=>res.json())
    .then(data=>{
        displayCountryInfo(data[0]);
    })
    .catch(error=>{
        console.error("Error:",error);
    });

}
const displayCountryInfo=(country)=>{
    const div=document.querySelector("div");
    const flagElement=document.getElementById("flag");
    const nameElement=document.getElementById("name");
    const populationElement=document.getElementById("population");
    const currencyElement=document.getElementById("currency");
    flagElement.src=country.flags.svg;
    nameElement.textContent=`Country Name:${country.name.official}`;
    populationElement.textContent=`Population:${country.population}`;
    currencyElement.textContent=`Currency:${Object.values(country.currencies)[0].name}`;
    div.style.backgroundColor="white";

}
