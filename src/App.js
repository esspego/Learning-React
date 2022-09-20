
import './App.css';

import { Link, Route } from "wouter"
import Detail from 'pages/Detail';
import Home from 'pages/Home';
import SearchResults from 'pages/SearchResults';
import StaticContext from 'context/StaticContext';
import { GifsContextProvider } from 'context/GifsContextProvider';

function App() {
   
  return (
    <StaticContext.Provider value={{name:'test'}}>
      <div className="App">
        <section className="App-content">
          <Link to='/'>
            <h1>Logo</h1>
          </Link>
          <GifsContextProvider>
            <Route 
              component={Home}
              path="/"
            />
            <Route 
              component={SearchResults}
              path="/search/:keyword"
            /> 
            <Route 
              component={Detail}
              path="/gif/:id"
            />
          </GifsContextProvider>
        </section>
      </div>
    </StaticContext.Provider>
  );
}

export default App;
// NEXT CLASS: CSS Grid, Infinite Scroll y Testing