import { getInitializedClassName } from './utilities';

export default function init(fn, container, ...args) {
    const initializedClassName = getInitializedClassName(fn);

    if (container) {
        if (container.classList.contains(initializedClassName)) {
            return true;
        }

        container.classList.add(initializedClassName);

        return fn(container, ...args);
    }

    return undefined;
}
