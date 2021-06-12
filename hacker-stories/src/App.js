import React from "react";

const welcome = {
  greeting: "Hey",
  getTitle: function (title) {
    return title;
  },
};

function App() {
  return (
    <div>
      <h1>
        {welcome.greeting} {welcome.getTitle("React")}
      </h1>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
    </div>
  );
}

export default App;
