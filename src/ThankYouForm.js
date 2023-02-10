import auth from "./auth";
import React, { useState, useEffect }  from 'react';

//update the email to user's actions
const ThankYouForm = (studentEmail) => {
    const [email, setEmail] = useState();

    //checking if an email was returned to update the email state
    useEffect(() => {
        const loggedInUser = auth.getToken();
       if (loggedInUser!=="") {
            setEmail(loggedInUser);
        }
    },[]);

    //return thank you statement using inline styles
    return (
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          padding: '20px'
        }}>
          <h1 style={{ margin: 0 }}>Thank you {email}</h1>
          <p style={{ margin: '10px 0', textAlign: 'center' }}>
            We appreciate your comments: {studentEmail.studentComment}
          </p>
        </div>
      );
}
 
export default ThankYouForm;