function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books") // Ensure fetch is called correctly
    .then((response) => response.json()) // Parse JSON from response
    .then((books) => renderBooks(books)) // Pass data to renderBooks
    .catch((error) => console.error("Error fetching books:", error)); // Catch errors
}

// Function to render books
function renderBooks(books) {
  const bookList = document.getElementById("book-list"); // Ensure this ID exists in your HTML
  bookList.innerHTML = ""; // Clear previous content
  
  books.forEach((book) => {
    const li = document.createElement("li");
    li.textContent = book.name; // Display book title
    bookList.appendChild(li);
  });
}

// Call the function when script runs
fetchBooks();
