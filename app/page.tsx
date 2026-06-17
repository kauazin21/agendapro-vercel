import Link from "next/link";
import { CalendarCheck, CheckCircle2, ClipboardList, ShieldCheck, Star, Users } from "lucide-react";
import { Header } from "@/components/Header";

export default function HomePage() {
  return (
    <main className="app-shell">
      <Header />

      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <span className="badge rounded-pill text-bg-primary mb-3 px-3 py-2">SaaS para prestadores de serviço</span>
              <h1 className="hero-title mb-4">Agenda, pedidos e atendimentos em um só painel.</h1>
              <p className="hero-subtitle mb-4">
                O AgendaPro ajuda pequenos negócios a vender serviços com mais organização: clientes solicitam,
                prestadores aceitam e todos acompanham o status em tempo real.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <Link href="/cadastro" className="btn btn-primary btn-lg px-4">Começar agora</Link>
                <Link href="/login" className="btn btn-outline-dark btn-lg px-4">Ver painel</Link>
              </div>
              <div className="d-flex gap-4 mt-4 text-secondary small">
                <span><CheckCircle2 size={18} className="text-primary me-1" /> Sem instalação</span>
                <span><CheckCircle2 size={18} className="text-primary me-1" /> Pronto para Vercel</span>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="hero-preview">
                <div className="preview-topbar d-flex justify-content-between align-items-center">
                  <strong>Painel AgendaPro</strong>
                  <span className="badge bg-success">online</span>
                </div>
                <div className="preview-body">
                  <div className="row g-3 mb-3">
                    <div className="col-4"><div className="stat-card"><strong className="fs-4">18</strong><br/><span className="text-secondary small">Pedidos</span></div></div>
                    <div className="col-4"><div className="stat-card"><strong className="fs-4">7</strong><br/><span className="text-secondary small">Aceitos</span></div></div>
                    <div className="col-4"><div className="stat-card"><strong className="fs-4">4.9</strong><br/><span className="text-secondary small">Avaliação</span></div></div>
                  </div>
                  <div className="service-item mb-3">
                    <div className="d-flex justify-content-between">
                      <strong>Climatização residencial</strong>
                      <span className="badge badge-soft-orange">Urgente</span>
                    </div>
                    <p className="text-secondary mb-0 mt-2">Cliente deseja instalação de ar-condicionado ainda hoje.</p>
                  </div>
                  <div className="service-item">
                    <div className="d-flex justify-content-between">
                      <strong>Montagem de móveis</strong>
                      <span className="badge badge-soft-green">Aceito</span>
                    </div>
                    <p className="text-secondary mb-0 mt-2">Prestador vinculado e atendimento em andamento.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-white">
        <div className="container">
          <div className="text-center mb-5">
            <div className="section-eyebrow">Produto completo</div>
            <h2 className="fw-bold display-6">Um fluxo simples para vender mais serviços</h2>
          </div>
          <div className="row g-4">
            <div className="col-md-4"><div className="card feature-card p-4"><span className="icon-circle mb-3"><CalendarCheck /></span><h4>Agenda centralizada</h4><p className="text-secondary">O cliente registra o serviço desejado e acompanha cada etapa pelo painel.</p></div></div>
            <div className="col-md-4"><div className="card feature-card p-4"><span className="icon-circle mb-3"><Users /></span><h4>Prestadores conectados</h4><p className="text-secondary">Prestadores visualizam oportunidades disponíveis e aceitam atendimentos.</p></div></div>
            <div className="col-md-4"><div className="card feature-card p-4"><span className="icon-circle mb-3"><ClipboardList /></span><h4>Status do atendimento</h4><p className="text-secondary">Pedidos avançam de pendente para aceito, em andamento e finalizado.</p></div></div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <div className="section-eyebrow">Por que usar</div>
              <h2 className="fw-bold display-6">Visual de produto real, código pronto para apresentação.</h2>
              <p className="text-secondary fs-5">Além da interface comercial, o projeto contém Arquitetura Limpa, SOLID, padrões de projeto, TDD, BDD e Docker.</p>
            </div>
            <div className="col-lg-6">
              <div className="row g-3">
                <div className="col-6"><div className="stat-card"><ShieldCheck className="text-primary mb-2"/><h5>Clean Code</h5><p className="text-secondary small mb-0">Camadas separadas e nomes claros.</p></div></div>
                <div className="col-6"><div className="stat-card"><Star className="text-primary mb-2"/><h5>Vendável</h5><p className="text-secondary small mb-0">Layout inspirado em SaaS Bootstrap.</p></div></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
