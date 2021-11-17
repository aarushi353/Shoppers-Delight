import React from "react";
import {signUp} from "../Api";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

const Signup = () => {
   
   const [email, setEmail] = React.useState();
   const [password, setPassword] = React.useState();
   const [fname,setFirstName]=React.useState();
   const [lname,setLastName]=React.useState();
   const [loading,setLoading] = React.useState();

   const history = useHistory();

   const formSubmitHandler =async(e) => {
     setLoading(true);

     await signUp({email, password, fname, lname})
     .then((res)=>{
        setLoading(false);
        history.push("/");
     })
     .catch((e) => {
       setLoading(false);
     });
   };

   if(loading){
     return(
       <span>Loading.....</span>
     );
   }
   else{
return(
<div
    style={{
      display: "flex",
      flexDirection: "column",
      marginTop: 50,
      color: "#dc3545",
    }}
  >
    <center>
      <h1 className="para">Join Now</h1>
    </center>
   
        <form
          style={{ color: "white", alignSelf: "center", marginTop: 30 }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <input
              placeholder="FirstName"
              htmlFor="text"
              className="mb-3"
              onChange={(e) => setFirstName(e.target.value)}
              style={{ width: 270, backgroundColor: "white" }}
              required
            />
            <input
              placeholder="Last Name"
              htmlFor="text"
              className="mb-3"
              onChange={(e) => setLastName(e.target.value)}
              style={{ width: 270, backgroundColor: "white" }}
              required
            />
            <input
              placeholder="Email"
              htmlFor="email"
              className="mb-3"
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: 270, backgroundColor: "white" }}
              required
            />
            <input
              placeholder="Password"
              type="password"
              htmlFor="password"
              required
              onChange={(e) => setPassword(e.target.value)}
              className="mb-3"
              required
              style={{ width: 270, backgroundColor: "white" }}
            />
            <button onClick={formSubmitHandler} className="button">
              Submit
            </button>
            <div className="text-center mt-4" style={{color: "#dc3545"}}>Already have an account? Click here to <Link to="/login">SignIn</Link></div>
          </div>
        </form>
  </div>
   );   
  }
  
  };

export default Signup;
