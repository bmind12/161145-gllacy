import { classnames } from '../const';

/**
 * @param  {object/function} fn
 *
 * @return {string}
 */
const getInitializedClassName = (fn) => {
    const functionName = fn.name === 'Connect' ? fn.WrappedComponent.name : fn.name;

    return `${classnames.JS_INITIALIZED_CLASSNAME}-${functionName}`;
};

export default getInitializedClassName;
