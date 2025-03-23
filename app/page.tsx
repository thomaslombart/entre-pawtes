"use client";

import CheckmarkIcon from "@/app/components/CheckmarkIcon";
import Image from "next/image";
import Button from "./components/Button";

const testimonials = [
  {
    text: "Je recommande!!!! Esther est très à l'écoute des besoins de nos fidèles compagnons et du maître. Très professionnelle, Esther s'implique à 100% 👌 j'ai adopté un chiot et faire appel à ces précieux conseils a été fondamental pour instaurer le lien entre lui, mes enfants et moi.",
    name: "Delphine - Août 2024",
    image: "/images/georgie.jpg",
    alt: "",
  },
  {
    text: "Une éducatrice à l'écoute, dans une éducation bienveillante selon le besoin du chien. Sherlock et moi mettons en place les exercices qu'elle nous a conseillé et cela nous permet de passer des balades plus sereines.",
    name: "Anne-Sophie - Décembre 2024",
    image: "/images/sherlock.jpg",
    alt: "",
  },
  {
    text: "Esther a été très efficace pour l'éducation de notre jeune Golden Retriever. Ses cours se déroulent tout en douceur, avec patience et une bonne connaissance de la psychologie canine. Elle nous a appris à bien nous comporter avec notre chien afin de ne pas commettre d'erreurs irréversibles. Je recommande vivement !",
    name: "Pierre-Michel - Mars 2025",
    image: "/images/vincent.jpg",
    alt: "",
  },
];

