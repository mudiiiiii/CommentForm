import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import auth from "./auth";


const CommentsForm = ({studentEmail, onCommentUpdate}) => {
  const [comments, setComments] = useState("");
  const [courseCode, setCourseCode] = useState("");
  const [courseName, setCourseName] = useState("");
  const [email, setEmail] = useState();
  const [error, setError] = useState("");

  const history = useHistory();

  //checking if a user is logged in
  useEffect(() => {
    const loggedInUser = auth.getToken();
   
  //if logged in user token is not null then the user is logged in
   if (loggedInUser!=="") {
        setEmail(loggedInUser);
    }
},[]);
  //prevent input fields from being unfilled
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!comments || !courseCode || !courseName) {
      setError("Please fill in all the required fields");
    } else {
      // send a request to your server with the student's comments, course code, course name and email
      onCommentUpdate(comments);

      // after the server has successfully processed the comments, redirect the user to the Thank You form
      history.push("/thankYouForm");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", }}>
      <input 
        placeholder="Course Code:"
        value={courseCode}
        onChange={(e) => setCourseCode(e.target.value)}
        style={{ height: "35px", width: "350px", margin: "10px 0" }}
      />
      <input 
        placeholder="Course Name:"
        value={courseName}
        onChange={(e) => setCourseName(e.target.value)}
        style={{ height: "35px", width: "350px", margin: "10px 0" }}
      />
      <div>
					<label>Student Email:       </label>
					<input type="text" defaultValue={email} disabled = {true} />
		 </div>
   
      <textarea
        placeholder="Enter your comments"
        value={comments}
        onChange={(e) => setComments(e.target.value)}
        style={{ height: "65px", width: "650px", margin: "10px 0" }}
      />
      {error && <p>{error}</p>}
      <button type="submit" style={{ height: "40px", width: "100px", margin: "10px 0" }}>Submit</button>
       </form>
  );
};

export default CommentsForm;
