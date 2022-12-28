import { Chip, IconButton } from "@mui/material";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import style from "../styles/Options.module.css";
import { IDrinkDetail } from "../interfaces/drink";

const DrinkDetails = ({
  strDrink,
  strTags,
  strCategory,
  strAlcoholic,
  strGlass,
  strInstructions,
  strDrinkThumb,
  strIngredients,
}: IDrinkDetail) => (
  <Grid container justifyContent="center" padding={10}>
    <Grid item xs={12}>
      <Box display="flex" alignItems="center" marginBottom={5}>
        <IconButton href="/">
          <span className="material-symbols-rounded">keyboard_backspace</span>
        </IconButton>
        <Typography variant="h4">{strDrink}</Typography>
      </Box>
    </Grid>
    <Grid item xs={4}>
      <Avatar src={strDrinkThumb} className={style.img} variant="square" />
      <Box marginTop={3}>
        <Chip
          label={strCategory}
          color="info"
          className={style.marginChip}
          variant="filled"
        />
        <Chip
          label={strGlass}
          className={style.marginChip}
          color="info"
          variant="filled"
        />
        <Chip
          label={strAlcoholic}
          className={style.marginChip}
          color="info"
          variant="filled"
        />
      </Box>
      {strTags && (
        <Box marginTop={3}>
          <Chip
            label={`${strTags}`}
            className={style.marginChip}
            color="info"
            variant="filled"
          />
        </Box>
      )}
    </Grid>
    <Grid item xs={6}>
      <Card className={style.card}>
        <CardContent>
          <Typography variant="h4">Instructions</Typography>
          <Typography marginTop={3}>{strInstructions}</Typography>
        </CardContent>
      </Card>
      <Card sx={{ marginTop: "20px" }} className={style.card}>
        <CardContent>
          <Typography variant="h4">Ingredients</Typography>
          <Box marginTop={3}>
            {strIngredients.map((ingredient: string | null, i: number) => {
              if (ingredient)
                return (
                  <Chip
                    key={i}
                    label={ingredient}
                    className={style.marginChip}
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