const servicePlans = [
  {
    title: "Un bon pawte",
    price: "350€",
    image: "/images/bon-pawte.png",
    alt: "",
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
    alt: "",
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
      "Exercices pratiques et ludiques pour un apprentissage efficace",
      "Conseils personnalisés à appliquer au quotidien",
    ],
    calLink:
      "https://cal.com/entre-pawtes/premier-appel?service=Cours%20individuel",
  },
  {
    title: "Bilan comportemental",
    price: "120€",
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
    title: "Balade individuelle",
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

const Underline = ({ children }: { children: React.ReactNode }) => (
  <span className="underline decoration-wavy decoration-amber-400 decoration-2 underline-offset-4">
    {children}
  </span>
);

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

        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="px-4 md:px-0 md:text-center max-w-5xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8">
              Éducatrice comportementaliste canine à Lille et ses alentours
            </h1>
            <div className="text-xl text-white mb-12 max-w-3xl mx-auto space-y-4">
              <p>
                Je vous aide à comprendre votre chien (votre pawte) et à
                communiquer efficacement avec lui pour l&apos;intégrer
                harmonieusement dans votre quotidien.
              </p>
              <p>
                Mon objectif est d&apos;établir une relation au top entre vous,
                basée sur la <Underline>positivité</Underline> et la{" "}
                <Underline>bienveillance</Underline>, pour un équilibre durable.
              </p>
            </div>
            <Button href="#services">Découvrir mes services</Button>
          </div>
        </div>
      </section>

      <section
        id="pourquoi"
        className="px-4 md:px-6 md:px-8 py-12 md:py-16 md:py-20 lg:py-24 bg-white text-gray-900"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-8 md:mb-12 text-primary">
            Pourquoi choisir Entre Pawtes ?
          </h2>

          <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12 mb-8 md:mb-12 md:mb-16 items-center">
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
              <li className="flex items-start">
                <span className="h-8 w-8 mr-3 flex-shrink-0 text-xl flex items-center justify-center">
                  🔍
                </span>
                <div>
                  <h3 className="text-lg font-bold text-primary mb-1">
                    Une approche personnalisée et bienveillante
                  </h3>
                  <p className="text-md md:text-base">
                    Chaque chien est unique, c&apos;est pourquoi j&apos;adapte
                    mes méthodes à sa personnalité en utilisant exclusivement
                    des techniques respectueuses basées sur la récompense et le
                    renforcement positif.
                  </p>
                </div>
              </li>

              <li className="flex items-start">
                <span className="h-8 w-8 mr-3 flex-shrink-0 text-xl flex items-center justify-center">
                  📋
                </span>
                <div>
                  <h3 className="text-lg font-bold text-primary mb-1">
                    Un accompagnement complet
                  </h3>
                  <p className="text-md md:text-base">
                    Je ne me limite pas au temps passé ensemble : je vous
                    fournis des outils personnalisés, des fiches pratiques et un
                    suivi adapté pour continuer le travail efficacement à la
                    maison.
                  </p>
                </div>
              </li>

              <li className="flex items-start">
                <span className="h-8 w-8 mr-3 flex-shrink-0 text-xl flex items-center justify-center">
                  🤝
                </span>
                <div>
                  <h3 className="text-lg font-bold text-primary mb-1">
                    Une relation de confiance durable
                  </h3>
                  <p className="text-md md:text-base">
                    Mon objectif est de créer un lien solide entre vous et votre
                    chien, basé sur la compréhension mutuelle et le respect,
                    pour une harmonie qui dure dans le temps et une intégration
                    harmonieuse dans votre quotidien.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <h3 className="text-2xl md:text-3xl font-black text-center mb-6 md:mb-8 text-primary mt-8 md:mt-12 md:mt-16 lg:mt-24">
            Mes avis
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 md:gap-10">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="rounded-lg shadow-md p-4 md:p-6 md:p-8 flex flex-col h-full bg-primary text-white relative"
              >
                <div className="text-yellow-300 mb-4 text-xl">★★★★★</div>
                <p className="mb-5">{testimonial.text}</p>
                <p className="mt-auto font-semibold">{testimonial.name}</p>
                <div className="absolute bottom-4 right-4 w-13 h-13 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.alt}
                    width={120}
                    height={120}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10 md:mt-14">
            <Button href="https://maps.app.goo.gl/ba1gco5uMirkRtSq7" isExternal>
              Voir tous les avis
            </Button>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="px-4 md:px-6 md:px-8 py-16 md:py-24 bg-primary text-white"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-8 md:mb-12">
            Mes services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 md:gap-10">
            {unitServices.map((service, index) => (
              <div
                key={index}
                className="rounded-2xl shadow-md p-7 md:p-8 flex flex-col gap-9 h-full bg-white text-primary"
              >
                <div>
                  <h3 className="text-xl md:text-2xl font-black text-center mb-4 text-primary">
                    {service.title}
                  </h3>
                  <span className="text-xl md:text-2xl font-medium text-primary text-center">
                    {service.price}
                  </span>
                </div>
                <ul className="space-y-2 md:space-y-4">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckmarkIcon />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="text-center mt-auto">
                  <Button href={service.calLink} isExternal>
                    Choisir
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 md:mt-12 md:mt-16 lg:mt-24">
            <h3 className="text-2xl md:text-3xl font-black text-center mb-6 md:mb-8">
              Mes forfaits
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 md:gap-12">
              {servicePlans.map((plan, index) => (
                <div key={index} className="relative mt-20">
                  <div className="absolute  md:-top-6 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <Image
                      src={plan.image}
                      alt={plan.title}
                      width={140}
                      height={140}
                      className="object-contain drop-shadow-xl"
                    />
                  </div>
                  <div className="rounded-2xl shadow-lg p-6 pt-16 md:p-10 flex flex-col h-full bg-white text-gray-800 ">
                    <h3 className="text-2xl md:text-3xl font-black text-center mb-4 text-primary">
                      {plan.title}
                    </h3>
                    <span className="text-xl md:text-2xl font-medium text-primary text-center mb-6">
                      {plan.price}
                    </span>
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <CheckmarkIcon />
                          <span
                            dangerouslySetInnerHTML={{ __html: feature }}
                          ></span>
                        </li>
                      ))}
                    </ul>
                    <div className="text-center mt-auto">
                      <Button href={plan.calLink} isExternal>
                        Choisir
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-8 md:mt-10 mb-12 md:mb-20">
            <p className="text-md leading-relaxed text-white/80">
              Vous ne trouvez pas la prestation que vous recherchez ?
              Contactez-moi via{" "}
              <a
                href="https://www.instagram.com/entre_pawtes/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-semibold hover:underline"
              >
                Instagram
              </a>{" "}
              ou par{" "}
              <a
                href="mailto:entrepawtes@gmail.com"
                className="text-white font-semibold hover:underline"
              >
                email
              </a>
              .
            </p>
          </div>

          <div className="flex flex-col md:flex-row bg-white rounded-xl overflow-hidden gap-4 md:gap-8 md:gap-12">
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
            <div className="w-full md:w-1/2 flex flex-col justify-center text-gray-900 p-4 md:p-6">
              <h3 className="mb-2 md:mb-4 text-xl font-extrabold">
                Frais de déplacement{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 text-orange-900 font-extrabold">
                    OFFERTS
                  </span>
                  <span className="absolute -inset-1 bg-orange-200 -rotate-3 transform-gpu"></span>
                </span>{" "}
                <span>dans un rayon de 10 km autour de Lille</span>
              </h3>
              <p className="mb-2 md:mb-4">
                <span className="font-bold text-gray-900 text-lg block mb-1">
                  Zones desservies sans frais :
                </span>
                <span className="font-medium text-gray-800 leading-relaxed block">
                  Lille, Lambersart, La Madeleine, Marcq-en-Barœul,
                  Mons-en-Barœul, Villeneuve d&apos;Ascq, Lezennes, Ronchin,
                  Faches-Thumesnil, Loos, Haubourdin, Lomme et Capinghem.
                </span>
              </p>
              <p className="text-md leading-relaxed italic">
                Au-delà de cette zone, des frais de déplacement de 0,50€/km
                s&apos;appliquent.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
