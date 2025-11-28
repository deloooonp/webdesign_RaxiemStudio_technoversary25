export default function ContactInfo() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-display-h2 max-w-lg font-bold text-bodyblack mb-4 leading-tight">
          Diskusikan Kebutuhan Daur Ulangmu Bersama{" "}
          <span className="bg-green-gradient bg-clip-text text-transparent">
            ECOVEST
          </span>
        </h1>
        <p className="text-body text-bodyblack">
          Punya pertanyaan tentang proses daur ulang? Kami siap bantu.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 flex items-center justify-center shrink-0">
            <img src="/icons/contact/mail.svg" alt="E-Mail" />
          </div>
          <div>
            <p className="text-body text-alt mb-1">E-mail</p>
            <a
              href="mailto:hello@ecovest.id"
              className="text-body hover:text-green-secondary transition-colors"
            >
              hello@ecovest.id
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-12 h-12 flex items-center justify-center shrink-0">
            <img src="/icons/contact/phone.svg" alt="Phone" />
          </div>
          <div>
            <p className="text-body text-alt mb-1">Phone</p>
            <a
              href="tel:+6282182002012"
              className="text-body hover:text-green-secondary transition-colors"
            >
              +62 821 2002 2012
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
