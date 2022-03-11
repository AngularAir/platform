import { moduleMetadata, Story, Meta } from '@storybook/angular';
import {
  EpisodeFormComponent,
  EpisodeFormComponentModule,
} from './episode-form.component';
import { action } from '@storybook/addon-actions';

export default {
  title: 'EpisodeFormComponent',
  decorators: [
    moduleMetadata({
      imports: [EpisodeFormComponentModule],
    }),
  ],
} as Meta<EpisodeFormComponent>;

const Template: Story<EpisodeFormComponent> = (args: EpisodeFormComponent) => ({
  component: EpisodeFormComponent,
  props: {
    ...args,
    formSubmit: action('form submitted'),
  },
});

export const Primary = Template.bind({});
Primary.args = {};

export const Prefilled = Template.bind({});
Prefilled.args = {
  name: 'Justin',
  email: 'justin@angularair.com',
  twitter: '@angularair',
  title: 'Live coding!',
};
