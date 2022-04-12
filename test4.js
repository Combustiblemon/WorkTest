//Να δημιουργήσετε το παρακάτω αποτέλεσμα χρησιμοποιώντας τον πίνακα cars της 2 άσκησης:
/* const newCars4 = {
    audi: 2000,
    fiat: 2002
}; */

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

//Η απάντηση σας να είναι της μορφής

const newCars4 = (cars = [], idProp) =>  {
    return cars.reduce((acc, cur) => {
        // console.log(Object.entries(cur))
        return {
            ...acc,
            // [cur[idProp]]: Object.entries(cur).filter(([key, value]) => key != idProp)[0][1]
            [cur[idProp]]:  cur[Object.keys(cur).filter((key) => key != idProp)[0]]
        }
    }, {})
};

const carsTransformed = newCars4(cars,"year");

console.log('carsTransformed', carsTransformed);