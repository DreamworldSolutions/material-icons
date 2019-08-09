
import { html, css, LitElement } from 'lit-element';
import { getIcon as roundedIcons } from '../rounded/index.js';
import { getIcon as filledIcon } from '../filled/index.js';
import { getIcon as outlinedIcon } from '../outlined/index.js';
import { getIcon as twoToneIcon } from '../two-tone/index.js';
import { getIcon as sharpIcon } from '../sharp/index.js';

class materialIcon extends LitElement { 
  static get styles() {
    return [
      css`
      .categorie-container {
        display:flex;
        flex-direction: row;
      }

      .categorie-container div {
        display: flex;
        flex:1;
        flex-direction:column;
      }

      .round-icon div {
        margin: 0px 50px;
        flex-wrap: wrap;
        width: 100%;
      }
      `
    ];
  }

  render() {
    return html`
     <h1>filled icon</h1>
     <div class="categorie-container">
      <div>
        <h2>action</h2>
        ${filledIcon('action.accessibility', 24, 'filled')}
        <p>accessibility - 24</p>
      </div>
      
      <div>
        <h2>places</h2>
        ${filledIcon('places.ac_unit', 24, 'filled')}
        <p>ac_unit - 24</p>
        ${filledIcon('places.ac_unit', 48, 'filled')}
        <p>ac_unit - 48</p>
      </div>
      
      <div>
        <h2>social</h2>
        ${filledIcon('social.cake', 24, 'filled')}
        <p>cake - 24</p>
        ${filledIcon('social.cake', 48, 'filled')}
        <p>cake - 48</p>
      </div>
      
      <div>
        <h2>toggle</h2>
        ${filledIcon('toggle.check_box', 24, 'filled')}
        <p>check_box - 24</p>
        ${filledIcon('toggle.check_box', 48, 'filled')}
        <p>check_box - 48</p>
      </div>
     </div>
      

      <h1>outlined icon</h1>
      <div class="categorie-container">
        <div>
          <h2>action</h2>
          ${outlinedIcon('action.account_balance', 24, 'outlined')}
          <p>account_balance - 24</p>
        </div>
        
        <div>
        <h2>places</h2>
          ${outlinedIcon('places.airport_shuttle', 24, 'outlined')}
          <p>airport_shuttle - 24</p>
          ${outlinedIcon('places.airport_shuttle', 48, 'outlined')}
          <p>airport_shuttle- 48</p>
        </div>
        
        <div>
          <h2>social</h2>
          ${outlinedIcon('social.cake', 24, 'outlined')}
          <p>cake - 24</p>
          ${outlinedIcon('social.cake', 48, 'outlined')}
          <p>cake - 48</p>
        </div>
      </div>
      
      <h1>rounded Icon</h1>
      <div class="categorie-container round-icon">
        <div>
          <h2>action</h2>
          ${roundedIcons('action.3d_rotation', 24, 'rounded')}
          <p>3d_rotation</p>
        </div>

        <div>
         <h2>alert</h2>
          ${roundedIcons('alert.add_alert', 24, 'rounded')}
          <p>add_alert 24</p>
          ${roundedIcons('alert.add_alert', 48, 'rounded')}
          <p>add_alert 48</p> 
        </div>

        
        <div>
          <h2>av</h2>
          ${roundedIcons('av.add_to_queue', 48, 'rounded')}
          <p>add_to_queue - 48</p>
        </div>
       
        <div>
          <h2>communication</h2>
          ${roundedIcons('communication.business', 24, 'rounded')}
          <p>business - 48</p>
          ${roundedIcons('communication.business', 48, 'rounded')}
          <p>business -48</p>
        </div>
       
        <div>
          <h2>content</h2>
          ${roundedIcons('content.add', 48, 'rounded')}
          <p>add - 48</p>
          ${roundedIcons('content.add', 24, 'rounded')}
          <p>add - 24</p>
        </div>
        
        <div>
          <h2>device</h2>
          ${roundedIcons('device.access_alarm', 24, 'rounded')}
          <p>access_alarm -  24</p>
        </div>

        <div>
          <h2>editor</h2>
          ${roundedIcons('editor.attach_file', 24, 'rounded')}
          <p>attach_file -  24</p>
        </div>

        <div>
        <h2>file</h2>
          ${roundedIcons('file.attachment', 24, 'rounded')}
          <p>attachment - 24</p>
          ${roundedIcons('file.attachment', 48, 'rounded')}
          <p>attachment - 48</p>
        </div>

        <div>
          <h2>hardware</h2>
          ${roundedIcons('hardware.cast', 24, 'rounded')}
          <p>cast - 24</p>
        </div>
    </div>
    
    <h1>Two-tone</h1>
    <div  class="categorie-container">
      <div>
        <h2>action</h2>
        ${twoToneIcon('action.account_balance', 24, 'twoTone')}
        <p>account_balance</p>
      </div>
      <div>
        <h2>social</h2>
        ${twoToneIcon('social.cake', 24, 'twoTone')}
        <p>cake - 24</p>
      </div>
    </div>

    <h1>sharp</h1>
    <div class="categorie-container"> 
      <div>
        <h2>toggle</h2>
        ${sharpIcon('toggle.check_box', 24, 'sharp')}
        <p>check_box - 24</p>    
        ${sharpIcon('toggle.check_box', 48, 'sharp')}
        <p>check_box -48</p>    
      </div>  
      <div>
        <h2>social</h2>
        ${sharpIcon('social.location_city', 24, 'sharp')}
        <p>check_box - 24</p>
        ${sharpIcon('social.location_city', 48, 'sharp')}
        <p>check_box -48</p>    
      </div>
    </div>
    
   `;
  }
}

window.customElements.define('material-icon', materialIcon);