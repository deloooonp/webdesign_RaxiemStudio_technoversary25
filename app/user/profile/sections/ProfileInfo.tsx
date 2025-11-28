"use client";
import { useState } from "react";
import { profileData } from "@/constants";

export default function ProfileInfo() {
  const [savedData, setSavedData] = useState(profileData);
  const [form, setForm] = useState(profileData);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const isChanged = JSON.stringify(form) !== JSON.stringify(savedData);
  const isValid = Object.values(form).every((v) => v.trim() !== "");
  const canSave = isEditing && isValid && isChanged;

  return (
    <div className="flex flex-col gap-6 p-5 border-2 border-gradient rounded-2xl bg-background">
      <div className="flex justify-between items-center">
        <h2 className="text-display-h3 font-semibold text-bodyblack">
          Info Personal
        </h2>

        {/* toggle edit */}
        <button
          onClick={() => {
            if (!isEditing) setForm(savedData);
            setIsEditing(!isEditing);
          }}
          className="flex items-center gap-2 text-body-medium text-alt hover:text-bodyblack cursor-pointer"
        >
          <img src="/icons/user/change.svg" alt="Change" />
          {isEditing ? "Batal" : "Ubah"}
        </button>
      </div>

      {Object.keys(form).map((key) => (
        <div key={key} className="flex flex-col gap-2">
          <label className="text-body-semibold text-bodyblack">
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </label>

          {isEditing ? (
            <input
              type={key === "password" ? "password" : "text"}
              name={key}
              value={form[key as keyof typeof form]}
              onChange={handleChange}
              className="h-12 px-3 rounded-lg border-2 border-section-alt"
            />
          ) : (
            <div className="h-12 px-3 flex items-center rounded-lg text-body-medium text-alt">
              {key === "password"
                ? "**********"
                : savedData[key as keyof typeof savedData]}
            </div>
          )}
        </div>
      ))}

      {/* SAVE BUTTON */}
      {isEditing && (
        <button
          onClick={() => {
            setSavedData(form);
            setIsEditing(false);
          }}
          disabled={!canSave}
          className={`w-full py-4 rounded-xl text-body-medium ${
            canSave
              ? "bg-green-gradient text-background hover:opacity-90 cursor-pointer"
              : "bg-alt text-section-alt cursor-not-allowed"
          }`}
        >
          Simpan Perubahan
        </button>
      )}
    </div>
  );
}
