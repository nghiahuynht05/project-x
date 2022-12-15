import * as React from "react";
import "./App.css";

import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/system/Unstable_Grid";
import Box from "@mui/material/Box";
import styled from "@mui/system/styled";

import Container from "@mui/material/Container";
import images from "./images/home-backgroup-card.jpg";
import horizontalLine from "./images/horizontal-line.png";
import centerImg from "./images/home-1.jpg";

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
                <Grid
                  sx={{
                    height: "20vh",
                    fontFamily: "Pinyon Script",
                    fontSize: "35px",
                  }}
                >
                  <Box
                    sx={{
                      textAlign: "left",
                      paddingTop: "10px",
                      paddingLeft: "20px",
                    }}
                  >
                    <span>Charlotte Luna</span>
                  </Box>
                  <Box>
                    <span>&</span>
                  </Box>
                  <Box
                    sx={{
                      textAlign: "right",
                      paddingBottom: "10px",
                      paddingRight: "20px",
                    }}
                  >
                    <span>Madison Paisley</span>
                  </Box>
                </Grid>
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
                        backgroundImage:`url(${centerImg})`
                      }}
                    ></Box>
                  </Grid>
                </Item>
                <Item sx={{ height: "20vh", p: 0 }}>
                  <Grid
                    sx={{
                      height: "20vh",
                      fontFamily: "PT Serif",
                    }}
                  >
                    <Box
                      sx={{
                        textAlign: "left",
                        fontSize: "35px",
                      }}
                    >
                      <Grid sx={{ display: "flex", justifyContent: "center", }}>
                        <Box
                          sx={{ "font-weight": "bold", paddingRight: "10px" }}
                        >
                          <span>Save</span>
                        </Box>
                        <Box sx={{ paddingRight: "10px" }}>
                          <span> the</span>
                        </Box>
                        <Box sx={{ "font-weight": "bold" }}>
                          <span> Date</span>
                        </Box>
                      </Grid>
                    </Box>
                    <Grid sx={{ display: "flex", justifyContent: "center" }}>
                      <Box
                        sx={{
                          background: `url(${horizontalLine})`,
                          backgroundPositionY: "center",
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                          height: "30px",
                          width: "60%",
                        }}
                      ></Box>
                    </Grid>
                    <Box
                      sx={{
                        textAlign: "right"
                      }}
                    >
                      <Grid
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignContent: "flex-end",
                          alignItems: "flex-end",
                        }}
                      >
                        <Box sx={{ fontSize: "28px", paddingRight: "10px" }}>
                          <span>Sunday</span>
                        </Box>
                        <Box
                          sx={{
                            "font-weight": "bold",
                            paddingRight: "10px",
                            fontSize: "30px",
                          }}
                        >
                          <span> 18</span>
                        </Box>
                        <Box sx={{ fontSize: "28px" }}>
                          <span> December</span>
                        </Box>
                      </Grid>
                    </Box>
                  </Grid>
                </Item>
              </Grid>
            </Item>
          </Grid>
          <Grid sx={{ "justify-content": "top", height: "10vh", p: 0 }}>
            <Grid sx={{ display: "flex" }}>
              <Box
                sx={{
                  fill: "#FAE5D3",
                  cursor: "pointer",
                  transition: "opacity 0.2s",
                }}
              >
                <svg
                  className=""
                  height={32}
                  viewBox="0 0 24 24"
                  width={32}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z" />
                  <path d="M0-.5h24v24H0z" fill="none" />
                </svg>
              </Box>
              <Box>
                <div className="pagination-container">
                  <div className="little-dot  little-dot--first" />
                  <div className="little-dot">
                    <div className="big-dot-container">
                      <div className="big-dot" />
                    </div>
                  </div>
                  <div className="little-dot  little-dot--last" />
                </div>
              </Box>
              <Box
                sx={{
                  fill: "#FAE5D3",
                  cursor: "pointer",
                  transition: "opacity 0.2s",
                }}
              >
                <svg
                  className=""
                  height={32}
                  viewBox="0 0 24 24"
                  width={32}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" />
                  <path d="M0-.25h24v24H0z" fill="none" />
                </svg>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default App;
