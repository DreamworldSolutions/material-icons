import {icons as actionIcons} from 'action.js';

let icons = {
    action: actionIcons,
};


export const getIcon = (name, size) => {
    let category = name.split('.')[0];
    let iconName = name.split('.')[1] + '_' +  size;
    return icons[category][iconName];
}