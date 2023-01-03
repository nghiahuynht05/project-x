import React, { Component } from "react";

import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/system/Unstable_Grid";
import styled from "@mui/system/styled";

import Container from "@mui/material/Container";
import impage0 from "../images/home-1.jpg";
import impage1 from "../images/home-2.jpg";
import impage2 from "../images/home-1.jpg";
import impage3 from "../images/home-1.jpg";
import impage4 from "../images/home-2.jpg";
import impage5 from "../images/home-2.jpg";

import PagesComponent from "../component/PagesComponent";
import FooterComponent from "../component/FooterComponent";

const Item = styled("div")(({ theme }) => ({
  borderRadius: "4px",
  textAlign: "center",
  height: "100%",
}));

class AppComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imagesPages: [impage0, impage1, impage2, impage3, impage4, impage5],
      pages: 0,
    };
  }

  setNumberPage() {
    const imagesPages = [impage0, impage1, impage2, impage3, impage4, impage5];
    return imagesPages[this.state.pages];
  }

  callbackFunction = (indexOfpages) => {
    this.setState({ pages: indexOfpages });
  };

  render() {
    const currentimagesPages = this.state.imagesPages[this.state.pages];
    
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
              }}>
              <Item sx={{ p: 0 }} className="container">
                <Grid className="cover" sx={{ height: "100%" }}>
                  <PagesComponent
                    className="figure font"
                    images={currentimagesPages}
                  />
                </Grid>
              </Item>
            </Grid>
            <FooterComponent
              parentCallback={(index) => this.callbackFunction(index)}
            />
          </Grid>
        </Container>
      </React.Fragment>
    );
  }
}
export default AppComponent;
