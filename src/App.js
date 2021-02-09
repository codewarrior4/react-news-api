import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import All from "./components/All"
import Countries from "./components/Countries"
import Sources from "./components/Sources"
import {useEffect} from "react"
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import NewscontextProvider from "./context/Newscontext"


const App=()=> {
  
  return (
    <BrowserRouter>
      <div className="App">
        <NewscontextProvider>
        <Navbar />
          <Switch>
            <Home exact path="/" component={Home} />
            <All path="/" component={All} />
            <Countries path="/" component={Countries} />
            <Sources path="/" component={Sources} />
          </Switch>
        <Footer />
        </NewscontextProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
