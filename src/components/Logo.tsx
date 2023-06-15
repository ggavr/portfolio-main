import React from 'react';
import {Icons} from "./Icons";
type PropsType = {
    iconId?:string
}
export const Logo = ({iconId}:PropsType) => {
    return (
        <a href='/'>
            <Icons iconId='react'/>
        </a>
    );
};

