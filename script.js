//increase Button Handler of firstClass
// document.getElementById("firstclass-increase").addEventListener("click", function() {
//     // const firstClassInput = document.getElementById("firstclass-count");
//     // const firstClassInputNumber = parseInt(firstClassInput.value);
//     // const firstClassNewCount = firstClassInputNumber + 1;
//     // firstClassInput.value = firstClassNewCount;
//     // const firstClassTotal = firstClassNewCount * 150;
// document.getElementById("subtotal").innerText = firstClassTotal;
//     handleFirstClassticketChange(true);
// });

// //decrease Button Handler of firstClass
// document.getElementById("firstclass-decrease").addEventListener("click", function() {
//     // const firstClassInput = document.getElementById("firstclass-count");
//     // const firstClassInputNumber = parseInt(firstClassInput.value);
//     // const firstClassNewCount = firstClassInputNumber - 1;
//     // firstClassInput.value = firstClassNewCount;
//     // const firstClassTotal = firstClassNewCount * 150;
// document.getElementById("subtotal").innerText = firstClassTotal;
//     handleFirstClassticketChange(false);
// });



// increase & decrease funciton handler of FirstClass
// function handleFirstClassticketChange(isIncrease) {
//     const firstClassInput = document.getElementById("firstclass-count");
//     const firstClassInputNumber = parseInt(firstClassInput.value);
//     // const firstClassNewCount = firstClassInputNumber - 1;
//     let firstClassNewCount = firstClassInputNumber;
//     if (isIncrease == true) {
//         firstClassNewCount = firstClassInputNumber + 1;
//     }
//     if (isIncrease == false && firstClassInputNumber > 0) {
//         firstClassNewCount = firstClassInputNumber - 1;
//     }
//     firstClassInput.value = firstClassNewCount;
//     const firstClassTotal = firstClassNewCount * 150;

//     document.getElementById("subtotal").innerText = firstClassTotal;
// }

// increase & decrease funciton handler of economyClass
// function handleEconomyticketChange(isIncrease) {
// const economyClassInput = document.getElementById("economyclass-count");
// const economyClassInputNumber = parseInt(economyClassInput.value);
// // const economyClassNewCount = economyClassInputNumber - 1;
// let economyClassNewCount = economyClassInputNumber;
// if (isIncrease == true) {
//     economyClassNewCount = economyClassInputNumber + 1;
// }
// if (isIncrease == false && economyClassInputNumber > 0) {
//     economyClassNewCount = economyClassInputNumber - 1;
// }
// economyClassInput.value = economyClassNewCount;
// const economyClassTotal = economyClassNewCount * 100;
// document.getElementById("subtotal").innerText = economyClassTotal;
// }

function handleTicketChange(ticket, isIncrease) {
    const ticketInput = document.getElementById(ticket + "-count");
    const ticketInputNumber = parseInt(ticketInput.value);
    // const ticketNewCount = ticketInputNumber - 1;
    let ticketNewCount = ticketInputNumber;
    if (isIncrease == true) {
        ticketNewCount = ticketInputNumber + 1;
    }
    if (isIncrease == false && ticketInputNumber > 0) {
        ticketNewCount = ticketInputNumber - 1;
    }
    ticketInput.value = ticketNewCount;
    // const ticketTotal = ticketNewCount * 100;
    let ticketTotal = 0;
    if (ticket == "economyclass") {
        ticketTotal = ticketNewCount * 100;
    }
    if (ticket == "firstclass") {
        ticketTotal = ticketNewCount * 150;
    }
    // document.getElementById("subtotal").innerText = ticketTotal;
    calulateTotal();
}

function calulateTotal() {
    const firstClassInput = document.getElementById("firstclass-count");
    const firstClassInputNumber = parseInt(firstClassInput.value);

    const economyClassInput = document.getElementById("economyclass-count");
    const economyClassInputNumber = parseInt(economyClassInput.value);

    const totalTicketPrice = firstClassInputNumber * 150 + economyClassInputNumber * 100;
    document.getElementById("totalprice").innerText = totalTicketPrice;
}



