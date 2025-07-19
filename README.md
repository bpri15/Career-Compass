🧭 Career Compass

Career Compass is an AI-powered career guidance tool with two main modules:

🔹 Module 1: Student Career Recommendation
Students answer a Yes/No questionnaire about various school subjects. Based on their interests, the system predicts and recommends potential career paths or undergraduate degrees.

🔹 Module 2: Resume Analyzer & Job Recommender
Job seekers upload their resume. The backend LLM extracts skills from it and then fetches relevant job listings based on those skills using online APIs.

🧠 Key Features
✅ Smart career prediction for students

✅ Resume parsing and skill extraction

✅ AI-powered job recommendations

✅ Split architecture: Node.js frontend + Google Colab backend

🛠️ Technologies Used
Frontend: Node.js, React (likely)

Backend: Google Colab (Python), Hugging Face Transformers (e.g. microsoft/phi2)

Resume Parsing: PyPDF2, python-docx

ML Models: Random Forest (for profession prediction), LLM (for skill extraction)

Job Matching: LinkedIn API or similar

🚀 How to Run the Project
🔧 1. Frontend (Local Node Server)
bash
Copy
Edit
cd frontend-folder-name  # Replace with actual frontend folder
npm install
npm start
This will start the frontend locally at http://localhost:3000.

🧠 2. Backend (Google Colab)
Open the Colab file: AI_Powered_Resume_Analyzer.ipynb

Run all cells (make sure it's hosted publicly or you connect it via localtunnel / ngrok)

The Colab acts as an API server, receiving resume input and responding with predicted skills and jobs.

💡 You may need to update the Colab URL in the frontend code (e.g., in an .env file or direct fetch call).

📂 Project Structure
bash
Copy
Edit
career-compass/
│
├── frontend/                 # Node.js + React frontend (form & upload)
├── AI_Powered_Resume_Analyzer.ipynb  # Google Colab backend
├── model/                    # Random Forest model for student prediction
├── assets/                   # Optional: resume samples or icons
└── README.md
🧪 Sample Usage
User visits the frontend and fills the student questionnaire.

Gets career recommendations based on their answers.

A job-seeking user uploads a resume.

Backend LLM extracts skills, matches them to jobs, and returns a list.

📬 Contact
Priyanshu Bansal
