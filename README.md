# 🎬 Storyboard Creator (Free AI-Based)

Create AI-generated storyboards using your own text prompts — no design or drawing skills needed! This app uses **Flask**, **HTML/CSS/JS**, and the **Hugging Face Stable Diffusion API** to generate images for each storyboard frame. You can also export the result as a PDF.

---

## ✨ Features

- 🧠 Input a custom text prompt per frame
- 🖼️ Get realistic AI-generated images using Stable Diffusion
- 🔢 Choose number of frames (1–10)
- 📄 Export the entire storyboard as a PDF
- 💡 Clean and responsive UI

---

## 📁 Folder Structure

```
storyboard_creator/
│
├── app.py                      # Flask backend
├── requirements.txt            # Python dependencies
│
├── templates/
│   └── index.html              # Main web page
│
├── static/
│   ├── styles.css              # Styling
│   └── script.js               # Frontend logic
```

---

## 🚀 How to Run It Locally

### 1. Clone this repo or unzip the folder

```bash
cd storyboard_creator
```

### 2. Install requirements

```bash
pip install -r requirements.txt
```

### 3. Set your Hugging Face API token

#### Option A: Hardcode in `app.py` (quick)
Replace this line in `app.py`:

```python
HF_API_KEY = "your-huggingface-api-key"
```

With your actual token (starts with `hf_...`).

#### Option B: Use environment variable (safe)
```bash
export HF_API_KEY=hf_your_token_here  # For Linux/macOS
set HF_API_KEY=hf_your_token_here     # For Windows CMD
```

In `app.py`, update:
```python
import os
HF_API_KEY = os.getenv("HF_API_KEY")
```

---

### 4. Run the app

```bash
python app.py
```

Then visit: [http://localhost:5000](http://localhost:5000)

---

## 🧪 Example Usage

1. Choose number of storyboard frames
2. Enter one prompt per frame (e.g. "A robot invasion at sunset")
3. Click **🎨 Generate Storyboard**
4. Review the AI-generated images
5. Click **📄 Export as PDF**

---

## 📷 Preview

![Storyboard Demo](https://via.placeholder.com/600x200?text=Your+Generated+Storyboard+Here)

---

## 🛠️ Built With

- Flask (Python backend)
- Hugging Face Inference API (Stable Diffusion)
- HTML, CSS, JavaScript
- html2pdf.js (PDF export)

---

## 📌 License

MIT License — Free to use, modify, and share!

---

## 🙋‍♂️ Author

**Yohan G** — built with ❤️ and AI tools  
🔗 GitHub: [github.com/Yohan799](https://github.com/Yohan799)

---

## 🌟 Star This Project

If you find this useful, give it a ⭐ on GitHub to support future tools!