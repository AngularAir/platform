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
    fullName: 'Test Person',
    profileUrl: '',
    profileImageUrl: '',
    twitterHandle: 'angularair'
  }
};
