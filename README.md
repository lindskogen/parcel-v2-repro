# parcel v2 crash repro (yarn workspaces)

```bash
yarn

# set up alias to locally cloned parcel project
# with fix-ts-namespace-imports branch checked out
parceldev build packages/*
parceldev build packages/one
# 💥
```

`¯\_(ツ)_/¯`
