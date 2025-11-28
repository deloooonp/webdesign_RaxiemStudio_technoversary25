"use client";

import { StatCards, Layout } from "./components";
import { Activity, Community, Tips, Progress, WasteChart } from "./sections";

export default function Dashboard() {
  return (
    <Layout title="Dashboard Bank Sampah">
      <div className="grid md:grid-cols-9 gap-6">
        <div className=" flex flex-col md:col-span-5 gap-6">
          <StatCards />
          <Progress />
          <WasteChart />
        </div>

        <div className="flex flex-col md:col-span-4 gap-6">
          <Activity />
          <Community />
          <Tips />
        </div>
      </div>
    </Layout>
  );
}
