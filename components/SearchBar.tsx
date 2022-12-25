import React, { useState } from "react";
import {
  AppBar,
  Grid,
  IconButton,
  TextField,
  Toolbar,
} from "@mui/material";
import { useRouter } from "next/router";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const router = useRouter();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    if(searchQuery) router.push(`/search?query=${searchQuery}`);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container>
          <Grid
            item
            xs={12}
            md={6}
            lg={4}
            xl={2}
            marginLeft="auto"
            flexWrap="nowrap"
          >
            <form onSubmit={handleSubmit}>
              <TextField
                value={searchQuery}
                placeholder="Búsqueda"
                fullWidth
                variant="outlined"
                size="small"
                onChange={(event) => setSearchQuery(event.target.value)}
                InputProps={{
                  endAdornment: (
                    <IconButton type="submit">
                      <span className="material-symbols-rounded">search</span>
                    </IconButton>
                  ),
                  className: "bg-white"
                }}
              />
            </form>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default SearchBar;
