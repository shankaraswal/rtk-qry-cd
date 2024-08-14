import { useState } from "react";

const KiteCalculator = () => {
  const [start, setStart] = useState(10);
  const [end, setEnd] = useState(100);
  const [targetSum, setTargetSum] = useState(8);
  const [givenNumber, setGivenNumber] = useState(50);
  const [minDifference, setMinDifference] = useState(5);
  const [price, setPrice] = useState(1); // Added state for price
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
        totalAmount: price * (number - start + 1), // Calculate total amount
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
            <label className="block text-gray-700">Start Range:</label>
            <input
              type="number"
              className="w-full mt-1 p-2 border border-gray-300 rounded"
              value={start}
              onChange={(e) => setStart(parseInt(e.target.value))}
            />
          </div>
          <div>
            <label className="block text-gray-700">End Range:</label>
            <input
              type="number"
              className="w-full mt-1 p-2 border border-gray-300 rounded"
              value={end}
              onChange={(e) => setEnd(parseInt(e.target.value))}
            />
          </div>
          <div>
            <label className="block text-gray-700">Target Digit Sum:</label>
            <input
              type="number"
              className="w-full mt-1 p-2 border border-gray-300 rounded"
              value={targetSum}
              onChange={(e) => setTargetSum(parseInt(e.target.value))}
            />
          </div>
          <div>
            <label className="block text-gray-700">Given Number:</label>
            <input
              type="number"
              className="w-full mt-1 p-2 border border-gray-300 rounded"
              value={givenNumber}
              onChange={(e) => setGivenNumber(parseInt(e.target.value))}
            />
          </div>
          <div>
            <label className="block text-gray-700">Minimum Difference:</label>
            <input
              type="number"
              className="w-full mt-1 p-2 border border-gray-300 rounded"
              value={minDifference}
              onChange={(e) => setMinDifference(parseInt(e.target.value))}
            />
          </div>
          <div>
            <label className="block text-gray-700">Price per Item:</label>
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

        {results.length > 0 && (
          <div className="bg-white p-6 rounded shadow-md w-2/3  space-y-3">
            <h2 className="text-xl font-semibold mb-2">Results:</h2>
            <div className="flex flex-col gap-5 ">
              {results.map((result: any, index: number) => (
                <p
                  key={index}
                  className="flex flex-row text-ls justify-between border-b border-black py-3"
                >
                  <span>current stock:</span>
                  <span className="text-lg font-bold text-teal-700">
                    {givenNumber}
                  </span>
                  <span>buy:</span>
                  <span className="text-lg font-bold text-red-700">
                    {result.difference}
                  </span>
                  <span>total stock:</span>
                  <span className="text-lg font-bold text-teal-700">
                    {result.number}
                  </span>

                  <span>require:</span>
                  <span className="text-lg font-bold text-red-700">
                    ₹ {result.totalAmount.toFixed(2)}
                  </span>
                </p>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default KiteCalculator;
