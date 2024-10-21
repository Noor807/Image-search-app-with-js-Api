///first order///
let order1Id = 1;
let order1Quantity = 2;
let order1Type = "Latte";
let order1Price = 250;

//////second order////
let order2Id = 2;
let order2Quantity = 1;
let order2Type = "Experesso";
let order2Price = 350;

///////third order////
let order3Id = 3;
let order3Quantity = 4;
let order3Type = "Capacinno";
let order3Price = 150;


function displayOrders(orderId, orderQuantity,orderType,orderPrice) {
    console.log(`order Info: Id=${orderId}, Quantity=${orderQuantity}, Type=${orderType}, Price=${orderPrice}`
    );
    
}

displayOrders(order3Id, order3Type, order3Quantity, order3Price);

