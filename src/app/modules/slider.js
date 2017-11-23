import { classnames } from '../const';

const { IS_ACTIVE_CLASSNAME } = classnames;

const colors = {
    'slider-1': '#7c9c88',
    'slider-2': '#85949f',
    'slider-3': '#a3877b'
}

const slider = (container) => {
    const toggler = container.querySelector('.slider__toggler');
    const slides = container.querySelectorAll('.slider__item');

    toggler.addEventListener('change', (evt) => handleToggle(evt.target.id, slides));
};

function handleToggle(active, slides) {
    slides.forEach(slide => {
        if (active === slide.dataset.slider) {
            slide.classList.add(IS_ACTIVE_CLASSNAME);
        };
    });

    slides.forEach(slide => {
        if (active !== slide.dataset.slider) {
            slide.classList.remove(IS_ACTIVE_CLASSNAME);
        };
    });

    document.body.style.background = colors[active];
}

export default slider;
