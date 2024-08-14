import { useState } from "react";

const KiteCalculator = () => {
  const [start, setStart] = useState(1000);
  const [end, setEnd] = useState(3500);
  const [targetSum, setTargetSum] = useState(8);
  const [givenNumber, setGivenNumber] = useState(50);
  const [minDifference, setMinDifference] = useState(5);
  const [price, setPrice] = useState<number>(1); // Added state for price
  const [results, setResults] = useState<any>([]);

  const findNumbersWithDigitSum = (
    start: number,
    end: number,
    targetSum: number
  ) => {
    const result = [];

    for (let number = start; number <= end; number++) {
      const digitSum = number
        .toString()
        .split("")
        .reduce((sum, digit) => sum + parseInt(digit, 10), 0);

      if (digitSum === targetSum) {
        result.push(number);
      }
    }

    return result;
  };

  const findLargerNumbersWithDifference = (
    numbersArray: number[],
    givenNumber: number,
    minDifference: number,
    price: number // Added price parameter
  ) => {
    const largerNumbersWithDifferences = numbersArray
      .map((number) => ({
        number: number,
        difference: number - givenNumber,
        totalAmount: price * (number - givenNumber), // Calculate total amount
      }))
      .filter((result) => result.difference > minDifference);

    return largerNumbersWithDifferences;
  };

  const handleCalculate = () => {
    const matchingNumbers = findNumbersWithDigitSum(start, end, targetSum);
    const result = findLargerNumbersWithDifference(
      matchingNumbers,
      givenNumber,
      minDifference,
      price // Pass price to function
    );
    setResults(result);
  };

  return (
    <>
      <h2 className="font-bold w-full text-3xl text-red-900  mb-6">
        Digit Sum Calculator
      </h2>
      <div className="flex flex-row gap-10 w-full">
        <div className="bg-white p-6 rounded shadow-md w-1/3 space-y-6 font-bold">
          <div>
            <label className="block text-gray-700">
              {" "}
              Min Stocks (can purchase):
            </label>
            <input
              type="number"
              className="w-full mt-1 p-2 border border-gray-300 rounded"
              value={start}
              onChange={(e) => setStart(parseInt(e.target.value))}
            />
          </div>
          <div>
            <label className="block text-gray-700">
              Max Stocks (can purchase):
            </label>
            <input
              type="number"
              className="w-full mt-1 p-2 border border-gray-300 rounded"
              value={end}
              onChange={(e) => setEnd(parseInt(e.target.value))}
            />
          </div>
          <div>
            <label className="block text-gray-700">Digit Sum:</label>
            <input
              type="number"
              className="w-full mt-1 p-2 border border-gray-300 rounded"
              value={targetSum}
              onChange={(e) => setTargetSum(parseInt(e.target.value))}
            />
          </div>
          <div>
            <label className="block text-gray-700">Existing Stocks:</label>
            <input
              type="number"
              className="w-full mt-1 p-2 border border-gray-300 rounded"
              value={givenNumber}
              onChange={(e) => setGivenNumber(parseInt(e.target.value))}
            />
          </div>
          <div>
            <label className="block text-gray-700">{`Buying Quantity > or =:`}</label>
            <input
              type="number"
              className="w-full mt-1 p-2 border border-gray-300 rounded"
              value={minDifference}
              onChange={(e) => setMinDifference(parseInt(e.target.value))}
            />
          </div>
          <div>
            <label className="block text-gray-700">LTP per Stock:</label>
            <input
              type="number"
              className="w-full mt-1 p-2 border border-gray-300 rounded"
              value={price}
              onChange={(e) => setPrice(parseFloat(e.target.value))}
            />
          </div>
          <button
            className="w-full bg-blue-500 text-white py-2 rounded mt-4 hover:bg-blue-600"
            onClick={handleCalculate}
          >
            Calculate
          </button>
        </div>

        <div className="flex flex-col gap-4 w-2/3 text-enter">
          <table className="table-custom">
            <thead>
              <tr>
                <th>Current</th>
                <th>Targeted </th>
                <th>Need</th>
                <th>LTP</th>
                <th className="text-right">Required Amd</th>
              </tr>
            </thead>
            <tbody>
              {results.map((result: any, index: number) => (
                <tr>
                  <td>{givenNumber}</td>
                  <td>{result.number}</td>
                  <td className="text-green-600">{result.difference}</td>
                  <td className="text-orange-400">{price.toFixed(2)}</td>
                  <td className="text-right font-semibold text-xl text-red-600 tracking-wider">
                    ₹ {result.totalAmount.toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default KiteCalculator;
