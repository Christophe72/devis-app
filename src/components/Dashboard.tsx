"use client";

import DashboardHeader from "./DashboardHeader";
import StatsCard from "./StatsCard";
import Link from "next/link";

export default function Dashboard() {
  // Icons SVG
  const DocumentIcon = (
    <svg
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    </svg>
  );

  const CurrencyIcon = (
    <svg
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
      />
    </svg>
  );

  const UsersIcon = (
    <svg
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
      />
    </svg>
  );

  const TrendIcon = (
    <svg
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
      />
    </svg>
  );

  const quickActions = [
    {
      title: "Nouveau Devis",
      description: "Créer un nouveau devis client",
      href: "/devis",
      icon: DocumentIcon,
      color: "bg-blue-500 hover:bg-blue-600",
    },
    {
      title: "Voir les Devis",
      description: "Consulter tous les devis existants",
      href: "/devis",
      icon: DocumentIcon,
      color: "bg-green-500 hover:bg-green-600",
    },
    {
      title: "Clients",
      description: "Gérer la base clients",
      href: "#",
      icon: UsersIcon,
      color: "bg-purple-500 hover:bg-purple-600",
    },
    {
      title: "Rapports",
      description: "Statistiques et analyses",
      href: "#",
      icon: TrendIcon,
      color: "bg-orange-500 hover:bg-orange-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader userName="Chris" />

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Cards de statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard
            title="Devis ce mois"
            value="12"
            icon={DocumentIcon}
            trend={{ value: 20, isPositive: true }}
            color="blue"
          />
          <StatsCard
            title="Chiffre d'affaires"
            value="€15,240"
            icon={CurrencyIcon}
            trend={{ value: 15, isPositive: true }}
            color="green"
          />
          <StatsCard
            title="Clients actifs"
            value="8"
            icon={UsersIcon}
            trend={{ value: 5, isPositive: true }}
            color="yellow"
          />
          <StatsCard
            title="Taux de conversion"
            value="75%"
            icon={TrendIcon}
            trend={{ value: 3, isPositive: false }}
            color="red"
          />
        </div>

        {/* Actions rapides */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Actions rapides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickActions.map((action, index) => (
              <Link key={index} href={action.href}>
                <div
                  className={`${action.color} rounded-lg p-6 text-white cursor-pointer transform transition-all duration-200 hover:scale-105 hover:shadow-lg`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-8 h-8">{action.icon}</div>
                    <svg
                      className="w-5 h-5 opacity-60"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-lg mb-1">{action.title}</h3>
                  <p className="text-sm opacity-80">{action.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Activité récente */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Activité récente
          </h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">
                  Nouveau devis créé pour SARL Martin
                </p>
                <p className="text-xs text-gray-500">Il y a 2 heures</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">
                  Devis #DEV-001 accepté par le client
                </p>
                <p className="text-xs text-gray-500">Il y a 5 heures</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">
                  Rappel: Devis #DEV-003 expire dans 3 jours
                </p>
                <p className="text-xs text-gray-500">Il y a 1 jour</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
