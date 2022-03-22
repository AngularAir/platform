import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { H1Component } from './h1.component';

export default {
  title: 'H1Component',
  component: H1Component,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<H1Component>;

const Template: Story<H1Component> = (args: H1Component) => ({
  props: args,
  template: `<h1 aa-h>{{ innerContent }}</h1>`,
});

const FancyTemplate: Story<H1Component> = (args: H1Component) => ({
  props: args,
  template: `<h1 aa-h class="fancy">{{ innerContent }}</h1>`,
});

// TODO ALYSSA, JUSTIN, MIKE: fix aa-h selector (aa-hONE)
// font popping bug
// storybook bug (navigate to brand and then away from)
export const Primary = Template.bind({});
Primary.args = {
  innerContent: 'An elegant H1'
}

export const Fancy = FancyTemplate.bind({});
Fancy.args = {
  innerContent: 'An elegant H1'
}