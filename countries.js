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

// option1 (get country data)
// const getCountryHTML = country => {
//     return `
//     <div class = "country">
//         <h3>${country.name}</h3>
//         <img src="${country.flags.png}">
//     </div>
//     `
// }

// option2(get country data)
// const getCountryHTML = country => {
//     const { name, flags } = country;
//     return `
//     <div class = "country">
//         <h3>${name}</h3>
//         <img src="${flags.png}">
//     </div>
//     `
// }

// option3(get country data)
const getCountryHTML = ({ name, flags, capital, population }) => {
    return `
    <div class = "country">
        <h3>${name}</h3>
        <h4>${capital}</h4>
        <h5>${population}</h5>
        <img src="${flags.png}">
    </div>
    `
}
loadCountries()