import type { Metadata } from "next";
import LogClient from "./LogClient";

export const metadata: Metadata = {
  title: "Log • Solo Leveling: IRL",
  description: "Log your daily activities",
};

export default function LogPage() {
  return <LogClient />;
}
