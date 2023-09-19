import { localStore } from './localStore.ts';
import { aircraft as DEFAULT_AIRCRAFT } from './loadingDataDefaults.ts';

export const currentAircraft = localStore('currentAircraft', DEFAULT_AIRCRAFT);
