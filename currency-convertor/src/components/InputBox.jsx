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
  className = "",
}) {
  return (
    <div>
      {/* <div>
        <h4>
          Your {amount}
          {selectCurrency} equals
        </h4>
        <br />
        <h1>
          {onAmountChange}
          {onCurrencyChange}
        </h1>
      </div> */}

      <div>
        <input
          className=""
          type="number"
          value={amount1}
          onChange={handleInput1Change}
        />
        <select
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
          className=""
          type="number"
          value={amount2}
          onChange={handleInput2Change}
        />
        <select
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
  );
}
export default InputBox;
