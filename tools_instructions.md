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
