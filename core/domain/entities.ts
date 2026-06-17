export type UserRole = "client" | "provider";
export type AppointmentStatus = "PENDING" | "ACCEPTED" | "IN_PROGRESS" | "COMPLETED" | "CANCELED";
export type ServiceUrgency = "normal" | "priority" | "urgent";
export interface User { id: string; name: string; email: string; password: string; role: UserRole; specialty?: string; createdAt: string; }
export interface Appointment { id: string; clientId: string; clientName: string; providerId?: string; providerName?: string; serviceType: string; description: string; urgency: ServiceUrgency; priorityScore: number; status: AppointmentStatus; scheduledDate: string; createdAt: string; }
export interface Notification { id: string; userId: string; title: string; message: string; createdAt: string; }
