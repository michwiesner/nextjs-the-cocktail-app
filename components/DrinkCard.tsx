import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import { IDrinkCard } from "../interfaces/search";
import Image from "next/image";
import styles from "../styles/DrinkCard.module.css";

const DrinkCard = ({ image, name }: IDrinkCard) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Button
        href={`drink/${name}`}
        className={styles.button}
        disableRipple
      >
        <Typography textAlign="center">
          <Image src={image} alt={name} width={200} height={200} />
        </Typography>
        <Typography textAlign="center">{name}</Typography>
      </Button>
    </Grid>
  );
};

export default DrinkCard;
