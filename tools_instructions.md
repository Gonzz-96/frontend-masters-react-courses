# Tools for writing React :)

## Installing Prettier

- `-D` means a dev dependency.

`npm install -D prettier`

Add a new script to run prettier and format all the js and html files.

`"format": "prettier \"src/**/*.{js, html}\" --write"`

To run prettier every time I hit `save`:

- Go to extensions
- Install `Prettier` extension.
- Go to settings.
- Turn on `Format on Save`
- Search for `Prettier: Require config`
- Create a config file called `.prettierrc`
- Write `{ }` for default config
- Play with any config you want. :)

## Installing ESLint

- Run the command: `npm install -D eslint eslint-config-prettier`
- Create a file called `.eslintrc.json`
- Create a new empty object: `{ }`
- Add this object to create a baseline eslint configuration file:

```
{
    "extends": [
        "eslint:recommended",
        "prettier",
        "prettier/react"
    ],
    "plugins": [],
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "env": {
        "es6": true,
        "browser": true,
        "node": true
    }
}
```

- Add another script to package.json: `"lint": "eslint \"src/**/*.{js,jsx}\" --quiet"`

DON'T FORGET TO ENABLE ESLINT IN VSCODE!

## Installing Parcel

- Run the command: `npm install -D parcel-bundler`
- Create a new script: `"dev": "parcel src/index.html"`

Parcell will figure everything out for us!

## Install React and ReactDOM

- Run the command: `npm i react react-dom`

Note: Babel is built-in into Parcel. :)

It's necessary to configure ESLint to tell it we are actually using the React imports while writting JSX.

- Run the command: `npm install -D babel-eslint eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react`
- Configure once again the `.eslintrc.json` file with the next content:

```
{
  "extends": [
      "eslint:recommended",
      "plugin:import/errors",
      "plugin:react/recommended",
      "plugin:jsx-a11y/recommended",
      "prettier",
      "prettier/react"
  ],
  "rules": {
    "react/prop-types": 0,
    "no-console": 1
  },
  "plugins": ["react", "import", "jsx-a11y"],
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "es6": true,
    "browser": true,
    "node": true
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}
```

## Install ESLint plugin for working with React Hooks.

- Run the command: `npm i -D eslint-plugin-react-hooks`

This plugin contains the official rules from the React team about how to write hooks correctly.

Add a new version of the `.eslintrc.json` file:

```
{
  "extends": [
      "eslint:recommended",
      "plugin:import/errors",
      "plugin:react/recommended",
      "plugin:jsx-a11y/recommended",
      "prettier",
      "prettier/react"
  ],
  "rules": {
    "react/prop-types": 0,
    "no-console": 1,
    "react-hooks/rules-of-hooks": 2,
    "react-hooks/exhaustive-deps": 1
  },
  "plugins": ["react", "import", "jsx-a11y", "react-hooks"],
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "es6": true,
    "browser": true,
    "node": true
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}
```

## Make application offline.

- Run the command: `npm install -D cross-env`
- Add this line to the `package.json` file: `"dev:mock": "cross-env PET_MOCK=mock npm run dev"`

## Adding Reach Router

There are like 3 options of routers for react: `React Router`, `Reach Router` and `NaVi Router`.

We are going to use `Reach Router` beacuse it handles a lot of accessibility issues for us (unlike `React Router` that doesn't help at all). :)

- Install reach router: `@reach/router`

## Configure experimental features with Babel

- Run the command: `npm install -D babel-eslint @babel/core @babel/preset-env @babel/plugin-proposal-class-properties @babel/preset-react`
