
function sendMessage() {
    const messageInput = document.querySelector(".message-input");
    const messageText = messageInput.value.trim();
    const boxes = document.querySelector(".message-container");
    const reload = document.getElementById("regen");
    if (messageText) {
        const messageArea = document.querySelector(".message-area");

        // Create a message container div
        const messageContainer = document.createElement("div");
        messageContainer.className = "message-container";

        const iconElement = document.createElement('img');
        iconElement.src = 'images/profile.png';
        iconElement.style.height='32px';
        // Create a message div inside the container
        const messageDiv = document.createElement("div");
        messageDiv.className = "message";
        messageDiv.textContent = messageText;
        messageContainer.appendChild(iconElement);
        messageContainer.appendChild(messageDiv);
        messageArea.style.backgroundColor="rgb(61, 62, 76)";
        // Append the message container to the message area
       reload.style.display="inline-flex";
        messageArea.appendChild(messageContainer);
        boxes.style.display = 'none';
        // Clear the message input
        messageInput.value = "";
        
        // Scroll to the bottom of the message area to show the latest message
        messageArea.scrollTop = messageArea.scrollHeight;
    }
}
// Event listener for sending a message when the "Send" button is clicked
document.querySelector(".send-button").addEventListener("click", sendMessage);

function regenarate(){
    const reload = document.querySelector(".reload");
    const messageContainer = document.querySelector(".message-container");
    const messageArea = document.querySelector(".message-area");
    messageArea.style.backgroundColor="rgb(52, 53, 65)";
    messageContainer.style.display="none";
}
document.querySelector(".reload").addEventListener("click", regenarate);



// Function to create a new chat and add it to the list
// script.js

document.addEventListener("DOMContentLoaded", function () {
    const newChatButton = document.getElementById("new-chat-button");
    const existingChats = document.getElementById("existing-chats");

    // Function to create and add a new chat
    function createNewChat() {
        const chatElement = document.createElement("div");
        chatElement.classList.add("chat");
        chatElement.innerHTML = '<img src="images/message.png" alt="New Chat Icon" > New Chat';
        existingChats.appendChild(chatElement);
    }

    // Add a click event listener to the "New Chat" button
    newChatButton.addEventListener("click", function () {
        // Create and add a new chat
        createNewChat();
    });
});



// Get references to the hide button and left pane
const hideButton = document.getElementById('hideButton');
const leftPane = document.getElementById('leftPane');
const hideButtonTop = document.getElementById('hideButtonTop');

// Function to hide the left pane and create the hide button at the top left
hideButton.addEventListener('click', () => {
    leftPane.style.display = 'none';
    
    // Set the display style of the top-left hide button to 'block'
    hideButtonTop.style.display = 'block';
});

// Function to show the left pane and hide the top-left hide button
hideButtonTop.addEventListener('click', () => {
    leftPane.style.display = 'block';
    hideButtonTop.style.display = 'none';
});





// Get references to the question mark button and dropdown menu
const questionMark = document.getElementById('questionMark');
const dropdown = document.getElementById('dropdown');

// Add a click event listener to the question mark button
questionMark.addEventListener('click', () => {
    // Toggle the display of the dropdown menu
    if (dropdown.style.display === 'none' || dropdown.style.display === '') {
        dropdown.style.display = 'block';
    } else {
        dropdown.style.display = 'none';
    }
});

// Prevent the click event on the dropdown from closing it
dropdown.addEventListener('click', (event) => {
    event.stopPropagation();
});

// Close the dropdown when clicking outside of it
document.addEventListener('click', (event) => {
    if (!dropdown.contains(event.target) && event.target !== questionMark) {
        dropdown.style.display = 'none';
    }
});



// Get references to the options icon and options menu
const optionsIcon = document.getElementById('optionsIcon');
const optionsMenu = document.getElementById('optionsMenu');

// Add a click event listener to the options icon
optionsIcon.addEventListener('click', () => {
    // Toggle the display of the options menu
    if (optionsMenu.style.display === 'none' || optionsMenu.style.display === '') {
        optionsMenu.style.display = 'block';
    } else {
        optionsMenu.style.display = 'none';
    }
});

// Prevent the click event on the options menu from closing it
optionsMenu.addEventListener('click', (event) => {
    event.stopPropagation();
});

// Close the options menu when clicking outside of it
document.addEventListener('click', (event) => {
    if (!optionsMenu.contains(event.target) && event.target !== optionsIcon) {
        optionsMenu.style.display = 'none';
    }
});