import React from 'react';
import { TitleProps } from './Title.props';
import styles from './Title.module.scss';
import clsx from 'clsx';


export const Title: React.FC<TitleProps> = ({ tag = 'h1', children, color, className, ...props  }) => {
	const Tag = tag as 'h1' | 'h2' | 'h3' | 'h4';

    const classes = clsx(styles[tag], {
        [styles.black]: color === 'black',
        [styles.white]: color === 'white',
        
        },
        className
    );

    return <Tag className={classes} {...props}>{children}</Tag>;
};

export default Title;