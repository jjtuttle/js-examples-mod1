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
console.log(largePopulation(cities));
/** =>
 * [
  { name: 'Los Angeles', population: 3792621 },
  { name: 'New York', population: 8175133 }
]
 */

