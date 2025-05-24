import React, { useState } from "react";
import axios from "axios";

function VoiceChanger() {
  const [text, setText] = useState("");
  const [audioUrl, setAudioUrl] = useState(null);

  const handleGenerate = async () => {
    if (!text.trim()) return alert("টেক্সট দিন");
    const response = await axios.post("http://localhost:5000/generate", { text }, { responseType: "blob" });
    const url = URL.createObjectURL(response.data);
    setAudioUrl(url);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>বাংলা ভয়েস চেঞ্জার</h2>
      <textarea value={text} onChange={e => setText(e.target.value)} rows={4} cols={50} placeholder="বাংলা লিখুন..." />
      <br />
      <button onClick={handleGenerate}>ভয়েস তৈরি করুন</button>
      {audioUrl && (
        <div>
          <h4>প্রিভিউ:</h4>
          <audio controls src={audioUrl}></audio>
          <br />
          <a href={audioUrl} download="voice.mp3">ডাউনলোড</a>
        </div>
      )}
    </div>
  );
}

export default VoiceChanger;