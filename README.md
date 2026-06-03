# Gallery Snapshots

A simple, static photo gallery website built using **React** and modular components. This project focuses on utilizing React components and passing data dynamically via props.

---

## 🚀 Features
* **Structure:** Built with reusable React components.
* **Dynamic Data:** Image datais, Navbar Items and Button styles managed cleanly in an array and passed down using props.

---

## 📦 Component Structure

The application is split into two primary parts:

### 1. `App.js`
The main wrapper component that manages the page state, header, hero layout, navigation, and the image data array. It maps through the data to render the grid.

### 2. `Header.js, Banner.js, Gallery.js, Footer.js`
Reusable child component designed to display navbar items, buttons and their styling and text as well individual images. 
* **Props used:**
  * `src` (String): The URL or local path of the image.
  * `alt` (String): The alternative text description for accessibility.
  * `className` (String): Button styling
  * (String): Button text

---

## 🛠️ How to Run the Project

1. **Clone or download** the repository files.
2. Open your terminal in the project directory and install dependencies:
   ```bash
   npm install
