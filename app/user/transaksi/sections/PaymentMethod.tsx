"use client";
import { useState } from "react";
import PaymentModal from "./components/PaymentModal";

export default function PaymentMethod() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="p-[17px] rounded-2xl bg-background">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-bodyblack text-display-h3 font-semibold">
          Metode Penarikan
        </h2>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-1.5 hover:opacity-80 transition-opacity cursor-pointer"
        >
          <span className="bg-green-gradient bg-clip-text text-transparent text-body">
            Lihat Semua
          </span>
        </button>
      </div>

      <div className="relative w-full h-[280px] sm:h-[300px] rounded-2xl bg-green-primary overflow-hidden">
        <div className="absolute top-[17px] left-[17px] right-[17px]">
          <p className="text-background text-body-semibold">
            PT. BANK CENTRAL ASIA
          </p>
        </div>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <svg
            className="w-[50px] sm:w-[62px] h-[47px] sm:h-[57px]"
            viewBox="0 0 62 57"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M32.5642 0.409326L54.5225 12.6802C55.1671 13.002 55.7092 13.4971 56.088 14.11C56.4667 14.7228 56.6671 15.4291 56.6667 16.1496V19.8696C56.6667 21.6521 55.22 23.0987 53.4375 23.0987H51.5V43.7654H54.0833C54.7685 43.7654 55.4256 44.0376 55.91 44.522C56.3945 45.0065 56.6667 45.6636 56.6667 46.3487C56.6667 47.0339 56.3945 47.691 55.91 48.1754C55.4256 48.6599 54.7685 48.9321 54.0833 48.9321H7.58333C6.89819 48.9321 6.24111 48.6599 5.75664 48.1754C5.27217 47.691 5 47.0339 5 46.3487C5 45.6636 5.27217 45.0065 5.75664 44.522C6.24111 44.0376 6.89819 43.7654 7.58333 43.7654H10.1667V23.0987H8.22917C6.44667 23.0987 5 21.6521 5 19.8696V16.1496C5 14.8011 5.6975 13.5611 6.82383 12.8584L29.0999 0.409326C29.6381 0.140144 30.2316 0 30.8333 0C31.4351 0 32.026 0.140144 32.5642 0.409326ZM43.75 23.0987H17.9167V43.7654H23.0833V28.2654H28.25V43.7654H33.4167V28.2654H38.5833V43.7654H43.75V23.0987ZM30.8333 10.1821C30.1482 10.1821 29.4911 10.4542 29.0066 10.9387C28.5222 11.4232 28.25 12.0803 28.25 12.7654C28.25 13.4506 28.5222 14.1076 29.0066 14.5921C29.4911 15.0766 30.1482 15.3487 30.8333 15.3487C31.5185 15.3487 32.1756 15.0766 32.66 14.5921C33.1445 14.1076 33.4167 13.4506 33.4167 12.7654C33.4167 12.0803 33.1445 11.4232 32.66 10.9387C32.1756 10.4542 31.5185 10.1821 30.8333 10.1821Z"
              fill="#F5F5F5"
            />
          </svg>
        </div>

        <div className="absolute bottom-[17px] left-[17px] right-[17px]">
          <p className="text-background text-body-semibold">***5069</p>
        </div>
      </div>

      {showModal && <PaymentModal onClose={() => setShowModal(false)} />}
    </div>
  );
}
