import { ScullyConfig } from '@scullyio/scully';

/** this loads the default render plugin, remove when switching to something else. */


export const config: ScullyConfig = {
  projectRoot: "./apps/website/src",
  projectName: "website",
  spsModulePath: 'YOUR OWN MODULE PATH HERE',
  outDir: './dist/static',
  routes: {
    '/article/:title': {
      type: 'contentFolder',
      title: {
        folder: "./libs/website/mdarticles"
      }
    },
  }
};
