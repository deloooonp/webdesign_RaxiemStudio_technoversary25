import { RankingCardProps } from "@/types";
import { rankLogo } from "@/constants";

export default function LeaderboardCard({
  rank,
  name,
  imageUrl,
  totalWaste,
  points,
  isUser,
}: RankingCardProps) {
  return (
    <div
      className={`
        flex flex-col items-center justify-center gap-8 py-14 rounded-2xl w-full ${
          isUser ? "bg-green-gradient" : "border-gradient"
        } ${
        rank === 1 ? "md:order-1" : rank === 2 ? "md:order-0" : "md:order-2"
      }
      `}
    >
      <div className="flex flex-col justify-end items-end relative">
        <div className="w-[100px] h-[100px] rounded-full overflow-hidden bg-gray-300">
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute -bottom-2 -right-2 w-8 h-8">
          {rank <= 3 ? (
            <img src={rankLogo[rank - 1].img} className="w-full h-full" />
          ) : null}
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-8 w-full">
        <h3
          className={`text-center text-display-h3 font-semibold ${
            isUser ? "text-background" : "text-bodyblack"
          }`}
        >
          {name}
        </h3>

        <div className="flex justify-center items-center gap-8">
          <div className="flex flex-col justify-center items-center gap-[15px]">
            <p
              className={`text-center text-body-medium ${
                isUser ? "text-background" : "text-bodyblack"
              }`}
            >
              Total Sampah
            </p>
            <p
              className={`text-center text-display-h3 font-semibold ${
                isUser ? "text-background" : "text-bodyblack"
              }`}
            >
              {totalWaste}
            </p>
          </div>

          <div className="flex flex-col justify-center items-center gap-[15px]">
            <p
              className={`text-center text-body-medium ${
                isUser ? "text-background" : "text-bodyblack"
              }`}
            >
              Poin
            </p>
            <p
              className={`text-center text-display-h3 font-semibold ${
                isUser ? "text-background" : "text-bodyblack"
              }`}
            >
              {points}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
