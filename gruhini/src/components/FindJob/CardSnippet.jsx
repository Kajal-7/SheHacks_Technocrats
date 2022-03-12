import React, { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import EventAvailableOutlinedIcon from "@mui/icons-material/EventAvailableOutlined";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import AccessTimeFilledOutlinedIcon from "@mui/icons-material/AccessTimeFilledOutlined";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Star from "./Star";
import "../../style/FindJob.css";
import WorkIcon from "@mui/icons-material/Work";
import data from "./data";
import Filter from "./Filter";
import Popup from "./Popup";

export default function CardSnippet() {
  const [arr, setarray] = useState(data);
  const [locFilter, setlocFilter] = useState("");
  const [catgfilter, setcatgfilter] = useState("");
  const [isParttimeselected, setPartTime] = useState(true);
  const [isFulltimeselected, setFullTime] = useState(true);
  console.log(locFilter);
  console.log(catgfilter);

  const handleFilters = () => {
    let data1 = [];
    const l = data.length;
    console.log(l);
    if (locFilter == "" && catgfilter == "") {
      data1 = data;
    } else if (locFilter != "" && catgfilter == "") {
      for (let i = 0; i < l; i++) {
        if (
          data[i].location.toString().toLowerCase() ==
          locFilter.toString().toLowerCase()
        )
          data1.push(data[i]);
      }
    } else if (locFilter == "" && catgfilter != "") {
      for (let i = 0; i < l; i++) {
        if (
          data[i].jobName.toString().toLowerCase() ==
          catgfilter.toString().toLowerCase()
        )
          data1.push(data[i]);
      }
    } else if (locFilter != "" && catgfilter != "") {
      for (let i = 0; i < l; i++) {
        if (
          data[i].location.toString().toLowerCase() ==
            locFilter.toString().toLowerCase() &&
          data[i].jobName.toString().toLowerCase() ==
            catgfilter.toString().toLowerCase()
        )
          data1.push(data[i]);
      }
    }
    //console.log(data1);
    setarray(data1);
    // console.log(arr);
    console.log("hello filters applied");
  };
  const [searchText, setSearchText] = useState("");
  const handleSearch = (event) => {
    setSearchText(event.target.value);
    let dataSearch = data.filter((item) => {
      return Object.keys(item).some((key) =>
        item[key]
          .toString()
          .toLowerCase()
          .includes(searchText.toString().toLowerCase())
      );
    });
    setarray(dataSearch);
  };

  return (
    <div>
      <Filter
        locFilter={locFilter}
        catgfilter={catgfilter}
        searchText={searchText}
        onLocSet={setlocFilter}
        onCatgSet={setcatgfilter}
        onSave={handleFilters}
        onSearch={handleSearch}
      />
      <Grid container spacing={5}>
        {arr.map((item) => {
          return (
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <Box sx={{ minWidth: 275 }}>
                <Card variant="outlined">
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.jobName}
                    </Typography>
                    <Typography variant="h6">{item.title}</Typography>
                    <Star />
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
                    <div className="info" style={{ display: "inline-block" }}>
                      <div className="tag" style={{ display: "inline-flex" }}>
                        <WorkIcon />
                        Job Type
                      </div>
                      <div className="value">{item.type}</div>
                    </div>
                    <Popup
                      name={item.title}
                      desc={item.jobName}
                      image={item.Duration}
                      email={item.jobName}
                      phone={item.PhoneNo}
                      loc={item.location}
                      cost={item.Salary}
                    />
                  </CardContent>
                </Card>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
