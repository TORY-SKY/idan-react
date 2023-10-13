import React, { useState } from "react";
import GoogleTTS from "react-google-tts";

const TextToSpeechPlayer = () => {
  const [text, setText] = useState('');
  const [voice, setVoice] = useState("en-GB-Standard-B");

  const handlePlay = () => {
    GoogleTTS.speak(text, voice);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter text to speak"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handlePlay}>Play</button>
    </div>
  );
};

export default TextToSpeechPlayer;
