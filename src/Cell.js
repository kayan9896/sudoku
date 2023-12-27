import React, { useState, useEffect } from "react";
import './App.css';

export default function Cell({ num, fixed, callback, i, j, ct }) {
  const [t, setT] = useState("");
  useEffect(() => {
    setT("");
  }, [ct]);
  return (
    <div className="cell">
      {fixed === 0 ? (
        
        <input
          maxLength={1}
          style={{ fontSize: '3vw', width: '3vw', height: '3vw',textAlign:'center'}}
          value={t}
          onChange={function (e) {
            let txt = e.target.value;
            if (isNaN(txt) === false) {
              setT(txt);
              callback({ i, j, num: parseInt(txt) });
            }
          }}
          
        />
      ) : (
        <p style={{ color:'red',fontSize:'3vw' }}>{num}</p>
      )}
    </div>
  );
}
