//*Δημιουργείστε νέο πίνακα που θα περιέχει τα αυτοκίνητα που έχουν φτιαχτεί μετά το 2001.*
const cars = [
	{
	  brand: 'audi',
	  year: 2000
	},
	{
	  brand: 'fiat',
	  year:2002
	},
	{
	  brand: 'toyota',
	  year:2002

	}
];

 const carsAfter2001 = cars.filter(item => item.year > 2001);

 console.log("carsAfter2001", carsAfter2001);