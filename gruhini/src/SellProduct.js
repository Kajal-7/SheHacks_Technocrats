import React from "react";
import Navbar from "./components/Navbar";
import SellJobForm from "./components/SellProduct/SellProductForm";
import Grid from "@mui/material/Grid";

const PostJob = () => {
  return (
    <div className="postJob">
      <Navbar />
      <div className="mt-5">
        <Grid container spacing={2}>
          <Grid className="m-5" item xs={6}>
            <SellJobForm />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default PostJob;
