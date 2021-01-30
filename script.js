function handlerTicketChange(ticket, isIncrease) {
    const ticketInput = document.getElementById(ticket + "-count");
    const ticketInputNumber = getInputValue(ticket);
    let ticketNewCount = ticketInputNumber;
    if (isIncrease == true) {
        ticketNewCount = ticketInputNumber + 1;
    }
    if (isIncrease == false && ticketInputNumber > 0) {
        ticketNewCount = ticketInputNumber - 1;
    }
    ticketInput.value = ticketNewCount;
    let ticketTotal = 0;
    if (ticket == "economyclass") {
        ticketTotal = ticketNewCount * 100;
    }
    if (ticket == "firstclass") {
        ticketTotal = ticketNewCount * 150;
    }
    calulateTotal();
}

function calulateTotal() {
    const firstClassInputNumber = getInputValue("firstclass");
    const economyClassInputNumber = getInputValue('economyclass');
    const totalTicketPrice = firstClassInputNumber * 150 + economyClassInputNumber * 100;
    document.getElementById("totalprice").innerText = totalTicketPrice;
    const tax = Math.round(totalTicketPrice * 0.1);
    document.getElementById("total-tax").innerText = tax;
    const grandTotal = totalTicketPrice + tax;
    document.getElementById("grand-total").innerText = grandTotal;
}

function getInputValue(ticket) {
    const ticketInput = document.getElementById(ticket + "-count");
    const ticketInputNumber = parseInt(ticketInput.value);
    return ticketInputNumber;
}