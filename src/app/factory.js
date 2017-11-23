import { getInitializedClassName } from './utilities';

export default function factory(fn, containers, ...args) {
    const notInitializedContainers = [];
    const initializedClassName = getInitializedClassName(fn);

    [...containers].forEach(container => {
        if (!container.classList.contains(initializedClassName)) {
            container.classList.add(initializedClassName);
            notInitializedContainers.push(container);
        }
    });

    return [...notInitializedContainers].map(container => fn(container, ...args));
}
