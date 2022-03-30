// *Write a program to calculate the total price of a basket of shopping.*
//  *The Price List is the following:*
//  *apple costs 12 cents*
// *orange costs 32 cents*
// - *Find the total price of the following basket:*
// *apple, apple, orange, apple*
//  *-* A normal supermarket has thousands of products. For example, except from apples and oranges, it also has:
// pen: 22 cents
// notebook: 89 cents
// peach: 18 cents
// and many more
// Assuming that you did an API call and fetched all the products and their prices, modify your current code to be able to calculate the price of any basket.
// For example, the following basket: apple, pen, peach, apple, pen, peach, notebook, notebook, orange
//  *- The supermarket has special offers*
//  *if you buy 2 apples you get 1 of them free*
//  *if you buy 3 oranges you get 1 of them free*
//  *Modifying your existing code, calculate the total price of the following basket:*
//  *apple, apple, orange, apple, orange, orange, apple, apple*
//  - In 5 apples the 2 apples of them are free, in 8 oranges the 3 oranges of them are free
// 2 options to solve it:
// 1: Υπολογισμός προσφορών κατά το σκανάρισμα
// 2: Υπολογισμός προσφορών στο άθροισμα



const shoppingCart = ["apple", "apple", "orange", "apple", "orange", "orange", "apple", "apple"];

const products = {
    apple: {
        price: 0.12
    },
    orange: {
        price:0.32
    }
};

const offers1 = {
    apple: {
        offer: 1,
        amount: 2
    },
    orange: {
        offer: 1,
        amount: 3
    }
};



const cost = shoppingCart.reduce((acc, cur) => acc + products[cur].price, 0);

console.log(cost);

const calculateDiscount = (shoppingCart, offers) => {
    const offerCount = {};
    return shoppingCart.reduce((acc, cur) => {
            // checks if offerCount has the product
            offerCount.hasOwnProperty(cur) ? offerCount[cur] += 1 : offerCount[cur] = 1;
            if(offerCount[cur] >= offers[cur].amount){
                offerCount[cur] = 0;
                console.log(cur)
                // subtracts amount equal to the price of the product times one less than the amount needed for the offer to work (because it isn't adding one from this iteration so it comes out to equal to the offer)
                return acc - (offers[cur].offer - 1) * products[cur].price
            }
            return acc + products[cur].price
        },
    0);
}

console.log(calculateDiscount(shoppingCart, offers1));

const offers2 = {
    apple: {
        offer: 2,
        amount: 5
    },
    orange: {
        offer: 3,
        amount: 8
    }
};

console.log(calculateDiscount(shoppingCart, offers2));