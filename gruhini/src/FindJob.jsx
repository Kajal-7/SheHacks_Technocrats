import * as React from "react";
import Cards from "./components/FindJob/CardSnippet";
import Box from "@mui/material/Box";
import Navbar from "./components/Navbar";
import "./style/Filter.css";

const drawerWidth = 240;

function FindJob() {
  return (
    <div className="ms-4 me-5">
      <Navbar />
      <div className="mt-5">
        <Box sx={{ display: "flex" }}>
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              p: 3,
              width: { sm: `calc(100% - ${drawerWidth}px)` },
            }}
          >
            <h2 className="mt-3 mb-0 tri-color">
              <em>
                Opportunities are waiting! Just grab them, find the job that suits
                you the best!
              </em>
            </h2>
            <Cards />
          </Box>
        </Box>
      </div>
    </div>
  );
}

export default FindJob;
