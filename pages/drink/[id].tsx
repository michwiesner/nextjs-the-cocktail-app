import DrinkDetails from "../../components/DrinkDetails";
import { baseUrl } from "../../core/api";
import { getMappedInfo } from "../../lib/drink";
import { IDrinkDetail } from "../../interfaces/drink";
import { GetStaticPropsContext } from "next";

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const { drinks }: any = await (
    await fetch(`${baseUrl}/search.php?s=${params?.id}`)
  ).json();

  return { props: { drink: getMappedInfo(drinks[0]) } };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

const Name = ({ drink }: { drink: IDrinkDetail }) => (
  <DrinkDetails {...drink} />
);

export default Name;
