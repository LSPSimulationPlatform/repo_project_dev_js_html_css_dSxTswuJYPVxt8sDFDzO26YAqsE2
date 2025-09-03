import React from "react";
function BookCreate() {

  return (
    <div style = {{
        backgroundColor: "#f4f4f4",       
        width: 600,                        
        borderRadius: 5,                   
        padding: "20px 40px 20px 20px",    
        margin: "10px auto",              
        fontFamily: "Arial, sans-serif",  
      }}>

      <h1 style={{ color: "blue" }}> Book Create Page</h1>

      <label> Book Title</label><br />
      <input type="text"
        placeholder="Book Title"
        style={{ width: "100%",padding: 8,marginBottom: 15         
        }}
      /><br />

      <label>Book Author</label><br />
      <input
        type="text"
        placeholder="Book Author"
        style={{
          width: "100%",          
          padding: 8,           
          marginBottom: 15        
        }}
      /><br />

      <label>Publication Year</label><br />
      <input
        type="text"
        style={{
          width: "100%",          
          padding: 8,              
          marginBottom: 15      
        }}
      /><br />

      <label>Book Description</label><br />
      <textarea
        placeholder="Book Description"
        rows={4}
        style={{
          width: "100%",          
          padding: 8,              
          marginBottom: 20         
        }}
      ></textarea><br />

        <label>Book Status</label><br />
      <select style={{
          width: "100%",           
          padding: 8,              
          marginBottom: 15   }}    
      >
        <option>available</option>
        <option>borrowed</option>
       
      </select><br />

      <button
        style={{
          backgroundColor: "blue",   
          color: "white",            
          padding: "10px 20px",     
          border: "none",            
          borderRadius: 5,           
          cursor: "pointer",        
          fontSize: 16              
        }}>  Save </button>

    

    </div>
  );
}

export default BookCreate;

  