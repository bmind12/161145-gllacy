import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { getInitializedClassName } from './utilities';

export function render(Component, container, props, store) {
    const initializedClassName = getInitializedClassName(Component);

    if (container) {
        if (container.classList.contains(initializedClassName)) {
            return true;
        }

        container.classList.add(initializedClassName);

        if (store) {
            ReactDOM.render(
                <Provider store={store}>
                    <Component {...props} container={container} />
                </Provider>,
                container
            );
        } else {
            ReactDOM.render(
                <Component {...props} container={container} />,
                container
            );
        }
    }

    return undefined;
}

export function renderFactory(Component, containers, ...args) {
    const notInitializedContainers = [];
    const initializedClassName = getInitializedClassName(Component);

    [...containers].forEach((container) => {
        if (!container.classList.contains(initializedClassName)) {
            container.classList.add(initializedClassName);
            notInitializedContainers.push(container);
        }
    });

    notInitializedContainers.forEach((container) => {
        render(Component, container, ...args);
    });
}
