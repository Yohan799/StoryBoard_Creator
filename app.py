from flask import Flask, render_template, request, jsonify
import requests
import base64

app = Flask(__name__)
HF_API_KEY = "Your-API-KEY-HERE" # Replace with your Hugging Face token

def generate_image(prompt):
    url = "https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-schnell"
    headers = {"Authorization": f"Bearer {HF_API_KEY}"}
    payload = {"inputs": prompt}
    
    response = requests.post(url, headers=headers, json=payload)
    
    if response.status_code == 200:
        img_data = base64.b64encode(response.content).decode("utf-8")
        return f"data:image/png;base64,{img_data}"
    elif response.status_code == 503:
        print("Model loading, wait 20 seconds")
        return None
    else:
        print(f"Error: {response.status_code} - {response.text}")
        return None
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/generate_storyboard', methods=['POST'])
def generate_storyboard():
    data = request.json
    prompts = data.get('prompts', [])
    results = []

    for prompt in prompts:
        image_url = generate_image(prompt)
        results.append({'prompt': prompt, 'image_url': image_url})

    return jsonify(results)

if __name__ == '__main__':
    app.run(debug=True)