// //increase Button Handler of economyClass
// document.getElementById("economyclass-increase").addEventListener("click", function() {
//     // const economyClassInput = document.getElementById("economyclass-count");
//     // const economyClassInputNumber = parseInt(economyClassInput.value);
//     // const economyClassNewCount = economyClassInputNumber + 1;
//     // economyClassInput.value = economyClassNewCount;
//     // const economyClassTotal = economyClassNewCount * 100;
// document.getElementById("subtotal").innerText = economyClassTotal;
//    handleEconomyticketChange(true);
// });

//decrease Button Handler of economyClass

// document.getElementById("economyclass-decrease").addEventListener("click", function() {
//     // const economyClassInput = document.getElementById("economyclass-count");
//     // const economyClassInputNumber = parseInt(economyClassInput.value);
//     // const economyClassNewCount = economyClassInputNumber - 1;
//     // economyClassInput.value = economyClassNewCount;
//     // const economyClassTotal = economyClassNewCount * 100;
// document.getElementById("subtotal").innerText = economyClassTotal;
//    handleEconomyticketChange(false);
// });
































// // increase & decrease funciton handler of FirstClass
// function handleFirstClassticketChange(isIncrease) {
//     const firstClassInput = document.getElementById("firstclass-count");
//     const firstClassInputNumber = parseInt(firstClassInput.value);
//     // const firstClassNewCount = firstClassInputNumber - 1;
//     let firstClassNewCount = firstClassInputNumber;
//     if (isIncrease == true) {
//         firstClassNewCount = firstClassInputNumber + 1;
//     }
//     if (isIncrease == false && firstClassInputNumber > 0) {
//         firstClassNewCount = firstClassInputNumber - 1;
//     }
//     firstClassInput.value = firstClassNewCount;
//     const firstClassTotal = firstClassNewCount * 150;

//     document.getElementById("subtotal").innerText = firstClassTotal;
// }

// // increase & decrease funciton handler of economyClass
// function handleEconomyticketChange(isIncrease) {
//     const economyClassInput = document.getElementById("economyclass-count");
//     const economyClassInputNumber = parseInt(economyClassInput.value);
//     // const economyClassNewCount = economyClassInputNumber - 1;
//     let economyClassNewCount = economyClassInputNumber;
//     if (isIncrease == true) {
//         economyClassNewCount = economyClassInputNumber + 1;
//     }
//     if (isIncrease == false && economyClassInputNumber > 0) {
//         economyClassNewCount = economyClassInputNumber - 1;
//     }
//     economyClassInput.value = economyClassNewCount;
//     const economyClassTotal = economyClassNewCount * 100;
//     document.getElementById("subtotal").innerText = economyClassTotal;
// }


// //increase Button Handler of firstClass
// document.getElementById("firstclass-increase").addEventListener("click", function() {
//     const firstClassInput = document.getElementById("firstclass-count");
//     const firstClassInputNumber = parseInt(firstClassInput.value);
//     const firstClassNewCount = firstClassInputNumber + 1;
//     firstClassInput.value = firstClassNewCount;
//     const firstClassTotal = firstClassNewCount * 150;
// });
// //decrease Button Handler of firstClass
// document.getElementById("firstclass-decrease").addEventListener("click", function() {
//     const firstClassInput = document.getElementById("firstclass-count");
//     const firstClassInputNumber = parseInt(firstClassInput.value);
//     const firstClassNewCount = firstClassInputNumber - 1;
//     firstClassInput.value = firstClassNewCount;
//     const firstClassTotal = firstClassNewCount * 150
// });

// //increase Button Handler of economyClass
// document.getElementById("economyclass-increase").addEventListener("click", function() {
//     const economyClassInput = document.getElementById("economyclass-count");
//     const economyClassInputNumber = parseInt(economyClassInput.value);
//     const economyClassNewCount = economyClassInputNumber + 1;
//     economyClassInput.value = economyClassNewCount;
//     const economyClassTotal = economyClassNewCount * 100;
// });

// //decrease Button Handler of economyClass

// document.getElementById("economyclass-decrease").addEventListener("click", function() {
//     const economyClassInput = document.getElementById("economyclass-count");
//     const economyClassInputNumber = parseInt(economyClassInput.value);
//     const economyClassNewCount = economyClassInputNumber - 1;
//     economyClassInput.value = economyClassNewCount;
//     const economyClassTotal = economyClassNewCount * 100;
// });