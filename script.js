document.getElementById('oddsForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    var odds1 = parseFloat(document.getElementById('odds1').value);
    var odds2 = parseFloat(document.getElementById('odds2').value);
    var odds3 = parseFloat(document.getElementById('odds3').value);

    var result = Odd_calculator(odds1, odds2, odds3);

    var resultContainer = document.getElementById('result');
    resultContainer.innerHTML = '';
    resultContainer.innerHTML += '<p>Bet 1: $' + result[0].toFixed(2) + '</p>';
    resultContainer.innerHTML += '<p>Bet 2: $' + result[1].toFixed(2) + '</p>';
    resultContainer.innerHTML += '<p>Bet 3: $' + result[2].toFixed(2) + '</p>';
    resultContainer.innerHTML += '<p>Total: $' + result[3].toFixed(2) + '</p>';
});

function AmericanToDecimal(value) {
    var new_value;
    if (value >= 0) {
        new_value = (value / 100) + 1;
    } else if (value < 0) {
        new_value = 1 - (100 / value);
    }
    return new_value;
}

function Odd_calculator(value1, value2, value3) {
    var new_value1 = AmericanToDecimal(value1);
    var new_value2 = AmericanToDecimal(value2);
    var new_value3 = AmericanToDecimal(value3);

    var total = (1 / new_value1) + (1 / new_value2) + (1 / new_value3);

    var money = 1; // Starting amount, you can adjust this as needed

    var new_new_value1 = (1 / new_value1) / total;
    var new_new_value2 = (1 / new_value2) / total;
    var new_new_value3 = (1 / new_value3) / total;

    var bet1 = new_new_value1 * money;
    var bet2 = new_new_value2 * money;
    var bet3 = new_new_value3 * money;
    var totalAmount = bet1 + bet2 + bet3;

    return [bet1, bet2, bet3, totalAmount];
}

