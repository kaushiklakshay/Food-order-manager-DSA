# 🍔 Food Order Manager Using Queue

## Project Overview

Food Order Manager is a simple real-life DSA project that demonstrates the
**Queue data structure** using a restaurant food-ordering system.

When customers place orders, their orders are added to a queue. The first
order placed is processed first.

## DSA Concept

### Queue

A Queue follows the **FIFO** principle:

**First In, First Out**

Example:

Customer A → Customer B → Customer C

The system processes:

Customer A → Customer B → Customer C

## Queue Operations

### Enqueue

When a customer places an order, the order is added to the end of the queue.

```javascript
orderQueue.push(order);
```

### Dequeue

When the restaurant processes an order, the first order is removed.

```javascript
orderQueue.shift();
```

## Features

- Place food order
- Customer name
- Food selection
- Automatic order number
- Visual order queue
- Process next order
- Completed order history
- Total sales
- Waiting order count
- Responsive design

## Technologies

- HTML
- CSS
- JavaScript
- Queue Data Structure

## How to Run

1. Download the project.
2. Open `index.html` in a web browser.
3. Enter a customer name.
4. Select a food item.
5. Click **Place Order**.
6. Click **Process Next Order** to remove the first order.

## Real-Life Application

Restaurants commonly handle customer orders in an ordered sequence.
This project demonstrates how the Queue concept can be used to model
that process.

## Project Title

**Food Order Manager Using Queue - A Real-Life DSA Application**
