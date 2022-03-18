import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { AASocialLinksComponent } from './aa-social-links.component';

export default {
  title: 'AASocialLinksComponent',
  component: AASocialLinksComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<AASocialLinksComponent>;

const Template: Story<AASocialLinksComponent> = (args: AASocialLinksComponent) => ({
  // component: AASocialLinksComponent,
  props: args,
});


export const YouTube = Template.bind({});
YouTube.args = {
  social: 'youtube',
}

export const Twitter = Template.bind({});
Twitter.args = {
}