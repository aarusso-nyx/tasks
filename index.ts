import { Task } from './tasks';

import { Vessel, Port, Pilot, Berth, Fence, Cargo } from './resources';
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
const Hood = Vessel('HMS Hood', 123456789);
const SUAPE  = Port('SUAPE',  'BRSUA');
const SANTOS = Port('SANTOS', 'BRSTS');
const ITAJAI = Port('ITAJAI', 'BRPNG');
const MASUA = Fence('Fundeio Suape', 'ashdjgerttuvn');
const MASTS = Fence('Fundeio Santos', 'etryrtutyutuvn');
const MAPNG = Fence('Fundeio Paranaguá', 'zcxbvcbnmnm');

const B1SUA = Berth('Berço PGL1', 'ashdjgerttuvn');
const B2SUA = Berth('Berço PGL2', 'ashdjgerttuvm');
const B1STS = Berth('Berço Transpetro', 'nh5ybgrtbve fc');
const B2STS = Berth('Berço Tequimar', 'lo,mkiyhjmnhn');
const B3STS = Berth('Berço Ultra', 'fbttutjgdbcr');
const B1PNG = Berth('Berço Paranaguá', 'xaxrbtvnyjmu');

const ALICE = Pilot('Alice', '435346547547');
const _BOB_ = Pilot('Bob',   '576865799785');
const CAROL = Pilot('Carol', '543756767867');



const line = new Task(null, 'charter', Hood, 0);

