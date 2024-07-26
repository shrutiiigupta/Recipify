# Recipify: Culinary Inspiration at Your Fingertips
## Unlock Deliciousness with Just a Few Ingredients!

Stuck in a cooking rut? Let Recipify be your kitchen savior! Simply enter the ingredients you have, and our app will magically transform them into mouthwatering dish suggestions. No more second-guessing or recipe hunting—we've got that covered too! Click on any suggested dish to reveal a step-by-step recipe, ensuring your cooking journey is as smooth as possible. Discover new flavors, cook with confidence, and enjoy every meal. Dive into the world of effortless cooking with Recipify—your culinary companion!

The app leverages advanced AI technologies, including the Google Gemini API, to provide accurate and diverse dish suggestions tailored to your ingredient list. Not only does Recipify suggest dishes, but it also ensures you know how to prepare them. Each suggested dish comes with a detailed, step-by-step recipe, so you can cook with confidence. The recipes are sourced from reputable websites and are presented in a clear, easy-to-follow format. The application is built using modern web development technologies such as JavaScript, React.js, and Vite.js, ensuring a smooth and responsive user experience. The backend, powered by Python and web scraping techniques, fetches up-to-date recipes, making sure you always have the best culinary advice at your fingertips.

### Steps to Run the Application

1. **Install Required Packages**
   - Open your terminal and navigate to the project directory.
   - Install all the required Python packages by running:
     ```bash
     pip install -r requirements.txt
     ```

2. **Set Up Gemini API Key**
   - Obtain your Gemini API Key from the [Google Gemini API official website](https://ai.google.dev/gemini-api/docs/api-key).
   - Open `geminiService.jsx` and insert your API key at the `API_KEY` variable on the second line.
   - Also open `scraper.py` and insert your API key at the `API_KEY` variable on the first line after the import statements.

3. **Install Node.js Packages**
   - In the terminal, ensure you are in the project directory.
   - Install the required Node.js packages by running:
     ```bash
     npm install
     ```

4. **Run the Backend Server**
   - Start the backend server by running:
     ```bash
     python scraper.py
     ```
   - If you are using a Mac, you may need to use:
     ```bash
     python3 scraper.py
     ```

5. **Start the Frontend Server**
   - Open a new terminal in the project directory.
   - Run the following command to start the frontend server:
     ```bash
     npm run dev
     ```

6. **Access the Application**
   - In the terminal, you will see a link provided by the development server.
   - Open the link by holding `Ctrl` (or `Cmd` on Mac) and clicking the link.

7. **Enjoy the App!**
   - Start exploring dishes and recipes with Recipify.


Nice
