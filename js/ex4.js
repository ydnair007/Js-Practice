var shipments = {
  standard: {
    leadTime: 7,
    fee: 2,
  },
  express: {
    leadTime: 3,
    fee: 4.5,
  },
};

document.getElementById("shipments").onchange = function () {
  selectedValue = document.getElementById("shipments").value;
  var leadTime = shipments[selectedValue].leadTime;
  var fee = shipments[selectedValue].fee;

  orderDate = new Date();
  deliveryDate = new Date(orderDate.getTime() + 86400000 * [leadTime]);
  orderDate = orderDate.toISOString().slice(0, 10);
  deliveryDate = deliveryDate.toISOString().slice(0, 10);
  document.getElementById("order_date").innerHTML = orderDate;
  document.getElementById("delivery_fee").innerHTML = fee;
  document.getElementById("delivery_date").innerHTML = deliveryDate;
};
