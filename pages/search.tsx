import React from "react";
import { COCKTAIL_API_BASE_URL } from "../utils/constants";
import { GetServerSideProps } from "next";
import { ISearch, IDrink } from "../interfaces/search";
import { Box, Chip, Grid, Typography } from "@mui/material";
import DrinkCard from "../components/DrinkCard";
import { useRouter } from "next/router";

const Search = ({ drinks }: ISearch) => {
  const router = useRouter();
  const { query, category, ingredient, alcohol } = router.query;

  return (
    <Grid container padding={3}>
      <Box
        display="flex"
        alignItems="center"
        marginX="auto"
        marginBottom={6}
        gap={1}
      >
        <Typography fontSize="20px">
          {query ? `Resultados de la búsqueda para: ` : `Filtro: `}
        </Typography>
        <Chip
          color="primary"
          label={query || category || ingredient || alcohol}
          sx={{fontSize: "16px"}}
        />
      </Box>
      <Grid container item justifyContent="center" rowGap={6}>
        {drinks ? (
          drinks.map((drink: IDrink) => (
            <DrinkCard
              key={drink.idDrink}
              image={drink.strDrinkThumb}
              name={drink.strDrink}
            />
          ))
        ) : (
          <Grid container item justifyContent="center" marginTop={6}>
            <Typography>No se encontraron tragos para tu búsqueda.</Typography>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query, category, ingredient, alcohol } = context.query;
  const hasFilter = category || ingredient || alcohol;
  let response = {} as Response;
  if (hasFilter) {
    response = await fetch(
      `${COCKTAIL_API_BASE_URL}/filter.php?${category ? `c=${category}&` : ""}${
        ingredient ? `i=${ingredient}&` : ""
      }${alcohol ? `a=${alcohol}` : ""}`
    );
  } else {
    response = await fetch(`${COCKTAIL_API_BASE_URL}/search.php?s=${query}`);
  }

  const { drinks } = await response.json();
  return {
    props: {
      drinks,
    },
  };
};

export default Search;
