import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { AAStackComponent } from './aa-stack.component';

export default {
  title: 'AAStackComponent',
  component: AAStackComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<AAStackComponent>;

const Template: Story<AAStackComponent> = (args: AAStackComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}