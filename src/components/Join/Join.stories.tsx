import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Join, JoinProps } from './Join';
import { HMSThemeProvider } from '../../hooks/HMSThemeProvider';

const meta: Meta = {
  title: 'Join',
  component: Join,
};

export default meta;

const Template: Story<JoinProps> = args => {
  return (
    <HMSThemeProvider config={{}} appBuilder={{ theme: 'dark' }}>
      <div>
        <Join {...args} />
      </div>
    </HMSThemeProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  submitOnClick: ({ username, roomId, role }) =>
    alert(`Join Clicked, ${username} ${roomId} ${role}`),
};
