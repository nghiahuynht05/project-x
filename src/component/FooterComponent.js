import React, { Component } from "react";
import Grid from "@mui/system/Unstable_Grid";
import Box from "@mui/material/Box";

class FooterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false, actions: "" };
  }

  btnClick = (actions, e) => {
    if (actions === "prev") {
      this.setState({ clicked: true, actions: "transition-prev" });
      this.cleanClasses();
    }
    if (actions === "next") {
      this.setState({ clicked: true, actions: "transition-next" });
      this.cleanClasses();
    }
  };

  cleanClasses() {
    const timer = setTimeout(() => {
      this.setState({ clicked: false, actions: "" });
    }, 1500);
    return () => clearTimeout(timer);
  }

  render() {
    var className = this.state.clicked
      ? `pagination-wrapper ${this.state.actions}`
      : "pagination-wrapper";

    return (
      <Grid sx={{ justifyContent: "top", height: "10vh", p: 0 }}>
        <Grid sx={{ display: "flex" }} className={className}>
          <Box
            sx={{
              fill: "#FAE5D3",
              cursor: "pointer",
              transition: "opacity 0.2s",
            }}
            onClick={(e) => this.btnClick("prev", e)}>
            <svg
              className="btnp btn--prev"
              height={32}
              viewBox="0 0 24 24"
              width={32}
              xmlns="http://www.w3.org/2000/svg">
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
              <div className="little-dot little-dot--last" />
            </div>
          </Box>
          <Box
            sx={{
              fill: "#FAE5D3",
              cursor: "pointer",
              transition: "opacity 0.2s",
            }}
            onClick={(e) => this.btnClick("next", e)}>
            <svg
              className="btn btn--next"
              height={32}
              viewBox="0 0 24 24"
              width={32}
              xmlns="http://www.w3.org/2000/svg">
              <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" />
              <path d="M0-.25h24v24H0z" fill="none" />
            </svg>
          </Box>
        </Grid>
      </Grid>
    );
  }
}

export default FooterComponent;
