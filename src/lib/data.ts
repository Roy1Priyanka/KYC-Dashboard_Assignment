// Mock data for KYC Dashboard

export interface KYCStats {
  total: number;
  newKYC: number;
  modifiedKYC: number;
  newKYCChange: number;
  modifiedKYCChange: number;
}

export interface StatusCard {
  label: string;
  count: number;
  icon: string;
}

export interface ChartData {
  name: string;
  individual: number;
  nonIndividual: number;
}

export interface CircularChartData {
  name: string;
  value: number;
  color: string;
}

export interface PANStats {
  solicited: number;
  received: number;
  consumed: number;
  pending: number;
  dataReceived: number;
  dataReceivedWithImage: number;
  dataReceivedWithoutImage: number;
}

export const mockKYCStats: KYCStats = {
  total: 3456,
  newKYC: 3000,
  modifiedKYC: 456,
  newKYCChange: 15,
  modifiedKYCChange: -5,
};

export const mockStatusCards: StatusCard[] = [
  { label: "KYC Initiated", count: 234, icon: "FileText" },
  { label: "KYC Process", count: 45, icon: "Clock" },
  { label: "KYC Done", count: 350, icon: "CheckCircle" },
  { label: "Validated", count: 654, icon: "Shield" },
  { label: "Hold", count: 269, icon: "Pause" },
  { label: "Docs Pending", count: 1345, icon: "AlertCircle" },
];

export const mockChartData: ChartData[] = [
  { name: "Today", individual: 220, nonIndividual: 180 },
  { name: "Yesterday", individual: 300, nonIndividual: 200 },
];

export const mockCircularData: CircularChartData[] = [
  { name: "No of PANs Solicited", value: 30, color: "#3b82f6" },
  { name: "Received", value: 25, color: "#10b981" },
  { name: "Consumed", value: 25, color: "#f59e0b" },
  { name: "Pending", value: 20, color: "#ef4444" },
];

export const mockPANStats: PANStats = {
  solicited: 956,
  received: 920,
  consumed: 320,
  pending: 600,
  dataReceived: 920,
  dataReceivedWithImage: 600,
  dataReceivedWithoutImage: 320,
};
