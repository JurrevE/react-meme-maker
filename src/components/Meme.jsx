import React from "react";
import memesData from "../memesData";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = React.useState(memesData);

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  return (
    <main className="mainContent">
      <div className="form">
        <label htmlFor="top-text">
          Top Text
          <input
            id="top-text"
            type="text"
            placeholder="Top text"
            className="form--input"
            value={meme.topText}
            onChange={(e) => setMeme({ ...meme, topText: e.target.value })}
          />
        </label>
        <label htmlFor="bottom-text">
          Bottom Text
          <input
            id="bottom-text"
            type="text"
            placeholder="Bottom text"
            className="form--input"
            value={meme.bottomText}
            onChange={(e) => setMeme({ ...meme, bottomText: e.target.value })}
          />
        </label>
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>
      <img src={meme.randomImage} className="image" alt="Random Meme" />
    </main>
  );
}
