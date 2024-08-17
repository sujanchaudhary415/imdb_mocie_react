import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Header from './Components/Header/Header.jsx'
import Home from './Pages/Home.jsx';
import MovieList from './Components/MovieList/MovieList.jsx';
function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Routes>
          <Route index element={<Home/>}></Route>
          <Route path='movie/:id'element={<h2>movie detail page</h2>}></Route>
          <Route path='movies/:type'element={<MovieList/>}></Route>
          <Route path='/*' element={<h1>error page</h1>}></Route>
       </Routes>
      </Router>
    </div>
  );
}

export default App;
