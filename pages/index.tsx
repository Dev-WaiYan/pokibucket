import Layout from "@/components/Layout/Layout";
import { getCards } from "services/cardService";

export async function getStaticProps() {
  getCards();

  return {
    props: {},
  };
}

export default function Home() {
  return <Layout></Layout>;
}
