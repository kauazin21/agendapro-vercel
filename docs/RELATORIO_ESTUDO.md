# AgendaPro — Relatório de estudo

## Problema
Pequenas empresas e prestadores recebem pedidos por WhatsApp, telefone e anotações, dificultando controle, priorização e acompanhamento.

## Solução
O AgendaPro centraliza o fluxo de atendimento com cadastro, login, solicitação, aceite e atualização de status.

## Serviços lógicos
- Auth Service: cadastro e login.
- Appointment Service: criação, aceite e status.
- Notification Service: registro de eventos.
- Frontend: interface.

## Arquitetura Limpa
Domain, Application, Infrastructure e Presentation.

## SOLID
SRP, OCP, LSP, ISP e DIP aplicados na separação de entidades, casos de uso, contratos e repositórios.

## Design Patterns
Repository, Strategy, Factory e DTO.

## TDD
Vitest valida regras de cadastro, login, criação, aceite, finalização e prioridade.

## BDD
Cucumber descreve o comportamento do cliente e prestador.

## Docker
Docker Compose padroniza a execução.

## Deploy
Vercel foi escolhida por suportar muito bem Next.js.
