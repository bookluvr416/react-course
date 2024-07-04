import InvestmentTableRow from './InvestmentTableRow';
import { calculateInvestmentResults } from '../util/investment';

const InvestmentTable = ({ investmentData }) => {
  const annualData = calculateInvestmentResults(investmentData);

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {annualData.map((yearData, index) => <InvestmentTableRow key={index} investmentData={yearData} />)}
      </tbody>
    </table>
  );
};

export default InvestmentTable;
