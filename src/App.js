import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import Cell from "./Cell";
import { makeempty, genvalid, test } from "./Util";

export default function App() {
  const [grid, setGrid] = useState([]);
  const [win, setWin] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [r, setR] = useState(0);
  const [c, setC] = useState(0);
  const [gamect, setGamect] = useState(0);
  function creategrid() {
    let board = genvalid();
    return makeempty(board);
  }

  useEffect(() => {
    let g = creategrid();
    setGrid(g);
  }, []);
  function updatenum(data) {
    grid[data.i][data.j][0] = isNaN(data.num) ? " " : data.num;
  }
  return (
    <div className="container" >
      <button
        onClick={() => {
          let g = creategrid();
          setGrid(g);
          setSubmit(false);
          setWin(false);
          setGamect(gamect + 1);
        }}
        style={{margin:'1vw'}}
      >
        New
      </button>
      {!win ? (
        <button
          onClick={function () {
            setSubmit(true);
            let b = test(grid);
            setWin(b[0]);
            setR(b[1]);
            setC(b[2]);
          }}
          style={{margin:'1vw'}}
        >
          Submit
        </button>
      ) : null}
      <div>
        {submit && win ? <p>Correct</p> : null}
        {submit && !win ? (
          <p>Incorrect. Please check row {r} and column {c} again.</p>
        ) : null}
      </div>
      {grid.map((row, i) => {
        return (
          <div key={i} style={{display:'flex'}}>
            {row.map((num, j) => {
              return (
                <Cell
                  key={j}
                  i={i}
                  j={j}
                  num={num[0]}
                  callback={updatenum}
                  fixed={num[1]}
                  ct={gamect}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

