"use client";

import { useState, useEffect } from "react";

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState("");

  useEffect(() => {
    const steps = [
      "Initialisation de l'application...",
      "Chargement des données...",
      "Configuration du tableau de bord...",
      "Finalisation...",
    ];

    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + Math.random() * 15;

        // Mise à jour de l'étape en fonction du progrès
        if (newProgress < 25) setCurrentStep(steps[0]);
        else if (newProgress < 50) setCurrentStep(steps[1]);
        else if (newProgress < 75) setCurrentStep(steps[2]);
        else setCurrentStep(steps[3]);

        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => onComplete(), 500);
          return 100;
        }
        return newProgress;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center z-50">
      <div className="text-center space-y-8 max-w-md w-full px-6">
        {/* Logo/Icon */}
        <div className="mx-auto w-20 h-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mb-8">
          <svg
            className="w-10 h-10 text-white animate-pulse"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        </div>

        {/* Titre */}
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Devis App</h1>
          <p className="text-gray-600">Gestion professionnelle de devis</p>
        </div>

        {/* Barre de progression */}
        <div className="space-y-4">
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          {/* Pourcentage */}
          <div className="flex justify-between items-center text-sm text-gray-600">
            <span>{currentStep}</span>
            <span className="font-semibold">{Math.round(progress)}%</span>
          </div>
        </div>

        {/* Animation de chargement */}
        <div className="flex justify-center space-x-2">
          <div
            className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
            style={{ animationDelay: "0ms" }}
          ></div>
          <div
            className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
            style={{ animationDelay: "150ms" }}
          ></div>
          <div
            className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
            style={{ animationDelay: "300ms" }}
          ></div>
        </div>
      </div>
    </div>
  );
}
