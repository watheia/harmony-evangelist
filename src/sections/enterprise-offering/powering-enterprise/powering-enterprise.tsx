import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';

import { textColumn } from '@teambit/base-ui-temp.layout.page-frame';
import { Paragraph } from '@teambit/base-ui-temp.text.paragraph';
import { PossibleSizes } from '@teambit/base-ui-temp.theme.sizes';
import { colorPalette } from '@teambit/base-ui-temp.theme.color-palette';
import { themedText } from '@teambit/base-ui-temp.text.themed-text';
import { text } from '@teambit/base-ui-temp.layout.align';
import { MutedText, mutedText } from '@teambit/base-ui-temp.text.muted-text';

import { H2 } from '@teambit/evangelist-temp.elements.heading';

import styles from './powering-enterprise.module.scss';

/**
 * A section showing a summery of the Bit enterprise solution.
 * @name PoweringEnterprise
 */
export const PoweringEnterprise = (props: HTMLAttributes<HTMLDivElement>) => (
	<div
		{...props}
		data-bit-id="bit.evangelist/sections/enterprise-offering/powering-enterprise"
		className={classNames(
			props.className,
			text.center,
			text.l.left,
			styles.poweringEnterprise
		)}
	>
		<CrunchTheNumbers />

		<div className={styles.separator}></div>

		<div className={textColumn}>
			<H2 size={PossibleSizes.sm}>Powering application delivery at scale</H2>
			<Paragraph size={PossibleSizes.xl} className={mutedText}>
				Bit enterprise lets you build and ship modern web applications at scale. It
				empowers global teams to build faster and better with components.
			</Paragraph>
		</div>
	</div>
);

function CrunchTheNumbers() {
	return (
		<div className={classNames(text.center, styles.crunchTheNumbers)}>
			<div>
				<div className={styles.emphasized}>35%</div>
				<MutedText>Cost Reduction</MutedText>
			</div>
			<div className={colorPalette.secondary}>
				<div className={classNames(themedText, styles.emphasized)}>10x</div>
				<MutedText>Feature delivery</MutedText>
			</div>
			<div className={colorPalette.primary}>
				<div className={classNames(themedText, styles.emphasized)}>30x</div>
				<MutedText>Team Releases</MutedText>
			</div>
			<div className={colorPalette.complementary}>
				<div className={classNames(themedText, styles.xtraEmpthasized)}>∞</div>
				<MutedText>Scale</MutedText>
			</div>
		</div>
	);
}
