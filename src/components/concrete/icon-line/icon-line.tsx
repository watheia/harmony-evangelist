import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';

import styles from './icon-line.module.scss';
import {Image} from '../../concrete/image';

const staticPrefix = 'homepage-bit';

type IconLineProps = {
    icons?: string[],
    className?: string,
} & HTMLAttributes<HTMLDivElement>;

export function IconLine({icons, className}: IconLineProps) {
	if (!icons) return null;
	return (
		<div className={classNames(styles.iconLine, className)}>
			BUILT WITH
			{icons.map((icon: string, index: number) => (
				<Image
					alt="icon"
					className={styles.icon}
					key={index}
					src={`${staticPrefix}/${icon}.svg`}
				/>
			))}
		</div>
	);
}
