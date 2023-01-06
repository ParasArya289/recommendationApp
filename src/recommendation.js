import { useState } from "react";
import "./recommendation.css";

let music = [
  {
    name: "Titanic",
    rating: "4/5"
  },
  {
    name: "God Father",
    rating: "4/5"
  }
];
let food = [
  {
    name: "Palak Paneer",
    rating: "5/5"
  },
  {
    name: "White sauce pasta",
    rating: "4.5/5"
  }
];
let travel = [
  {
    name: "Agra",
    rating: "3/5"
  },
  {
    name: "Banaras",
    rating: "4/5"
  }
];
let ted = [
  {
    name: "How to be confident",
    rating: "3.5/5"
  },
  {
    name: "Language of universe: Maths",
    rating: "4.5/5"
  }
];

let Recommendation = () => {
  let [rec, setRec] = useState([]);
  return (
    <div>
      <h1>My Recommendation</h1>
      <p>My recommendtion on following topics</p>
      <button className="btn" onClick={() => setRec(music)}>
        Music
      </button>
      <button className="btn" onClick={() => setRec(food)}>
        Food
      </button>
      <button className="btn" onClick={() => setRec(travel)}>
        Travel
      </button>
      <button className="btn" onClick={() => setRec(ted)}>
        TEDx
      </button>
      <hr />
      <div>
        <ul style={{ paddingInlineStart: "0" }}>
          {rec.map(({ name, rating }) => {
            return (
              <li className="list-name">
                {name}
                <small className="list-rating">{rating}</small>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default Recommendation;
