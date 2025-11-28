import Image from "next/image";

export default function ProfilePicture() {
  return (
    <div className="flex flex-col items-start gap-12 p-4 sm:p-[17px] mb-6 border-gradient border-[1.75px] rounded-2xl">
      <h2 className="text-bodyblack text-display-h3 font-semibold">
        Foto Profile
      </h2>
      <div className="flex sm:flex-row items-center sm:items-start gap-8 w-full">
        <div className="relative w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] rounded-full overflow-hidden bg-gray-300 shrink-0">
          <Image
            src="/img/user/profile.png"
            fill
            alt="profile"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col gap-6 w-full">
          <button className="flex w-full h-[51px] px-5 py-4 justify-center items-center rounded-xl border-[1.75px] border-gradient hover:bg-green-secondary/5 cursor-pointer transition-colors">
            <span className="text-display-h3 bg-green-gradient bg-clip-text text-transparent">
              Unggah foto baru
            </span>
          </button>

          <div className="flex flex-col gap-1.5">
            <p className="tex-body-medium text-bodyblack">
              Disarankan minimal 800x800 piksel.
            </p>
            <p className="tex-body-medium text-bodyblack">
              Format JPG atau PNG diperbolehkan
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
