import React from "react";
import { addProduct } from "../Api";
import { useHistory } from "react-router";
import "../assets/css/Buttons.css";
const Adminpage = () => {

  const [loading, setLoading] = React.useState();
  const [title, setTitle] = React.useState();
  const [description, setDescription] = React.useState();
  const [sellingamount, setSellingamount] = React.useState();
  const [actualamount, setActualamount] = React.useState();
  const [discount, setDiscount] = React.useState();
  const [category, setCategory] = React.useState();
  const [image, setImage] = React.useState();
  
  const history = useHistory();

  const formSubmitHandler =async(e) => {
    setLoading(true);

    await addProduct({title,description,sellingamount,actualamount, discount, category,image})
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
  
  return (
    <>
      <center>
        <div 
        style={{
        display: "flex",
        flexDirection: "column",
        marginTop: 50,
        color: "#dc3545",
    }}>
          <p className="para">
            <strong>Add Your Product!</strong>
          </p>
          <form
          style={{ color: "white", alignSelf: "center", marginTop: 30 }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <input
              placeholder="Title"
              htmlFor="text"
              className="mb-3"
              onChange={(e) => setTitle(e.target.value)}
              style={{ width: 270, backgroundColor: "white" }}
              required
            />
            <input
              placeholder="Actual Amount"
              htmlFor="text"
              className="mb-3"
              onChange={(e) => setActualamount(e.target.value)}
              style={{ width: 270, backgroundColor: "white" }}
              required
            />
            <input
              placeholder="Selling Amount"
              htmlFor="text"
              className="mb-3"
              onChange={(e) => setSellingamount(e.target.value)}
              style={{ width: 270, backgroundColor: "white" }}
              required
            />
            <input
              placeholder="Discount"
              htmlFor="number"
              className="mb-3"
              onChange={(e) => setDiscount(e.target.value)}
              style={{ width: 270, backgroundColor: "white" }}
              required
            />
            <input
              placeholder="Description"
              htmlFor="text"
              className="mb-3"
              onChange={(e) => setDescription(e.target.value)}
              style={{ width: 270, backgroundColor: "white" }}
              required
            />
            <input
              placeholder="Category"
              htmlFor="text"
              className="mb-3"
              onChange={(e) => setCategory(e.target.value)}
              style={{ width: 270, backgroundColor: "white" }}
              required
            />
            <input
              placeholder="Image file"
              type="image"
              className="mb-3"
              onChange={(e) => setImage(e.target.value)}
              style={{ width: 270, backgroundColor: "white" }}
              required
            />
           
           <button onClick={formSubmitHandler} className="button">
              Submit
            </button>
          </div>
        </form>
        </div>
      </center>
    </>
  );
  }
}

export default Adminpage;
