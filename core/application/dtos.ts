import { ServiceUrgency, UserRole, AppointmentStatus } from "../domain/entities";
export interface RegisterUserDTO { name: string; email: string; password: string; role: UserRole; specialty?: string; }
export interface LoginDTO { email: string; password: string; }
export interface CreateAppointmentDTO { clientId: string; clientName: string; serviceType: string; description: string; urgency: ServiceUrgency; scheduledDate: string; }
export interface AcceptAppointmentDTO { appointmentId: string; providerId: string; providerName: string; }
export interface UpdateAppointmentStatusDTO { appointmentId: string; status: AppointmentStatus; }
