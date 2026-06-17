import Link from "next/link";

export function Header() {
  return (
    <nav className="navbar navbar-expand-lg marketing-navbar sticky-top">
      <div className="container py-2">
        <Link href="/" className="navbar-brand d-flex align-items-center gap-2 fw-bold fs-4">
          <span className="brand-icon">A</span>
          AgendaPro
        </Link>
        <div className="d-flex gap-2">
          <Link className="btn btn-outline-primary" href="/login">Entrar</Link>
          <Link className="btn btn-primary" href="/cadastro">Criar conta</Link>
        </div>
      </div>
    </nav>
  );
}
