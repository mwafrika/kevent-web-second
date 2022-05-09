import {Users} from './Users'
import {Package} from './Package'
import {Expeditions} from './Expeditions'
import { BookingPackages } from './BookingPackage';
import { Booking_expeditions } from './BookingExpedition';
import {ResetPassword} from './ResetPassword'
import {Places} from './Places'
import {ContactUs} from './ContactUs'

const routes = [...Users, ...Package, ...Expeditions, ...BookingPackages, ...ResetPassword, ...Places, ...Booking_expeditions, ...ContactUs];
export default routes;