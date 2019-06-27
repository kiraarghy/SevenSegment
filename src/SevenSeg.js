import React from "react";

import "./SevenSeg.css";

import { segments } from "./segments.js";

const items = [
  { points: "50 50 100 100 300 100 350 50 300 0 100 -1.95329863e-15" },
  {
    transform:
      "translate(50.000000, 315.000000) rotate(90.000000) translate(-50.000000, -315.000000) ",
    points: "-200 315 -150 365 250 365 300 315 250 265 -150 265"
  },
  {
    transform:
      "translate(350.000000, 315.000000) rotate(90.000000) translate(-350.000000, -315.000000) ",
    points: "100 315 150 365 550 365 600 315 550 265 150 265"
  },
  {
    points: "50 584 100 634 300 634 350 584 300 534 100 534"
  },
  {
    transform:
      "translate(50.000000, 853.000000) rotate(90.000000) translate(-50.000000, -853.000000) ",
    points: "-200 853 -150 903 250 903 300 853 250 803 -150 803"
  },
  {
    transform:
      "translate(350.000000, 853.000000) rotate(90.000000) translate(-350.000000, -853.000000) ",
    points: "100 853 150 903 550 903 600 853 550 803 150 803"
  },
  {
    points: "50 1118 100 1168 300 1168 350 1118 300 1068 100 1068"
  }
];

function SevenSeg({ number, width, color }) {
  const segment = segments[number];
  return (
    <svg
      width={width}
      viewBox="0 0 400 1168"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
        color={color}
      >
        {items.map((item, i) => (
          <polygon
            key={i}
            {...item}
            fill={color}
            className={`${
              segment[i] ? "SevenSeg_on___MQtS" : "SevenSeg_off__30CSh"
            }`}
          />
        ))}
      </g>
    </svg>
  );
}

export { SevenSeg };
