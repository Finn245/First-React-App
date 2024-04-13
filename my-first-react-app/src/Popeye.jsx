import { Link } from 'react-router-dom';

const Popeye = () => {
  return (
    <>
      <p>Hi, I am Popeye! I love to eat Spinach!</p>
      <div>
        <Link to='/'>Click here to go back to home</Link>
      </div>
      <div>
        <Link to='/profile/:name'>Click here to go back to Default Child</Link>
      </div>
    </>
  );
};

export default Popeye;
