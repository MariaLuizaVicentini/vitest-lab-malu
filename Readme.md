# VitestLab Malu

O **VitestLab** é um repositório de estudos e testes práticos criado para explorar e exercitar o ecossistema do **[Vitest](https://vitest.dev/)** em aplicações **React**, utilizando a **React Testing Library**.

Este projeto funciona como um laboratório prático (*playground*) para aplicar conceitos de testes unitários, medição de cobertura de código e integração com pipelines de CI/CD.

---

## Referência e Estudo

Os estudos e exemplos deste laboratório têm como base o artigo:

>  **[Testes Unitários com Vitest e React: do Zero ao Pipeline de CI/CD](https://medium.com/@pf.souza15/testes-unit%C3%A1rios-com-vitest-e-react-do-zero-ao-pipeline-de-ci-cd-f1fe898a07cd)**  
> *Por Paulo Souza*

---

## Tecnologias Utilizadas

- **[React](https://react.dev/)** — Biblioteca para interfaces de usuário
- **[Vitest](https://vitest.dev/)** — Framework de testes unitários movido a Vite
- **[React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)** — Utilitários para testar componentes React
- **[Node.js](https://nodejs.org/)** — Ambiente de execução JavaScript

---

## Como Executar

### Pré-requisitos

Certifique-se de ter o [Node.js](https://nodejs.org/) e um gerenciador de pacotes (`npm`, `yarn` ou `pnpm`) instalados.

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/vitestlab-malu.git
```

### 2. Acesse a pasta do projeto

```bash
cd vitestlab-malu
```

### 3. Instale as dependências

```bash
npm install
```

---

## Scripts de Teste

### Modo Watch

Executa os testes em modo *watch*, reexecutando-os automaticamente ao salvar os arquivos.

```bash
npm run test
```

### Executar a suíte de testes uma única vez

Executa a suíte de testes uma única vez e finaliza o processo.

```bash
npm run test:run
```

Ideal para pipelines de CI/CD.

### Gerar relatório de cobertura de código

Gera o relatório de cobertura de código (*code coverage*).

```bash
npm run test:coverage
```

### Interface gráfica

Abre a interface gráfica interativa do Vitest no navegador.

> Requer o `@vitest/ui`.

```bash
npm run test:ui
```
