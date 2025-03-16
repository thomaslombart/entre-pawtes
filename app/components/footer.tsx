import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-50 py-12 px-8 border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-4 mb-8 md:mb-0">
            <Image
              src="/images/entre-pawtes.png"
              alt="Entre Pawtes"
              width={100}
              height={100}
              className="rounded-full"
            />
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-primary">Entre Pawtes</h3>
              <p>Éducation comportementaliste canine à Lille</p>
              <a
                href="mailto:entrepawtes@gmail.com"
                className="flex items-center text-primary font-semibold hover:underline"
              >
                entrepawtes@gmail.com
              </a>
            </div>
          </div>

          <div className="text-right">
            <h3 className="text-lg font-bold text-primary mb-4">Suivez-moi</h3>
            <div className="flex flex-col space-y-3">
              <a
                href="https://www.instagram.com/entre_pawtes/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-end hover:text-primary transition-colors"
              >
                <span className="mr-2">@entre_pawtes</span>
                <Image
                  src="/images/instagram.png"
                  alt="Instagram"
                  width={24}
                  height={24}
                />
              </a>
              <a
                href="https://www.youtube.com/@esther-entrepawtes"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-end hover:text-primary transition-colors"
              >
                <span className="mr-2">Esther</span>
                <svg className="w-6 h-6" fill="red" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-gray-200 text-center text-sm text-gray-600">
          <p>
            © {new Date().getFullYear()} Entre Pawtes. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
