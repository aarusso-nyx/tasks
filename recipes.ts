import { TaskStatus, TaskType } from "./tasks";
import { ResourceStatus, ResourceType, Resource } from "./resources";

////////////////////////////////////////////////////////////////////////////////////
const mmsi = 123456789;
const hours = 60*60*1000;

////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
export interface Recipe { 
    id: number;
// QUERY
    reqType:     TaskType;
    reqResource: Resource;

// RECIPE
    type: TaskType;
    rsrc: Resource;

    dts: number;
    dtf: number;

    order: number;
}

////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
const recipes: Recipe[] = [
    // Voyages
    { 
    id: 1,    
    reqType: 'charter',
    reqResource: { type: 'vessel', id: mmsi },      // ou id: null, se o recipe for para qualquer mms

    type: 'Voyage', 
    rsrc: { type: 'port', id: 'BRSUA', name: 'Porto de Suape' },  

    dts:     0, 
    dtf:     36*hours,
    order: 0
    },
    { 
    id: 2,    
    reqType: 'charter',
    reqResource: { type: 'vessel', id: mmsi },

    type: 'Voyage', 
    rsrc: { type: 'port', id: 'BRSTS', name: 'Porto de Santos' },  

    dts:     0, 
    dtf:     36*hours,
    order: 1
    },
    { 
    id: 3,    
    reqType: 'charter',
    reqResource: { type: 'vessel', id: mmsi },

    type: 'Voyage', 
    rsrc: { type: 'port', id: 'BRPNG', name: 'Porto de Paranaguá' },  

    dts:     80*hours, 
    dtf:     116*hours,
    order: 2
    },
    { 
    id: 4,    
    reqType: 'charter',
    reqResource: { type: 'vessel', id: mmsi },

    type: 'Voyage', 
    rsrc: { type: 'port', id: 'BRSTS', name: 'Porto de Santos' },  

    dts:     140*hours, 
    dtf:     176*hours,
    order: 3
    },
    { 
    id: 5,    
    reqType: 'charter',
    reqResource: { type: 'vessel', id: mmsi },

    type: 'Voyage', 
    rsrc: { type: 'port', id: 'BRSUA', name: 'Porto de Suape' },  

    dts:     200*hours, 
    dtf:     240*hours,
    order: 4
    },


    //////
// BR SUAPE

    { 
        id: 6,    
        reqType: 'voyage',
        reqResource: { type: 'port', id: 'BRSUA' }, 
    
        type: 'mooring', 
        rsrc: { type: 'fence', id: 'fundeio_suape', name: 'Fundeio de Suape' },  
    
        dts:     36*hours, 
        dtf:     48*hours,
        order: 0
    },
    { 
        id: 7,    
        reqType: 'voyage',
        reqResource: { type: 'port', id: 'BRSUA' },
    
        type: '`piloting`', 
        rsrc: { type: 'pilot' }, // id = null : prático não alocado ainda 
    
        dts:     48*hours, 
        dtf:     49*hours,
        order: 1
    },

    { 
        id: 8,    
        reqType: 'voyage',
        reqResource: { type: 'port', id: 'BRSUA' },
    
        type: 'docking', 
        rsrc: { type: 'berth', id: 'BRSUA/PGL2A', name: 'PGL_2A' }, // id = null, berço não definido ainda 
    
        dts:     49*hours, 
        dtf:     73*hours,
        order: 2
    },


    { 
        id: 9,    
        reqType: 'voyage',
        reqResource: { type: 'port', id: 'BRSUA' },
    
        type: 'piloting', 
        rsrc: { type: 'pilot' }, // id = null 
    
        dts:     73*hours, 
        dtf:     74*hours,
        order: 3
    },

//////
/// 

{ 
    id: 10,    
    reqType: 'voyage',
    reqResource: { type: 'port', id: 'BRSTS' }, 

    type: 'mooring', 
    rsrc: { type: 'fence', id: 'fundeio_suape', name: 'Fundeio de Suape' },  

    dts:     36*hours, 
    dtf:     48*hours,
    order: 0
},
{ 
    id: 11,    
    reqType: 'voyage',
    reqResource: { type: 'port', id: 'BRSTS' },

    type: 'piloting', 
    rsrc: { type: 'pilot' }, // id = null : prático não alocado ainda 

    dts:     48*hours, 
    dtf:     49*hours,
    order: 1
},

{ 
    id: 12,    
    reqType: 'voyage',
    reqResource: { type: 'port', id: 'BRSTS' },

    type: 'docking', 
    rsrc: { type: 'berth', id: 'BRSTS/TPS07', name: 'PGL_2A' }, // id = null, berço não definido ainda 

    dts:     49*hours, 
    dtf:     73*hours,
    order: 2
},


{ 
    id: 13,    
    reqType: 'voyage',
    reqResource: { type: 'port', id: 'BRSTS' },

    type: 'piloting', 
    rsrc: { type: 'pilot' }, // id = null 

    dts:     73*hours, 
    dtf:     74*hours,
    order: 3
}]; 

////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
export const getRecipes = (type: TaskType, rsrc: Resource ): Recipe[] => {
    // return recipes.filter(r => r.reqType === type )
        // )
                // .sort((a, b) => a.order - b.order);

    return recipes;
    return [];
}

// const tbRecipes = 'smartlps-recipes';
// db.query(tbRecipes, { reqType: type, reqResource: rsrc }, { order: 'order' })