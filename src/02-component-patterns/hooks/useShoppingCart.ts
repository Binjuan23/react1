import {useState} from "react";
import {Product, ProductInCart} from "../interfaces/interfaces";

export const useShoppingCart = () => {
    const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({});

    const onProductCountChange = ({count, product}: { count: number, product: Product }) => {
        setShoppingCart(prevState => {
                const productInCart: ProductInCart = prevState[product.id] || {...product, count: 0};
                const newCount = Math.max(productInCart.count + count, 0) ;
                if (newCount > 0) {
                    return {
                        ...prevState,
                        [product.id]: {...product, count: newCount}
                    }
                }
                const {[product.id]: toRemove, ...rest} = prevState;
                return rest;
            }
            //     if (count === 0) {
            //         const {[product.id]: toRemove, ...rest} = prevState;
            //         return rest;
            //     }
            //     return {
            //         ...prevState,
            //         [product.id]: {...product, count}
            //     }
            // }
        )
    }

    return {shoppingCart, onProductCountChange};
}