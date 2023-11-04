import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContextProvider";

const Banner = () => {
  const { user } = useContext(AuthContext);
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    // Create a new text area element to hold the text you want to copy
    const textArea = document.createElement("textarea");
    textArea.value = `http://localhost:5173/register?ref=${user.refferel}`;

    // Append the text area to the document
    document.body.appendChild(textArea);

    // Select the text inside the text area
    textArea.select();

    // Execute the copy command
    document.execCommand("copy");

    // Remove the text area from the document
    document.body.removeChild(textArea);

    // Set the "copied" state to true to indicate that the link was copied
    setCopied(true);
    alert(
      `Share The Link and Earn!!! : http://localhost:5173/register?ref=${user.refferel}`
    );

    // Reset the "copied" state after a brief delay
    setTimeout(() => {
      setCopied(false);
    }, 1500); // Change back to "Copy Link" after 1.5 seconds
  };

  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://media.tenor.com/7HGXsOdg1J0AAAAC/vaporwave-synthwave.gif)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-2xl bg-slate-900 bg-opacity-30 hover:bg-opacity-75 transition-all duration-1000  p-10 rounded-lg">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          {user ? (
            <button onClick={copyToClipboard} className="btn btn-primary">
              Earn Money
            </button>
          ) : (
            <Link to="/register">
              <button className="btn btn-primary">Get Started</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
export default Banner;
