import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 md:px-8">
      <div className="text-center">
        <div className="w-60 h-60 md:w-72 md:h-72 mx-auto md:mb-8 relative">
          <Image
            src="/images/not-found.svg"
            alt="Page non trouvée"
            fill
            priority
            className="object-contain"
          />
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          Page non trouvée
        </h1>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Désolé, la page que vous recherchez semble avoir disparu…
        </p>
        <Link
          href="/"
          className="inline-block py-3 px-8 font-bold rounded-full text-center transition-all duration-300 bg-amber-900 text-white hover:bg-amber-900/90"
        >
          Retour à l&apos;accueil
        </Link>
      </div>
    </div>
  );
}
