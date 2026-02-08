📌 Login Chatbot – Spring Boot Project

A full-stack Spring Boot web application featuring a custom login system integrated with a chatbot interface.
The project demonstrates backend authentication flow, frontend UI/UX, database integration, and basic chatbot interaction.

⸻

🚀 Features
	•	🔐 Login page with email & password
	•	👁️ Show / Hide password (JavaScript)
	•	💾 Remember Me (localStorage)
	•	🤖 Chatbot interface after login
	•	🗂️ Messages stored in database
	•	🎨 Custom UI (HTML + CSS)
	•	⚙️ Spring Boot + Thymeleaf integration
	•	🛠️ Maven-based project structure

⸻

🧰 Tech Stack

Backend
	•	Java
	•	Spring Boot
	•	Spring MVC
	•	Spring Data JPA
	•	Thymeleaf

Frontend
	•	HTML5
	•	CSS3
	•	JavaScript

Database
	•	MySQL (current)
	•	H2 (earlier for testing)

Tools
	•	Maven
	•	Git & GitHub

⸻

📁 Project Structure


src/main
 ├── java/com/per/loginchatbot
 │   ├── controller
 │   │   ├── LoginController.java
 │   │   ├── ChatBotController.java
 │   │   └── HelloController.java
 │   ├── model
 │   │   └── User.java
 │   ├── ChatMessage.java
 │   ├── ChatMessageRepository.java
 │   └── ChatService.java
 │
 ├── resources
 │   ├── static
 │   │   ├── login.js
 │   │   ├── chat.js
 │   │   └── *.css
 │   ├── templates
 │   │   ├── login.html
 │   │   └── chat.html
 │   └── application.yml


 How to Run the Project

1️⃣ Clone the repository
git clone https://github.com/24karaNhub/login-chatbot.git
cd login-chatbot

2️⃣ Configure Database

Update application.yml with your MySQL credentials.

3️⃣ Run the app
./mvnw spring-boot:run
4️⃣ Open in browser
http://localhost:8080/login

🔑 Test Credentials (Temporary)
Email: test@gmail.com
Password: 123456
Email: karan@gmail.com
Password: 101010
⚠️ Passwords are currently plain text (learning phase).
BCrypt encryption will be added next.
📌 Future Improvements
	•	✅ Password hashing (BCrypt)
	•	✅ Store users in MySQL properly
	•	🔐 Spring Security integration
	•	🤖 Chatbot embedded on login page
	•	📱 Mobile responsiveness improvements

👨‍💻 Author

Karan Singh
Computer Science Student | Java & Spring Boot Learner
GitHub: https://github.com/24karaNhub

⸻

⭐ Why this project?

This project was built to:
	•	Understand full-stack flow
	•	Practice Spring Boot MVC
	•	Learn real debugging
	•	Build something beyond tutorials
