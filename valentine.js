function costCalculate(id, value) {
    const quantity = document.getElementById(id).value;
    
    if (isNaN(quantity)) {
        alert('Please enter a number');
        return;
    } else {
        const cost = quantity * value;
        return cost;
    }
}

function setInnertext(id, value) {
  document.getElementById(id).innerText = value;
}

function total() {
  const TotalCost = document.getElementById("total");
  const totalKitkatCost = document.getElementById("chocolate").innerText;
  const totalRoseCost = document.getElementById("rose").innerText;
  const totalDiaryCost = document.getElementById("diary").innerText;

  TotalCost.innerText =
        parseInt(totalKitkatCost) + parseInt(totalRoseCost) + parseInt(totalDiaryCost);
}

document.getElementById("kitkat-buy-btn").addEventListener("click", function () {
  const kitkatCost = costCalculate("kitkat-quantity", 200);
  const totalKitkatCost = setInnertext("chocolate", kitkatCost);
  total();
});

document.getElementById("rose-buy-btn").addEventListener("click", function () {
  const roseCost = costCalculate("rose-quantity", 100);
  const totalRoseCost = setInnertext("rose", roseCost);
  total();
});

document.getElementById("diary-buy-btn").addEventListener("click", function () {
  const diaryCost = costCalculate("diary-quantity", 100);
  const totalDiaryCost = setInnertext("diary", diaryCost);
  total();
});

document.getElementById("btn").addEventListener("click", function () {
  const promoCode = document.getElementById("promo-code").value;
  if (promoCode === "Valentine2023") {
    const total = document.getElementById("total").innerText;
    const promoCodecalculation = parseInt(total) * 0.1;

    const TotalCost = document.getElementById("all-total");
    TotalCost.innerText = total - promoCodecalculation;
  } else {
    alert("Wrong Promo Code.! Try Again with valid Promo Code");
  }
});
