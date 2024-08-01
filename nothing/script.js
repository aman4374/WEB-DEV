function purchase() {
    let regular = parseInt(prompt("How many bags of regular coffee would you like to buy?")) || 0;
    let decaf = parseInt(prompt("How many bags of decaf coffee would you like to buy?")) || 0;
    let mocha = parseInt(prompt("How many bags of mocha coffee would you like to buy?")) || 0;

    let regularCost = regular * 9;
    let decafCost = decaf * 8;
    let mochaCost = mocha * 11;

    let totalCost = regularCost + decafCost + mochaCost;
    let discount = totalCost > 100 ? 15 : 0;
    totalCost -= discount;

    let receipt = `
    <p>You purchased ${regular} bags of regular, totaling $${regularCost}.</p>
    <p>You purchased ${decaf} bags of decaf, totaling $${decafCost}.</p>
    <p>You purchased ${mocha} bags of mocha, totaling $${mochaCost}.</p>
    <p>Your total purchase cost is $${totalCost}.</p>
    `;

    document.getElementById("receipt").innerHTML = receipt;
    document.getElementById("receipt").style.display = "block";
}
