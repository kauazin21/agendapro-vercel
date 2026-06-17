import { Appointment, User } from "../domain/entities";
const USERS_KEY = "agendapro:users";
const APPOINTMENTS_KEY = "agendapro:appointments";
const read = <T>(key: string, fallback: T): T => { if (typeof window === "undefined") return fallback; const value = localStorage.getItem(key); if (!value) return fallback; try { return JSON.parse(value) as T; } catch { return fallback; } };
const write = <T>(key: string, value: T): void => { if (typeof window === "undefined") return; localStorage.setItem(key, JSON.stringify(value)); };
export const storage = { getUsers: () => read<User[]>(USERS_KEY, []), setUsers: (users: User[]) => write(USERS_KEY, users), getAppointments: () => read<Appointment[]>(APPOINTMENTS_KEY, []), setAppointments: (appointments: Appointment[]) => write(APPOINTMENTS_KEY, appointments), clear: () => { localStorage.removeItem(USERS_KEY); localStorage.removeItem(APPOINTMENTS_KEY); localStorage.removeItem("agendapro:currentUser"); } };
