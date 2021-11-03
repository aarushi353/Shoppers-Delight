import React from "react";
import {signIn} from "../Api";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

const Login = () => {
   const history = useHistory();
   const [email, setEmail] = React.useState();
   const [password, setPassword] = React.useState();
   const [loading,setLoading] = React.useState();
   

   const formSubmitHandler = async(e) => {
     setLoading(true);

     e.preventDefault();

     await signIn({email, password})
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
      <h1 className="para">Welcome Back!</h1>
    </center>
   
        <form
          style={{ color: "white", alignSelf: "center", marginTop: 30 }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
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
            <div className="text-center mt-4" style={{color: "#dc3545"}}>Don't an account? Click here to <Link to="/signup">Register</Link></div>
          </div>
        </form>
  </div>
   );   
  }
  
  };

export default Login;
