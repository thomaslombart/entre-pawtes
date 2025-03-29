import { type NextPage } from "next";
import Link from "next/link";

const tools = [
  {
    title: "Mastication",
    description:
      "Découvre les meilleurs produits de mastication pour ton chien",
    icon: "🦴",
    href: "/outils/mastication",
    color: "from-amber-500 to-amber-600",
  },
];

const OutilsPage: NextPage = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-12">Nos outils</h1>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {tools.map((tool) => (
          <Link href={tool.href} key={tool.title} className="block">
            <div
              className={`bg-gradient-to-r ${tool.color} rounded-xl p-8 text-white shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer`}
            >
              <div className="text-4xl mb-4">{tool.icon}</div>
              <h2 className="text-2xl font-bold mb-3">{tool.title}</h2>
              <p className="text-white/90">{tool.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default OutilsPage;
