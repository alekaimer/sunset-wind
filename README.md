# A2labs Design System

Aplicação que utilizar este Design System deverá obrigatoriamente utilizar os seguintes tópicos:

- React como dependencia de desenvolvimento
- Criar interfaces com o conceito de CSS-in-JS

## Desenvolvimento:

Ambiente de desenvolvimento:

```
npm run dev

```

Ambiente `de` produção:

```
npm run build
```

## Changeset

Lembre-se de executar os comandos CHANGESET ao finalizar uma nova implementação para atualizar a versão.

Para escrever seu log de alterações:

```
npm run changeset
```

Para efetivar suas alterações

```
npm run version-packages
```

_A publicação no NPM é realizada por automação no Github Actions assim que um novo push for enviado para a `branch release`._

Para forçar a publicação no NPM, caso seja necessário:

```
npm run publish-release
```

## Tokens

(typescript, tsup)

## React

(Stitches)

## Docs

(Storybook)
A documentação pode ser visualizada no GitHub Pages.
O deploy da documentação foi realizado com a dependencia [@storybook/storybook-deployer](https://github.com/storybook-eol/storybook-deployer).

Para fazer deploy da Documentação Storybook no Github pages, entre na pasta packages/docs e execute o comando:
npm run deploy-storybook

# NPM

Para publicar no NPM é necessário estar logado com a conta correta
