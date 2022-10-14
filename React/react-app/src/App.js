import logo from './logo.svg';
import './App.css';
import LoginControl from './LoginControl';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Greeting from './Greeting';

function App() {
  const me = {
    name: "Aysha",
    age: "28"
  }
  return (
    <div> 
      <LoginControl/>
      <LoginButton/>
      <LogoutButton/>
      <Greeting/>
    </div>
  );
}
  
export default App;
