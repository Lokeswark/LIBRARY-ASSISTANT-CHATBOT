// Get references to elements
const chatbotMessage = document.getElementById('chatbot-message');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

// Chatbot greeting and initial prompt
chatbotMessage.textContent = "Welcome to the HICET Library! Please enter your department (CSE, ECE, Mech, Civil, Aero, IT, AIML, Agri, EEE):";

// Valid departments for easier reference
const validDepartments = ["CSE", "ECE", "Mech", "Civil", "Aero", "IT", "AIML", "Agri", "EEE"];

// Book data
const books = {
  CSE: [
    { bookName: "Introduction to Algorithms", author: "Thomas H. Cormen", location: "Rack 5, Shelf 2, Position 3" },
    { bookName: "Operating Systems", author: "Abraham Silberschatz", location: "Rack 7, Shelf 3, Position 2" }
  ],
  ECE: [
    {
      bookName: "Fundamentals of Electric Circuits",
      author: "Charles K. Alexander and Matthew N. Sadiku",
      location: "Rack 8, Shelf 4, Position 1"
    },
    {
      bookName: "Electronic Devices and Circuits",
      author: "Neil S. Nise",
      location: "Rack 9, Shelf 2, Position 3"
    },
    {
      bookName: "Control Systems Engineering",
      author: "Norman S. Nise",
      location: "Rack 10, Shelf 1, Position 2"
    }
  ],
  Mech: [
    {
      bookName: "Engineering Mechanics: Statics and Dynamics",
      author: "R. C. Hibbeler",
      location: "Rack 11, Shelf 3, Position 4"
    },
    {
      bookName: "Heat Transfer",
      author: "John H. Lienhard IV and John H. Lienhard V",
      location: "Rack 12, Shelf 2, Position 1"
    },
    {
      bookName: "Fluid Mechanics",
      author: "Frank M. White",
      location: "Rack 13, Shelf 4, Position 3"
    }
  ],
  Civil: [
    {
      bookName: "Structural Analysis",
      author: "K. K. Gerstle",
      location: "Rack 14, Shelf 1, Position 2"
    },
    {
      bookName: "Soil Mechanics",
      author: "R. F. Craig",
      location: "Rack 15, Shelf 3, Position 4"
    },
    {
      bookName: "Transportation Engineering",
      author: "W. H. Glanville",
      location: "Rack 16, Shelf 2, Position 1"
    }
  ],
  Aero: [
    {
      bookName: "Introduction to Flight",
      author: "John D. Anderson Jr.",
      location: "Rack 17, Shelf 4, Position 3"
    },
    {
      bookName: "Aircraft Performance",
      author: "John D. Anderson Jr.",
      location: "Rack 18, Shelf 1, Position 2"
    },
    {
      bookName: "Aerodynamics",
      author: "John D. Anderson Jr.",
      location: "Rack 19, Shelf 3, Position 4"
    }
  ],
  IT: [
    {
      bookName: "Computer Networks: A Top-Down Approach",
      author: "Andrew S. Tanenbaum and David J. Wetherall",
      location: "Rack 20, Shelf 2, Position 1"
    },
    {
      bookName: "Database Systems: Design, Implementation, and Management",
      author: "Raghu Ramakrishnan and Johannes Gehrke",
      location: "Rack 21, Shelf 4, Position 3"
    },
    {
      bookName: "Web Development with HTML, CSS, and JavaScript",
      author: "Jon Duckett",
      location: "Rack 22, Shelf 1, Position 2"
    }
  ],
  AIML: [
    {
      bookName: "Artificial Intelligence: A Modern Approach",
      author: "Stuart Russell and Peter Norvig",
      location: "Rack 23, Shelf 3, Position 4"
    },
    {
      bookName: "Machine Learning",
      author: "Tom Mitchell",
      location: "Rack 24, Shelf 2, Position 1"
    },
    {
      bookName: "Deep Learning",
      author: "Ian Goodfellow, Yoshua Bengio, and Aaron Courville",
      location: "Rack 25, Shelf 4, Position 3"
    }
  ],
  Agri: [
    {
      bookName: "Principles of Agronomy",
      author: "Donald J. Smith",
      location: "Rack 26, Shelf 1, Position 2"
    },
    {
      bookName: "Crop Physiology",
      author: "Lincoln Taiz and Eduardo Zeiger",
      location: "Rack 27, Shelf 3, Position 4"
    },
    {
      bookName: "Soil Science",
      author: "Brady and Weil",
      location: "Rack 28, Shelf 2, Position 1"
    }
  ],
  EEE: [
    {
    bookName: "Electronic Devices and Circuits",
    author: "Neil S. Nise",
    location: "Rack 29, Shelf 4, Position 3"
  },
  {
    bookName: "Control Systems Engineering",
    author: "Norman S. Nise",
    location: "Rack 30, Shelf 1, Position 2"
  },
  {
    bookName: "Power Electronics",
    author: "N. Mohan, T. Undeland, and T. V. Thirunamachandran",
    location: "Rack 31, Shelf 3, Position 4"
  }
]
};

// To store user-selected department
let currentDepartment = "";

// Function to handle user input
function processUserInput(input) {
  const trimmedInput = input.trim().toUpperCase();

  // Check if the user input is a valid department
  if (validDepartments.includes(trimmedInput) && currentDepartment === "") {
    currentDepartment = trimmedInput;
    chatbotMessage.textContent = `You selected the ${currentDepartment} department. Please enter the topic or book name you're looking for:`;
  } 
  // If department is already selected, search for books
  else if (currentDepartment !== "") {
    searchBooks(trimmedInput);
  } 
  // Handle invalid department
  else {
    chatbotMessage.textContent = "Invalid department. Please try again.";
  }
}

// Function to search for books in the selected department
function searchBooks(query) {
  const departmentBooks = books[currentDepartment];
  const searchResults = departmentBooks.filter(book =>
    book.bookName.toUpperCase().includes(query) || book.author.toUpperCase().includes(query)
  );

  if (searchResults.length > 0) {
    chatbotMessage.textContent = "I found these books:\n";
    searchResults.forEach(book => {
      chatbotMessage.textContent += `- Book: ${book.bookName}\n  Author: ${book.author}\n  Location: ${book.location}\n\n`;
    });
  } else {
    chatbotMessage.textContent = "No books found for your query.";
  }

  chatbotMessage.textContent += "Do you need further assistance? Type another book or author name, or change the department by refreshing the page.";
}

// Event listeners for user input (Enter key and Send button)
userInput.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    processUserInput(userInput.value);
    userInput.value = "";
  }
});

sendButton.addEventListener('click', function() {
  processUserInput(userInput.value);
  userInput.value = "";
});
