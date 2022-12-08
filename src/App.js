import * as React from "react";

import "./App.css";

import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/system/Unstable_Grid";
import Box from "@mui/material/Box";
import styled from "@mui/system/styled";

import Container from "@mui/material/Container";
import images from "./images/home-backgroup-card.jpg";

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
        }}
      >
        <Grid
          container="false"
          sx={{
            "justify-content": "center",
            "flex-direction": "column",
            height: "95vh",
            p: 0,
          }}
        >
          <Grid
            sx={{
              "justify-content": "top",
              height: "75vh",
              p: 0,
              backgroundImage: `url(${images})`,
              "background-repeat": "no-repeat",
              "background-size": "cover",
              "background-position": "center",
            }}
          >
            <Item sx={{ p: 0 }}>
              <Grid sx={{ p: 0 }}>
                <Item sx={{ height: "20vh" }}>Charlotte Luna & Madison Paisley</Item>
                <Item sx={{ height: "35vh" }}>
                  <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    style={{ minHeight: "35vh" }}
                  >
                    <Box
                      sx={{
                        background: "",
                        border: "0.1875em solid #FFFF",
                        "border-radius": "50%",
                        "box-shadow":
                          "0.375em 0.375em 0 0 rgba(15, 28, 63, 0.125)",
                        height: "15em",
                        width: "15em",
                      }}
                    ></Box>
                  </Grid>
                </Item>
                <Item sx={{ height: "20vh", p: 0 }}></Item>
              </Grid>
            </Item>
          </Grid>
          <Grid sx={{ "justify-content": "top", height: "10vh", p: 0 }}>
            <Item>xs=8</Item>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default App;
