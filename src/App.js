import React from "react";
import { CssBaseline, Grid } from "@material-ui/core";

import Header from "./Header/Header";
import List from "./List/List";
import Map from "./Map/Map";

const App = () => {
  return (
    <>
      <CssBaseline>
        <Header />
        <Grid container spacing={3} style={{ width: "100%" }}>
          <Grid item xs={12} md={4}>
            <List />
          </Grid>
          <Grid d item xs={12} md={4}>
            <Map />
          </Grid>
        </Grid>
      </CssBaseline>
    </>
  );
};

export default App;
