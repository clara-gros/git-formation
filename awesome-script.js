const fs = require("fs");

function parseNumbers(filename) {
  try {
    const data = fs.readFileSync(filename, "utf8");
    const nums = data
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line !== "")
      .map(Number);
    return nums;
  } catch (err) {
    console.error("Error reading file:", err);
    return [];
  }
}

function computeSum(nums) {
  return nums.reduce((acc, curr) => acc + curr, 0);
}

function computeAverage(nums) {
  if (nums.length === 0) return 0;
  return calculateSum(nums) / nums.length;
}

function main() {
  const filename = process.argv.find((arg, i) => {
    if (i === 2) return arg;
  });
  if (!filename) {
    console.error("Please provide a filename");
    return;
  }
  const numbers = readNumbers(filename);
  const total = calculateSumWithLoop(numbers);
  const average = calculateAverageInAStupidWay(numbers);

  console.log(`Sum: ${total}`);
  console.log(`Average: ${average}`);
}

main();
