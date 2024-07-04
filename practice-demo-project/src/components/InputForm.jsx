const InputForm = ({ onChangeInput }) => {
  return (
    <div id="user-input">
      <div className="input-group">
        <div>
          <label htmlFor="initial-investment">Initial Investment</label>
          <input type="number" id="initial-investment" onChange={(event) => onChangeInput(event.target.value, 'initialInvestment')} />
        </div>
        <div>
          <label htmlFor="annual-investment">Annual Investment</label>
          <input type="number" id="annual-investment" onChange={(event) => onChangeInput(event.target.value, 'annualInvestment')} />
        </div>
      </div>
      <br />
      <div className="input-group">
        <div>
          <label htmlFor="expected-return">Expected Return</label>
          <input type="number" id="expected-return" onChange={(event) => onChangeInput(event.target.value, 'expectedReturn')} />
        </div>
        <div>
          <label htmlFor="duration">Duration</label>
          <input type="number" id="duration" onChange={(event) => onChangeInput(event.target.value, 'duration')} />
        </div>
      </div>
    </div>
  );
};

export default InputForm;
