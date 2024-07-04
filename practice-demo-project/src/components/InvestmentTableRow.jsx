import { formatter } from '../util/investment';

const InvestmentTableRow = ({ investmentData }) => {
  const formatNumber = (number) => formatter.format(Math.floor(number));

  return (
    <tr>
      <td>{investmentData.year}</td>
      <td>{formatNumber(investmentData.valueEndOfYear)}</td>
      <td>{formatNumber(investmentData.interestEarnedInYear)}</td>
      <td>{formatNumber(investmentData.totalInterest)}</td>
      <td>{formatNumber(investmentData.investedCapital)}</td>
    </tr>
  )
};

export default InvestmentTableRow;
