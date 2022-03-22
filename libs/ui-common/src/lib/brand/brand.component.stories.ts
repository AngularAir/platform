import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { BrandComponent } from './brand.component';

export default {
  title: 'BrandComponent',
  component: BrandComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<BrandComponent>;

const Template: Story<BrandComponent> = (args: BrandComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}