# hume-site

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Build for gh-pages
```
npm run build
cd dist/
git init
git add .
git commit -m "changelog"
 
git push -f https://github.com/nikhowley/hume-works.git master:gh-pages
