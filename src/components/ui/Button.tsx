import { AriaButtonProps, useButton } from 'react-aria';

import React, { useRef } from 'react';


type Props = AriaButtonProps & {
    className?:string
}

const Button: React.FC<Props> = (props) => {
    let ref = useRef<HTMLButtonElement>(null)
    const {buttonProps} = useButton(props, ref) 
    const {children} = props
    return (
        <button {...buttonProps} className={props.className} ref={ref}>
            {children}
        </button>
    );
}



export default Button;