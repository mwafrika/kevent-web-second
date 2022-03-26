import {Users} from './Users'
import {Package} from './Package'
import {Expeditions} from './Expeditions'
import { Packages } from './BookingPackage';

const routes = [...Users, ...Package, ...Expeditions, ...Packages];
export default routes;