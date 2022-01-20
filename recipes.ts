import { TaskType } from "./tasks";
import { ResourceReq, ResourceId } from "./resources";

////////////////////////////////////////////////////////////////////////////////////
const mmsi = '123456789';
const hours = 60*60*1000;

////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
export interface Recipe { 
   recipeId: number;
// QUERY
    reqType:     TaskType;
    reqResource: ResourceId;

// RECIPE
    type: TaskType;
    rsrc: ResourceReq;

    dts: number;
    dtf: number;

    order: number;
}

////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
const recipes: Recipe[] = [{ 
   recipeId: 1,    
    reqType: 'charter',
    reqResource: { rsrcId: mmsi },      // oursrcId: null, se o recipe for para qualquer mms

    type: 'voyage', 
    rsrc: { type: 'port', rsrcId: 'BRSUA', rsrcName: 'Porto de Suape' },  

    dts:     0, 
    dtf:     36*hours,
    order: 0
    },
    { 
   recipeId: 2,    
    reqType: 'charter',
    reqResource: { rsrcId: mmsi },

    type: 'voyage', 
    rsrc: { type: 'port',rsrcId: 'BRSTS', rsrcName: 'Porto de Santos' },  

    dts:     0, 
    dtf:     36*hours,
    order: 1
    },
    { 
   recipeId: 3,    
    reqType: 'charter',
    reqResource: { rsrcId: mmsi },

    type: 'voyage', 
    rsrc: { type: 'port',rsrcId: 'BRPNG', rsrcName: 'Porto de Paranaguá' },  

    dts:     80*hours, 
    dtf:     116*hours,
    order: 2
    },
    { 
   recipeId: 4,    
    reqType: 'charter',
    reqResource: { rsrcId: mmsi },

    type: 'voyage', 
    rsrc: { type: 'port',rsrcId: 'BRSTS', rsrcName: 'Porto de Santos' },  

    dts:     140*hours, 
    dtf:     176*hours,
    order: 3
    },
    { 
   recipeId: 5,    
    reqType: 'charter',
    reqResource: { rsrcId: mmsi },

    type: 'voyage', 
    rsrc: { type: 'port',rsrcId: 'BRSUA', rsrcName: 'Porto de Suape' },  

    dts:     200*hours, 
    dtf:     240*hours,
    order: 4
    },


    //////
// BR SUAPE

    { 
       recipeId: 6,    
        reqType: 'voyage',
        reqResource: { rsrcId: 'BRSUA' },
    
        type: 'mooring', 
        rsrc: { type: 'fence',rsrcId: 'fundeio_suape', rsrcName: 'Fundeio de Suape' },  
    
        dts:     36*hours, 
        dtf:     48*hours,
        order: 0
    },
    { 
       recipeId: 7,    
        reqType: 'voyage',
        reqResource: { rsrcId: 'BRSUA' },
    
        type: 'piloting', 
        rsrc: { type: 'pilot', rsrcId: null }, // id = null : prático não alocado ainda 
    
        dts:     48*hours, 
        dtf:     49*hours,
        order: 1
    },

    { 
       recipeId: 8,    
        reqType: 'voyage',
        reqResource: { rsrcId: 'BRSUA' },
    
        type: 'docking', 
        rsrc: { type: 'berth', rsrcId: 'BRSUA/PGL2A', rsrcName: 'PGL_2A' }, // id = null, berço não definido ainda 
    
        dts:     49*hours, 
        dtf:     73*hours,
        order: 2
    },


    { 
       recipeId: 9,    
        reqType: 'voyage',
        reqResource: { rsrcId: 'BRSUA' },
    
        type: 'piloting', 
        rsrc: { type: 'pilot', rsrcId: null }, // id = null 
    
        dts:     73*hours, 
        dtf:     74*hours,
        order: 3
    },

//////
/// 

{ 
   recipeId: 10,    
    reqType: 'voyage',
    reqResource: { rsrcId: 'BRSTS' },

    type: 'mooring', 
    rsrc: { type: 'fence', rsrcId: 'fundeio_suape', rsrcName: 'Fundeio de Suape' },  

    dts:     36*hours, 
    dtf:     48*hours,
    order: 0
},
{ 
   recipeId: 11,    
    reqType: 'voyage',
    reqResource: { rsrcId: 'BRSTS' },

    type: 'piloting', 
    rsrc: { type: 'pilot', rsrcId: null }, // id = null : prático não alocado ainda 

    dts:     48*hours, 
    dtf:     49*hours,
    order: 1
},

{ 
   recipeId: 12,    
    reqType: 'voyage',
    reqResource: { rsrcId: 'BRSTS' },

    type: 'docking', 
    rsrc: { type: 'berth', rsrcId: 'BRSTS/TPS07', rsrcName: 'PGL_2A' }, // id = null, berço não definido ainda 

    dts:     49*hours, 
    dtf:     73*hours,
    order: 2
},
{ 
   recipeId: 13,    
    reqType: 'voyage',
    reqResource: { rsrcId: 'BRSTS' },

    type: 'piloting', 
    rsrc: { type: 'pilot', rsrcId: null }, // id = null 

    dts:     73*hours, 
    dtf:     74*hours,
    order: 3
}]; 

////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
// const tbRecipes = 'smartlps-recipes';
// db.query(tbRecipes, { reqType: type, reqResource: rsrc }, { order: 'order' })
export const getRecipes = (type: TaskType, rsrc: ResourceReq | null ): Recipe[] => {
    const where = (r: Recipe) => (r.reqType === type) && (!rsrc || r.reqResource.rsrcId === rsrc.rsrcId);

    return recipes.filter(where).sort((a, b) => a.order - b.order);
}