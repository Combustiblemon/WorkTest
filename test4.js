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
            [cur[idProp]]: Object.entries(cur).filter(item => item[0] != idProp)[0][1]

        }
    }, {})
};

const carsTransformed = newCars4(cars,"brand");

console.log('carsTransformed', carsTransformed);