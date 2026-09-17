# Setup Tests

Esse é um arquivo de configuracao de testes. 

Ele existe pra preparar o amabiente antes dos testes serem executados.

No projeto, ele resolve principalmente tres problemas:
1. Add recursos pra verificar elementos HTML
2. Cria algumas funcoes que o navegador real possui, mas o ambiente de teste nao possui
3. Limpa os mocks depois de cada teste

----

jest-dom adiciona verificações que facilitam testar elementos da página.
- Apesar do nome ter jest, ele pode ser utilizado junto com o Vitest.

---

### Relembrando conceitos do vitest 

# funções simuladas `fn()`
```ts
const mockFn = vi.fn(implementation?)
```
`implementation`
- Uma function original pra ser executada quando o mockFn for chamado
- Se omitida, mockF apenas retornar undefined
- type: function

---

# simuladas comportamento de uma funcao `mockImplementation`
```ts
const mockFn = vi.fn();
mockFn.mockImplementation((parametro) => {
    return 'resultado falso';
});
```

----
