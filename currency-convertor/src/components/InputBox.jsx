import React from "react";

function InputBox({
  amount1,
  amount2,
  handleInput1Change,
  handleInput2Change,
  onCurrencyChange1,
  onCurrencyChange2,
  currencyOptions = [],
  selectCurrency1,
  selectCurrency2,
  displayName1,
  displayName2,
  className = "",
}) {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div
        className="flex flex-col justify-center items-center p-7 rounded-2xl"
        style={{ backgroundColor: "rgb(255, 255, 255, 0.8)" }}
      >
        <div className="bg-[rgba(0,0,0,0.7)] p-2 rounded-lg text-amber-50">
          <h4>
            {amount1} <b>{displayName1}</b> equals
          </h4>
          <h1 className="text-2xl">
            {amount2} <b>{displayName2}</b>
          </h1>
        </div>

        <div className="mt-5 mb-1">
          <input
            className="bg-[rgba(0,0,0,0.6)]  py-1 px-1 rounded-l-md outline-none text-amber-50"
            type="number"
            value={amount1}
            onChange={handleInput1Change}
          />
          <select
            className="bg-[rgba(204,73,77,0.8)]  px-1 py-1 rounded-r-md outline-1 outline-[rgba(54,65,83,0.8)] text-amber-50"
            value={selectCurrency1}
            onChange={(e) =>
              onCurrencyChange1 && onCurrencyChange1(e.target.value)
            }
          >
            {currencyOptions.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
        <div>
          <input
            className="bg-[rgba(0,0,0,0.6)]  py-1 px-1 rounded-l-md outline-none text-amber-50"
            type="number"
            value={amount2}
            onChange={handleInput2Change}
          />
          <select
            className="bg-[rgba(204,73,77,0.8)]  px-1 py-1 rounded-r-md outline-1 outline-[rgba(54,65,83,0.8)] text-amber-50"
            value={selectCurrency2}
            onChange={(e) =>
              onCurrencyChange2 && onCurrencyChange2(e.target.value)
            }
          >
            {currencyOptions.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div
        className="mt-19 w-[75%] p-2.5 rounded-2xl"
        style={{ backgroundColor: "rgb(255, 255, 255, 0.8)" }}
      >
        <p>
          <b>Note:</b> If a currency name contains emojis, creepy wording, or
          unusual characters, it is likely not a valid or officially recognized
          currency. Such entries may represent{" "}
          <b>
            meme coins, scam tokens, experimental blockchain assets, placeholder
            values, or testnet currencies
          </b>
          .
        </p>
      </div>
    </div>
  );
}
export default InputBox;
