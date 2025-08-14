"use client";

interface ProgressBarProps {
  label: string;
  value: number;
  max: number;
  color?: "blue" | "gray";
  showValues?: boolean;
}

export default function ProgressBar({ 
  label, 
  value, 
  max, 
  color = "blue",
  showValues = true 
}: ProgressBarProps) {
  const percentage = (value / max) * 100;
  
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-gray-700">{label}</span>
        {showValues && (
          <span className="text-sm text-gray-500">{value} / {max}</span>
        )}
      </div>
      <div className="h-3 w-full rounded-full bg-gray-200">
        <div
          className={`h-3 rounded-full transition-all duration-300 ${
            color === "blue" ? "bg-blue-500" : "bg-gray-400"
          }`}
          style={{ width: `${Math.min(percentage, 100)}%` }}
        />
      </div>
    </div>
  );
}
