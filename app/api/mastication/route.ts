import { openai } from "@ai-sdk/openai";
import { generateObject } from "ai";
import { z } from "zod";

import mastication from "@/data/mastication.json";

export async function POST(req: Request) {
  const { prompt }: { prompt: string } = await req.json();

  const result = await generateObject({
    model: openai("gpt-4o-mini"),
    system: `Tu es un expert en produits de mastication pour chiens. Ton rôle est de recommander les meilleurs produits de mastication adaptés aux besoins spécifiques d'un chien'.

    Voilà notre catalogue de produits de mastication disponibles sous un format JSON dont les champs sont les suivants :
    - name: Nom du produit
    - description: Description détaillée du produit
    - url: Lien vers le produit
    - image: Image du produit
    - benefits: Liste des bénéfices pour le chien
    - price: Indication du prix ("ok" signifie prix moyen)
    - time: Durée d'occupation ("court", "moyen", "long")
    - smell: Niveau d'odeur (1 à 5)
    - type: Type de viande utilisée (poulet, boeuf, canard, gibier, etc.)
    - advices: Conseils d'utilisation
    - size: Tailles adaptées ("petit", "moyen", "grand")
    - profile: Profils de chiens adaptés (actif, sensible, chiot, etc.)

    Voilà le catalogue en question :
    ${JSON.stringify(mastication, null, 2)}
    
    Pour chaque recommandation, prends en compte :
    - L'âge du chien : les besoins de mastication varient selon l'âge
    - La race et la taille : les mastications longues pour les petits chiens ne le sont pas pour les grands chiens
    - Le statut de castration : les chiens castrés devraient avoir des mastications moins caloriques
    - Les allergies éventuelles : privilégie des produits hypoallergéniques ou évite certains types de viande si demandé
    - Les problèmes de comportement spécifiques, voilà les recommandations pour chaque problème :
      - anxiété : mastication appétente et longue pour occuper longtemps le chien
      - destruction : mastication longue pour éviter les problèmes de destruction
      - protecteur : mastication pas trop appétente pour éviter de donner trop de valeur à la nourriture
    - La sensibilité aux odeurs du propriétaire : évite les produits qui sentent fort si demandé

    Recommande entre 3 et 10 produits. Assure-toi d'avoir une sélection variée et équilibrée entre mastications longues et rapides.`,
    prompt,
    schema: z.object({
      recommendations: z.array(
        z.object({
          title: z.string().describe("Nom du produit recommandé"),
          description: z
            .string()
            .describe(
              "Description du produit (composition, taille, durée de vie)"
            ),
          reason: z
            .string()
            .describe("Pourquoi ce produit est recommandé pour ce chien"),
          safety_notes: z
            .string()
            .describe("Précautions de sécurité importantes"),
          benefits: z.array(z.string()).describe("Bénéfices pour le chien"),
          usage: z.string().describe("Comment utiliser le produit"),
          occupation_time: z.string().describe("Temps d'occupation estimé"),
          characteristics: z.object({
            smell: z.string().describe("Niveau d'odeur"),
            size: z.array(z.string()).describe("Tailles disponibles"),
            type: z.string().describe("Type de produit"),
          }),
          url: z.string().describe("URL du produit pour l'achat"),
          image: z.string().describe("URL de l'image du produit"),
        })
      ),
    }),
  });

  return result.toJsonResponse();
}
