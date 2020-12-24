import React from 'react';
import { Theme } from '@teambit/base-ui.theme.theme-provider';
import { Input, TextArea } from './input';

export const InputExample = () => (
	<Theme>
		<Input error={false} data-testid="test-input" />
	</Theme>
);

export const InputWithError = () => (
	<Theme>
		<Input error={true} data-testid="test-input" />
	</Theme>
);

export const TextAreaExample = () => (
	<Theme>
		<TextArea error={false} data-testid="test-textarea" />
	</Theme>
);

export const TextAreaWithError = () => (
	<Theme>
		<TextArea error={true} data-testid="test-textarea" />
	</Theme>
);
