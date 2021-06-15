import React from 'react';
import { ThemeCompositions } from '@teambit/evangelist.theme.evangelist-theme';
import { TalkToExperts } from './talk-to-experts';

export const TalkToExpertsExample = () => (
	<ThemeCompositions>
		<TalkToExperts data-testid="test-talk" />
	</ThemeCompositions>
);

TalkToExpertsExample.canvas = {
	width: 1400,
	height: 300,
	overflow: 'scroll',
};
