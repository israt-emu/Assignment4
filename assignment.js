// Problem 1:
//main function code

function seerToMon(seer){
    if(typeof seer != "number"){
        //only number value can be a measurement unit 
        const errorText = "Please, enter a number.";
        return errorText;
    }
    else if(seer < 0){
        //Measurement unit can't be negative
        const errorText = "Please, enter a positive value."; 
        return errorText;
    }
    else{
        const mon = seer / 40; // 40 seer = 1 mon.
        return mon;
    }
}
// test code of problem 1
const seer = 100;
const calculateMon = seerToMon(seer);
console.log(calculateMon);


// Problem 2:
//main function code

function totalSales(shirtQuantity, pantQuantity, shoeQuantity){
    const pricePerShirt = 100;
    const pricePerPant = 200;
    const pricePerShoe = 500;
    if(typeof shirtQuantity != "number" || typeof pantQuantity != "number" || typeof shoeQuantity != "number"){
        //string or boolean cannot be a quantity.
        const errorText = "Please, enter numbers in three quantity"; 
        return errorText;
    }
    else if(shirtQuantity < 0 || pantQuantity < 0 || shoeQuantity < 0){
        // Quantity cannot be negative.
        const errorText = "Please, enter positive numbers in three quantity"; 
        return errorText;
    }
    else{
        const shirtTotalPrice = pricePerShirt * shirtQuantity;
        const pantTotalPrice = pricePerPant * pantQuantity;
        const shoeTotalPrice = pricePerShoe * shoeQuantity;
        const totalSalesPrice = shirtTotalPrice + pantTotalPrice + shoeTotalPrice;
        return totalSalesPrice;
    }
}
//test code of problem 2
const shirtQuantity = 4;
const pantQuantity = 4;
const shoeQuantity = 4;
const totalPrice = totalSales(shirtQuantity, pantQuantity, shoeQuantity);
console.log(totalPrice);


// Problem 3:
//main function code

function deliveryCost(tShirtQuantity){
    const costPerFirst100 = 100;
    const costPerSecond100 = 80;
    const costPerRest = 50;
    if(typeof tShirtQuantity != "number"){
        //String or boolean can't be a quantity.
        const errorText = "Please, enter a number."; 
        return errorText;
    }
    else if(tShirtQuantity < 0){
        //Quantity can't be negative.
        const errorText = "Please, enter a positive number."; 
        return errorText;
    }
    else if(tShirtQuantity <= 100){
        const totalCost = tShirtQuantity * costPerFirst100;
        return totalCost;
    }
    else if(tShirtQuantity <= 200){
        const costOfFirst100 = 100 * costPerFirst100;
        const restQuantity = tShirtQuantity - 100;
        const costOfRestQuantity = restQuantity * costPerSecond100;
        const totalCost = costOfFirst100 + costOfRestQuantity;
        return totalCost;
    }
    else{
        const costOfFirst100 = 100 * costPerFirst100;
        const costOfSecond100 = 100 * costPerSecond100;
        const restQuantity = tShirtQuantity - 200;
        const costOfRestQuantity = restQuantity * costPerRest;
        const totalCost = costOfFirst100 + costOfSecond100 +costOfRestQuantity;
        return totalCost;
    }
}
// test code of problem 3
const tShirt = 450;
const total = deliveryCost(tShirt);
console.log(total);


// Problem 4:
//main function code

function perfectFriend(friends){
    if(typeof friends != "object"){
        return "Please, input an array";
    }
    for (const friend of friends){
        if(friend.length == 5){
            return friend;
        }
        // if there is no friend whose name contains 5 letters
        else if(friends.indexOf(friend) == friends.length - 1){
            const notPerfect = "You have no perfect friend";
            return notPerfect;
        }
    }
}
//test code of problem 4
const friends = ["emu", "israt", "imran", "rimu"];
const myPerfectFriend = perfectFriend(friends);
console.log(myPerfectFriend);

