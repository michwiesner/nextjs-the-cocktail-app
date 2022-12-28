import axios from "axios";
import DrinkDetails from "../components/DrinkDetails";
import { baseUrl } from "../config/api";
import { getMappedInfo } from "../lib/drink";

export async function getStaticProps() {
  const {
    data: { drinks },
  } = await axios.get(`${baseUrl}/random.php`);
  
  return {
    props: {
      drink: getMappedInfo(drinks[0]),
    },
  };
}

const randomDrink = ({ drink }: any) => <DrinkDetails {...drink} />;

export default randomDrink;
