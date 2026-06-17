# Guia de testes e deploy — AgendaPro

## Instalar
```powershell
npm install
```

## Desenvolvimento
```powershell
npm run dev
```

## TDD
```powershell
npm test
```

## BDD
```powershell
npm run bdd
```

## Typecheck
```powershell
npm run typecheck
```

## Build
```powershell
npm run build
```

## Produção local
```powershell
npm run start
```
Se a porta estiver ocupada:
```powershell
npx next start -p 3001
```

## Docker
```powershell
docker compose up --build
```

## Fluxo manual
1. Cadastrar cliente.
2. Login cliente.
3. Criar solicitação.
4. Cadastrar prestador.
5. Login prestador.
6. Aceitar serviço.
7. Finalizar atendimento.

## GitHub
```powershell
git init
git add .
git commit -m "AgendaPro completo"
git branch -M main
git remote add origin LINK_DO_REPOSITORIO
git push -u origin main
```

## Vercel
Add New Project > Importar GitHub > Deploy.
