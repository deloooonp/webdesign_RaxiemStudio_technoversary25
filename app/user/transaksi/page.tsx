"use client";

import { Layout } from "../components";
import { TransactionHistory, PointWithdrawal, PaymentMethod } from "./sections";

export default function Index() {
  return (
    <Layout title="Transaksi Poin">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-6">
          <PointWithdrawal />
          <PaymentMethod />
        </div>
        <div className="flex flex-col gap-6">
          <TransactionHistory />
        </div>
      </div>
    </Layout>
  );
}
