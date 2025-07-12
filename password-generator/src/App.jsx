import { useState, useCallback, useEffect, useRef } from "react";
import storeIt from "./storePass";
function App() {
  // useStates

  const [password, setPassword] = useState();
  // const [info, setInfo] = useState();
  const [length, setLength] = useState();
  const [numberAllowed, setNumbeAllowed] = useState(false);
  const [symbolAllowed, setsymbolAllowed] = useState(false);
  //Constants
  const passwordRef = useRef(null);
  //functions

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (symbolAllowed) str += "!@#$%^&*()-_=+[]{}|;:',.<>?/`~";
    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, symbolAllowed]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, symbolAllowed]);

  const copyPassToClipboard = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
  };

  //Return
  return (
    <>
      <div className="w-[100%] flex justify-center items-center">
        <input
          type="text"
          className=" w-[60%] rounded-l-md bg-[rgb(0,0,0,0.5)] text-amber-50 px-1.5 py-1 outline-none ring-1"
          value={password}
          placeholder="Password"
          readOnly
          ref={passwordRef}
        ></input>

        <button
          className="bg-[rgb(174,188,251)] px-3 py-1 rounded-r-md font-bold ring-amber-50 ring-1 hover:bg-[rgba(174,188,251,0.5)] focus:bg-[rgb(190,195,219)]"
          onClick={copyPassToClipboard}
        >
          COPY
        </button>
      </div>
      <div className="flex flex-col justify-center items-center mt-5 gap-2">
        <label className="text-[12px] font-bold">LENGTH : {length}</label>
        <input
          type="range"
          min={6}
          max={25}
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
        <div className="flex">
          <label className="mr-2 text-[12px] font-bold" htmlFor="includeNumber">
            NUMBERS
          </label>
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            onChange={() => {
              setNumbeAllowed((prev) => !prev);
            }}
          />
        </div>
        <div className="flex">
          <label className="mr-2 text-[12px] font-bold" htmlFor="includeNumber">
            SYMBOLS
          </label>
          <input
            type="checkbox"
            defaultChecked={symbolAllowed}
            onChange={() => {
              setsymbolAllowed((prev) => !prev);
            }}
          />
        </div>
      </div>
      <div className="mt-5">
        <button
          className="bg-[rgb(174,188,251)] px-3 rounded-l-md font-bold ring-amber-50 ring-1 hover:bg-[rgba(174,188,251,0.5)] focus:bg-[rgb(190,195,219)] text-sm"
          onClick={() => {
            storeIt(password);
          }}
        >
          SAVE AS
        </button>
        <input
          type="text"
          id="saveAsInp"
          className=" w-[60%] rounded-r-md bg-[rgb(0,0,0,0.5)] text-amber-50 px-1.5 outline-none ring-1 text-sm"
          placeholder=""
        ></input>
      </div>
    </>
  );
}

export default App;
