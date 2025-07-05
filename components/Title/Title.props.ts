import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";


export interface TitleProps extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>{
    tag: 'h1' | 'h2' | 'h3' | 'h4';
    color: 'black' | 'white';
    children: ReactNode;
}