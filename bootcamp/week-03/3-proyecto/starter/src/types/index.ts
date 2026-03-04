
export interface CleaningService {
  id: string;
  clientName: string;
  address: string;
  date: string;
  status: "pending" | "in-progress" | "completed";
}