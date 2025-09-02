import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Dashboard • Solo Leveling: IRL",
  description: "Your Solo Leveling dashboard",
};

export default function Home() {
  return <HomeClient />;
}
