function checkHeatIndex() {
    // Gets inputs
    let tempInput = document.getElementById("temperature").value;
    let humidInput = document.getElementById("humidity").value;

    // Checks empty fields if there are
    if (tempInput === "" || humidInput === "") {
        document.getElementById("display1").innerHTML = "Please fill in all fields.";
        return;
    }

    // It will convert inputs to numbers
    let temperature = parseFloat(tempInput);
    let humidity = parseFloat(humidInput);

    // Checks for negative/invalid values if there are
    if (temperature < 0 || humidity < 0 || humidity > 100) {
        document.getElementById("display1").innerHTML = "Please enter valid values.";
        return;
    }

    document.getElementById("display1").innerHTML = "";

    // Calculator 
    let heatIndex = temperature + (0.33 * humidity) - 4;

    // Rounds off to a single decimal place
    heatIndex = Math.round(heatIndex * 10) / 10;

    // Using switch, it like determines the status of the head index
    let status = "";

    switch (true) {
        case (heatIndex <= 27):
            status = "Comfortable / Cool";
            break;
        case (heatIndex <= 32):
            status = "Warm";
            break;
        case (heatIndex <= 37):
            status = "Hot";
            break;
        case (heatIndex <= 41):
            status = "Very Hot / Caution";
            break;
        default:
            status = "Extreme Heat / Danger";
    }

    window.alert("Heat Index: " + heatIndex + "°C\nStatus: " + status);
}
