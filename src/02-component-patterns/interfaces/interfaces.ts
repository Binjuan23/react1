import {CSSProperties, JSX, ReactElement} from "react";
import {Props as PropsTitle} from "../components/ProductTitle";
import {Props as PropsImage} from "../components/ProductImage";
import {Props as PropsButtons} from "../components/ProductButtons";

export interface ProductCardProps {
    product: Product;
    children?: ReactElement | ReactElement[];
    className?: string;
    style?: CSSProperties;
}

export interface Product {
    id: string;
    title: string;
    img?: string;
}

export interface ProductContextProps {
    counter: number;
    product: Product;
    increaseBy: (value: number) => void;
}

export interface ProductCardHOCProps {
    ({children, product}: ProductCardProps): JSX.Element,
    Title: (Props: PropsTitle) => JSX.Element,
    Image: (Props: PropsImage) => JSX.Element,
    Buttons: (Props: PropsButtons) => JSX.Element
}