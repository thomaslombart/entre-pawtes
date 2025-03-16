import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-xl">
      <nav className="flex justify-between items-center px-18">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/entre-pawtes.png"
            alt="Logo Entre Pawtes"
            width={48}
            height={48}
            className="rounded-full"
          />
          <span className="text-lg font-black text-primary">Entre Pawtes</span>
        </Link>

        <Link
          href="https://cal.com/entre-pawtes/premier-appel"
          className="bg-amber-900 text-white hover:bg-amber-900/90 text-white font-bold py-4 px-8 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Prends RDV
        </Link>
      </nav>
    </header>
  );
}
