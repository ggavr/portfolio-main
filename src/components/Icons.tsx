import React from 'react';
import sprite from '../assets/images/sprite.svg'

type PropsType={
    iconId?:string
    width?:string
    height?:string
    viewBox?:string
}
export const Icons = ({iconId, width, height, viewBox}: PropsType) => {
    return (
            <svg  width={width || '50'} height={height || '50'} viewBox={viewBox || '0 0 120 100'} fill="none" xmlns="http://www.w3.org/2000/svg">
                <use xlinkHref={`${sprite}#${iconId}`}/>
            </svg>
    );
};

