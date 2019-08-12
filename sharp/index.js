// import { icons as actionIcons } from './toggle.js/index.js';
// import { icons as alertIcons } from './alert.js';
// import { icons as avIcons } from './av.js';
// import { icons as communicationIcon } from './communication.js';
// import { icons as contentIcons } from './content.js';
// import { icons as deviceIcons } from './device.js';
// import { icons as editorIcons } from './editor.js';
// import { icons as fileIcons } from './file.js';
// import { icons as hardwareIcons } from './hardware.js';
// import { icons as imageIcons } from './image.js';
// import { icons as mapIcons } from './maps.js';
// import { icons as navigationIcons } from './navigation.js';
// import { icons as notificationIcons } from './notification.js';
// import { icons as placesIcons } from './places.js';
import { icons as socialIcons } from './social.js';
import { icons as toggleIcons } from './toggle.js';

let icons = {
    // action: actionIcons,
    // alert: alertIcons,
    // av: avIcons,
    // communication: communicationIcon,
    // content: contentIcons,
    // device: deviceIcons,
    // editor: editorIcons,
    // file: fileIcons,
    // hardware: hardwareIcons,
    // image: imageIcons,
    // maps: mapIcons,
    // navigation: navigationIcons,
    // notification: notificationIcons,
    // places: placesIcons,
    social: socialIcons,
    toggle: toggleIcons,
};

export const getIcon = (name, size=24) => {
    let category = name.split('.')[0];
    let iconName = name.split('.')[1];
    iconName = iconName + '_' + size;
    return icons[category][iconName];
}
