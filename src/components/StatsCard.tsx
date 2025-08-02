interface StatsCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  color: "blue" | "green" | "yellow" | "red";
}

export default function StatsCard({
  title,
  value,
  icon,
  trend,
  color,
}: StatsCardProps) {
  const colorClasses = {
    blue: "bg-blue-50 border-blue-200 text-blue-700",
    green: "bg-green-50 border-green-200 text-green-700",
    yellow: "bg-yellow-50 border-yellow-200 text-yellow-700",
    red: "bg-red-50 border-red-200 text-red-700",
  };

  const iconColorClasses = {
    blue: "bg-blue-500",
    green: "bg-green-500",
    yellow: "bg-yellow-500",
    red: "bg-red-500",
  };

  return (
    <div className={`rounded-lg border-2 p-6 ${colorClasses[color]}`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium opacity-80">{title}</p>
          <p className="text-3xl font-bold mt-2">{value}</p>
          {trend && (
            <div className="flex items-center mt-2">
              <span
                className={`text-xs font-medium ${
                  trend.isPositive ? "text-green-600" : "text-red-600"
                }`}
              >
                {trend.isPositive ? "+" : ""}
                {trend.value}%
              </span>
              <span className="text-xs text-gray-500 ml-1">ce mois</span>
            </div>
          )}
        </div>
        <div className={`p-3 rounded-full ${iconColorClasses[color]}`}>
          <div className="text-white w-6 h-6">{icon}</div>
        </div>
      </div>
    </div>
  );
}
