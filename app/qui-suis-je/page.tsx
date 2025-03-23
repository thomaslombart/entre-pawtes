import Image from "next/image";

const certifications = [
  {
    title: "ACACED chien",
    image: "/images/acaced.png",
    description: [
      "Une <strong>attestation reconnue par l'État</strong> garantissant mes connaissances en éducation canine et comportement animal.",
      "<strong>Formation obligatoire</strong> pour exercer professionnellement auprès des chiens, validant mes compétences en matière de <strong>bien-être animal</strong>.",
    ],
    alt: "",
  },
  {
    title: "Vox Animae",
    image: "/images/vox-animae.png",
    description: [
      "Formation certifiée <strong>Qualiopi</strong> dispensée par un organisme reconnu prônant le <strong>respect de l'animal et de ses émotions</strong>.",
      "<strong>Formation d'un an</strong> alliant théorie et pratique sur l'éducation et le comportement du chien avec une approche bienveillante.",
    ],
    alt: "",
  },
  {
    title: "Compétences émotionnelles du chien",
    image: "/images/competences-emotionnelles.png",
    description: [
      "Formation spécialisée sur l'acquisition de <strong>l'autonomie</strong>, de <strong>l'autocontrôle</strong> et la gestion des émotions comme la frustration et l'anxiété.",
      "Techniques pour comprendre les besoins exprimés par les comportements difficiles et <strong>renforcer la confiance</strong> entre le chien et l'humain.",
    ],
    alt: "",
  },
];

export default function About() {
  return (
    <>
      <section className="px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16 lg:py-20 bg-white text-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-12 mx-auto justify-center md:items-center">
            <div className="w-full md:w-1/3 mb-4 md:mb-0">
              <Image
                src="/images/esther-avec-sully-vertical.webp"
                alt="Esther avec son chien Sully"
                width={350}
                height={350}
                className="rounded-lg shadow-lg mx-auto md:mx-0 w-full max-w-[200px] md:max-w-[300px] h-auto"
              />
            </div>

            <div className="w-full md:w-2/3 space-y-5">
              <h1 className="text-xl sm:text-2xl font-extrabold text-primary">
                Moi, c&apos;est Esther,{" "}
                <span className="font-bold">dogmom de Sully.</span>
              </h1>

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
          <h2 className="text-3xl md:text-4xl font-black text-center mb-8 md:mb-12">
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
                <div className="rounded-lg shadow-lg p-8 pt-14 flex flex-col h-full bg-white text-gray-800">
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
