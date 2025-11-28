import { rankings, rankLogo } from "@/constants";
import Link from "next/link";

export default function Community() {
  const topRankings = [...rankings].sort((a, b) => a.rank - b.rank).slice(0, 4);

  return (
    <div className="p-2.5 flex flex-col rounded-2xl border-[1.75px] border-gradient">
      <div className="flex justify-between items-center p-2.5 mb-2">
        <h3 className="text-display-h3 font-semibold text-bodyblack">
          Anggota Teraktif
        </h3>
        <Link
          href="/user/leaderboard"
          className="text-caption bg-green-gradient bg-clip-text text-transparent"
        >
          Lihat Semua
        </Link>
      </div>

      <div className="grid grid-cols-4 gap-2 text-center mb-2 bg-green-primary p-3 rounded-lg">
        <div className="text-body-medium text-background">Peringkat</div>
        <div className="text-body-medium text-background">Nama</div>
        <div className="text-body-medium text-background">Total Sampah</div>
        <div className="text-body-medium text-background">Poin</div>
      </div>

      <div className="flex flex-col gap-[15px]">
        {topRankings.slice(0, 4).map((item, index) => (
          <div
            key={index}
            className={`grid grid-cols-4 gap-2 items-center p-1.5 text-center ${
              item.isUser
                ? "rounded-[10px] bg-green-gradient"
                : "bg-[#156B56]/5"
            }`}
          >
            <div
              className={`w-8 h-8 mx-auto rounded-full ${
                item.isUser ? "bg-bakground/20" : ""
              }     ${
                index > 2 ? "bg-green-gradient" : "bg-green-gradient/40"
              }   flex items-center justify-center text-background font-bold`}
            >
              {index < 3 ? (
                <img
                  src={rankLogo[index].img}
                  alt={`Rank ${index + 1}`}
                  className="w-6 h-6 object-contain"
                />
              ) : (
                index + 1
              )}
            </div>

            {[item.name, item.totalWaste, item.points].map((value, i) => (
              <span
                key={i}
                className={` ${
                  item.isUser
                    ? "text-body-medium text-white"
                    : "text-body text-bodyblack"
                }`}
              >
                {value}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
