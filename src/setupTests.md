# Setup Tests

`setupTests.ts` é um arquivo de **configuração dos testes**.

Ele existe pra **preparar o ambiente antes dos testes serem executados**.

No projeto, ele resolve principalmente três problemas:

1. Adiciona recursos pra facilitar os testes de elementos HTML.
2. Cria funções que existem em um navegador real, mas não existem no ambiente de teste.
3. Limpa os `mocks` depois de cada teste.

---

## `@testing-library/jest-dom`

```ts
import '@testing-library/jest-dom';
```
- `jest-dom` adiciona verificações que facilitam testar elementos HTML.

Por exemplo:
```ts
expect(element).toBeInTheDocument();
```

- `toBeInTheDocument` : permite verificar se um elemento está presente na página
---
# funções simuladas `fn()`

```ts
const mockFn = vi.fn(implementation?)
```
`vi.fn()` 
- cria uma função simulada.

Essa função pode ser utilizada para:
- verificar se uma função foi chamada;
- verificar quantas vezes foi chamada;
- verificar quais valores recebeu;
- definir o que ela deve retornar.

`implementation`
- É uma função que define o comportamento que o mockFn terá quando for chamado.
```ts
const mockFn = vi.fn(implementation);
```
Se a `implementation` nao for informada:
```ts
const mockFn = vi.fn();
```
- `mockFn` será uma function simulada que, por padrao, retorna undefined

---

# simuladas comportamento de uma funcao `mockImplementation`
```ts
const mockFn = vi.fn();
mockFn.mockImplementation((parametro) => {
    return 'resultado falso';
});
```

----
