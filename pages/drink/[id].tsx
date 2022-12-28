import DrinkDetails from "../../components/DrinkDetails";
import { baseUrl } from "../../config/api";
import { getMappedInfo } from "../../lib/drink";

export async function getStaticProps({ params }: any) {
  const { drinks }: any = await (
    await fetch(`${baseUrl}/search.php?s=${params.id}`)
  ).json();

  return { props: { drink: getMappedInfo(drinks[0]) } };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

const Name = ({ drink }: any) => <DrinkDetails {...drink} />;

export default Name;
