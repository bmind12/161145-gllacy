const
    /* Paths */
    DEV_BASE = 'src',
    BUILD_BASE = 'dist',

    /* TPL */
    TPL_BASE = `${DEV_BASE}/tpl`,
    TPL_FILES = `${TPL_BASE}/*.nunj`,
    TPL_FILES_ALL = `${TPL_BASE}/**/*.nunj`,
    TPL_MAIN_FILE = `${TPL_BASE}/index.nunj`,

    /* SCSS */
    STYLES_BASE = `${DEV_BASE}/styles`,
    STYLES_MAIN_FILE = `${STYLES_BASE}/main.scss`,
    STYLES_FILES_ALL = `${STYLES_BASE}/**/*.scss`,
    STYLES_DEST = `${BUILD_BASE}/css`,

    /* GFX */
    GFX_BASE = `${DEV_BASE}/gfx`,
    GFX_FILES_ALL = `${GFX_BASE}/**/*`,
    GFX_DEST = `${BUILD_BASE}/gfx`

    /* JS */
    JS_BASE = `${DEV_BASE}/app`;
    JS_MAIN_FILE = `${JS_BASE}/app.js`;
    JS_FILES_ALL = `${JS_BASE}/**/*.js`;
    JS_DEST = `${BUILD_BASE}/app`;
;

module.exports = {
    DEV_BASE,
    BUILD_BASE,
    TPL_BASE,
    TPL_FILES,
    TPL_FILES_ALL,
    TPL_MAIN_FILE,
    STYLES_BASE,
    STYLES_MAIN_FILE,
    STYLES_FILES_ALL,
    STYLES_DEST,
    GFX_BASE,
    GFX_FILES_ALL,
    GFX_DEST,
    JS_BASE,
    JS_MAIN_FILE,
    JS_FILES_ALL,
    JS_DEST
};
