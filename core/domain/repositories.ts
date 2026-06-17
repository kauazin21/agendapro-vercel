import { Appointment, Notification, User } from "./entities";
export interface UserRepository { save(user: User): User; findByEmail(email: string): User | null; findById(id: string): User | null; list(): User[]; }
export interface AppointmentRepository { save(appointment: Appointment): Appointment; update(appointment: Appointment): Appointment; findById(id: string): Appointment | null; list(): Appointment[]; listByClient(clientId: string): Appointment[]; listAvailable(): Appointment[]; listByProvider(providerId: string): Appointment[]; }
export interface NotificationRepository { save(notification: Notification): Notification; listByUser(userId: string): Notification[]; }
