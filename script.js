const chatBox = document.getElementById("chatBox");
const chatForm = document.getElementById("chatForm");
const userInput = document.getElementById("userInput");
const themeToggle = document.getElementById("themeToggle");

const faqData = [
  {
    keywords: ["hello", "hi", "hey"],
    answer: "Hello! How can I help you today?"
  },
  {
    keywords: ["project", "about"],
    answer: "This is a lightweight chatbot style frontend project built using HTML, CSS, and JavaScript."
  },
  {
    keywords: ["tech", "stack"],
    answer: "The project uses HTML for structure, CSS for styling, and JavaScript for chatbot logic."
  },
  {
    keywords: ["responsive", "mobile"],
    answer: "Yes, the interface is responsive and works well on mobile devices too."
  },
  {
    keywords: ["dark", "theme"],
    answer: "You can switch between light and dark mode using the button on the top right."
  },
  {
    keywords: ["bye", "thank you", "thanks"],
    answer: "You're welcome. If you need anything else, just ask."
  }
];

function addMessage(text, type) {
  const message = document.createElement("div");
  message.className = `message ${type}`;
  message.innerText = text;
  chatBox.appendChild(message);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(text) {
  const lowerText = text.toLowerCase();

  for (const item of faqData) {
    if (item.keywords.some(keyword => lowerText.includes(keyword))) {
      return item.answer;
    }
  }

  return "I do not have that answer yet, but I can still help with the project, design, or basic frontend logic.";
}

chatForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const text = userInput.value.trim();
  if (!text) return;

  addMessage(text, "user");
  userInput.value = "";

  setTimeout(() => {
    const response = getBotResponse(text);
    addMessage(response, "bot");
  }, 500);
});

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeToggle.innerText = document.body.classList.contains("dark")
    ? "Light Mode"
    : "Dark Mode";
});