"use client";

import * as Icons from "lucide-react";
import { StatusCard as StatusCardType } from "@/lib/data";
import { cn } from "@/lib/utils";

interface StatusCardProps {
  card: StatusCardType;
  index: number;
}

const iconColors = [
  "text-blue-600",
  "text-orange-600", 
  "text-teal-600",
  "text-green-600",
  "text-purple-600",
  "text-red-600"
];

export default function StatusCard({ card, index }: StatusCardProps) {
  const IconComponent = (Icons as any)[card.icon] || Icons.FileText;
  
  return (
    <div className="flex items-center space-x-3 rounded-lg bg-white p-4 shadow-sm border">
      <div className="flex-shrink-0">
        <IconComponent className={cn("h-6 w-6", iconColors[index % iconColors.length])} />
      </div>
      <div>
        <p className="text-sm font-medium text-gray-600">{card.label}</p>
        <p className="text-xl font-bold text-gray-900">{card.count}</p>
      </div>
    </div>
  );
}
