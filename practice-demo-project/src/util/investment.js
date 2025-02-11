// This function expects a JS object as an argument
// The object should contain the following properties
// - initialInvestment: The initial investment amount
// - annualInvestment: The amount invested every year
// - expectedReturn: The expected (annual) rate of return
// - duration: The investment duration (time frame)
export function calculateInvestmentResults({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
}) {
  const annualData = [];
  let investmentValue = initialInvestment;
  let totalInterest = 0;
  let investedCapital = initialInvestment + annualInvestment;

  for (let i = 0; i < duration; i++) {
    const interestEarnedInYear = investmentValue * (expectedReturn / 100);
    totalInterest += interestEarnedInYear;
    investmentValue += interestEarnedInYear + annualInvestment;
    investedCapital += annualInvestment;
    annualData.push({
      year: i + 1, // year identifier
      interestEarnedInYear: interestEarnedInYear, // the amount of interest earned in this year
      totalInterest: totalInterest, // total interest earned over all years as of the end of this year
      valueEndOfYear: investmentValue, // investment value at end of year
      annualInvestment: annualInvestment, // investment added in this year
      investedCapital: investedCapital, // investment as of the end of this year
    });
  }

  return annualData;
}

// The browser-provided Intl API is used to prepare a formatter object
// This object offers a "format()" method that can be used to format numbers as currency
// Example Usage: formatter.format(1000) => yields "$1,000"
export const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
