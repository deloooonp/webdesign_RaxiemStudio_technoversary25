"use client";

import { useState } from "react";

interface WithdrawModalProps {
  maxPoints: number;
  onClose: () => void;
}

export default function WithdrawModal({
  maxPoints,
  onClose,
}: WithdrawModalProps) {
  const [points, setPoints] = useState(maxPoints);
  const [submitted, setSubmitted] = useState(false);
  const rate = 50;
  const amount = points * rate;

  // Fake submit
  const handleSubmit = () => {
    if (!points || points <= 0) return;
    setSubmitted(true);
  };

  const [method, setMethod] = useState("");

  const disabled = !method || points <= 0;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-background rounded-2xl max-w-md w-full overflow-hidden">
        {/* === SUCCESS SCREEN === */}
        {submitted ? (
          <div className="px-6 py-10 flex flex-col items-center text-center gap-4">
            <div className="w-16 h-16 bg-green-gradient rounded-full flex items-center justify-center text-background text-display-h2">
              ✓
            </div>

            <h3 className="text-display-h3 font-semibold text-bodyblack">
              Penukaran Berhasil
            </h3>

            <p className="text-body text-alt max-w-sm">
              Poin akan diproses dan dikirim dalam 1x24 jam ke metode pembayaran
              yang kamu pilih.
            </p>

            <div className="p-4 text-background rounded-xl w-full flex justify-between items-center mt-4 border-gradient">
              <span className="text-body-medium bg-green-gradient bg-clip-text text-transparent">
                Jumlah
              </span>
              <span className="text-display-h3 font-bold bg-green-gradient bg-clip-text text-transparent">
                Rp {amount.toLocaleString("id-ID")}
              </span>
            </div>

            <button
              onClick={onClose}
              className="w-full h-12 bg-green-gradient text-background rounded-lg hover:opacity-90 transition cursor-pointer"
            >
              Tutup
            </button>
          </div>
        ) : (
          <>
            <div className="px-6 py-5">
              <h3 className="text-display-h3 font-semibold text-bodyblack">
                Tarik Poin
              </h3>
              <p className="text-caption text-alt mt-1">
                Tukarkan poin Anda menjadi saldo uang tunai.
              </p>
            </div>

            <div className="px-6 py-4 flex flex-col gap-5">
              <div>
                <label className="text-body-medium text-bodyblack mb-1 block">
                  Jumlah Poin
                </label>
                <input
                  type="number"
                  min={1}
                  max={maxPoints}
                  value={points}
                  placeholder="0"
                  onChange={(e) =>
                    setPoints(Math.min(maxPoints, Number(e.target.value)))
                  }
                  className="w-full h-12 border rounded-lg px-3 text-body focus:ring-2 focus:ring-green-primary outline-none"
                />
                <p className="text-caption text-alt mt-1">
                  Maksimum: {maxPoints.toLocaleString()} poin
                </p>
              </div>

              <div className="p-4 bg-green-gradient text-background rounded-xl flex justify-between items-center">
                <span className="text-body-medium text-background">
                  Saldo Diterima
                </span>
                <span className="text-display-h3 font-bold">
                  Rp {amount.toLocaleString("id-ID")}
                </span>
              </div>

              <div>
                <label className="text-body-medium text-bodyblack mb-1 block">
                  Metode Penarikan
                </label>
                <div className="relative">
                  <select
                    value={method}
                    onChange={(e) => setMethod(e.target.value)}
                    className="w-full h-12 border rounded-lg px-3 text-body focus:ring-2 focus:ring-green-secondary outline-none appearance-none"
                  >
                    <option value="" disabled>
                      Pilih Metode Penarikan
                    </option>
                    <option value="bca">***5069 BCA</option>
                    <option value="bri">BRI</option>
                    <option value="dana">DANA</option>
                    <option value="ovo">OVO</option>
                    <option value="gopay">GoPay</option>
                  </select>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                    <img src="/icons/user/arrow.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div className="px-6 py-5 flex gap-3">
              <button
                onClick={onClose}
                className="flex-1 h-12 border rounded-lg text-bodyblack hover:bg-gray-100 cursor-pointer"
              >
                Batal
              </button>
              <button
                onClick={handleSubmit}
                disabled={disabled}
                className={`flex-1 h-12 rounded-lg transition ${
                  disabled
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : "bg-green-gradient text-background hover:opacity-90"
                }`}
              >
                Konfirmasi
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
