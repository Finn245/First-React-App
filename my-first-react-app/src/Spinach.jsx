import { Link } from 'react-router-dom';

const Spinach = () => {
  return (
    <>
      <p>Hi, I am Spinach! Popeye loves to eat me!</p>
      <div>
        <Link to='/'>Click here to go back</Link>
      </div>
      <div>
        <Link to='/profile/:name'>Click here to go back to Default Child</Link>
      </div>
    </>
  );
};

export default Spinach;
