import { activities } from "@/constants";

export default function Activity() {
  return (
    <div className="p-2.5 flex flex-col rounded-2xl border-[1.75px] border-gradient">
      <div className="flex justify-between items-center p-2.5 mb-2">
        <h3 className="text-display-h3 font-semibold text-bodyblack">
          Aktivitas Terbaru
        </h3>
      </div>

      <div className="flex flex-col gap-3.5">
        {activities.map((item, index) => (
          <div
            key={item.text}
            className={`flex justify-between items-center p-2.5 ${
              index < activities.length - 1
                ? "border-b border-[#2E2E2E]/25"
                : ""
            } `}
          >
            <div className="flex flex-col gap-2">
              <p className="text-body text-bodyblack">{item.text}</p>
              <p className="text-caption text-bodyblack">{item.date}</p>
            </div>
            <span
              className={`text-body-medium ${
                item.reward ? "text-green-secondary" : "text-bodyblack"
              }`}
            >
              {item.reward || item.point}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
