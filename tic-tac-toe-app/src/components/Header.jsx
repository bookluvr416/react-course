import img from '../assets/game-logo.png';

const Header = () => {
  return (
    <header>
      <img src={img} alt="Tic tac toe game board" />
      <h1>React Tic-Tac-Toe</h1>
    </header>
  )
};

export default Header;
