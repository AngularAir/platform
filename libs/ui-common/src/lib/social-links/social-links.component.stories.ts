import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { SocialLinksComponent } from './social-links.component';

export default {
  title: 'SocialLinksComponent',
  component: SocialLinksComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<SocialLinksComponent>;

const Template: Story<SocialLinksComponent> = (args: SocialLinksComponent) => ({
  // component: SocialLinksComponent,
  props: args,
});


export const YouTube = Template.bind({});
YouTube.args = {
  social: 'youtube',
}

export const Twitter = Template.bind({});
Twitter.args = {
}