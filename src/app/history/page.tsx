import type { Metadata } from "next";
import HistoryClient from "./HistoryClient";

export const metadata: Metadata = {
  title: "History • Solo Leveling: IRL",
  description: "Your leveled activities and stats",
};

export default function HistoryPage() {
  return <HistoryClient />;
}

