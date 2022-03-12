import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CardActions from "@mui/material/CardActions";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ShareIcon from "@mui/icons-material/Share";
import data from "./data";
import { useState } from "react";
import search from "../../assets/search.png";

export default function CardSnippet(props) {

  const [filter, setFilter] = useState("");
  const searchText=(event)=>{
        setFilter(event.target.value);
  }
  let dataSearch= data.cardData.filter(item=>{
        return Object.keys(item).some(key=>
          item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
          )
  });
  return (
    <div>
      <form class="input-group">
        <input
          type="text"
          class="form-control"
          id="city-search"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
          placeholder="Search "
          autocomplete="off"
          value={filter}
          onChange={searchText.bind(this)}
        />
        <button class="button" onClick={ (e) => {e.preventDefault()} }>
          <img src={search} width="30px" />
        </button>
      </form>
      <Grid container spacing={10}>
        {dataSearch.map((item, index) => {
          return (
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <Card
                style={{ backgroundColor: item.colorName }}
                sx={{ pt: 3, px: 1 }}
              >
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <CardMedia
                    component="img"
                    sx={{ width: 100 }}
                    image={item.imageUrl}
                    alt="Bank"
                  />
                </div>
                <CardContent align="center">
                  <Typography gutterBottom variant="h6" component="div">
                    {item.question}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.note}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>

                  <Button
                    style={{
                      borderRadius: 0,
                      backgroundColor: item.buttonColor,
                      padding: "5px 15px",
                      marginLeft: "auto",
                    }}
                    variant="contained"
                  >
                    Learn
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
