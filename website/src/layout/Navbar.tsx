import * as React from "react";
import { AppBar, CssBaseline, GlobalStyles, Toolbar, Typography, Link, PropTypes } from "@mui/material";

function Nav({ routes }: any) {
  return (
    <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            Expedition Asia Trek & Tours
          </Typography>

          {routes.map((r: any) => (

            <Link
              key={r.name}
              variant="button"
              color="text.primary"
              href={r.path}
              sx={{ my: 1, mx: 1 }}
            >
              {r.name}
            </Link>

          ))}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default Nav;    