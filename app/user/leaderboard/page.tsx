import { Layout } from "../components";
import { LeaderboardList, LeaderboardCard } from "./sections";
import { rankings } from "@/constants";

export default function Peringkat() {
  // Sort top 3: untuk mobile (1,2,3) dan desktop akan diatur dengan order
  const topThree = [...rankings].sort((a, b) => a.rank - b.rank).slice(0, 3);

  return (
    <Layout title="Peringkat Ecovest">
      <div className="flex flex-col items-center gap-6 px-4 sm:px-0 w-full max-w-[1043px] mx-auto">
        <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch gap-6 md:gap-[59px] w-full py-4 md:py-[15px]">
          {topThree.map((user) => (
            <LeaderboardCard
              key={user.rank}
              rank={user.rank}
              name={user.name}
              imageUrl={user.imageUrl || "/img/user/default-avatar.png"}
              totalWaste={user.totalWaste}
              points={user.points}
              isUser={user.isUser}
            />
          ))}
        </div>

        <LeaderboardList />
      </div>
    </Layout>
  );
}
