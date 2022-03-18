import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { AaButtonComponent } from './aa-button.component';

export default {
  title: 'AaButtonComponent',
  component: AaButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<AaButtonComponent>;

const Template: Story<AaButtonComponent> = (args: AaButtonComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}