import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { UserCoinComponent } from "./user-coin.component";

export default {
  title: 'UserCoinComponent',
  component: UserCoinComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<UserCoinComponent>;

const Template: Story<UserCoinComponent> = (args: UserCoinComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  user: {
    fullName: 'Justin Schwartzenberger',
    profileUrl: 'https://twitter.com/schwarty',
    profileImageUrl: 'https://pbs.twimg.com/profile_images/1347986955271737344/WKdoxon6_400x400.jpg',
    twitterHandle: 'schwarty'
  }
};
