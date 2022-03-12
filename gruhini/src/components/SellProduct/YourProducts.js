import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Popup from "../BuyProduct/Popup";

const YourProducts = ({arr}) => {
  
  const [show, setShow] = useState(false)
  return (
    <div className="yourPros">
      <Button onClick={ () => setShow(!show) }>Show</Button>
      {
        show && <Grid container spacing={5}>
        {arr.map((item) => {
          const email = `mailto:${item.Email}`;
          return (
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <Card
                sx={{ maxWidth: 345, minWidth: 295 }}
                className="p-3 service-card"
              >
                <CardMedia
                  className="border rounded"
                  component="img"
                  height="200"
                  image={item.Image}
                  alt="service image"
                />
                <CardContent className="card-content">
                  <Typography gutterBottom variant="h5" component="div">
                    {item.Name}
                  </Typography>
                  <Typography className="short-desc" variant="body2">
                    {item.ShortDesc}
                  </Typography>
                </CardContent>
                <CardActions className="card-actions">
                  <Button
                    className="CTC2 ctc2-small m-1"
                    href={email}
                    size="small"
                  >
                    Contact
                  </Button>
                  <Popup
                    name={item.Name}
                    desc={item.Description}
                    image={item.Image}
                    email={item.Email}
                    phone={item.PhoneNo}
                    loc={item.location}
                    cost={item.Cost}
                  />
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
      }
    </div>
  );
};

export default YourProducts;
