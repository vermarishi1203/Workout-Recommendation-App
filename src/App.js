import React, { useState } from "react";
import "./styles.css";

export default function App() {
  var [workout, setWorkout] = useState("Chest");
  var workoutDictionary = {
    Chest: [
      {
        name: "Incline Dumbbell Presses",
        clip: (
          <iframe
            className="clip"
            src="https://www.youtube.com/embed/0G2_XV7slIg"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        )
      },
      {
        name: "Dumbbell Flys",
        clip: (
          <iframe
            className="clip"
            src="https://www.youtube.com/embed/eozdVDA78K0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        )
      },
      {
        name: "Barbell Bench Presses",
        clip: (
          <iframe
            className="clip"
            src="https://www.youtube.com/embed/rT7DgCr-3pg"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        )
      },
      {
        name: "Chest Dips",
        clip: (
          <iframe
            className="clip"
            src="https://www.youtube.com/embed/dX_nSOOJIsE"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        )
      }
    ],
    Back: [
      {
        name: "Pull Ups",
        clip: (
          <iframe
            className="clip"
            src="https://www.youtube.com/embed/eGo4IYlbE5g"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        )
      },
      {
        name: "Bent-Over Rows",
        clip: (
          <iframe
            className="clip"
            src="https://www.youtube.com/embed/vT2GjY_Umpw"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        )
      },
      {
        name: "Deadlift",
        clip: (
          <iframe
            className="clip"
            src="https://www.youtube.com/embed/RyJbvWAh6ec"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        )
      },
      {
        name: "Lat Pulldown",
        clip: (
          <iframe
            className="clip"
            src="https://www.youtube.com/embed/CAwf7n6Luuc"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        )
      }
    ],
    Biceps: [
      {
        name: "Preacher Curls",
        clip: (
          <iframe
            className="clip"
            src="https://www.youtube.com/embed/fIWP-FRFNU0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        )
      },
      {
        name: "Hammer Curls",
        clip: (
          <iframe
            className="clip"
            src="https://www.youtube.com/embed/zC3nLlEvin4"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        )
      },
      {
        name: "Plate Curls",
        clip: (
          <iframe
            className="clip"
            src="https://www.youtube.com/embed/1SEBudQXTjA"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        )
      },
      {
        name: "Reverse Curls",
        clip: (
          <iframe
            className="clip"
            src="https://www.youtube.com/embed/nRgxYX2Ve9w"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        )
      }
    ],
    Triceps: [
      {
        name: "Triceps Presses",
        clip: (
          <iframe
            className="clip"
            src="https://www.youtube.com/embed/cXbSJHtjrQQ"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        )
      },
      {
        name: "Skull Crushers",
        clip: (
          <iframe
            className="clip"
            src="https://www.youtube.com/embed/d_KZxkY_0cM"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        )
      },
      {
        name: "Rope Pushdowns",
        clip: (
          <iframe
            className="clip"
            src="https://www.youtube.com/embed/2-LAMcpzODU"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        )
      },
      {
        name: "Triceps Kickback",
        clip: (
          <iframe
            className="clip"
            src="https://www.youtube.com/embed/6SS6K3lAwZ8"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        )
      }
    ],
    Shoulders: [
      {
        name: "Alternate Front Raises",
        clip: (
          <iframe
            className="clip"
            src="https://www.youtube.com/embed/-t7fuZ0KhDA"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        )
      },
      {
        name: "Side Lateral Raises",
        clip: (
          <iframe
            className="clip"
            src="https://www.youtube.com/embed/3VcKaXpzqRo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        )
      },
      {
        name: "Reverse Flys",
        clip: (
          <iframe
            className="clip"
            src="https://www.youtube.com/embed/JoCRRZ3zRtI"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        )
      },
      {
        name: "Arnold Presses",
        clip: (
          <iframe
            className="clip"
            src="https://www.youtube.com/embed/6Z15_WdXmVw"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        )
      }
    ],
    Legs: [
      {
        name: "Weighted Squats",
        clip: (
          <iframe
            className="clip"
            src="https://www.youtube.com/embed/MVMNk0HiTMg"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        )
      },
      {
        name: "Weighted Lunges",
        clip: (
          <iframe
            className="clip"
            src="https://www.youtube.com/embed/D7KaRcUTQeE"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        )
      },
      {
        name: "Leg Extension",
        clip: (
          <iframe
            className="clip"
            src="https://www.youtube.com/embed/ljO4jkwv8wQ"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        )
      },
      {
        name: "Stiff-Legged Deadlift",
        clip: (
          <iframe
            className="clip"
            src="https://www.youtube.com/embed/TJwlBS1jo0Y"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        )
      }
    ],
    Abs: [
      {
        name: "Crunches",
        clip: (
          <iframe
            className="clip"
            src="https://www.youtube.com/embed/5ER5Of4MOPI"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        )
      },
      {
        name: "Leg Raises",
        clip: (
          <iframe
            className="clip"
            src="https://www.youtube.com/embed/l4kQd9eWclE"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        )
      },
      {
        name: "Side Bridges",
        clip: (
          <iframe
            className="clip"
            src="https://www.youtube.com/embed/9C9sbJfFjJM"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        )
      },
      {
        name: "Hollow Body",
        clip: (
          <iframe
            className="clip"
            src="https://www.youtube.com/embed/BQCdzRPE9Ao"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        )
      }
    ]
  };
  var workoutList = Object.keys(workoutDictionary);
  function bodypartClickHandler(bodypart) {
    setWorkout(bodypart);
  }
  return (
    <div className="app">
      <h1 className="heading">Workout Bruh!</h1>
      <p className="subheading">
        The most effective excercises for every muscle in your body.
        <br />
        What do you want to train today?
      </p>
      {workoutList.map((bodypart) => (
        <button
          className="bodyparts"
          key={bodypart}
          onClick={() => bodypartClickHandler(bodypart)}
        >
          {bodypart}
        </button>
      ))}
      {workoutDictionary[workout].map((excercise) => (
        <div className="output" key={excercise.name}>
          <p className="name">{excercise.name}</p>
          <div>{excercise.clip}</div>
        </div>
      ))}
      <p className="credits">
        Made by <a href="https://rishiverma.netlify.app/">Rishi Verma</a>.
      </p>
    </div>
  );
}
