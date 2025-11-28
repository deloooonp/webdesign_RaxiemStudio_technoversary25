"use client";

import { useState } from "react";

import { wasteTypes, pointsPerKg } from "@/constants";
import { WasteEntry } from "@/types";
import TrashModal from "./components/TrashModal";

export default function TrashForm() {
  const [wasteEntries, setWasteEntries] = useState<WasteEntry[]>([]);
  const [showModal, setShowModal] = useState(false);

  const addWasteEntry = () => {
    setWasteEntries([...wasteEntries, { type: "---", weight: "" }]);
  };

  const removeWasteEntry = () => {
    setWasteEntries(wasteEntries.slice(0, -1));
  };

  const updateWasteType = (index: number, type: string) => {
    const newEntries = [...wasteEntries];
    newEntries[index].type = type;
    setWasteEntries(newEntries);
  };

  const updateWeight = (index: number, weight: string) => {
    const newEntries = [...wasteEntries];
    newEntries[index].weight = weight;
    setWasteEntries(newEntries);
  };

  const handleSubmit = () => {
    setShowModal(true);
  };

  const handleConfirm = () => {
    setShowModal(false);
    setWasteEntries([]);
  };

  const calculatePoints = () => {
    return wasteEntries.reduce((total, entry) => {
      if (entry.type === "---" || !entry.weight) return total;
      const weight = parseFloat(entry.weight);
      const points = pointsPerKg[entry.type] || 0;
      return total + weight * points;
    }, 0);
  };

  const totalPoints = calculatePoints();

  const isFormValid = wasteEntries.every(
    (entry) => entry.type && entry.type !== "---" && entry.weight
  );
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-bodyblack text-display-h3 font-medium tracking-[-0.367px]">
        Tambah Setoran Sampah Baru
      </h2>

      <div className="flex flex-col gap-6">
        {wasteEntries.map((entry, index) => (
          <div
            key={index}
            className="flex flex-col gap-6 border border-alt/50 p-3 rounded-lg"
          >
            <div className="flex flex-col gap-[15px]">
              <div className="flex justify-between items-center">
                <label className="text-body-medium text-bodyblack">
                  Jenis Sampah
                </label>
                <button
                  onClick={removeWasteEntry}
                  className="text-background bg-green-gradient p-2 rounded-full w-8 h-8 flex items-center justify-center cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <div className="relative">
                <select
                  value={entry.type}
                  onChange={(e) => updateWasteType(index, e.target.value)}
                  className={`w-full h-[51px] px-2.5 py-2.5 border-[1.75px] outline-none rounded-lg text-caption appearance-none ${
                    entry.type && entry.type !== "---"
                      ? "border-gradient text-green-secondary"
                      : "border-section-alt bg-section-alt/30 text-alt"
                  }`}
                >
                  <option value="---" disabled hidden>
                    Pilih Jenis Sampah
                  </option>
                  {wasteTypes.map((type) => (
                    <option
                      key={type}
                      value={type}
                      className="bg-white text-gray-900 py-2"
                    >
                      {type}
                    </option>
                  ))}
                </select>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                  <img src="/icons/user/arrow.svg" alt="" />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-[15px]">
              <label className="text-body-medium text-bodyblack">
                Berat Sampah
              </label>
              <div
                className={`flex items-center h-[51px] px-2.5 border-[1.75px] rounded-lg ${
                  entry.weight
                    ? "border-gradient"
                    : "border-[#D5D5D5] bg-section-alt/30"
                }`}
              >
                <input
                  type="text"
                  value={entry.weight}
                  inputMode="numeric"
                  onChange={(e) => {
                    // Filter: cuma allow angka (0-9)
                    const value = e.target.value.replace(/[^0-9]/g, "");
                    updateWeight(index, value);
                  }}
                  placeholder="0"
                  className={`flex-1 bg-transparent text-caption outline-none ${
                    entry.weight
                      ? "text-green-secondary"
                      : "text-alt placeholder:text-alt"
                  }`}
                />
                <span
                  className={`text-caption ml-2 ${
                    entry.weight ? "text-green-secondary" : "text-alt"
                  }`}
                >
                  kg
                </span>
              </div>
            </div>
          </div>
        ))}

        <button
          onClick={addWasteEntry}
          className="w-[218px] h-[51px] px-5 py-4 flex items-center justify-center gap-2.5 border border-gradient rounded-[10px] bg-background cursor-pointer"
        >
          <span className="text-body-medium bg-green-gradient bg-clip-text text-transparent">
            Tambah Jenis Sampah
          </span>
        </button>
        <button
          onClick={handleSubmit}
          disabled={!isFormValid || wasteEntries.length === 0}
          className={`w-full h-[51px] px-5 py-4 rounded-[10px] text-background text-body-medium mt-8 ${
            isFormValid && wasteEntries.length > 0
              ? "bg-green-gradient hover:opacity-90 cursor-pointer"
              : "bg-gray-400 cursor-not-allowed opacity-50"
          }`}
        >
          Setor Sampah
        </button>
      </div>

      {/* Modal Summary */}
      {showModal && (
        <TrashModal
          wasteEntries={wasteEntries}
          totalPoints={totalPoints}
          onConfirm={handleConfirm}
          // onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}
