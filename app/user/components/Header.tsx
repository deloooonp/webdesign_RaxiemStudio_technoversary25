import Image from "next/image";

export default function Header({ title }: { title: string }) {
  return (
    <header className="px-4 lg:px-12 py-[37px] mt-5 lg:mt-0">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
        <div className="flex flex-col gap-[15px]">
          <p className="text-body text-bodyblack">
            Selamat datang kembali, Jhon Dea 🌿
          </p>
          <h1 className="text-display-h2 text-bodyblack">{title}</h1>
        </div>

        <div className="flex items-center gap-6 lg:self-start">
          <button className="p-2">
            <img src="/icons/user/notification.svg" alt="Notification" />
          </button>

          <div className="flex items-center gap-6">
            <div className="relative w-[38.195px] h-[38.195px] ">
              <Image
                src="/img/user/profile.png"
                fill
                alt="profile"
                className="rounded-full"
              />
            </div>

            <span className="text-body font-semibold text-bodyblack hidden sm:inline">
              Jhon Dea
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
