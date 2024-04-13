import { Link } from 'react-router-dom';
const DefaultProfile = () => {
  return (
    <>
      <p>this the Default Child</p>
      <div>
        <Link to='/profile/popeye'>this Popeye</Link>
      </div>
      <div>
        <Link to='/profile/spinach'>this Spinach</Link>
      </div>
    </>
  );
};

export default DefaultProfile;
