import './App.css';
import { Button } from 'react-bootstrap';
import Header from './Components/Header/Header';
import News from './Components/News/News';
import TopHeadline from './Components/TopHeadLine/TopHeadline';
function App() {
  return (
    <div className="App">
        <Header></Header>
        <TopHeadline></TopHeadline>
        <News></News>
    </div>
  );
}

export default App;
