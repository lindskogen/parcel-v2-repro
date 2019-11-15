# parcel v2 crash repro

```bash
yarn

# set up alias to locally cloned parcel project
# with v2 branch checked out (as of current writing: 4a3f5349157)
parceldev build .
# 💥
```

Named exports with same name (even if renamed in module) makes parcel crash
