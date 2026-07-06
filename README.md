# 🚀 SigmaGPT

A modern **full-stack AI chatbot** inspired by ChatGPT, built using **React**, **Node.js**, **Express**, **MongoDB**, and **Groq AI API**. SigmaGPT supports multi-thread conversations, persistent chat history, search functionality, and a clean responsive UI.

---

## 📸 Preview

| Home | Chat | closed-sidebar |
|------|------|------|
| <img width="1917" height="1011" alt="SigmaGPT-Home" src="https://github.com/user-attachments/assets/b8f8ac38-c716-4952-8543-32a8f4c2404e" /> | <img width="1916" height="993" alt="SigmaGPT-Chat" src="https://github.com/user-attachments/assets/24f7420d-021e-4deb-8628-501eba094cb1" /> | <img width="1915" height="981" alt="close-sidebar" src="https://github.com/user-attachments/assets/0ec7cecc-5769-432c-a286-ec1dbece3339" /> |


---

# ✨ Features

- 🤖 AI-powered conversations (Groq API)
- 💬 Multi-thread chat system
- 📝 Persistent chat history
- 🔍 Search previous chats
- ➕ Create new conversations
- 🗑 Delete conversations
- 📌 Automatic chat titles
- 📂 MongoDB database integration
- ⚡ Fast Express backend
- 🎨 Modern ChatGPT-inspired UI
- 📱 Responsive layout
- 🔄 Auto scroll to latest message
- 🔒 Environment variable support

---

# 🛠 Tech Stack

### Frontend

- React.js
- Vite
- CSS3
- Context API

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose

### AI

- Groq API
- OpenAI Compatible SDK

---

# 📁 Folder Structure

```
SIGMA-GPT
│
├── Backend
│   ├── models
│   ├── routes
│   ├── utils
│   ├── server.js
│   └── package.json
│
├── Frontend
│   ├── src
│   ├── public
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

# ⚙️ Installation

## 1 Clone Repository

```bash
git clone https://github.com/nakulnagar/SigmaGPT.git

cd SigmaGPT
```

---

## 2 Backend

```bash
cd Backend

npm install

npm run dev
```

---

## 3 Frontend

```bash
cd Frontend

npm install

npm run dev
```

---

# 🔑 Environment Variables

Create a `.env` file inside the **Backend** folder.

```env
MONGODB_URI=your_mongodb_connection_string

GROQ_API_KEY=your_groq_api_key

JWT_SECRET=your_secret_key
```

---

# 💡 How It Works

1. User creates a new chat.
2. Prompt is sent to the Express backend.
3. Backend calls the Groq AI API.
4. AI response is stored in MongoDB.
5. Previous conversations remain available through chat history.

---

# 🚀 Future Improvements

- Markdown rendering
- Code syntax highlighting
- Copy response button
- Chat export
- Voice input
- Image upload
- Theme switching
- Streaming AI responses

---

# 📊 Architecture

```
React
   │
   ▼
Express API
   │
   ├────────► Groq API
   │
   ▼
MongoDB
```

---

# 👨‍💻 Author

**Nakul Nagar**

GitHub: https://github.com/nakulnagar

LinkedIn: www.linkedin.com/in/nakulnagar08

---

# ⭐ Support

If you like this project, consider giving it a ⭐ on GitHub.
