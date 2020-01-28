import React from "react";
import Emoji from "../emojipedia";
import Entry from "./Entry"

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {Emoji.map( emojiEntry => {
          return (
            <Entry
              key={emojiEntry.id}
              emoji={emojiEntry.emoji}
              name={emojiEntry.name}
              meaning={emojiEntry.meaning}
            />
          );
        } )}
      </dl>
    </div>
  );
}

export default App;
