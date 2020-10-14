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
- Create a config file
- Write `{ }` for default config
- Play with any config you want. :)
