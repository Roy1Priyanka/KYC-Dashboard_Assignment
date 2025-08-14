"use client";

import { ArrowDown, ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatsCardProps {
  title: string;
  value: number;
  change: number;
  isPositive: boolean;
  color: "blue" | "green";
}

export default function StatsCard({
  title,
  value,
  change,
  isPositive,
  color,
}: StatsCardProps) {
  return (
    <div className="rounded-lg bg-white p-6 shadow-sm border">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-full",
              color === "blue" ? "bg-blue-100" : "bg-green-100"
            )}
          >
            <div
              className={cn(
                "h-2 w-2 rounded-full",
                color === "blue" ? "bg-blue-600" : "bg-green-600"
              )}
            />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-600">{title}</p>
            <p className="text-2xl font-bold text-gray-900">{value.toLocaleString()}</p>
          </div>
        </div>
        <div className="flex items-center space-x-1">
          {isPositive ? (
            <ArrowUp className="h-4 w-4 text-green-500" />
          ) : (
            <ArrowDown className="h-4 w-4 text-red-500" />
          )}
          <span
            className={cn(
              "text-sm font-medium",
              isPositive ? "text-green-600" : "text-red-600"
            )}
          >
            {Math.abs(change)}%
          </span>
        </div>
      </div>
    </div>
  );
}
