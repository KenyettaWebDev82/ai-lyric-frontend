📚 Project Overview
The frontend is built with:
⚛️ ReactJS: Dynamic user interface and state management.
🎨 CSS: Custom styles with animations and mood-based themes.
📦 Axios: Handles HTTP requests to the backend API.
🧠 AI Integration: Connects to the AI-powered backend for lyric generation.

🚀 Getting Started
📥 1. Clone the Repository
git clone https://github.com/PursuitMadeMe/ai-lyric-frontend.git
cd ai-lyric-frontend

📦 2. Install Dependencies
Run the following command to install required packages:
npm install

⚡️ 3. Run the Frontend
Start the frontend on localhost:3000:
npm run start

🎨 Frontend Features
📝 1. Mood Selection
Users can select a mood:
Dreamy
Romantic
Melancholy
Joyful
Empowered
The mood changes the background and styling dynamically.

🎵 2. Lyric Generation
Clicking the "Generate Lyrics" button sends a request to the backend API.
Lyrics are generated and displayed with a mood-based background.

🕹️ 3. Copy & Reset Buttons
✅ Copy Lyrics: Copies generated lyrics to the clipboard.
🔄 Reset: Resets the mood and generated lyrics.

🎼 4. Falling Music Notes Animation
🎶 Animated music notes falling in the background.
Adjustable speed, size, and opacity.

📂 Project Structure
/ai-lyric-frontend
├── /public
│   ├── favicon.ico
│   ├── index.html
│   └── vibe2.webp
├── /src
│   ├── /components
│   │   ├── CassetteLoader.jsx    # Cassette loader animation
│   │   └── MoodSelector.jsx      # Mood selection component
│   ├── /css
│   │   └── App.css               # Main CSS styles
│   ├── App.js                    # Main App component
│   ├── index.js                  # Entry point
│   └── package.json
└── README.md

🔥 API Integration
🎵 POST /api/lyrics
URL: http://localhost:3333/api/lyrics
Method: POST
Request Body:
{
  "mood": "dreamy" | "romantic" | "melancholy" | "joyful" | "empowered"
}
Success Response:
{
  "lyrics": "Generated lyrics based on the selected mood."
}
Error Response:
{
  "error": "Failed to generate lyrics. Please try again later."
}

🛠️ Configuration
🎯 1. Backend API Endpoint
Update the backend API URL if deployed:
const API_URL = "http://localhost:3333/api/lyrics";
If you plan to deploy:

Update the API_URL to the production backend URL.

📄 Deployment Instructions
🌐 1. Build the Frontend
npm run build

🚀 2. Deploy to Netlify, Vercel, or GitHub Pages
For Netlify:

Drag and drop the build/ folder into Netlify.

Configure environment variables if needed.

🎨 Customization
🎵 1. Change Background Image
Replace vibe2.webp in /public with your desired background image.

🎼 2. Adjust Music Note Speed or Size
Modify the App.css styles for:
Size: font-size in .music-note.
Speed: animation-duration in @keyframes fall.

🎯 Known Issues & Fixes
If the lyrics don’t generate:
Check if the backend is running on port 3333.
Verify the API endpoint matches the backend URL.

🎉 Future Enhancements
🎤 Add more moods and lyric styles.
🎧 Integrate advanced AI models.
📝 Enable user input for personalized lyrics.

📣 Contributors
👩‍💻 Kenyetta Griffin - GitHub

📄 License
This project is licensed under the MIT License.

🎉 Done!
Your frontend is ready to run and generate amazing lyrics! 🎧✨

