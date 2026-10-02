let orderQueue = [];
let completedOrders = 0;
let totalSales = 0;
let orderNumber = 1;

function placeOrder() {
    const customer = document.getElementById("customerName").value.trim();
    const foodSelect = document.getElementById("foodItem");
    const food = foodSelect.value;
    const price = Number(foodSelect.options[foodSelect.selectedIndex].dataset.price);

    if (customer === "") {
        alert("Please enter customer name.");
        return;
    }

    const order = {
        id: orderNumber++,
        customer: customer,
        food: food,
        price: price
    };

    // ENQUEUE: add order at the end of the queue
    orderQueue.push(order);

    document.getElementById("customerName").value = "";

    updateDisplay();
}

function processOrder() {
    if (orderQueue.length === 0) {
        alert("No orders waiting.");
        return;
    }

    // DEQUEUE: remove the first order
    const order = orderQueue.shift();

    completedOrders++;
    totalSales += order.price;

    addHistory(order);
    updateDisplay();

    alert(
        "Order #" + order.id + " for " +
        order.customer + " has been processed!"
    );
}

function addHistory(order) {
    const history = document.getElementById("history");

    const empty = history.querySelector(".empty-history");
    if (empty) {
        empty.remove();
    }

    if (history.children.length === 1 &&
        history.children[0].innerText === "No completed orders yet.") {
        history.innerHTML = "";
    }

    const item = document.createElement("li");

    item.innerHTML =
        "✅ Order #" + order.id +
        " — <strong>" + escapeHTML(order.customer) +
        "</strong> ordered " + order.food +
        " — ₹" + order.price;

    history.prepend(item);
}

function updateDisplay() {
    const queue = document.getElementById("queue");
    queue.innerHTML = "";

    if (orderQueue.length === 0) {
        queue.innerHTML = '<p class="empty">No orders in the queue.</p>';
    } else {
        orderQueue.forEach((order, index) => {
            const card = document.createElement("div");
            card.className = "order-card";

            card.innerHTML =
                "<h3>Order #" + order.id + "</h3>" +
                "<p>👤 " + escapeHTML(order.customer) + "</p>" +
                "<p>🍽️ " + order.food + "</p>" +
                "<p>💰 ₹" + order.price + "</p>" +
                (index === 0 ? "<p>⬅️ NEXT</p>" : "");

            queue.appendChild(card);

            if (index < orderQueue.length - 1) {
                const arrow = document.createElement("div");
                arrow.className = "arrow";
                arrow.innerText = "→";
                queue.appendChild(arrow);
            }
        });
    }

    document.getElementById("waitingCount").innerText = orderQueue.length;
    document.getElementById("completedCount").innerText = completedOrders;
    document.getElementById("totalSales").innerText = "₹" + totalSales;
}

function escapeHTML(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
}

updateDisplay();
