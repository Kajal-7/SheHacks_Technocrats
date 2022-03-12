import React from "react";
import Navbar from "./components/Navbar";
import SellProductForm from "./components/SellProduct/SellProductForm";
import Grid from "@mui/material/Grid";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "./data/firebase";
import { useAuthContext } from "./data/auth";
import { useEffect, useState } from "react";
import YourProducts from './components/SellProduct/YourProducts'

const PostJob = () => {

  const colRef = collection(db, "sellProducts");
  const [arr, setArr] = useState(null);
  const { user } = useAuthContext();
  // const [myJobs, setMyJobs] = useState([]);
  // const [show, setShow] = useState(false);
  
  // const handleClick = () => {
  //   setShow(!show);
  // };
  
  useEffect(() => {
    let temp = [];
    const docRef = doc(db, "users", user.uid);
    getDoc(docRef)
      .then((doc) => {
        return doc.data().product
      })
      .then(
        (myPros) => {
          myPros.forEach((pid) => {
            getDoc(doc(colRef, pid)).then((snap) => {
              temp.push(snap.data());
            });
          })
        }
      );   
    setArr(temp);
    console.log(arr)
  }, [])  

  return (
    <div className="postJob">
      <Navbar />
      <div className="mt-5">
      <Grid container spacing={2}>
          <Grid item xs={12} md={12} sm={12} lg={6}>
            <div style={{ margin: "50px" }}>
              <p className="textField" style={{ fontSize: "21px" }}>
                Post your Products here!
              </p>
              <p style={{ fontSize: "18px" }}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
                aut vero architecto sit nobis quos error consectetur, enim
                aliquid accusamus laboriosam magni libero modi at minima fuga
                ea. Quisquam, quasi!
              </p>
            </div>
            <div style={{ margin: "50px" }}>
              <SellProductForm />
            </div>
          </Grid>
          <Grid item xs={6}>
            {/* <p className='textField' style={{ fontSize: "21px"}}>Jobs posted by you</p> */}
            { arr ? <YourProducts arr={arr}/> : 'You did not post any jobs'  }
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default PostJob;
