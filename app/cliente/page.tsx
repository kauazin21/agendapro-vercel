import { Header } from "@/components/Header";
import { ClientDashboard } from "@/components/AgendaApp";

export default function ClientPage() {
  return (
    <main className="dashboard-page">
      <Header />
      <div className="container py-5">
        <div className="mb-4">
          <span className="badge text-bg-primary mb-2">Área do cliente</span>
          <h1 className="fw-bold display-6 mb-1">Solicite e acompanhe atendimentos</h1>
          <p className="text-secondary">Crie pedidos, veja prestadores vinculados e acompanhe o status.</p>
        </div>
        <ClientDashboard />
      </div>
    </main>
  );
}
