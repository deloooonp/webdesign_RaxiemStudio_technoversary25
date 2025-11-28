import { useState } from "react";

import { points } from "@/constants";
import TransactionModal from "./components/TransactionModal";

export default function PointWithdrawal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="p-[17px] rounded-2xl bg-background">
      <div className="flex flex-col gap-6 sm:gap-8 p-4 sm:p-[17px] rounded-2xl bg-green-gradient">
        <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
          <div className="flex flex-col justify-center gap-[9px] flex-1">
            <p className="text-body text-background">Penukaran Poin</p>
            <p className="text-background text-display-h2 font-bold">
              {points}
            </p>
          </div>
          <button className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
            <span className="text-background text-body-medium">
              Detail Poin
            </span>
          </button>
        </div>

        <div className="border-b-[0.25px] border-background/25"></div>

        <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
          <div className="flex flex-col justify-center gap-[9px] flex-1">
            <p className="text-background text-ody">Estimasi Pendapatan</p>
            <p className="text-background text-display-h2 font-bold">
              Rp 62.000
            </p>
          </div>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="w-full py-3 rounded-xl bg-background/20 text-background text-body-semibold hover:bg-background/30 transition cursor-pointer"
        >
          Withdraw Sekarang
        </button>
      </div>

      {showModal && (
        <TransactionModal
          maxPoints={points}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}
