import send from "./assets/send.svg";
import user from "./assets/user.png";
import loadingIcon from "./assets/loader.svg";
import bot from "./assets/bot.png";
import { useState } from "react";

// let arr = [
//   { type: "user", post: "abcdef" },
//   {
//     type: "bot",
//     post: "nmklso",
//   },
// ];
function App() {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  const onSubmit = () => {
    if (input.trim() === "") return;
    updatePosts(input);
  };
  const updatePosts = (post) => {
    setPosts((prevState) => {
      return [...prevState, { type: "user", post }]; //if key value are same
    });
  };
  const onKeyUp = (e) => {
    if (e.key === "Enter" || e.which === 13) {
      onSubmit();
    }
  };

  return (
    <main className="chatGPT-app">
      <section className="chat-container">
        <div className="layout">
          {posts.map((post, index) => (
            <div
              key={index}
              className={`chat-bubble ${
                post.type === "bot" || post.type === "loading" ? "bot" : ""
              }`}
            >
              <div className="avatar">
                <img
                  src={
                    post.type === "bot" || post.type === "loading" ? bot : user
                  }
                />
              </div>
              {post.type === "loading" ? (
                <div className="loader">
                  <img src={loadingIcon} />
                </div>
              ) : (
                <div className="post">{post.post}</div>
              )}
            </div>
          ))}
        </div>
      </section>
      <footer>
        <input
          className="composebar"
          autoFocus
          type="text"
          placeholder="Ask Me !!!"
          onChange={(e) => {
            setInput(e.target.value);
          }}
          onKeyUp={onKeyUp}
        />
        <div className="send-button" onClick={onSubmit}>
          <img src={send} />
        </div>
      </footer>
    </main>
  );
}

export default App;
