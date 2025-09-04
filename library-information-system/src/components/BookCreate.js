import React, { useState } from "react";

function BookCreate({ onAddBook, onNavigate }) {
  const [bookTitle, setBookTitle] = useState("");
  const [bookAuthor, setBookAuthor] = useState("");
  const [publicationYear, setPublicationYear] = useState("");
  const [bookDescription, setBookDescription] = useState("");
  const [bookStatus, setBookStatus] = useState("available");

  const saveBook = () => {
    if (!bookTitle || !bookAuthor) {
      alert("Book title and author are required.");
      return;
    }

    const newBook = { bookTitle, bookAuthor, publicationYear, bookDescription, bookStatus };
    onAddBook(newBook);
    alert("Book added successfully!");

    setBookTitle("");
    setBookAuthor("");
    setPublicationYear("");
    setBookDescription("");
    setBookStatus("available");

    onNavigate("main");
  };

  return (
    <div
      style={{
        backgroundColor: "#f4f4f4",
        width: 600,
        borderRadius: 5,
        padding: "20px 40px 20px 20px",
        margin: "10px auto",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ color: "blue" }}>Book Create Page</h1>

      <label>Book Title</label>
      <br />
      <input type="text" value={bookTitle} onChange={(e) => setBookTitle(e.target.value)} placeholder="Book Title" style={{ width: "100%", padding: 8, marginBottom: 15 }} />
      <br />

      <label>Book Author</label>
      <br />
      <input type="text" value={bookAuthor} onChange={(e) => setBookAuthor(e.target.value)} placeholder="Book Author" style={{ width: "100%", padding: 8, marginBottom: 15 }} />
      <br />

      <label>Publication Year</label>
      <br />
      <input type="text" value={publicationYear} onChange={(e) => setPublicationYear(e.target.value)} style={{ width: "100%", padding: 8, marginBottom: 15 }} />
      <br />

      <label>Book Description</label>
      <br />
      <textarea value={bookDescription} onChange={(e) => setBookDescription(e.target.value)} placeholder="Book Description" rows={4} style={{ width: "100%", padding: 8, marginBottom: 15 }}></textarea>
      <br />

      <label>Book Status</label>
      <br />
      <select value={bookStatus} onChange={(e) => setBookStatus(e.target.value)} style={{ width: "100%", padding: 8, marginBottom: 15 }}>
        <option>available</option>
        <option>borrowed</option>
      </select>
      <br />

      <button onClick={saveBook} style={{ backgroundColor: "blue", color: "white", padding: "10px 20px", border: "none", borderRadius: 5, cursor: "pointer", fontSize: 16, marginRight: 10 }}>Save</button>
      <button onClick={() => onNavigate("main")} style={{ marginTop: 15, marginLeft: 15, backgroundColor: "gray", color: "white", padding: "10px 20px", border: "none", borderRadius: 5, cursor: "pointer", fontSize: 16 }}>Back to Main Page</button>
    </div>
  );
}

export default BookCreate;
