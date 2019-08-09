
import { html, css, LitElement } from 'lit-element';
import { getIcon as roundedIcons } from '../rounded/index.js';
import { getIcon as filledIcon } from '../filled/index.js';
import { getIcon as outlinedIcon } from '../outlined/index.js';

class materialIcon extends LitElement { 
  static get styles() {
    return [
      css`
      
      `
    ];
  }

  render() {
    return html`
     <h1>filled icon</h1>
      <h2>action</h2>  
      ${filledIcon('action.accessibility', 24, 'filled')}
      <div>accessibility - 24</div>

      <h2>places</h2>  
      ${filledIcon('places.ac_unit', 24, 'filled')}
      <div>ac_unit - 24</div>
      ${filledIcon('places.ac_unit', 48, 'filled')}
      <div>ac_unit - 48</div>

      <h2>social</h2>  
      ${filledIcon('social.cake', 24, 'filled')}
      <div>cake - 24</div>
      ${filledIcon('social.cake', 48, 'filled')}
      <div>cake - 48</div>

      <h2>toggle</h2>  
      ${filledIcon('toggle.check_box', 24, 'filled')}
      <div>check_box - 24</div>
      ${filledIcon('toggle.check_box', 48, 'filled')}
      <div>check_box - 48</div>

      <h1>outlined icon</h1>
      <h2>action</h2>  
      ${outlinedIcon('action.account_balance', 24, 'outlined')}
      <div>account_balance - 24</div>

      <h2>places</h2>  
      ${outlinedIcon('places.airport_shuttle', 24, 'outlined')}
      <div>airport_shuttle - 24</div>
      ${outlinedIcon('places.airport_shuttle', 48, 'outlined')}
      <div>airport_shuttle- 48</div>

      <h2>social</h2>  
      ${outlinedIcon('social.cake', 24, 'outlined')}
      <div>cake - 24</div>
      ${outlinedIcon('social.cake', 48, 'outlined')}
      <div>cake - 48</div>
     

      <h1>rounded Icon</h1>
      <h2>action</h2>
      ${roundedIcons('action.3d_rotation', 24, 'rounded')}
      <div>3d_rotation</div>

      <h2>alert</h2>
      ${roundedIcons('alert.add_alert', 24, 'rounded')}
      <div>add_alert 24</div>
      ${roundedIcons('alert.add_alert', 48, 'rounded')}
      <div>add_alert 48</div> 

      <h2>av</h2>
      ${roundedIcons('av.add_to_queue', 48, 'rounded')}
      <div>add_to_queue - 48</div>
    
      <h2>communication</h2>
      ${roundedIcons('communication.business', 24, 'rounded')}
      <div>business - 48</div>
      ${roundedIcons('communication.business', 48, 'rounded')}
      <div>business -48</div>
      
      <h2>content</h2>
      ${roundedIcons('content.add', 48, 'rounded')}
      <div>add - 48</div>
      ${roundedIcons('content.add', 24, 'rounded')}
      <div>add - 24</div>

      <h2>device</h2>
      ${roundedIcons('device.access_alarm', 24, 'rounded')}
      <div>access_alarm -  24</div>

      <h2>editor</h2>
      ${roundedIcons('editor.attach_file', 24, 'rounded')}
      <div>attach_file -  24</div>

      <h2>file</h2>
      ${roundedIcons('file.attachment', 24, 'rounded')}
      <div>attachment - 24</div>
      ${roundedIcons('file.attachment', 48, 'rounded')}
      <div>attachment - 48</div>

      <h2>hardware</h2>
      ${roundedIcons('hardware.cast', 24, 'rounded')}
      <div>cast - 24</div>

      <h2>image</h2>
      ${roundedIcons('image.add_a_photo', 24, 'rounded')}
      <div>add_a_photo - 24</div>
      ${roundedIcons('image.add_a_photo', 48, 'rounded')}
      <div>add_a_photo - 48</div>

      <h2>map</h2>
      ${roundedIcons('maps.add_location', 24, 'rounded')}
      <div>add_location - 24</div>
      ${roundedIcons('maps.add_location', 48, 'rounded')}
      <div>add_location - 48</div>

      <h2>navigation</h2>
      ${roundedIcons('navigation.apps', 24, 'rounded')}
      <div>apps - 24</div>
      ${roundedIcons('navigation.apps', 48, 'rounded')}
      <div>apps - 48</div>


      <h2>notfication</h2>
      ${roundedIcons('notification.adb', 24, 'rounded')}
      <div>apps - 24</div>
      ${roundedIcons('notification.adb', 48, 'rounded')}
      <div>apps - 48</div>

      `;
  }
}

window.customElements.define('material-icon', materialIcon);