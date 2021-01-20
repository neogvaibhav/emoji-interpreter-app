import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "👋": "Waving Hand",
  "🤚": "Raised Back of Hand",
  "✋": "Raised Hand",
  "🖖": "Vulcan Salute",
  "👌": "OK Hand"
};

export default function App() {
  var [emojiMeaning, setEmojiMeaning] = useState("");
  var emojiWeknow = Object.keys(emojiDictionary);

  // var emoji_meaning = '';
  function inputHandlerEmoji(event) {
    var newEmoji = event.target.value;
    // setEmoji(newEmoji);

    var meaning = emojiDictionary[newEmoji];

    if (newEmoji !== "") {
      if (meaning === undefined) {
        meaning = "Not Available";
      }
    }

    setEmojiMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setEmojiMeaning(meaning);
  }

  return (
    <div className="App">
      <div class="app-content">
        <div className="app-container">
          <h1>Emoji Interpreter</h1>
          <label for="emojiInput" className="text-gray">
            Enter emoji
          </label>
          <input
            id="emojiInput"
            className="mb-20"
            onChange={inputHandlerEmoji}
          />

          <p className="mb-20 text-gray">
            Meaning:{" "}
            <span style={{ fontSize: "1.5rem", color: "white" }}>
              {emojiMeaning}
            </span>
          </p>
          <hr />

          <h3 style={{ marginTop: "30px", marginBottom: "10px" }}>
            List of emojis
          </h3>
          {emojiWeknow.map((emoji) => {
            return (
              <span
                key={emoji}
                onClick={() => emojiClickHandler(emoji)}
                className="emoji-item"
              >
                {emoji}
              </span>
            );
          })}
        </div>
      </div>
      <footer>
        made with love ❤ by{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/neogvaibhav"
        >
          Vaibhav
        </a>
      </footer>
    </div>
  );
}
