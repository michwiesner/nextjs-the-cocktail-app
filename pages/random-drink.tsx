import DrinkDetails from "../components/DrinkDetails";
import { baseUrl } from "../core/api";
import { getMappedInfo } from "../lib/drink";
import { IDrinkDetail } from "../interfaces/drink";

export async function getStaticProps() {
  const { drinks } = await (await fetch(`${baseUrl}/random.php`)).json();

  return {
    props: {
      drink: getMappedInfo(drinks[0]),
    },
  };
}

const randomDrink = ({ drink }: { drink: IDrinkDetail }) => (
  <DrinkDetails {...drink} />
);

export default randomDrink;
