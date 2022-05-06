import React from "react";
import './Button.css'

const UIButton = ({className, theme, children, component: Component, ...restProps}) => {
    return <Component className={`uibutton uiButton--${theme} ${className}`} {...restProps} >{children}</Component>
}

UIButton.defaultProps = {
    Component: 'a',
    className: '',
    theme: 'bordered-primary'
}

export default UIButton;