import { useEffect, useState } from "react";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo.js";

function App() {
  const [amount1, setAmount1] = useState();
  const [amount2, setAmount2] = useState();
  const [from, setFrom] = useState("inr");
  const [to, setTo] = useState("usd");
  const [activeInput, setActiveInput] = useState("input1");

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
      ></InputBox>
    </>
  );
}

export default App;
