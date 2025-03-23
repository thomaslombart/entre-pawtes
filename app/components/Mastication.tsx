"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

interface Characteristics {
  smell: string;
  size: string[];
  type: string;
}

interface Recommendation {
  title: string;
  description: string;
  reason: string;
  safety_notes: string;
  benefits: string[];
  usage: string;
  occupation_time: string;
  characteristics: Characteristics;
  url: string;
  image: string;
}

interface DogFormData {
  name: string;
  age: string;
  breed: string;
  isNeutered: boolean;
  healthIssues: string;
  behaviorIssues: string[];
  behaviorDetails: string;
  additionalNotes: string;
  specificRequirements: string;
  currentStep: number;
}

const TOTAL_STEPS = 7;

const ProgressBar = ({ currentStep }: { currentStep: number }) => {
  const progress = ((currentStep - 1) / TOTAL_STEPS) * 100;

  return (
    <div className="mb-8">
      <div className="flex justify-end mb-2">
        <span className="text-sm text-gray-600">{Math.round(progress)}%</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-primary rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

export default function Page() {
  const [generation, setGeneration] = useState<Recommendation[] | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState<DogFormData>({
    name: "",
    age: "",
    breed: "",
    isNeutered: false,
    healthIssues: "",
    behaviorIssues: [],
    behaviorDetails: "",
    additionalNotes: "",
    specificRequirements: "",
    currentStep: 1,
  });

  const behaviorOptions = [
    "Il a des difficultés pour rester seul",
    "Il détruit pas mal de chose",
    "Il a un côté agressif",
    "Il n'est pas propre",
    "Il est réactif",
    "Il est protecteur avec sa nourriture",
    "Aucun problème",
  ];

  const handleNext = () => {
    if (canProceed()) {
      setFormData((prev) => ({
        ...prev,
        currentStep: prev.currentStep + 1,
      }));
    }
  };

  const handlePrevious = () => {
    setFormData((prev) => ({
      ...prev,
      currentStep: Math.max(1, prev.currentStep - 1),
    }));
  };

  const canProceed = () => {
    switch (formData.currentStep) {
      case 1:
        return formData.name.trim() !== "";
      case 2:
        return formData.age.trim() !== "";
      case 3:
        return formData.breed.trim() !== "";
      case 4:
        return true;
      case 5:
        return formData.healthIssues.trim() !== "";
      case 6:
        return (
          formData.behaviorIssues.length > 0 &&
          (formData.behaviorIssues.includes("Aucun problème") ||
            formData.behaviorDetails.trim() !== "")
        );
      case 7:
        return true;
      default:
        return true;
    }
  };

  const handleGenerate = async (): Promise<void> => {
    if (
      !formData.name.trim() ||
      !formData.breed.trim() ||
      !formData.age.trim()
    ) {
      setError("Veuillez remplir les champs obligatoires (nom, race et âge)");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const promptData = {
        prompt: `Mon chien s'appelle ${formData.name}, c'est un ${
          formData.breed
        } de ${formData.age} ans. ${
          formData.isNeutered ? "Il est castré" : "Il n'est pas castré"
        }. ${
          formData.healthIssues
            ? `Il a des problèmes de santé : ${formData.healthIssues}.`
            : ""
        } ${
          formData.behaviorIssues.length > 0
            ? `Il présente les problèmes de comportement suivants : ${formData.behaviorIssues.join(
                ", "
              )}.`
            : ""
        } ${
          formData.behaviorDetails
            ? `Détails supplémentaires : ${formData.behaviorDetails}`
            : ""
        } ${
          formData.additionalNotes
            ? `Informations importantes : ${formData.additionalNotes}`
            : ""
        } ${
          formData.specificRequirements
            ? `Demandes particulières pour la mastication : ${formData.specificRequirements}`
            : ""
        }`,
      };

      const response = await fetch("/api/mastication", {
        method: "POST",
        body: JSON.stringify(promptData),
      });

      if (!response.ok) {
        throw new Error(`Erreur réseau: ${response.status}`);
      }

      const json = await response.json();

      if (!json.recommendations) {
        throw new Error(
          "Format de réponse invalide: recommendations non trouvé"
        );
      }

      setGeneration(json.recommendations);
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey && canProceed()) {
      e.preventDefault();
      if (formData.currentStep < 7) {
        handleNext();
      } else {
        handleGenerate();
      }
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [formData.currentStep, canProceed]);

  const renderCurrentStep = () => {
    return (
      <motion.div
        key={formData.currentStep}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
      >
        {(() => {
          switch (formData.currentStep) {
            case 1:
              return (
                <div>
                  <h2 className="text-2xl font-bold mb-4">
                    Quel est le nom de ton pawte ?
                  </h2>
                  <motion.input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, name: e.target.value }))
                    }
                    className="w-full p-3 border border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                    placeholder="Ex: Luna"
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>
              );

            case 2:
              return (
                <div>
                  <h2 className="text-2xl font-bold mb-4">
                    Quel âge a {formData.name} ?
                  </h2>
                  <motion.input
                    type="text"
                    value={formData.age}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, age: e.target.value }))
                    }
                    className="w-full p-3 border border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                    placeholder="Ex: 3 ans"
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>
              );

            case 3:
              return (
                <div>
                  <h2 className="text-2xl font-bold mb-4">
                    Quelle est sa race ?
                  </h2>
                  <motion.input
                    type="text"
                    value={formData.breed}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        breed: e.target.value,
                      }))
                    }
                    className="w-full p-3 border border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                    placeholder="Ex: Border Collie"
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>
              );

            case 4:
              return (
                <div>
                  <h2 className="text-2xl font-bold mb-4">
                    Est-il castré/stérilisé ?
                  </h2>
                  <div className="flex gap-4">
                    <motion.button
                      onClick={() =>
                        setFormData((prev) => ({ ...prev, isNeutered: true }))
                      }
                      className={`flex-1 p-4 rounded-lg border ${
                        formData.isNeutered
                          ? "bg-primary text-white"
                          : "border-gray-200"
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Oui
                    </motion.button>
                    <motion.button
                      onClick={() =>
                        setFormData((prev) => ({ ...prev, isNeutered: false }))
                      }
                      className={`flex-1 p-4 rounded-lg border ${
                        !formData.isNeutered
                          ? "bg-primary text-white"
                          : "border-gray-200"
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Non
                    </motion.button>
                  </div>
                </div>
              );

            case 5:
              return (
                <div>
                  <h2 className="text-2xl font-bold mb-4">
                    {formData.name} a-t-il des problèmes de santé ?
                  </h2>
                  <motion.textarea
                    value={formData.healthIssues}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        healthIssues: e.target.value,
                      }))
                    }
                    className="w-full p-3 border border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all h-32"
                    placeholder="Allergies, intolérances, problèmes dentaires, arthrose, etc."
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>
              );

            case 6:
              return (
                <div>
                  <h2 className="text-2xl font-bold mb-4">
                    A-t-il des problèmes de comportement ?
                  </h2>
                  <div className="space-y-2">
                    {behaviorOptions.map((option, index) => (
                      <motion.button
                        key={option}
                        onClick={() => {
                          if (option === "Aucun problème") {
                            setFormData((prev) => ({
                              ...prev,
                              behaviorIssues: [option],
                              behaviorDetails: "",
                            }));
                          } else {
                            setFormData((prev) => ({
                              ...prev,
                              behaviorIssues: prev.behaviorIssues.includes(
                                option
                              )
                                ? prev.behaviorIssues.filter(
                                    (i) => i !== option
                                  )
                                : [
                                    ...prev.behaviorIssues.filter(
                                      (i) => i !== "Aucun problème"
                                    ),
                                    option,
                                  ],
                            }));
                          }
                        }}
                        className={`w-full p-4 rounded-lg border text-left ${
                          formData.behaviorIssues.includes(option)
                            ? "bg-primary text-white"
                            : "border-gray-200"
                        }`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {option}
                      </motion.button>
                    ))}
                  </div>

                  {formData.behaviorIssues.length > 0 &&
                    !formData.behaviorIssues.includes("Aucun problème") && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        transition={{ duration: 0.3 }}
                        className="mt-6"
                      >
                        <h3 className="text-lg font-medium mb-2">
                          Détails sur les problèmes de comportement
                        </h3>
                        <motion.textarea
                          value={formData.behaviorDetails}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              behaviorDetails: e.target.value,
                            }))
                          }
                          className="w-full p-3 border border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all h-32"
                          placeholder="Décrivez les problèmes de comportement en détail..."
                          whileFocus={{ scale: 1.02 }}
                        />
                      </motion.div>
                    )}
                </div>
              );

            case 7:
              return (
                <div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mb-6 p-4 bg-primary/10 rounded-lg"
                  >
                    <div className="flex items-start gap-3">
                      <svg
                        className="w-6 h-6 text-primary mt-1 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <p className="text-sm text-gray-600">
                        Cette étape est facultative. Vous pouvez spécifier des
                        besoins particuliers pour la mastication, comme la durée
                        souhaitée d&apos;occupation, le niveau de difficulté
                        recherché, ou des préférences spécifiques (ex: produits
                        naturels uniquement, sans odeur, etc.).
                      </p>
                    </div>
                  </motion.div>
                  <h2 className="text-2xl font-bold mb-4">
                    Avez-vous des demandes particulières pour la mastication ?
                  </h2>
                  <motion.textarea
                    value={formData.specificRequirements}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        specificRequirements: e.target.value,
                      }))
                    }
                    className="w-full p-3 border border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all h-32"
                    placeholder="Ex: Je cherche une mastication qui dure au moins 30 minutes, plutôt difficile pour stimuler mentalement mon chien..."
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>
              );

            default:
              return null;
          }
        })()}
      </motion.div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-3xl mx-auto p-8 bg-white min-h-screen"
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-xl shadow-2xl border border-gray-200 p-8 mb-10"
      >
        <h1 className="text-3xl font-black mb-6">
          <span className="text-gray-900">Quelle est la </span>
          <span className="text-primary">mastication</span>
          <span className="text-gray-900"> idéale pour mon pawte ?</span>
        </h1>

        {!isLoading && !generation && (
          <div className="mb-6">
            <AnimatePresence mode="wait">{renderCurrentStep()}</AnimatePresence>

            <motion.div
              className="flex justify-between mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {formData.currentStep > 1 && (
                <motion.button
                  onClick={handlePrevious}
                  className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Précédent
                </motion.button>
              )}

              {formData.currentStep < 7 ? (
                <motion.button
                  onClick={handleNext}
                  disabled={!canProceed()}
                  className="ml-auto px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Suivant
                </motion.button>
              ) : (
                <motion.button
                  onClick={handleGenerate}
                  disabled={isLoading}
                  className="ml-auto px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Générer les recommandations
                </motion.button>
              )}
            </motion.div>

            <div className="mt-8">
              <ProgressBar currentStep={formData.currentStep} />
            </div>
          </div>
        )}

        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="my-6 p-4 bg-red-50 border-l-4 border-red-400 text-red-700 rounded-md"
          >
            <p className="font-medium">Une erreur s&apos;est produite</p>
            <p className="mt-1">{error}</p>
          </motion.div>
        )}

        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="my-10 text-center"
          >
            <div className="inline-flex items-center justify-center mb-4">
              <motion.div
                className="w-24 h-24"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Image
                  src="/images/bone.svg"
                  alt="Loading"
                  width={96}
                  height={96}
                  className="w-full h-full"
                />
              </motion.div>
            </div>
            <p className="text-gray-600">
              Analyse en cours, recherche des meilleures options...
            </p>
          </motion.div>
        )}

        {!isLoading && generation && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col gap-6 mb-8">
              <div className="bg-primary/5 rounded-xl p-6 border border-primary/10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <p className="text-gray-500 mb-1">🐶 Votre pawte</p>
                    <p className="font-semibold">{formData.name}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">🐾 Race</p>
                    <p className="font-semibold">{formData.breed}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">🎂 Âge</p>
                    <p className="font-semibold">{formData.age}</p>
                  </div>
                  {formData.healthIssues && (
                    <div>
                      <p className="text-gray-500 mb-1">❤️‍🩹 Problème de santé</p>
                      <p className="font-semibold">{formData.healthIssues}</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-black text-primary flex items-center gap-2">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  Recommandations pour {formData.name}
                </h2>
                <motion.button
                  onClick={() => {
                    setGeneration(undefined);
                    setFormData({
                      name: "",
                      age: "",
                      breed: "",
                      isNeutered: false,
                      healthIssues: "",
                      behaviorIssues: [],
                      behaviorDetails: "",
                      additionalNotes: "",
                      specificRequirements: "",
                      currentStep: 1,
                    });
                  }}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                  Recommencer
                </motion.button>
              </div>

              {generation.length > 0 ? (
                <div className="grid grid-cols-1 gap-6">
                  {generation.map((product, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 overflow-hidden"
                    >
                      <div className="flex">
                        <div className="w-72 relative group">
                          <div className="aspect-square relative">
                            <Image
                              src={product.image}
                              alt={product.title}
                              fill
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <motion.div
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                            className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end"
                          >
                            <a
                              href={product.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-white p-4 w-full text-center hover:bg-primary/80 transition-colors"
                            >
                              Voir le produit
                            </a>
                          </motion.div>
                        </div>

                        <div className="flex-1 p-6">
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <h3 className="text-xl font-bold text-gray-900 hover:text-primary transition-colors">
                                <a
                                  href={product.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-2"
                                >
                                  {product.title}
                                  <svg
                                    className="w-4 h-4"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                  >
                                    <path
                                      d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M15 3h6v6"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M10 14L21 3"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </a>
                              </h3>
                              <p className="text-gray-600 mt-2 line-clamp-2">
                                {product.description}
                              </p>
                            </div>
                          </div>

                          <div className="grid grid-cols-3 gap-4 mb-6">
                            <motion.div
                              className="flex items-center gap-2 text-sm"
                              whileHover={{ scale: 1.02 }}
                            >
                              <svg
                                className="w-5 h-5 text-primary"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                              <span className="font-medium">
                                {product.occupation_time}
                              </span>
                            </motion.div>
                            <motion.div
                              className="flex items-center gap-2 text-sm"
                              whileHover={{ scale: 1.02 }}
                            >
                              <svg
                                className="w-5 h-5 text-primary"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                />
                              </svg>
                              <span className="font-medium">
                                {product.characteristics.smell}
                              </span>
                            </motion.div>
                            <motion.div
                              className="flex items-center gap-2 text-sm"
                              whileHover={{ scale: 1.02 }}
                            >
                              <svg
                                className="w-5 h-5 text-primary"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                                />
                              </svg>
                              <span className="font-medium">
                                {product.characteristics.type}
                              </span>
                            </motion.div>
                          </div>

                          <div className="space-y-4">
                            <motion.details
                              className="group"
                              whileHover={{ scale: 1.01 }}
                            >
                              <summary className="flex items-center cursor-pointer">
                                <span className="font-medium text-primary">
                                  Pourquoi ce produit ?
                                </span>
                                <svg
                                  className="w-5 h-5 ml-2 transform group-open:rotate-180 transition-transform"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 9l-7 7-7-7"
                                  />
                                </svg>
                              </summary>
                              <motion.p
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                className="mt-2 text-gray-600"
                              >
                                {product.reason}
                              </motion.p>
                            </motion.details>

                            <motion.details
                              className="group"
                              whileHover={{ scale: 1.01 }}
                            >
                              <summary className="flex items-center cursor-pointer">
                                <span className="font-medium text-primary">
                                  Bénéfices
                                </span>
                                <svg
                                  className="w-5 h-5 ml-2 transform group-open:rotate-180 transition-transform"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 9l-7 7-7-7"
                                  />
                                </svg>
                              </summary>
                              <motion.ul
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                className="mt-2 space-y-1 text-gray-600"
                              >
                                {product.benefits.map((benefit, idx) => (
                                  <motion.li
                                    key={idx}
                                    className="flex items-center gap-2"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.05 }}
                                  >
                                    <svg
                                      className="w-4 h-4 text-green-500"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 13l4 4L19 7"
                                      />
                                    </svg>
                                    {benefit}
                                  </motion.li>
                                ))}
                              </motion.ul>
                            </motion.details>

                            <motion.details
                              className="group"
                              whileHover={{ scale: 1.01 }}
                            >
                              <summary className="flex items-center cursor-pointer">
                                <span className="font-medium text-primary">
                                  Conseils d&apos;utilisation
                                </span>
                                <svg
                                  className="w-5 h-5 ml-2 transform group-open:rotate-180 transition-transform"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 9l-7 7-7-7"
                                  />
                                </svg>
                              </summary>
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                className="mt-2"
                              >
                                <p className="text-gray-600">{product.usage}</p>
                                <p className="text-gray-600">
                                  {product.characteristics.size}
                                </p>
                                <motion.div
                                  className="mt-2 flex flex-wrap gap-2"
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                >
                                  {product.characteristics.size.map(
                                    (size, idx) => (
                                      <motion.span
                                        key={idx}
                                        className="px-2 py-1 bg-primary/10 text-primary rounded-full text-sm"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: idx * 0.05 }}
                                      >
                                        {size}
                                      </motion.span>
                                    )
                                  )}
                                </motion.div>
                              </motion.div>
                            </motion.details>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center p-10 bg-gray-50 rounded-xl border border-dashed border-gray-300"
                >
                  <svg
                    className="w-16 h-16 text-gray-400 mx-auto mb-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 12h.01M12 12h.01M12 12h.01M12 12h.01M12 12h.01M12 12h.01M12 12h.01M12 12h.01M12 12h.01M12 12h.01M12 12h.01"
                    />
                  </svg>
                  <p className="text-gray-600">
                    Aucune recommandation disponible. Veuillez générer des
                    suggestions.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}
