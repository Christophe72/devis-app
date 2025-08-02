interface DashboardHeaderProps {
  userName?: string;
}

export default function DashboardHeader({
  userName = "Utilisateur",
}: DashboardHeaderProps) {
  const currentDate = new Date().toLocaleDateString("fr-FR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Tableau de bord</h1>
          <p className="text-gray-600 text-sm mt-1">{currentDate}</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-right">
            <p className="text-sm text-gray-500">Bienvenue,</p>
            <p className="font-semibold text-gray-900">{userName}</p>
          </div>
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
            <span className="text-white font-semibold text-sm">
              {userName.charAt(0).toUpperCase()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
