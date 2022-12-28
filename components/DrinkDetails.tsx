import { Chip } from "@mui/material";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";

const DrinkDetails = ({
  strDrink,
  strTags,
  strCategory,
  strAlcoholic,
  strGlass,
  strInstructions,
  strDrinkThumb,
  strIngredients,
}: any) => (
  <Grid container justifyContent="center" padding={10}>
    <Grid item xs={12}>
      <Typography variant="h4" marginBottom={5}>
        {strDrink}
      </Typography>
    </Grid>
    <Grid item xs={4}>
      <Avatar
        src={strDrinkThumb}
        sx={{ width: 280, height: 280 }}
        variant="square"
      />
      <Box marginTop={3}>
        <Chip
          label={strCategory}
          color="info"
          sx={{ marginRight: "0.625rem" }}
          variant="filled"
        />
        <Chip
          label={strGlass}
          sx={{ marginRight: "0.625rem" }}
          color="info"
          variant="filled"
        />
        <Chip
          label={strAlcoholic}
          sx={{ marginRight: "0.625rem" }}
          color="info"
          variant="filled"
        />
      </Box>
      {strTags && (
        <Box marginTop={3}>
          <Chip
            label={`${strTags}`}
            sx={{ marginRight: "0.625rem" }}
            color="info"
            variant="filled"
          />
        </Box>
      )}
    </Grid>
    <Grid item xs={6}>
      <Card sx={{ padding: "20px" }}>
        <CardContent>
          <Typography variant="h4">Instructions</Typography>
          <Typography marginTop={3}>{strInstructions}</Typography>
        </CardContent>
      </Card>
      <Card sx={{ padding: "20px", marginTop: "20px" }}>
        <CardContent>
          <Typography variant="h4">Ingredients</Typography>
          <Box marginTop={3}>
            {strIngredients.map((ingredient: string | null, i: number) => {
              if (ingredient)
                return (
                  <Chip
                    key={i}
                    label={ingredient}
                    sx={{ marginRight: "0.625rem" }}
                    color="info"
                    variant="filled"
                  />
                );
            })}
          </Box>
        </CardContent>
      </Card>
    </Grid>
  </Grid>
);

export default DrinkDetails;
