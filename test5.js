// Find the item with id: 133.
//  Should log ["1",{"id":"133","name":"Ioanna"}]
const y = {
    0: {
		      id: "123",
		      name: "Achilleas"
		   },
    1: {
			    id: "133",
			    name: "Ioanna"
		   }
  };

//Η απάντηση σας να είναι της μορφής

const result = Object.entries(y).filter(item => item[1].id === "133")[0];

console.log('result', result);