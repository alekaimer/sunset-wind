# !mportante

Este projeto está em versão experimental e não deve ser usado em ambiente de produção.

<br />

# Sunset Wind

Pacote de componentes de interface visual para aplicações experimentais.

Caso deseje utilizar/instalar este projeto acesse [Sunset Wind](https://www.npmjs.com/package/@sunset-wind/react) e siga as instruções para instalação ou execute o comando abaixo no seu terminal:

```
npm i @sunset-wind/react
```

Acesse a [documentação dos componentes](https://alekaimer.github.io/sunset-wind/) desde Design System para explorar suas funcionalidades.

##### _\* O aplicação que utilizar este pacote de interface gráfica deverá obrigatoriamente instalar React como dependencia de desenvolvimento_

<br/>

# Desenvolvimento:

Ambiente de desenvolvimento:

```
npm run dev
```

Ambiente de produção:

```
npm run build
```

<br/>

## Versionamento (Changeset)

_O versionamento será sempre realizado na `branch main`._

Para escrever seu log de alterações da nova versão:

```
npm run changeset
```

Para efetivar e aplicar suas alterações

```
npm run changeset:apply
```

<br/>

# Publicando

_A publicação no NPM é realizada por automação no Github Actions assim que um novo push for enviado para a `branch release`._

<br/>

## Documentação dos componentes (Storybook)

O deploy da documentação foi realizado com a dependencia [@storybook/storybook-deployer](https://github.com/storybook-eol/storybook-deployer).

Para fazer deploy manual da Documentação Storybook no Github pages, entre na pasta packages/docs e execute o comando:
`npm run deploy-storybook`

#### _(Não recomendamos esta acão pois o deploy da documentação já será realizado pelo workflow da Action no Github)_

<br />

# Sequência sugerida

## Atualização, versionamento e publicação

O deploy da aplicação se dá no NPM e da documentação no GH Pages:

- Atualizar a branch `develop` com a nova feature;
- Solicitar PR para a branch `main`;
- Na aprovação da PR para a branch `main`, se tudo ok, versionar conforme solicitado pelo tópico acima;
- Solicitar PR para a branch `release` para publicação no NPM e Github Pages.
- Aprovar PR com o versionamento para a branch `release`;
