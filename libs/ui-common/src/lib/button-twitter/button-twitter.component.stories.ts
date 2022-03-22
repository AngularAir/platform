import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ButtonTwitterComponent, ButtonTwitterComponentModule } from './button-twitter.component';

type StoryType = ButtonTwitterComponent | { innerContent: string; };

export default {
  title: 'ButtonTwitterComponent',
  component: ButtonTwitterComponent,
  decorators: [
    moduleMetadata({
      imports: [ButtonTwitterComponentModule],
    })
  ],
} as Meta<ButtonTwitterComponent>;

export const Tweakable: Story<StoryType> = (args: StoryType) => ({
  props: args,
  template: `<aa-button-twitter>{{innerContent}}</aa-button-twitter>`,
});
Tweakable.args = {
  innerContent: 'TwitterHandle'
}

export const WithBrocco: Story<StoryType> = (args: StoryType) => ({
  props: args,
  template: `<aa-button-twitter>@brocco</aa-button-twitter>`,
});
