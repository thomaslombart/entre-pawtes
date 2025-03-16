import Image from "next/image";
import CheckmarkItem from "@/components/CheckmarkItem";

const testimonials = [
  {
    text: "Je recommande!!!! Esther est très à l'écoute des besoins de nos fidèles compagnons et du maître. Très professionnelle, Esther s'implique à 100% 👌 j'ai adopté un chiot et faire appel à ces précieux conseils a été fondamental pour instaurer le lien entre lui, mes enfants et moi.",
    name: "Delphine - Août 2024",
  },
  {
    text: "Une éducatrice à l'écoute, dans une éducation bienveillante selon le besoin du chien. Sherlock et moi mettons en place les exercices qu'elle nous a conseillé et cela nous permet de passer des balades plus sereines.",
    name: "Anne-Sophie - Décembre 2024",
  },
  {
    text: "Une éducatrice à l'écoute, dans une éducation bienveillante selon le besoin du chien. Sherlock et moi mettons en place les exercices qu'elle nous a conseillé et cela nous permet de passer des balades plus sereines.",
    name: "Anne-Sophie Le Moullec - Mars 2025",
  },
];

const servicePlans = [
  {
    title: "Un bon pawte",
    price: "350€",
    image: "/images/bon-pawte.png",
    features: [
      "Kit de bienvenue d'une valeur de <strong>25€</strong>",
      "Bilan complet (1h30 à 2h00)",
      "4 séances d'éducation (1h00 chacune)",
      "Accès à une plateforme en ligne avec récapitulatifs",
      'Envoi des fiches "Les essentiels d\'Entre Pawtes"',
    ],
    recommended: false,
    calLink:
      "https://cal.com/entre-pawtes/premier-appel?service=Forfait%20%E2%80%94%20Un%20bon%20pawte",
  },
  {
    title: "Un pawte au top",
    price: "450€",
    image: "/images/pawte-top.png",
    features: [
      "<strong>Le contenu du forfait classique +…</strong>",
      "Suivi par message avec réponse garantie en 48h",
      "Accès à une visio de 30 minutes par semaine",
      "<strong>Offert</strong> : 1 balade éducative",
    ],
    recommended: true,
    calLink:
      "https://cal.com/entre-pawtes/premier-appel?service=Forfait%20%E2%80%94%20Un%20pawte%20au%20top",
  },
];

const unitServices = [
  {
    title: "Cours individuel",
    price: "60€/h",
    features: [
      "1h à votre domicile ou en extérieur",
      "Séance d'éducation adaptée à votre chien",
      "Exercices pratiques et ludiques",
      "Conseils personnalisés à appliquer au quotidien",
    ],
    calLink:
      "https://cal.com/entre-pawtes/premier-appel?service=Cours%20individuel",
  },
  {
    title: "Bilan comportemental",
    price: "60€/h",
    features: [
      "1h30 à 2h à votre domicile",
      "Analyse complète du comportement de votre chien",
      "Identification des besoins spécifiques",
      "Plan d'action sur mesure pour progresser ensemble",
    ],
    calLink:
      "https://cal.com/entre-pawtes/premier-appel?service=Bilan%20individuel",
  },
  {
    title: "Balade éducative",
    price: "25€/h",
    features: [
      "Je promène votre chien pendant 1h",
      "Travail éducatif adapté à ses besoins",
      "Socialisation et gestion des rencontres",
      "Photos & vidéos envoyées à chaque balade",
    ],
    calLink:
      "https://cal.com/entre-pawtes/premier-appel?service=Balade%20individuelle",
  },
];

