import './style.css'
import { travelPace } from './tables/travelPace';
import { servicesAndTransportation } from './tables/servicesAndtransportation';
import { foodAndDrink } from './tables/foodAndDrink';
import { objectHP } from './tables/objectHP';
import { objectAC } from './tables/objectAC';
import { trackingDC } from './tables/trackingDC';
import { settingDC } from './tables/settingDC';
import { actionList } from './tables/actionList';
import { cover } from './tables/cover';
import { conditions } from './tables/conditions';
import { outdoorVisibility } from './tables/outdoorVisibility';
import { audibleDistance } from './tables/audibleDistance';
import { encounterDistance } from './tables/encounterDistance';
import { notePad } from './tables/notePad';
import { strength } from './tables/strength';
import { dexterity } from './tables/dexterity';
import { constitution } from './tables/constitution';
import { intelligence } from './tables/intelligence';
import { wisdom } from './tables/wisdom';
import { charisma } from './tables/charisma';


const container = document.createElement('div');
container.id = 'container';

container.appendChild(travelPace());
container.appendChild(servicesAndTransportation());
container.appendChild(notePad());
container.appendChild(foodAndDrink());
container.appendChild(objectHP());
container.appendChild(objectAC());
container.appendChild(trackingDC());
container.appendChild(encounterDistance());
container.appendChild(settingDC());
container.appendChild(cover());
container.appendChild(outdoorVisibility());
container.appendChild(audibleDistance());
container.appendChild(actionList());
container.appendChild(conditions());
container.appendChild(strength());
container.appendChild(dexterity());
container.appendChild(constitution());
container.appendChild(intelligence());
container.appendChild(wisdom());
container.appendChild(charisma());

document.querySelector('#app').appendChild(container);