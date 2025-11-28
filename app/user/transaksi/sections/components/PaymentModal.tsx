import { useState } from "react";

type PaymentModalProps = {
  onClose: () => void;
  onSubmit?: (data: { name: string; number: string; method: string }) => void;
};

export default function PaymentModal({ onClose, onSubmit }: PaymentModalProps) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [method, setMethod] = useState("");

  const disabled = !name || !number || !method;

  const handleSubmit = () => {
    if (disabled) return;
    onSubmit?.({ name, number, method });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-md w-full overflow-hidden">
        <div className="px-6 py-5">
          <h3 className="text-xl font-semibold text-bodyblack">
            Tambah Metode Penarikan
          </h3>
          <p className="text-sm text-alt mt-1">
            Pastikan data sesuai agar pencairan berhasil.
          </p>
        </div>

        <div className="px-6 py-4 flex flex-col gap-5">
          <div>
            <label className="font-medium text-bodyblack mb-1 block">
              Nama Pemilik
            </label>
            <input
              type="text"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full h-12 border rounded-lg px-3 focus:ring-2 focus:ring-green-primary outline-none"
            />
          </div>

          <div>
            <label className="font-medium text-bodyblack mb-1 block">
              Metode Penarikan
            </label>
            <div className="relative">
              <select
                value={method}
                onChange={(e) => setMethod(e.target.value)}
                className="w-full h-12 border rounded-lg px-3 appearance-none focus:ring-2 focus:ring-green-primary outline-none"
              >
                <option value="" disabled>
                  Pilih Metode Penarikan
                </option>
                <option value="bca">BCA</option>
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
          <div>
            <label className="font-medium text-bodyblack mb-1 block">
              Nomor Rekening / E-Wallet
            </label>
            <input
              type="text"
              placeholder="0812345678 / 389XXXX"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              className="w-full h-12 border rounded-lg px-3 focus:ring-2 focus:ring-green-primary outline-none"
            />
          </div>
        </div>

        <div className="px-6 py-5 flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 h-12 border rounded-lg hover:bg-gray-100"
          >
            Batal
          </button>

          <button
            onClick={handleSubmit}
            disabled={disabled}
            className={`flex-1 h-12 rounded-lg text-white ${
              disabled
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-green-gradient hover:opacity-90"
            }`}
          >
            Konfirmasi
          </button>
        </div>
      </div>
    </div>
  );
}
