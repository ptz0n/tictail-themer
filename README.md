# Tictail Themer

A tool to help you build and test Tictail themes in your local environment. For available template tags, see [tag reference](https://tictail.com/docs/templates).

## Get started

1. Install [Node.js](http://nodejs.org/)
1. `$ npm install gulp -g`
1. Clone the repo
1. `$ npm install`
1. `$ gulp config`

## Making a theme

Do your magic in `theme.mustache` and view the result in a browser.

```bash
$ node server
```

## Deploying your theme

Great, so you're feeling ready to publish your creation to the world?

```bash
$ gulp build
```

## Kudos

* [Birk Nilson](https://github.com/birknilson) ([themetail](https://github.com/birknilson/themetail))
* [Jonny Strömberg](https://github.com/javve) ([tictail-theme-builder](https://github.com/javve/tictail-theme-builder))