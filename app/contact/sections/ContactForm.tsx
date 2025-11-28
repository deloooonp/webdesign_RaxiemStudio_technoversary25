"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    nama: "",
    email: "",
    telephone: "",
    pesan: "",
  });

  const isValid =
    form.nama.trim() !== "" &&
    form.email.trim() !== "" &&
    form.telephone.trim() !== "" &&
    form.pesan.trim() !== "";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isValid) return;

    console.log("FORM SUBMITTED:", form);

    // reset
    setForm({
      nama: "",
      email: "",
      telephone: "",
      pesan: "",
    });
  };

  const formClass =
    "w-full px-4 py-3 border border-section-alt rounded-lg bg-section-alt/30 text-caption placeholder:text-alt focus:outline-1.5 focus:outline-green-secondary focus:placeholder:text-green-secondary";

  return (
    <div className="w-full bg-white rounded-[20px] shadow-xl p-6 sm:p-8">
      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <label htmlFor="nama" className="text-body font-semibold">
            Nama
          </label>
          <input
            type="text"
            id="nama"
            name="nama"
            placeholder="Nama"
            value={form.nama}
            onChange={handleChange}
            className={formClass}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-body font-semibold">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className={formClass}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="telephone" className="text-body font-semibold">
            Telephone
          </label>
          <input
            type="tel"
            id="telephone"
            name="telephone"
            placeholder="Telephone"
            value={form.telephone}
            onChange={handleChange}
            className={formClass}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="pesan" className="text-body font-semibold">
            Pesan
          </label>
          <textarea
            id="pesan"
            name="pesan"
            placeholder="Tulis pesan kamu"
            rows={4}
            value={form.pesan}
            onChange={handleChange}
            className={`${formClass} resize-none`}
          />
        </div>

        <div className="w-full flex justify-end">
          <button
            type="submit"
            disabled={!isValid}
            className={`w-1/2 px-6 py-3.5 rounded-lg text-body-medium transition-all duration-200 mt-2 
              ${
                isValid
                  ? "bg-green-gradient text-background hover:opacity-90 cursor-pointer"
                  : "bg-alt text-section-alt cursor-not-allowed"
              }`}
          >
            Kirim Pesan
          </button>
        </div>
      </form>
    </div>
  );
}
