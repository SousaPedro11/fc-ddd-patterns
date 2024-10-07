# DDD: Modelagem tática e patterns

Neste curso foi colocado em prática a criação de um modelo de domínio, utilizando a abordagem de Domain-Driven Design (DDD), com o objetivo de criar um sistema de vendas de produtos. Não é um sistema completo, mas sim um exemplo prático de como modelar um domínio de forma eficiente e escalável.

## Modelagem tática

A modelagem tática é a parte do DDD que se preocupa com a implementação do modelo de domínio. Neste curso, foi utilizada a abordagem de modelagem tática proposta por Eric Evans, que consiste em dividir o domínio em três camadas: Entidades, Objetos de Valor e Agregados.

### Entidades

As entidades são objetos que possuem identidade própria e são distinguidas por um identificador único. Neste curso, as entidades foram representadas pelas classes `Product`, `Customer`, `Order` e `OrderItem`. Cada uma dessas classes possui um identificador único, que poderia ser gerado automaticamente quando o objeto é criado.

### Objetos de Valor

Os objetos de valor são objetos que não possuem identidade própria e são comparados com base em seus atributos. Neste curso, os objetos de valor foram representados pela classe `Address`, que possui os atributos `street`, `city`, `state` e `zipCode`. Esses atributos são utilizados para comparar dois objetos de valor e determinar se eles são iguais ou diferentes.

### Agregados

Os agregados são grupos de objetos que são tratados como uma única unidade. Neste curso, os agregados são:

- `Order` e `OrderItem`: o objeto `Order` é o agregado raiz, que contém uma lista de objetos `OrderItem`. Os objetos `OrderItem` são tratados como parte do agregado `Order` e não podem ser acessados diretamente por outros objetos.
- `Customer` e `Address`: o objeto `Customer` é o agregado raiz, que contém um objeto `Address`. O objeto `Address` é tratado como parte do agregado `Customer` e não pode ser acessado diretamente por outros objetos.
- `Product`: o objeto `Product` é um agregado independente, que não possui outros objetos associados a ele.

## Patterns

Além da modelagem tática, também foram utilizados alguns patterns de design para implementar o modelo de domínio de forma mais eficiente. Os patterns utilizados foram:

- Repository: o pattern Repository foi utilizado para separar a lógica de persistência de dados da lógica de negócio. Neste curso, foram criadas interfaces `ProductRepository`, `CustomerRepository` e `OrderRepository` para definir as operações de leitura e escrita de dados.

## Arquitetura

A arquitetura utilizada foi a arquitetura hexagonal, onde dividimos em duas camadas: domain e infrastructure. A camada domain contém as classes de domínio, como entidades, objetos de valor e agregados. A camada infrastructure contém as classes de infraestrutura, como repositórios e serviços externos.

## Tecnologias

As tecnologias utilizadas foram:

- TypeScript: para escrever o código do modelo de domínio.
- Jest: para escrever testes unitários das classes de domínio.
- Sequelize: para persistir os dados no banco de dados.
- SQLite: como banco de dados de teste.
- SWC: transpilador de TypeScript para JavaScript.

## Como executar os testes

Para executar os testes, basta rodar o comando `yarn test` no terminal. Isso irá executar todos os testes unitários das classes de domínio e repositorios. No final, será exibido um relatório com o resultado dos testes com a quantidade de testes passados, falhados, tempo de execução e cobertura de código.
