import {getIcon as roundedIcons} from './rounded/index.js';
import { getIcon as filledIcon } from './filled/index.js';
import { getIcon as outlinedIcon } from './outlined/index.js';
//import { getIcon as twoToneIcon } from './two-tone/index.js';

export const getIcon = (name, size=24, theme='filled') => {
    switch(theme) {
        case 'filled':
            return filledIcon(name, size);
        case 'outlined':
            return outlinedIcon(name, size);
        case 'rounded':
            return roundedIcons(name, size);
        case 'two-tone':
            return twoToneIcon(name, size);
        case 'sharp':
            return sharpIcon(name, size);
    }
}