under construction

<!-- # Sunset UI

Pacote de interface visual para os aplicativos da A2labs.

O aplicação que utilizar este pacote de interface gráfica deverá obrigatoriamente utilizar os seguintes tópicos:

- Ter React como dependencia de desenvolvimento;
- Criar interfaces com o conceito de CSS-in-JS (apesar de poder ser utilizadas com outros conceitos de estilização CSS).

## Desenvolvimento:

Ambiente de desenvolvimento:

```
npm run dev
```

Ambiente de produção:

```
npm run build
```

## Changeset

_O versionamento será sempre realizado na `branch release`._

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

_Para publicar no NPM é necessário estar logado no CLI do NPM com a conta correta._

## Docs (Storybook)

A documentação `NÃO` pode ser visualizada no GitHub Pages pois o repositório é e deve ser privado.
O deploy da documentação foi realizado com a dependencia [@storybook/storybook-deployer](https://github.com/storybook-eol/storybook-deployer).

Para fazer deploy manual da Documentação Storybook no Github pages, entre na pasta packages/docs e execute o comando:
`npm run deploy-storybook`

_(Não recomendamos esta acão pois o deploy da documentação já será realizado pelo workflow da Action no Github)_

<br />

# Sequência sugerida

## Atualização, versionamento e publicação

O deploy da aplicação se dá no NPM e da documentação no GH Pages:

- Atualizar a branch `develop` com a nova feature;
- Solicitar PR para a branch `release`;
- Na aprovação da PR para a branch `release`, se tudo ok, versionar com o Changeset (tópico acima);
- Aprovar PR com o versionamento para a branch `release`;
- Após as Actions terminarem com resultados positivos, fazer merge da branch `realease` para a branch `main`. -->
