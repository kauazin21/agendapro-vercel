import { Header } from "@/components/Header";
import { ProviderDashboard } from "@/components/AgendaApp";

export default function ProviderPage() {
  return (
    <main className="dashboard-page">
      <Header />
      <div className="container py-5">
        <div className="mb-4">
          <span className="badge text-bg-success mb-2">Área do prestador</span>
          <h1 className="fw-bold display-6 mb-1">Gerencie oportunidades de atendimento</h1>
          <p className="text-secondary">Aceite serviços disponíveis e atualize o andamento para seus clientes.</p>
        </div>
        <ProviderDashboard />
      </div>
    </main>
  );
}
