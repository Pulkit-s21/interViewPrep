/* eslint-disable react/prop-types */

export const Dropdown = (props) => {
  const currencyList = [
    { label: "Select an option", value: "" },
    { label: "INR", value: "INR" },
    { label: "USD", value: "USD" },
    { label: "AUD", value: "AUD" },
    { label: "BAM", value: "BAM" },
    { label: "CAD", value: "CAD" },
    { label: "CRC", value: "CRC" },
    { label: "CUC", value: "CUC" },
    { label: "DJF", value: "DJF" },
    { label: "DOP", value: "DOP" },
    { label: "EUR", value: "EUR" },
    { label: "GBP", value: "GBP" },
    { label: "HRK", value: "HRK" },
    { label: "JPY", value: "JPY" },
    { label: "QAR", value: "QAR" },
  ]

  return (
    <select className="text-center text-lg p-2 bg-blue-500">
      {currencyList.map((currency, idx) => {
        return (
          <option
            className="text-xl"
            onClick={() => props.action(currency.value)}
            key={idx}
            value={currency.value}
          >
            {currency.label}
          </option>
        )
      })}
    </select>
  )
}
