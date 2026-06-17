Feature: Gestão de atendimento

  Scenario: Cliente solicita atendimento e prestador finaliza serviço
    Given existe um cliente cadastrado no AgendaPro
    And existe um prestador cadastrado no AgendaPro
    When o cliente cria uma solicitação de atendimento urgente
    And o prestador aceita a solicitação
    And o prestador finaliza o atendimento
    Then o atendimento deve ficar finalizado e vinculado ao prestador
