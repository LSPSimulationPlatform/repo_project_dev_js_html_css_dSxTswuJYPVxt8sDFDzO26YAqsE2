import { useState } from "react"; 
import BookCreate from "./components/BookCreate"; 

function App() {
  
  const [books, setBooks] = useState([]);


  const addBook = (newBook) => {
    console.log("New Book", newBook); 
    setBooks((prev) => [...prev, newBook]); 
  };


  return (
    <div>
      <BookCreate onAddBook={addBook} />
    </div>
  );
}

export default App; 