# parcel v2 crash repro

```bash
yarn

yarn parcel build src/index.ts
# 💥
```

Removing the `"types"` field from package.json makes it work?

`¯\_(ツ)_/¯`
