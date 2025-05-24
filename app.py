from flask import Flask, request, jsonify, send_file
from flask_cors import CORS
import io

app = Flask(__name__)
CORS(app)

@app.route("/generate", methods=["POST"])
def generate():
    data = request.get_json()
    text = data.get("text", "আপনার ভয়েস এখানে")
    audio_bytes = f"Fake audio for text: {text}".encode("utf-8")
    return send_file(io.BytesIO(audio_bytes), mimetype="audio/mpeg")

@app.route("/")
def index():
    return "Voice changer backend running."

if __name__ == "__main__":
    app.run(debug=True)