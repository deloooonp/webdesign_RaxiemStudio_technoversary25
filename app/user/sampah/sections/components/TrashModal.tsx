"use client";
import { WasteEntry } from "@/types";
import { pointsPerKg } from "@/constants";
import { generateReceipt } from "@/lib/utils";

export default function TrashModal({
  wasteEntries,
  totalPoints,
  onConfirm,
}: {
  wasteEntries: WasteEntry[];
  totalPoints: number;
  onConfirm: () => void;
}) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-background rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-6">
            <h3 className="text-display-h3 font-semibold text-bodyblack">
              🎉 Setoran Berhasil!
            </h3>
            <p className="text-caption text-alt mt-2">
              Terima kasih telah berkontribusi dalam menjaga lingkungan!
            </p>
          </div>

          {/* Receipt Number */}
          <div className="p-3 rounded-lg bg-gray-100 text-center">
            <p className="text-caption text-alt">Nomor Resi</p>
            <p className="font-bold text-lg tracking-widest">
              {generateReceipt()}
            </p>
          </div>

          {/* Barcode Dummy */}
          <div className="flex justify-center">
            <img
              src="/img/user/barcode.png"
              alt="Barcode"
              className="w-3/4 h-auto"
            />
          </div>

          {/* Summary List */}
          <div className="flex flex-col gap-4 mb-6">
            {wasteEntries.map((entry, index) => {
              const weight = parseFloat(entry.weight);
              const points = pointsPerKg[entry.type] * weight;

              return (
                <div
                  key={index}
                  className="flex justify-between items-center p-4 bg-gray-50 rounded-lg border"
                >
                  <div className="flex flex-col gap-1">
                    <span className="text-body-medium text-bodyblack">
                      {entry.type}
                    </span>
                    <span className="text-caption text-alt">
                      {weight} kg × {pointsPerKg[entry.type]} poin/kg
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-display-h3 font-bold bg-green-gradient bg-clip-text text-transparent">
                      {points.toLocaleString("id-ID")} pt
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Total */}
          <div className="border-t pt-4 mb-6">
            <div className="flex justify-between items-center p-4 bg-green-gradient rounded-lg">
              <span className="text-body-medium text-background">
                Total Poin Didapat
              </span>
              <span className="text-display-h3 font-bold text-background">
                {totalPoints.toLocaleString("id-ID")}
              </span>
            </div>
          </div>

          {/* Note */}
          <div className="bg-yellow-50 border border-yellow-200 text-yellow-700 p-4 rounded-lg text-caption mb-6">
            Mohon tunjukkan resi ini ke Bank Ecovest terdekat untuk
            memverifikasi dan mengonversi setoran Anda.
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <button
              onClick={onConfirm}
              className="flex-1 h-12 px-5 bg-green-gradient text-background text-body-medium rounded-lg hover:opacity-90"
            >
              Selesai
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
