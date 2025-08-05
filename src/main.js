import './style.css'
import { travelPace } from './tables/travelPace';
import { servicesAndTransportation } from './tables/servicesAndTransportation';
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
import { damageSeverity } from './tables/damageSeverity';
import { lightSources } from './tables/lightSources';
import { skills } from './tables/skills';
import { jumping } from './tables/jumping';
import { concentration } from './tables/concentration';
import { thingsYouCanDo } from './tables/thingsYouCanDo';


const container = document.createElement('div');
container.id = 'container';

const cards = [
  settingDC,
  cover,
  damageSeverity,
  objectAC,
  objectHP,
  jumping,
  trackingDC,
  travelPace,
  outdoorVisibility,
  audibleDistance,
  encounterDistance,
  lightSources,
  concentration,
  thingsYouCanDo,
  actionList,
  conditions,
  foodAndDrink,
  servicesAndTransportation,
  skills
];

cards.forEach(card => {
  container.appendChild(card());
});

document.querySelector('#app').appendChild(container);