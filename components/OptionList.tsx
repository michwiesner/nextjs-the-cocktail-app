import { Chip, Grid, Typography } from "@mui/material";
import style from "../styles/Options.module.css";
import { useRouter } from "next/router";

const getTypeByTitle: any = {
  Alcoholic: "alcohol",
  Categories: "category",
  Ingredients: "ingrediente",
};

const OptionList = ({ title, values }: { title: string; values: string[] }) => {
  const router = useRouter();
  const handleClick = (option: string) =>
    router.push(`/search?${getTypeByTitle[title]}=${option}`);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4" className={style.marginTitle}>
          {title}
        </Typography>
      </Grid>
      <Grid container item xs={12} gap={1}>
        {values.map((option: string) => (
          <Grid item key={option}>
            <Chip
              label={option}
              color="secondary"
              variant="outlined"
              onClick={() => handleClick(option)}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default OptionList;
