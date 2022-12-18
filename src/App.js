import * as React from "react";
import "./App.css";

import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/system/Unstable_Grid";
import styled from "@mui/system/styled";

import Container from "@mui/material/Container";
import images from "./images/home-backgroup-card.jpg";
import centerImg from "./images/home-1.jpg";
import centerImg2 from "./images/home-2.jpg";

import PagesComponent from "./component/PagesComponent";
import FooterComponent from "./component/FooterComponent";

const Item = styled("div")(({ theme }) => ({
  borderRadius: "4px",
  textAlign: "center",
  height: "100%",
}));

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        maxWidth="md"
        sx={{
          bgcolor: "background.paper",
          p: 1.6,
          minWidth: 300,
        }}>
        <Grid
          container="false"
          sx={{
            justifyContent: "center",
            flexDirection: "column",
            height: "95vh",
            p: 0,
          }}>
          <Grid
            sx={{
              justifyContent: "top",
              height: "80vh",
              p: 0,
              backgroundImage: `url(${images})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}>
            <Item sx={{ p: 0 }} className="container">
              <Grid className="cover" sx={{ height: "100%" }}>
                <PagesComponent className="figure back" images={centerImg} />
                <PagesComponent className="figure font" images={centerImg2} />
              </Grid>
            </Item>
          </Grid>
          <FooterComponent />
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default App;
