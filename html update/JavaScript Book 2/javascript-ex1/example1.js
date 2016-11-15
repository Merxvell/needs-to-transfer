var message, total, subtotal, tilePrice, shipping, quantity, signLength;
message = 'Please check your order:';
sign = "This is a shitty sign";
tilePrice = 5;
quantity = sign.length;
subtotal = tilePrice * quantity;
shipping = quantity * 0.5; //shipping is half of the amount of tiles;=
total = subtotal + shipping;

elMessage = document.getElementById('greeting');
elMessage.textContent = message;

elSign = document.getElementById('sign');
elSign.textContent = sign;

elTiles = document.getElementById('tile');
elTiles.textContent = quantity;

elSubTotal = document.getElementById('subTotal');
elSubTotal.textContent = '$' + subtotal;


elShipping = document.getElementById('shipping');
elShipping.textContent = '$' + shipping;

elGrandTotal = document.getElementById('total');
elGrandTotal.textContent = '$' + total;
