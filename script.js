document.getElementById("TradeForm").addEventListener("submit", async function (e) {
    e.preventDefault(); // Prevent the default form submission

    const formData = new FormData(e.target); // Collect form data
    const tradeData = Object.fromEntries(formData.entries()); // Convert to JSON-like object

    try {
        const response= await fetch("http://localhost:3000/add-trade", {
            method: "POST",
            headers: {
                "Content-Type": "application/json", },
                body: JSON.stringify(tradeData),
        });

        const result = await response.text();
        console.log("Server Response:", result);

        if(response.ok) {
            alert("Trade added sucessfully!");
        } else {
            alert("Trade failed to be added");
        }
    } catch(error) {
        console.log(error);
    }
});
