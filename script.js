const imgs = document.querySelectorAll('.header-slider ul img');
const prev_btn = document.querySelector('.control-prev');
const next_btn = document.querySelector('.control-next');

let n = 0;

function changeSlide() {
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.display = 'none';
    }
    imgs[n].style.display = 'block';
}

changeSlide();

prev_btn.addEventListener('click', (e) => {
    if (n > 0) {
        n--;
    } else {
        n = imgs.length - 1;
    }
    changeSlide();
});

next_btn.addEventListener('click', (e) => {
    if (n < imgs.length - 1) {
        n++;
    } else {
        n = 0;
    }
    changeSlide();
});

const scrollContainer = document.querySelectorAll(".products");

for (const item of scrollContainer) {
    item.addEventListener("wheel", (e) => {
        e.preventDefault();
        if (e.deltaY > 0) {
            item.scrollLeft += 100;
        } else {
            item.scrollLeft -= 100;
        }
    });
}

// Function to toggle chatbot visibility
function toggleChat() {
    const chatbox = document.getElementById('chatbox');
    chatbox.style.display = chatbox.style.display === 'none' ? 'block' : 'none';
}

// Function to send and display messages
function sendMessage() {
    const input = document.getElementById('chat-input');
    const message = input.value.trim();
    if (message !== '') {
        const chatMessages = document.getElementById('chat-messages');
        chatMessages.innerHTML += `<div><strong>You:</strong> ${message}</div>`;
        input.value = '';

        setTimeout(() => {
            const response = getChatResponse(message);
            chatMessages.innerHTML += `<div><strong>Bot:</strong> ${response}</div>`;
            chatMessages.scrollTop = chatMessages.scrollHeight;  // Scroll to the latest message
        }, 1000);
    }
}

// Function to generate chatbot responses
function getChatResponse(message) {
    let response = "I didn't understand that. Can you ask about product prices, discounts, shipping, or returns?";

    // Price-related queries
    if (message.toLowerCase().includes('price')) {
        response = "Prices vary by product. Please specify which product you're interested in.";
    } else if (message.toLowerCase().includes('discount')) {
        response = "We have ongoing discounts of up to 50% on selected items!";
    } else if (message.toLowerCase().includes('shipping')) {
        response = "Shipping is free for orders above $50. For express shipping, additional charges apply.";
    } else if (message.toLowerCase().includes('return')) {
        response = "You can return products within 30 days of delivery. Free returns are available on selected items.";
    } else if (message.toLowerCase().includes('available') || message.toLowerCase().includes('in stock')) {
        response = "Most of our popular products are in stock. Please specify the product you're interested in, and I'll check its availability.";
    } else if (message.toLowerCase().includes('order status')) {
        response = "You can check the status of your order in the 'Orders' section of your account.";
    } else if (message.toLowerCase().includes('payment options') || message.toLowerCase().includes('pay')) {
        response = "We accept various payment methods including credit cards, debit cards, PayPal, and Amazon Pay.";
    } else if (message.toLowerCase().includes('warranty')) {
        response = "We offer a 1-year warranty on most products. You can extend the warranty during checkout.";
    } else if (message.toLowerCase().includes('customer service')) {
        response = "You can reach customer service by calling 1-800-123-4567 or using the 'Contact Us' form on our website.";
    } else if (message.toLowerCase().includes('refund')) {
        response = "Refunds are processed within 5-7 business days after we receive the returned product.";
    } else if (message.toLowerCase().includes('store hours') || message.toLowerCase().includes('operating hours')) {
        response = "Our online store is available 24/7, but customer service is available from 9 AM to 9 PM, Monday to Friday.";
    } else if (message.toLowerCase().includes('create account')) {
        response = "You can create an account by clicking the 'Sign In' button at the top and selecting 'Create New Account'.";
    } else if (message.toLowerCase().includes('help') || message.toLowerCase().includes('support')) {
        response = "How can I assist you today? You can ask about orders, products, discounts, or account information.";
    } else {
        response = "Sorry, I didn't understand that. Please ask about product prices, availability, shipping, or customer service.";
    }

    return response;
}

// Function to add products to the cart
function addToCart(button) {
    const timerDisplay = button.nextElementSibling; // Get the people in line element next to the button
    timerDisplay.style.display = 'block'; // Show the people in line display

    // Generate a random number of people in line
    const peopleInLine = Math.floor(Math.random() * 11); // Random number between 0 and 10
    const lineCountSpan = timerDisplay.querySelector('.line-count');
    lineCountSpan.textContent = peopleInLine; // Update the displayed number of people in line

    // You can add more functionality here if needed
}

// [Existing slider and scroll functionality in your script.js is already included]
