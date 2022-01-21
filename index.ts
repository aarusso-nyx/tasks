import { Task } from './tasks';

import { Vessel, Port, Pilot, Berth, Fence, Cargo } from './resources';
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
console.log('Creating Resources...');

const Hood = Vessel('HMS Hood', 123456789);
const SUAPE  = Port('SUAPE',  'BRSUA');
const SANTOS = Port('SANTOS', 'BRSTS');
const ITAJAI = Port('ITAJAI', 'BRPNG');
const MASUA = Fence('Fund. Suape');
const MASTS = Fence('Fund. Santos');
const MAPNG = Fence('Fund. Itajaí');

const B1SUA = Berth('PGL1');
const B2SUA = Berth('PGL2');
const B1STS = Berth('Transpetro');
const B2STS = Berth('Tequimar');
const B3STS = Berth('Ultra');
const B1PNG = Berth('Paranaguá');

const ALICE = Pilot('Alice');
const _BOB_ = Pilot('Bob');
const CAROL = Pilot('Carol');

console.log();
console.log();
console.log('Creating Tasks...');

const line = new Task(null, 'charter', Hood, 0);

line.print(true, true);
