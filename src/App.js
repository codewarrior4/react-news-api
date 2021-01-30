import Addbook from "./components/Addbook"
import BookList from "./components/Booklist"
import Navbar from "./components/Navbar"
import BookContextProvider from "./context/Bookcontext"

const App=()=> {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <BookList />
        <Addbook />
      </BookContextProvider>
    </div>
  );
}

export default App;
