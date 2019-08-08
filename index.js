import {getIcon as roundedIcons} from './rounded/index.js';


export const getIcon = (name, size, theme) => {
    switch(theme) {
        case 'rounded':
            return roundedIcons(name, size);
        case '':

    }
}