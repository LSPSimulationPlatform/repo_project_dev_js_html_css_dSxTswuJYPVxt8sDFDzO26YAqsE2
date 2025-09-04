import React, { useState } from "react";

function UserListPage({ onNavigate }) {
  const users = [
    { id: 1, name: "Alice Johnson", email: "alice@example.com", total_books_borrowed: 1 },
    { id: 2, name: "Bob Smith", email: "bob@example.com", total_books_borrowed: 1 },
    { id: 3, name: "Carol White", email: "carol@example.com", total_books_borrowed: 1 },
    { id: 4, name: "David Brown", email: "david@example.com", total_books_borrowed: 1 },
    { id: 5, name: "Eve Davis", email: "eve@example.com", total_books_borrowed: 0 },
  ];

  const [searchName, setSearchName] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(users);

  const handleSearch = () => {
    const filtered = users.filter(u =>
      u.name.toLowerCase().includes(searchName.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  return (
    <div style={{ backgroundColor: "#f4f4f4", width: 1000, borderRadius: 5, padding: 10, margin: "10px 20px" }}>
      <h1 style={{ color: "blue" }}>User List Page</h1>

      <input
        type="search"
        value={searchName}
        onChange={(e) => setSearchName(e.target.value)}
        placeholder="Search by name..."
        style={{
          padding: "5px 10px",
          borderRadius: 5,
          fontSize: 14,
          width: 200,
          marginBottom: 10,
          border: "1px solid gray"
        }}
      />
      <button
        onClick={handleSearch}
        style={{
          width: 100,
          padding: "5px 10px",
          borderRadius: 5,
          fontSize: 14,
          marginLeft: 10,
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          cursor: "pointer"
        }}
      >
        Search
      </button>

      <table style={{ width: "100%", borderCollapse: "collapse", border: "1px solid gray", marginTop: 10 }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid gray", padding: 8 }}>#</th>
            <th style={{ border: "1px solid gray", padding: 8 }}>Name</th>
            <th style={{ border: "1px solid gray", padding: 8 }}>Email</th>
            <th style={{ border: "1px solid gray", padding: 8 }}>Total Books Borrowed</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.length === 0 ? (
            <tr>
              <td colSpan="4" style={{ textAlign: "center", padding: 10 }}>No users found</td>
            </tr>
          ) : (
            filteredUsers.map((u, i) => (
              <tr key={u.id} style={{ backgroundColor: i % 2 === 0 ? "#f9f9f9" : "white" }}>
                <td style={{ border: "1px solid gray", padding: 8 }}>{i + 1}</td>
                <td style={{ border: "1px solid gray", padding: 8 }}>{u.name}</td>
                <td style={{ border: "1px solid gray", padding: 8 }}>{u.email}</td>
                <td style={{ border: "1px solid gray", padding: 8 }}>{u.total_books_borrowed}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <button
        onClick={() => onNavigate("main")}
        style={{ marginTop: 15, backgroundColor: "gray", color: "white", padding: "10px 20px", border: "none", borderRadius: 5, cursor: "pointer", fontSize: 16 }}
      >
        Back to Main Page
      </button>
    </div>
  );
}

export default UserListPage;
