import React from 'react';
import stylesComponent from './stylesComponent';
const translateProps = (props) => {
    let _styles = {...stylesComponent.default}
    if(props.disable){
         _styles = {..._styles, ...stylesComponent.disable}
    }

    let newProps = {props, styles: _styles}
    return newProps
}
export default  (StyleWrapper) => {
    return function wrapperFun(args){
        return StyleWrapper(translateProps(args))
    }
}
