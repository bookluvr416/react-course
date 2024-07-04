import { useState } from 'react';
import Header from './components/Header';
import InputForm from './components/InputForm';
import InvestmentTable from './components/InvestmentTable';

const STARTING_INVESTMENT_DATA = {
  initialInvestment: 0,
  annualInvestment: 0,
  expectedReturn: 0,
  duration: 0,
};

function App() {
  const [investmentData, setInvestmentData] = useState(STARTING_INVESTMENT_DATA);

  const handleChangeInput = (value, type) => {
    setInvestmentData(prevState => (
      {
        ...prevState,
        [type]: parseFloat(value),
      }
    ));
  };

  return (
    <>
      <Header />
      <InputForm onChangeInput={handleChangeInput} />
      <InvestmentTable investmentData={investmentData} />
    </>
  )
}

export default App
