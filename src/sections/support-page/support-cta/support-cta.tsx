import React from 'react';
import classNames from 'classnames';

import { PossibleSizes } from '@teambit/base-ui-temp.theme.sizes';
import { Paragraph } from '@teambit/base-ui-temp.text.paragraph';
import { alignItems, text } from '@teambit/base-ui-temp.layout.align';
import { Grid } from '@teambit/base-ui-temp.layout.grid-component';

import { H2 } from '@teambit/evangelist-temp.elements.heading';
import { Link } from '@teambit/evangelist-temp.elements.link';
import { Button } from '@teambit/evangelist-temp.elements.button';

import styles from './support-cta.module.scss';

/**
 * @name SupportCta
 * @description
 * A static section, calling users to contact us.
 */
export function SupportCta(props: React.HTMLAttributes<HTMLDivElement>) {
	const { className, ...rest } = props;
	return (
		<Grid
			colMd={2}
			{...rest}
			data-bit-id="bit.evangelist/sections/support-page/support-cta"
			className={classNames(className, text.center, text.md.left, styles.mainGrid)}
		>
			<div className={styles.topSection}>
				<H2 size={PossibleSizes.xs}>Need support?</H2>
				<Paragraph size={PossibleSizes.xl}>Reach out to our team.</Paragraph>
			</div>
			<div className={classNames(styles.buttons, alignItems.center)}>
				<Link className={styles.link} href="/support">
					<Button importance="cta">Contact support</Button>
				</Link>
				<div className={styles.spacer} />
				<Link className={styles.link} href="/pricing">
					<Button importance="normal">Upgrade support</Button>
				</Link>
			</div>
		</Grid>
	);
}