const certifications = [
  {
    title: "ACACED chien",
    image: "/images/acaced.png",
    description: [
      "Une <strong>attestation reconnue par l'État</strong> garantissant mes connaissances en éducation canine et comportement animal.",
      "<strong>Formation obligatoire</strong> pour exercer professionnellement auprès des chiens, validant mes compétences en matière de <strong>bien-être animal</strong>.",
    ],
  },
  {
    title: "Vox Animae",
    image: "/images/vox-animae.png",
    description: [
      "Formation certifiée <strong>Qualiopi</strong> dispensée par un organisme reconnu prônant le <strong>respect de l'animal et de ses émotions</strong>.",
      "<strong>Formation d'un an</strong> alliant théorie et pratique sur l'éducation et le comportement du chien avec une approche bienveillante.",
    ],
  },
  {
    title: "Compétences émotionnelles du chien",
    image: "/images/competences-emotionnelles.png",
    description: [
      "Formation spécialisée sur l'acquisition de <strong>l'autonomie</strong>, de <strong>l'autocontrôle</strong> et la gestion des émotions comme la frustration et l'anxiété.",
      "Techniques pour comprendre les besoins exprimés par les comportements difficiles et <strong>renforcer la confiance</strong> entre le chien et l'humain.",
    ],
  },
];

