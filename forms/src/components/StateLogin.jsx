import { useState } from 'react';
import Input from './Input';

export default function Login() {
  const [formInput, setFormInput] = useState({
    email: '',
    password: '',
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false
  });

  const emailIsInValid =  didEdit.email && !formInput.email.includes('@');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formInput);
  }

  const handleInputChange = (value, identifier) => {
    setFormInput((prevValues) => ({
      ...prevValues,
      [identifier]: value,
    }));
    setDidEdit(prevValues => ({
      ...prevValues,
      [identifier]: false,
    }));
  }

  const handleInputBlur = (identifier) => {
    setDidEdit(prevValues => ({
      ...prevValues,
      [identifier]: true,
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          onChange={(event) => handleInputChange(event.target.value, 'email')}
          value={formInput.email}
          onBlur={() => handleInputBlur('email')}
          error={emailIsInValid && 'Please enter a valid email.'}
        />

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onChange={(event) => handleInputChange(event.target.value, 'password')}
          onBlur={() => handleInputBlur('password')}
          value={formInput.password} 
          error={null}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
