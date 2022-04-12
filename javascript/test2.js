//Σε κάθε ένα αυτοκίνητο στον πίνακα cars προσθέστε ένα καινούργιο attribute που θα λέγεται serviced και θα έχει value true.
const cars = [
	{
		brand: 'audi',
	  year: 2000
	},
	{
		brand: 'fiat',
	  year:2002
	}
];

const newCars = cars.map(item => {
    item.serviced = true
    return item
});

console.log("newcars", newCars);