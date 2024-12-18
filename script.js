document.getElementById('apply-filters').addEventListener('click', function () {
    const startDate = document.getElementById('date-range-start').value;
    const endDate = document.getElementById('date-range-end').value;
    const tradeType = document.getElementById('trade-type').value;
    const symbol = document.getElementById('symbol').value;

    // Example trades data
    const trades = [
        { date: '2024-12-01', symbol: 'AAPL', entry: 150, exit: 155, profit: 5, type: 'buy' },
        { date: '2024-12-02', symbol: 'GOOGL', entry: 2800, exit: 2750, profit: -50, type: 'sell' },
        { date: '2024-12-03', symbol: 'MSFT', entry: 320, exit: 330, profit: 10, type: 'buy' }
    ];

    const filteredTrades = trades.filter(trade => {
        const dateInRange = (!startDate || trade.date >= startDate) && (!endDate || trade.date <= endDate);
        const typeMatches = tradeType === 'all' || trade.type === tradeType;
        const symbolMatches = !symbol || trade.symbol.toLowerCase().includes(symbol.toLowerCase());
        return dateInRange && typeMatches && symbolMatches;
    });

    const tableBody = document.getElementById('trade-entries');
    tableBody.innerHTML = '';
    filteredTrades.forEach(trade => {
        const row = `<tr>
            <td>${trade.date}</td>
            <td>${trade.symbol}</td>
            <td>${trade.entry}</td>
            <td>${trade.exit}</td>
            <td>${trade.profit}</td>
        </tr>`;
        tableBody.innerHTML += row;
    });
});
