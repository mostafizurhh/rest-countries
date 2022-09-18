const loadCountries = () => {
    fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}
const displayCountries = countries => {
    console.log(countries[0])
    const countriesHTML = countries.map(country => getCountryHTML(country))
    // console.log(countriesHTML[0])
    const countryContainer = document.getElementById('country')
    countryContainer.innerHTML = countriesHTML.join(' ')
}

const getCountryHTML = country => {
    return `
    <div class = "country">
        <h3>${country.name}</h3>
        <img src="${country.flags.png}">
    </div>
    `
}
loadCountries()