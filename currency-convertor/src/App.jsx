import { useEffect, useState } from "react";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo.js";
import { currencyNames, funnyNames } from "./utils/currencyNames.js";

function App() {
  const [amount1, setAmount1] = useState(0);
  const [amount2, setAmount2] = useState(0);
  const [from, setFrom] = useState("inr");
  const [to, setTo] = useState("usd");
  const [activeInput, setActiveInput] = useState("input1");
  const [displayName1, setDisplayName1] = useState(currencyNames[from]);
  const [displayName2, setDisplayName2] = useState(currencyNames[to]);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo || {});

  const handleInput1Change = (e) => {
    const val = e.target.value || 0;
    setAmount1(val);
    setActiveInput("input1");
  };

  const handleInput2Change = (e) => {
    const val = e.target.value || 0;
    setAmount2(val);
    setActiveInput("input2");
  };

  useEffect(() => {
    if (activeInput === "input1") {
      setAmount2(amount1 * currencyInfo[to]);
    } else if (activeInput === "input2") {
      const reverseRate = 1 / currencyInfo[to];
      setAmount1(amount2 * reverseRate);
    }
    if (currencyNames.hasOwnProperty(from)) {
      setDisplayName1(currencyNames[from]);
    } else {
      setDisplayName1(
        funnyNames[Math.floor(Math.random() * funnyNames.length)]
      );
    }
    if (currencyNames.hasOwnProperty(to)) {
      setDisplayName2(currencyNames[to]);
    } else {
      setDisplayName2(
        funnyNames[Math.floor(Math.random() * funnyNames.length)]
      );
    }
  }, [amount1, amount2, from, to, currencyInfo, activeInput]);

  return (
    <>
      <InputBox
        amount1={amount1}
        amount2={amount2}
        handleInput1Change={handleInput1Change}
        handleInput2Change={handleInput2Change}
        selectCurrency1={from}
        selectCurrency2={to}
        onCurrencyChange1={(from) => setFrom(from)}
        onCurrencyChange2={(to) => setTo(to)}
        currencyOptions={options}
        displayName1={displayName1}
        displayName2={displayName2}
      ></InputBox>
    </>
  );
}

export default App;
