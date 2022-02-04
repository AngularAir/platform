---
title: 'my first Scully sample page'
description: 'blog description'
published: true
---

# Scully Rocks!

> the config for this website is: 

```js
export const config: ScullyConfig = {
  projectRoot: "./apps/website/src",
  projectName: "website",
  spsModulePath: './apps/website/src/app/app.sps.module.ts',
  outDir: './dist/static',
  maxRenderThreads: 4,
  routes: {
    '/article/:title': {
      type: 'contentFolder',
      title: {
        folder: "./libs/website/mdarticles"
      }
    },
  }
};
```

Import the prism themes like this in your `styles.css`

```css
@import '~prismjs/plugins/toolbar/prism-toolbar.css';
/* check node_modules/prismjs/themes/ for the available themes */
@import '~prismjs/themes/prism-tomorrow.css';
```
