import Link from "next/link";
import { FooterNavLinks, FooterSocialLinks } from "./Links";

export default function Footer() {
  return (
    <footer className="w-full bg-green-primary py-31">
      <div className="max-w-6xl mx-auto px-4 flex flex-col gap-13">
        <div className="flex flex-col md:items-center gap-8 w-full">
          <Link href="/" className="flex gap-3">
            <span className="text-logo font-bold text-white">ECOVEST</span>
          </Link>

          <div className="flex flex-col md:items-center gap-6">
            <FooterNavLinks />

            <div className="flex md:items-center gap-6">
              <FooterSocialLinks />
            </div>
          </div>
        </div>

        <p className="text-white text-center text-body">
          © 2025 ECOVEST. Powered by Raxiem Studio.
        </p>
      </div>
    </footer>
  );
}
