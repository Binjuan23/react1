import {useState} from 'react';

interface Props {
    initialValue?: number;
}
const UseProduct = ({initialValue = 0}: Props) => {
    const [counter, setCounter] = useState(initialValue);

    const increaseBy = (value: number) => {
        setCounter(prev => Math.max(prev + value, 0))
    }

    return {counter, increaseBy};
};

export default UseProduct;