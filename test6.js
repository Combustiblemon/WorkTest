// a) Find cars after year 2000. (the same with the 1st)
// b) transform to an object that has the brand name as key e.g. {Audi: {year: 1999...}, Nissan: {...}}.
const cars = [
    {
      brand: "Audi",
      year: 1999,
      price: 12222
    },
    {
      brand: "Nissan",
      year: 2003,
      price: 24222
    }
  ];

//Η απάντηση σας να είναι της μορφής
//a)

  const newCars = cars.filter(item => item.year > 2001);

  console.log("newCars", newCars);

//b)

	const transform = (cars, idProp) =>  cars.reduce((acc, cur) => {
        const props = Object.entries(cur).filter(item => item[0] != idProp)
        // console.log(Object.fromEntries(props))
        return{
            ...acc,
            [cur[idProp]]: {
                ...Object.fromEntries(props)
            }
        }
    },{}) ;

    const transformedCars = transform(cars, "brand");

	console.log("transformedCars", transformedCars);