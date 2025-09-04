import React, { useState } from "react";

function LoanListPage({ onNavigate }) {
  const users = [
    { id: 1, name: "Alice Johnson" },
    { id: 2, name: "Bob Smith" },
    { id: 3, name: "Carol White" },
    { id: 4, name: "David Brown" },
    { id: 5, name: "Eve Davis" },
  ];

  const initialLoans = [
    { id: 1, user_id: 1, book_title: "Clean Code", borrowed_at: "2025-06-01", returned_at: null },
    { id: 2, user_id: 2, book_title: "Refactoring", borrowed_at: "2025-05-10", returned_at: "2025-06-05" },
    { id: 3, user_id: 3, book_title: "Agile", borrowed_at: "2025-06-03", returned_at: null },
    { id: 4, user_id: 4, book_title: "Design Patterns", borrowed_at: "2025-05-20", returned_at: "2025-06-10" },
  ];

  const [selectedUserId, setSelectedUserId] = useState("");
  const [loans, setLoans] = useState(initialLoans);

  const handleReturn = (loanId) => {
    setLoans((prevLoans) =>
      prevLoans.map((loan) =>
        loan.id === loanId ? { ...loan, returned_at: new Date().toISOString().slice(0, 10) } : loan
      )
    );
    const returnedLoan = loans.find((loan) => loan.id === loanId);
    alert(`${returnedLoan.book_title} has been returned!`);
  };

  const filteredLoans = loans.filter((loan) => loan.user_id === parseInt(selectedUserId));

  return (
    <div style={{ backgroundColor: "#f4f4f4", width: 1000, borderRadius: 5, padding: 20, margin: "10px 20px" }}>
      <h1 style={{ color: "blue" }}>User Loan Page</h1>

      <label>Select User:</label>
      <br />
      <select
        value={selectedUserId}
        onChange={(e) => setSelectedUserId(e.target.value)}
        style={{ padding: "5px 10px", borderRadius: 5, fontSize: 14, marginBottom: 10, border: "1px solid gray" }}
      >
        <option value="">--Select User--</option>
        {users.map((u) => (
          <option key={u.id} value={u.id}>{u.name}</option>
        ))}
      </select>

      <table style={{ width: "100%", borderCollapse: "collapse", border: "1px solid gray", marginTop: 10 }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid gray", padding: 8 }}>#</th>
            <th style={{ border: "1px solid gray", padding: 8 }}>Book Title</th>
            <th style={{ border: "1px solid gray", padding: 8 }}>Borrowed Date</th>
            <th style={{ border: "1px solid gray", padding: 8 }}>Returned Date / Status</th>
            <th style={{ border: "1px solid gray", padding: 8 }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredLoans.length === 0 ? (
            <tr>
              <td colSpan="5" style={{ textAlign: "center", padding: 10 }}>No loans found</td>
            </tr>
          ) : (
            filteredLoans.map((loan, index) => (
              <tr key={loan.id} style={{ backgroundColor: index % 2 === 0 ? "#f9f9f9" : "white" }}>
                <td style={{ border: "1px solid gray", padding: 8 }}>{index + 1}</td>
                <td style={{ border: "1px solid gray", padding: 8 }}>{loan.book_title}</td>
                <td style={{ border: "1px solid gray", padding: 8 }}>{loan.borrowed_at}</td>
                <td style={{ border: "1px solid gray", padding: 8, color: loan.returned_at ? "green" : "red" }}>
                  {loan.returned_at ? loan.returned_at : "Not Returned"}
                </td>
                <td style={{ border: "1px solid gray", padding: 8 }}>
                  {!loan.returned_at && (
                    <button
                      onClick={() => handleReturn(loan.id)}
                      style={{ backgroundColor: "#28a745", color: "white", border: "none", borderRadius: 5, padding: "5px 10px", cursor: "pointer" }}
                    >
                      Return
                    </button>
                  )}
                </td>
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

export default LoanListPage;
