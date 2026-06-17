import Link from "next/link";
import { LoginForm } from "@/components/AgendaApp";

export default function LoginPage() {
  return (
    <main className="auth-page">
      <div className="container">
        <div className="row justify-content-center align-items-center min-vh-100">
          <div className="col-lg-5">
            <div className="text-center text-white mb-4">
              <Link href="/" className="d-inline-flex align-items-center gap-2 text-white fw-bold fs-3">
                <span className="brand-icon bg-white text-primary">A</span> AgendaPro
              </Link>
              <p className="mt-3 opacity-75">Acesse sua área de atendimento.</p>
            </div>
            <div className="card auth-card p-4 p-md-5">
              <h1 className="fw-bold mb-2">Entrar</h1>
              <p className="text-secondary mb-4">Use seu e-mail e senha cadastrados.</p>
              <LoginForm />
              <p className="text-secondary mt-4 mb-0">Ainda não tem conta? <Link href="/cadastro">Criar conta</Link></p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
