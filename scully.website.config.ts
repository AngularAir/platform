import { enableSPS, ScullyConfig, setPluginConfig } from '@scullyio/scully';

/** enable the SPS renderer */
enableSPS();

/** enable syntax highlighting in the MD plugin */
setPluginConfig('md', { enableSyntaxHighlighting: true });


export const config: ScullyConfig = {
  projectRoot: "./apps/website/src",
  projectName: "website",
  spsModulePath: './apps/website/src/app/app.sps.module.ts',
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
