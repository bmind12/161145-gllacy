/* global Sys */
import init from './init';

/* import modules */
import { slider } from './modules';

/**
 * Main application.
 *
 * @param  {object} config
 */
const app = (config) => {

    /* Static modules - single instance */
    init(slider, document.querySelector('.slider'));
};

app(window.config);
