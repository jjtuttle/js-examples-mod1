//? arrayObject.filter(callback, contextObject);
//* Array of Objects of cities and their populations
let cities = [
    { name: 'Los Angeles', population: 3792621 },
    { name: 'New York', population: 8175133 },
    { name: 'Chicago', population: 2695598 },
    { name: 'Houston', population: 2099451 },
    { name: 'Philadelphia', population: 1526006 }
];

//* for() way to find population > 3 million
let largePopulation = (cities) => {
    let bigCities = [];

    for (let i = 0; i < cities.length; i++) {
        if (cities[i].population > 3_000_000) {
            bigCities.push(cities[i]);
        }
    }
    return bigCities;
};
//? console.log(largePopulation(cities));
/** =>
 * [
  { name: 'Los Angeles', population: 3792621 },
  { name: 'New York', population: 8175133 }
]
 */

//! filter method <><><>>><><><>><>
let largePopulationFilter = cities => cities.filter(city => city.population > 3_000_000);
    //let bigCitiesFiltered = 
    //return 
    //return bigCitiesFiltered;
//}
//? console.log(largePopulationFilter(cities));

//! Since filter() returns a 'new' array it can be chained with other methods
let chainedFilter = cities => {
    let fC =  cities  
        .filter(city => city.population < 3_000_000)
        .sort((c1, c2) => c1.population - c2.population)
        .map(city => console.log(`${city.name} : ${city.population}`)
        );

        return fC;
};
//? console.log(chainedFilter(cities));

//! ===============================================
//! filter from - https://www.youtube.com/watch?v=R8rmfD9Y5-c&t=1s

const items = [
    {name: 'Bike',          price: 100},
    { name: 'TV',           price: 200 },
    { name: 'Album',        price: 10 },
    { name: 'Book',         price: 5 },
    { name: 'Phone',        price: 500 },
    { name: 'Computer',     price: 1000 },
    { name: 'Keyboard',     price: 25 },
    
];

const filteredItems = items.filter((item) => {
    return item.price <= 100;
});
console.log(filteredItems);

//! ===============================================
