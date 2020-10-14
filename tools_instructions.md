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
