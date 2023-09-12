import logo from './logo.svg';
import './App.css';
import MyNavbar from './components/nav/navbar';
import homepageLinks from './components/nav/homepageLinks';

function App() {


  return (
    <div>
        <MyNavbar title="Homepage" links={homepageLinks} />
    </div>
  );
}

export default App;
