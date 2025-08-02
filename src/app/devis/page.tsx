"use client";

import { useState } from "react";

type Ligne = {
  description: string;
  quantite: number;
  prixHT: number;
};

export default function DevisPage() {
  const [client, setClient] = useState("");
  const [email, setEmail] = useState("");
  const [lignes, setLignes] = useState<Ligne[]>([
    { description: "", quantite: 1, prixHT: 0 },
  ]);

  const handleAddLigne = () => {
    setLignes([...lignes, { description: "", quantite: 1, prixHT: 0 }]);
  };

  const handleChangeLigne = (
    index: number,
    field: keyof Ligne,
    value: string | number
  ) => {
    const newLignes = [...lignes];
    if (field === "quantite" || field === "prixHT") {
      newLignes[index][field] = Number(value);
    } else if (field === "description") {
      newLignes[index][field] = value as string;
    }
    setLignes(newLignes);
  };

  const totalHT = lignes.reduce((acc, l) => acc + l.quantite * l.prixHT, 0);
  const tva = totalHT * 0.2;
  const totalTTC = totalHT + tva;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const devis = {
      client,
      email,
      lignes,
      totalHT,
      tva,
      totalTTC,
      date: new Date().toISOString(),
    };
    console.log("Devis généré :", devis);
    alert("Devis généré avec succès ✅\n(vérifie la console)");
  };

  return (
    <main className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Création de Devis</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Nom du client"
          value={client}
          onChange={(e) => setClient(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="email"
          placeholder="Email du client"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />

        <h2 className="text-xl font-semibold mt-4">Lignes</h2>
        {lignes.map((ligne, index) => (
          <div key={index} className="flex gap-2">
            <input
              type="text"
              placeholder="Description"
              value={ligne.description}
              onChange={(e) =>
                handleChangeLigne(index, "description", e.target.value)
              }
              className="flex-1 border p-2 rounded"
              required
            />
            <input
              type="number"
              placeholder="Quantité"
              value={ligne.quantite}
              onChange={(e) =>
                handleChangeLigne(index, "quantite", e.target.value)
              }
              className="w-24 border p-2 rounded"
              required
              min={1}
            />
            <input
              type="number"
              placeholder="Prix HT"
              value={ligne.prixHT}
              onChange={(e) =>
                handleChangeLigne(index, "prixHT", e.target.value)
              }
              className="w-24 border p-2 rounded"
              required
              min={0}
            />
          </div>
        ))}
        <button
          type="button"
          onClick={handleAddLigne}
          className="bg-gray-200 px-3 py-1 rounded"
        >
          ➕ Ajouter une ligne
        </button>

        <div className="mt-4 space-y-1">
          <p>Total HT : {totalHT.toFixed(2)} €</p>
          <p>TVA (20%) : {tva.toFixed(2)} €</p>
          <p className="font-bold">Total TTC : {totalTTC.toFixed(2)} €</p>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Générer le devis
        </button>
      </form>
    </main>
  );
}
