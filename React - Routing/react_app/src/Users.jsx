import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const User = () => {
  const {id} = useParams();
  return (
    <>
    <h1>Users</h1>
    <strong>Select a user:</strong>
    <ul>
        <li>
            <Link to="/user/1">User 1</Link>
        </li>
        <li>
            <Link to="/user/2">User 2</Link>
        </li>
        <li>
            <Link to="/user/3">User 3</Link>
        </li>
    </ul>
    <p>{id}</p>
    </>
  );
}

export default User;