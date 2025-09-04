import React from "react";

function MainPage({ onNavigate, books }) {
  return (
    <div
      style={{
        backgroundColor: "#f4f4f4",
        width: 600,
        borderRadius: 5,
        padding: 20,
        margin: "20px auto",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ color: "blue" }}>Main Page</h1>

      <button
        onClick={() => onNavigate("create")}
        style={{
          marginBottom: 10,
          padding: "10px 20px",
          border: "none",
          borderRadius: 5,
          cursor: "pointer",
          backgroundColor: "blue",
          color: "white",
        }}
      >
        Add New Book
      </button>

      <button
        onClick={() => onNavigate("userlist")}
        style={{
          marginLeft: 10,
          padding: "10px 20px",
          border: "none",
          borderRadius: 5,
          cursor: "pointer",
          backgroundColor: "green",
          color: "white",
        }}
      >
        User List
      </button>

      <button
        onClick={() => onNavigate("loanlist")}
        style={{
          marginLeft: 10,
          padding: "10px 20px",
          border: "none",
          borderRadius: 5,
          cursor: "pointer",
          backgroundColor: "orange",
          color: "white",
        }}
      >
        Loan List
      </button>

      <h2 style={{ marginTop: 20 }}>Books Added:</h2>
      {books.length === 0 ? (
        <p>No books added yet.</p>
      ) : (
        <ul>
          {books.map((b, index) => (
            <li key={index}>
              {b.bookTitle} - {b.bookAuthor} ({b.bookStatus})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MainPage;
