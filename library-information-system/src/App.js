import React, { useState } from "react";
import MainPage from "./components/MainPage";
import BookCreate from "./components/BookCreate";
import UserListPage from "./components/UserListPage";
import LoanListPage from "./components/LoanListPage";

function App() {
  const [currentPage, setCurrentPage] = useState("main");
  const [books, setBooks] = useState([]);

  const handleAddBook = (book) => {
    setBooks([...books, book]);
  };

  return (
    <div>
      {currentPage === "main" && (
        <MainPage onNavigate={setCurrentPage} books={books} />
      )}
      {currentPage === "create" && (
        <BookCreate onAddBook={handleAddBook} onNavigate={setCurrentPage} />
      )}
      {currentPage === "userlist" && (
        <UserListPage onNavigate={setCurrentPage} />
      )}
      {currentPage === "loanlist" && (
        <LoanListPage onNavigate={setCurrentPage} />
      )}
    </div>
  );
}

export default App;
