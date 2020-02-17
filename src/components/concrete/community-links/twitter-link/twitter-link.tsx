import React from 'react';
import classNames from 'classnames';
import { PrimaryLink } from '../primary-link';
import { Icon } from '../../icon';
import styles from './twitter-link.module.scss';

/**
 * concrete community link component - pill flavor for base link component
 */
export type TwitterLinkProps = {
	/**
	 * override className for styling
	 */
	className?: string;
	/**
	 * the link to refer to
	 */
	href: string;
} & React.HTMLAttributes<HTMLAnchorElement>;

export function TwitterLink({ className, href, ...rest }: TwitterLinkProps) {
	return (
		<PrimaryLink
			{...rest}
			href={href}
			className={classNames(styles.twitterLink, className)}
			data-bit-id="twitterLink"
		>
			<Icon of="twitter-logo" className={classNames(styles.icon)} />
			<span>@bitdev_</span>
		</PrimaryLink>
	);
}
