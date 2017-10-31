const
    /* Paths */
    DEV_BASE = 'src',
    BUILD_BASE = 'dist',

    /* TPL */
    TPL_BASE = `${DEV_BASE}/tpl`,
    TPL_FILES = `${TPL_BASE}/*.nunj`,
    TPL_MAIN_FILE = `${TPL_BASE}/index.html`,

    /* SCSS */
    STYLES_BASE = `${DEV_BASE}/styles`,
    STYLES_FILES = `${STYLES_BASE}/*.scss`,
    STYLES_MAIN_FILE = `${STYLES_BASE}/main.scss`,
    STYLES_FILES_ALL = `${STYLES_BASE}/**/*.scss`,
    STYLES_DEST = `${BUILD_BASE}/css`
;

module.exports = {
    DEV_BASE,
    BUILD_BASE,
    TPL_BASE,
    TPL_FILES,
    TPL_MAIN_FILE,
    STYLES_BASE,
    STYLES_FILES,
    STYLES_MAIN_FILE,
    STYLES_FILES_ALL,
    STYLES_DEST
};