export default function Page() {
  return (
    <>
      <section className="relative w-full h-[80vh] md:h-screen">
        <Image
          src="/images/home.webp"
          alt="Éducatrice canine avec un chien dans un environnement naturel"
          fill
          priority
          quality={100}
          className="object-cover"
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="absolute inset-0 px-4 sm:px-6 md:px-12 lg:px-24 flex items-center text-white">
          <div className="flex flex-col gap-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black">
              <span className="block mb-3">Moi c&apos;est Esther,</span>
              <span className="bg-teal-100 text-teal-900 px-3 py-1 rounded-lg inline md:inline-block">
                Éducatrice comportementaliste canine à Lille
              </span>
            </h1>

            <div className="max-w-2xl">
              <p className="text-base md:text-lg leading-relaxed mb-6">
                Je suis là pour vous aider à comprendre votre chien (votre{" "}
                <span className="italic">pawte</span>). Mon objectif est de vous
                apprendre à communiquer efficacement avec lui, à l&apos;intégrer
                harmonieusement dans votre quotidien et à établir une relation
                au top avec lui, le tout dans la{" "}
                <span className="bg-teal-100 text-teal-900 px-1 py-0.5 font-semibold rounded-sm">
                  positivité et la bienveillance.
                </span>{" "}
              </p>

              <p className="font-bold italic">
                Parce qu&apos;un pawte, c&apos;est aussi un membre de la
                famille.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 lg:py-24 bg-white text-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-center mb-8 md:mb-12 text-primary">
            Pourquoi choisir Entre Pawtes ?
          </h2>

          <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12 mb-8 sm:mb-12 md:mb-16 items-center">
            <div className="w-full md:w-1/2">
              <Image
                src="/images/sully-le-ouf.webp"
                alt="Sully, le chien d'Esther"
                width={600}
                height={600}
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>

            <ul className="space-y-4 w-full md:w-1/2">
              <CheckmarkItem
                emoji="🔍"
                title="Une approche personnalisée et bienveillante"
                description="Chaque chien est unique, c'est pourquoi j'adapte mes méthodes à sa personnalité en utilisant exclusivement des techniques respectueuses basées sur la récompense et le renforcement positif."
              />

              <CheckmarkItem
                emoji="📋"
                title="Un accompagnement complet"
                description="Je ne me limite pas au temps passé ensemble : je vous fournis des outils personnalisés, des fiches pratiques et un suivi adapté pour continuer le travail efficacement à la maison."
              />

              <CheckmarkItem
                emoji="🤝"
                title="Une relation de confiance durable"
                description="Mon objectif est de créer un lien solide entre vous et votre chien, basé sur la compréhension mutuelle et le respect, pour une harmonie qui dure dans le temps et une intégration harmonieuse dans votre quotidien."
              />
            </ul>
          </div>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-center mb-6 md:mb-8 text-primary mt-8 sm:mt-12 md:mt-16 lg:mt-24">
            Mes avis
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-10">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="rounded-lg shadow-md p-4 sm:p-6 md:p-8 flex flex-col h-full bg-primary text-white"
              >
                <div className="text-yellow-300 mb-4 text-xl">★★★★★</div>
                <p className="mb-5">{testimonial.text}</p>
                <p className="mt-auto font-semibold">{testimonial.name}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10 md:mt-14">
            <a
              href="https://maps.app.goo.gl/ba1gco5uMirkRtSq7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block py-2 sm:py-3 px-6 sm:px-8 font-bold rounded-full text-center transition-all duration-300 bg-amber-900 text-white hover:bg-amber-900/90"
            >
              Voir tous les avis
            </a>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 lg:py-24 bg-primary text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-center mb-8 md:mb-12">
            Mes forfaits
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
            {servicePlans.map((plan, index) => (
              <div key={index} className="relative mt-20">
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <Image
                    src={plan.image}
                    alt={plan.title}
                    width={140}
                    height={140}
                    className="object-contain drop-shadow-xl"
                  />
                </div>
                <div className="rounded-lg shadow-lg p-4 sm:p-6 md:p-8 flex flex-col h-full bg-white text-gray-800 pt-20">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-center mb-4 text-primary">
                    {plan.title}
                  </h3>
                  <span className="text-2xl sm:text-3xl md:text-4xl font-medium text-primary text-center mb-6">
                    {plan.price}
                  </span>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckmarkItem.Icon />
                        <span
                          dangerouslySetInnerHTML={{ __html: feature }}
                        ></span>
                      </li>
                    ))}
                  </ul>
                  <div className="text-center mt-auto">
                    <a
                      href={plan.calLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block py-2 sm:py-3 px-6 sm:px-8 font-bold rounded-xl text-center transition-all duration-300 bg-amber-900 text-white hover:bg-amber-900/90 w-full font-extrabold"
                    >
                      Choisir
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 sm:mt-12 md:mt-16 lg:mt-24">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-center mb-6 md:mb-8">
              Mes prestations à l&apos;unité
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-10">
              {unitServices.map((service, index) => (
                <div
                  key={index}
                  className="rounded-lg shadow-md p-4 sm:p-6 md:p-8 flex flex-col h-full bg-white/90 text-primary"
                >
                  <h4 className="text-lg sm:text-xl md:text-2xl font-black text-center mb-3 sm:mb-4 text-primary">
                    {service.title}
                  </h4>
                  <div className="text-center mb-3 sm:mb-6">
                    <span className="text-xl sm:text-2xl font-medium text-primary">
                      {service.price}
                    </span>
                  </div>
                  <ul className="space-y-2 sm:space-y-4 mb-4 sm:mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckmarkItem.Icon />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="text-center mt-auto">
                    <a
                      href={service.calLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block py-2 sm:py-3 px-6 sm:px-8 font-bold rounded-xl text-center transition-all duration-300 bg-amber-900 text-white hover:bg-amber-900/90 w-full font-extrabold"
                    >
                      Choisir
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8 sm:mt-10 mb-12 sm:mb-20">
              <p className="text-sm leading-relaxed text-white/80">
                Vous ne trouvez pas la prestation que vous recherchez ?
                Contactez-moi via{" "}
                <a
                  href="https://www.instagram.com/entre_pawtes/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:underline"
                >
                  Instagram
                </a>{" "}
                ou par{" "}
                <a
                  href="mailto:contact@entre-pawtes.fr"
                  className="text-white hover:underline"
                >
                  email
                </a>
                .
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row bg-white rounded-xl overflow-hidden gap-4 sm:gap-8 md:gap-12">
            <div className="w-full md:w-1/2">
              <iframe
                src="https://www.google.com/maps/d/embed?mid=1n4tB_zyC39Fu2TOfmWCkE7LCottYyHQ&ehbc=2E312F&hl=fr"
                width="100%"
                height="100%"
                style={{ marginTop: "-70px", height: "400px" }}
                title="Zone de déplacement sans frais supplémentaires"
                loading="lazy"
                allowFullScreen
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center text-gray-900 p-4 sm:p-6">
              <h3 className="mb-2 sm:mb-4 text-xl font-extrabold">
                Frais de déplacement{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 text-orange-900 font-extrabold">
                    OFFERTS
                  </span>
                  <span className="absolute -inset-1 bg-orange-200 -rotate-3 transform-gpu"></span>
                </span>{" "}
                <span>dans un rayon de 10 km autour de Lille</span>
              </h3>
              <p className="mb-2 sm:mb-4">
                <span className="font-bold text-gray-900 text-lg block mb-1">
                  Zones desservies sans frais :
                </span>
                <span className="font-medium text-gray-800 leading-relaxed block">
                  Lille, Lambersart, La Madeleine, Marcq-en-Barœul,
                  Mons-en-Barœul, Villeneuve d&apos;Ascq, Lezennes, Ronchin,
                  Faches-Thumesnil, Loos, Haubourdin, Lomme et Capinghem.
                </span>
              </p>
              <p className="text-sm leading-relaxed italic">
                Au-delà de cette zone, des frais de déplacement de 0,50€/km
                s&apos;appliquent.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 lg:py-24 bg-white text-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-center mb-8 md:mb-12 text-primary">
            Qui suis-je ?
          </h2>

          <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12 mx-auto justify-center md:items-center">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <Image
                src="/images/esther-avec-sully-vertical.webp"
                alt="Esther avec son chien Sully"
                width={350}
                height={350}
                className="rounded-lg shadow-lg mx-auto md:mx-0 w-full max-w-[300px] h-auto"
              />
            </div>

            <div className="w-full md:w-2/3 space-y-5">
              <h3 className="text-xl sm:text-2xl font-extrabold text-primary">
                Moi, c&apos;est Esther,{" "}
                <span className="font-bold">dogmom de Sully.</span>
              </h3>

              <div className="text-base md:text-lg leading-relaxed space-y-4">
                <p>
                  J&apos;ai toujours aimé les animaux, en particulier les
                  chiens, qui sont pour moi des êtres si purs et gentils.
                  J&apos;ai donc voulu prendre soin d&apos;eux et leur apporter
                  tout mon amour.
                </p>

                <p>
                  J&apos;ai commencé par faire du{" "}
                  <span className="text-primary font-semibold">bénévolat</span>{" "}
                  dans un refuge, où je m&apos;occupais de plusieurs chiens.
                  Ensuite, j&apos;ai eu mon propre chien, ce qui m&apos;a permis
                  <span className="text-primary font-semibold">
                    {" "}
                    d&apos;en apprendre davantage sur l&apos;éducation canine
                  </span>
                  .
                </p>

                <p>
                  Deux ans après avoir accueilli Sully, j&apos;ai décidé de me
                  réorienter et de me
                  <span className="text-primary font-semibold">
                    {" "}
                    former à l&apos;éducation et au comportement canin
                    bienveillant chez Vox Animae
                  </span>
                  , en passant également mon{" "}
                  <span className="text-primary font-semibold">ACACED</span>.
                </p>

                <p className="text-primary font-semibold">
                  Mon objectif est de créer une relation harmonieuse entre
                  l&apos;humain et le chien.
                </p>

                <p>
                  C&apos;est ainsi que le nom &quot;
                  <span className="text-primary font-semibold">
                    Entre Pawtes
                  </span>
                  &quot; prend tout son sens :
                  <span className="text-primary font-semibold">
                    {" "}
                    je veux que votre chien devienne votre véritable pote de
                    vie.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 lg:py-24 bg-primary text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-center mb-8 md:mb-12">
            Mes diplômes et formations
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-10">
            {certifications.map((cert, index) => (
              <div key={index} className="relative mt-14">
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    width={160}
                    height={160}
                    className="object-contain drop-shadow-xl"
                  />
                </div>
                <div className="rounded-lg shadow-lg sm:p-6 md:p-8 md:pt-14 flex flex-col h-full bg-white text-gray-800">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-black text-center mb-3 sm:mb-5 text-primary">
                    {cert.title}
                  </h3>
                  <ul className="space-y-3 sm:space-y-4 mt-1 sm:mt-2 flex-grow">
                    {cert.description.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-primary font-bold mr-2">•</span>
                        <span dangerouslySetInnerHTML={{ __html: item }}></span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
