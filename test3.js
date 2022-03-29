//Να δημιουργήσετε το παρακάτω αποτέλεσμα χρησιμοποιώντας τον πίνακα cars της 2 άσκησης:
/* const newCars3 = [
	{
		audi: 2000
	},
	{
		fiat: 2002
	}
]; */

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

const newCars3 =  cars.reduce((acc, cur) => {
    return[
        ...acc,
        {
            [cur.brand]: cur.year
        }
    ]
},[]);

console.log("newCars3",  newCars3);