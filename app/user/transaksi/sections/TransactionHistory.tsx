import { transactionHistory } from "@/constants";

export default function TransactionHistory() {
  return (
    <div className="p-[17px] border-[1.75px] border-gradient rounded-2xl bg-background h-fit">
      <div className="p-2.5 mb-3.5">
        <h3 className="text-bodyblack text-display-h3 font-semibold">
          Riwayat Penukaran Poin
        </h3>
      </div>

      <div className="flex flex-col gap-3.5">
        {transactionHistory.map((item, index) => (
          <div
            key={index}
            className={`flex justify-between items-center p-2.5 ${
              index < transactionHistory.length - 1
                ? "border-b-[0.25px] border-alt"
                : ""
            }`}
          >
            <div className="flex flex-col gap-[9px] flex-1">
              <p className="text-body text-bodyblack">{item.description}</p>
              <p className="text-caption text-alt">{item.date}</p>
            </div>

            <div className="text-right">
              <div className="text-body-medium text-bodyblack">
                {item.amount}
              </div>
              <div
                className={`text-body-medium ${
                  item.status === "Pending"
                    ? "text-alt"
                    : "bg-green-gradient bg-clip-text text-transparent"
                }`}
              >
                {item.status}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
