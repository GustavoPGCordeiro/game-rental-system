# Game Rental System

## Description

This project is a simple game rental management system developed with JavaScript. It allows users to rent and return games through an interactive interface while dynamically updating the rental status and tracking the number of rented games.

The application uses DOM manipulation to provide visual feedback and create a realistic rental management experience.

## Features

### Rent Games

* Rent available games with a single click.
* Updates the game status instantly.
* Increases the total number of rented games.

### Return Games

* Return rented games.
* Confirmation dialog before returning.
* Updates the interface automatically.

### Rental Tracking

* Counts the number of currently rented games.
* Displays rental information in real time.

### Dynamic Interface Updates

* Changes button labels between:

  * Rent
  * Return

* Updates CSS classes to visually indicate rental status.

### Automatic Initialization

* Detects rented games when the page loads.
* Updates the rental counter automatically.

## Skills Demonstrated

* JavaScript fundamentals
* DOM manipulation
* Event handling
* Conditional statements
* Functions
* CSS class manipulation
* User interaction
* Dynamic interface updates
* Confirmation dialogs
* State management
* Front-end development

## Technologies Used

* JavaScript
* HTML5
* CSS3

## Learning Objectives

This project was created to practice:

* DOM manipulation
* Interactive web interfaces
* Dynamic class management
* Event-driven programming
* User experience improvements
* State tracking in web applications

## Project Structure

```text
├── index.html
├── style.css
├── app.js
└── README.md
```

### File Description

* **index.html** — Game catalog and rental dashboard.
* **style.css** — Styling and rental status visualization.
* **app.js** — Rental and return logic implementation.
* **README.md** — Project documentation.

## How to Run

1. Clone this repository:

```bash
git clone https://github.com/GustavoPGCordeiro/game-rental-system.git
```

2. Open the project folder.

3. Open the `index.html` file in your browser.

4. Use the interface to rent and return games.

## Core Functionalities

### Rent a Game

* Select a game.
* Click the "Rent" button.
* The game status changes to rented.
* The rented games counter increases.

### Return a Game

* Click the "Return" button.
* Confirm the action.
* The game becomes available again.
* The rented games counter decreases.

### Rental Status Detection

When the page loads, the system automatically:

* Identifies rented games.
* Counts active rentals.
* Updates the rental dashboard.

## Concepts Covered

* DOM traversal
* CSS class manipulation
* Event listeners
* Dynamic content updates
* State management
* User interaction
* Front-end application logic

## Academic Purpose

This project was developed as part of JavaScript programming practice focused on DOM manipulation, event handling, state management, and interactive user interface development.
