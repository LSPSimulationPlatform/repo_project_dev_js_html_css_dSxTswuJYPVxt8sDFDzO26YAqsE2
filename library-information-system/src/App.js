
import React, { useState } from "react";
import MainPage from "./components/MainPage";
import BookCreate from "./components/BookCreate"; 

function App() {
  const [currentPage, setCurrentPage] = useState("main");

  const [books, setBooks] = useState([]);

  const addBook = (newBook) => {
    setBooks((prev) => [...prev, newBook]);
  };

  let pageContent;

  switch (currentPage) {
    case "create":
      pageContent = (
        <BookCreate onAddBook={addBook} onNavigate={setCurrentPage} />
      );
      break;

    default:
  
      pageContent = <MainPage onSelectPage={setCurrentPage} />;
  }

  return (<div>{pageContent}</div>);
}

export default App;