"use client";

import { StatCards, Layout } from "../components";
import { TrashForm, TrashHistory } from "./sections";

export default function SampahPage() {
  return (
    <Layout title="Setor Sampah">
      <div className="grid md:grid-cols-9 gap-6">
        <div className="flex flex-col md:col-span-5 gap-6">
          <StatCards />
          <TrashForm />
        </div>

        <div className="flex flex-col md:col-span-4 gap-6">
          <TrashHistory />
        </div>
      </div>
    </Layout>
  );
}
