import { rankings } from "@/constants";

export default function LeaderboardList() {
  return (
    <>
      <div className="flex flex-col w-full justify-center items-center gap-6 p-[17px] rounded-[10px] bg-green-primary">
        <div className="grid grid-cols-4 gap-4 w-full h-[33px]">
          <div className="flex justify-center items-center">
            <p className="text-background text-center text-body-medium">
              Peringkat
            </p>
          </div>
          <div className="flex justify-start items-center">
            <p className="text-background text-center text-body-medium">Nama</p>
          </div>
          <div className="flex justify-end items-center">
            <p className="text-background text-center text-body-medium">
              Total Sampah
            </p>
          </div>
          <div className="flex justify-center items-center">
            <p className="text-background text-center text-body-medium">Poin</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6 p-4 sm:p-[17px] rounded-2xl border-[1.75px] border-gradient w-full">
        <div className="flex flex-col gap-[15px] max-h-[400px] overflow-y-auto">
          {rankings.slice(3).map((user) => (
            <div
              key={user.rank}
              className="grid grid-cols-4 gap-4 sm:gap-[52px] py-[17px] px-2 sm:px-0 rounded-[10px] bg-[rgba(21,107,86,0.05)]"
            >
              <div className="flex justify-center items-center h-[33px]">
                <p className="w-full text-body-medium text-center">
                  {user.rank}
                </p>
              </div>
              <div className="flex justify-center items-center h-[33px]">
                <p className="w-full text-body-medium text-left">{user.name}</p>
              </div>
              <div className="flex justify-center items-center h-[33px]">
                <p className="w-full text-body-medium text-right">
                  {user.totalWaste}
                </p>
              </div>
              <div className="flex justify-center items-center h-[33px]">
                <p className="w-full text-body-medium text-center">
                  {user.points}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
