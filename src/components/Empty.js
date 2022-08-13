import empty from './molehill.png'
import { useEffect } from 'react';

export default function Empty (props) {
    useEffect (() => {
        const showMoleAfter = Math.floor(Math.random() * 5000 + 500);
        const timer = setTimeout(() => {
            props.setIsShowing(true);
        }, showMoleAfter);
        return () => {
            clearTimeout(timer);
        }
    })
    return <img alt = 'empty mole hill' src={empty}/>
}