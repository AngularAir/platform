import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { EpisodeDetailsComponent } from './episode-details.component';
import { EpisodeDetailsComponentModule } from './episode-details.component';

export default {
  title: 'EpisodeDetailsComponent',
  component: EpisodeDetailsComponent,
  decorators: [
    moduleMetadata({
      imports: [EpisodeDetailsComponentModule],
    })
  ],
} as Meta<EpisodeDetailsComponent>;

const Template: Story<EpisodeDetailsComponent> = (args: EpisodeDetailsComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}