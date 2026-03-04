export interface CleaningService {
  id: number;
  clientName: string;
  address: string;
  serviceType: "basic" | "deep" | "move-in" | "office";
  status: "pending" | "in-progress" | "completed" | "cancelled";
  scheduledDate: string;
  assignedTo: string;
  price: number;
}