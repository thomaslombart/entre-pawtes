import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 md:px-8">
      <div className="text-center">
        <h1 className="text-6xl font-black text-primary mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          Page non trouvée
        </h2>
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
