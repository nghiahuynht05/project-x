import React, { Component } from "react";
import Grid from "@mui/system/Unstable_Grid";
import Box from "@mui/material/Box";
import styled from "@mui/system/styled";

import horizontalLine from "../images/horizontal-line.png";

const Item = styled("div")(({ theme }) => ({
    borderRadius: "4px",
    textAlign: "center",
    height: "100%",
  }));

class PagesComponent extends Component {
    
  render() {
    return (
      <Grid sx={{ p: 0, height:"100%" }} className={this.props.className}>
        <Grid
          sx={{
            height: "20vh",
            fontFamily: "Pinyon Script",
            fontSize: "35px",
          }}>
          <Box
            sx={{
              textAlign: "left",
              paddingTop: "10px",
              paddingLeft: "20px",
            }}>
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
            }}>
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
            style={{ minHeight: "35vh" }}>
            <Box
              sx={{
                background: "",
                border: "0.1875em solid #FFFF",
                borderRadius: "50%",
                boxShadow: "0.375em 0.375em 0 0 rgba(15, 28, 63, 0.125)",
                height: "15em",
                width: "15em",
                backgroundImage: `url(${this.props.images})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}></Box>
          </Grid>
        </Item>
        <Item sx={{ height: "20vh", p: 0 }}>
          <Grid
            sx={{
              height: "20vh",
              fontFamily: "PT Serif",
            }}>
            <Box
              sx={{
                textAlign: "left",
                fontSize: "35px",
              }}>
              <Grid sx={{ display: "flex", justifyContent: "center" }}>
                <Box sx={{ fontWeight: "bold", paddingRight: "10px" }}>
                  <span>Save</span>
                </Box>
                <Box sx={{ paddingRight: "10px" }}>
                  <span> the</span>
                </Box>
                <Box sx={{ fontWeight: "bold" }}>
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
                }}></Box>
            </Grid>
            <Box
              sx={{
                textAlign: "right",
              }}>
              <Grid
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "flex-end",
                  alignItems: "flex-end",
                }}>
                <Box sx={{ fontSize: "28px", paddingRight: "10px" }}>
                  <span>Sunday</span>
                </Box>
                <Box
                  sx={{
                    fontWeight: "bold",
                    paddingRight: "10px",
                    fontSize: "30px",
                  }}>
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
    );
  }
}

export default PagesComponent