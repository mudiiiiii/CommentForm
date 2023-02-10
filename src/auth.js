//authentication status of the student 
const auth = {
    isLoggedIn : false, //set to false
    studentEmail: '', //set to empty string

    //to update the component's state to reflect that the student is now logged in
    onAuthentication(loginEmail) {
        this.isLoggedIn = true;
        this.studentEmail = loginEmail; 
    },

    //to get the student email
    getStudentEmail() {
        return this.studentEmail;
    },

    //checking the login status of a student
    getLogInStatus(){
        return this.isLoggedIn;
    },

    //returning the token object that will be used for authentication purposes
    getToken() {
        const tokenString = localStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
     
        return userToken;
    },

    //saving the token parameter in a local storage
    saveToken(userToken) {
        console.log('user email -> ', userToken);
        localStorage.setItem('token', JSON.stringify(userToken));
    }

    
}
 
export default auth;