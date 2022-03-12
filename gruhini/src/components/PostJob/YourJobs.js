import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Typography from "@mui/material/Typography";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import EventAvailableOutlinedIcon from "@mui/icons-material/EventAvailableOutlined";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import AccessTimeFilledOutlinedIcon from "@mui/icons-material/AccessTimeFilledOutlined";
import Button from "@mui/material/Button";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../../data/firebase";
import { useAuthContext } from "../../data/auth.js";
import { useEffect, useState } from "react";
// import MyCard from './CardSnippet';

const YourJobs = ({arr}) => {
    
  return (
    <Grid container spacing={5}>
                
        {arr.map((item) => {
          return (
            <Grid item xs={12} sm={12} md={6} lg={8}>
              <Card className="card">
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.jobName}
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    {item.title}
                  </Typography>

                  <div>
                    <div className="info" style={{ display: "inline-block" }}>
                      <div className="tag" style={{ display: "inline-flex" }}>
                        <LocationOnOutlinedIcon /> {item.location}
                      </div>
                    </div>
                    <div className="info" style={{ display: "inline-block" }}>
                      <div className="tag" style={{ display: "inline-flex" }}>
                        <PhoneInTalkOutlinedIcon />
                        {item.PhoneNo}
                      </div>
                    </div>
                  </div>
                  <div className="info" style={{ display: "inline-block" }}>
                    <div className="tag" style={{ display: "inline-flex" }}>
                      <EventAvailableOutlinedIcon /> Duration
                    </div>
                    <div className="value">{item.Duration}</div>
                  </div>
                  <div className="info" style={{ display: "inline-block" }}>
                    <div className="tag" style={{ display: "inline-flex" }}>
                      <PaidOutlinedIcon />
                      Stipend   
                    </div>
                    <div className="value">{item.Salary}</div>
                  </div>
                  <div className="info" style={{ display: "inline-block" }}>
                    <div className="tag" style={{ display: "inline-flex" }}>
                      <AccessTimeFilledOutlinedIcon />
                      Apply by
                    </div>
                    <div className="value">{item.Deadline}</div>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
    </Grid>
  );
};

export default YourJobs;
