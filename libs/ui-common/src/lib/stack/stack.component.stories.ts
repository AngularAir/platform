import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { StackComponent } from './stack.component';

export default {
  title: 'StackComponent',
  component: StackComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<StackComponent>;

const Template: Story<StackComponent> = (args: StackComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}