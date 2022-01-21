// import db from "../../backend/db";
import { v4 as uuidv4 } from 'uuid';

import { Resource, getResource, ResourceId, ResourceReq } from "./resources";
import { Recipe, getRecipes } from "./recipes";
import { Person } from "./person";

////////////////////////////////////////////////////////////////////////////////////
export type TaskType = 'charter' | 'voyage' | 'docking' | 'mooring' | 'piloting' | 'operation';
export type TaskStatus = 'scheduled' | '...' | 'finished';


////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
export class Task { 
    taskId:     string;
    type:       TaskType;
    rsrc:       ResourceReq | null;
    status:     TaskStatus;

    parent:     Task | null = null;
    prev_:      Task | null = null;
    next_:      Task | null = null;
    subs_:      Task  [] = [];    
    crew_:      Person[] = [];

    depth:      number;
    order:      number;

    etf:        number = 0;
    ets:        number = 0;
    atf:        number | null = null;
    ats:        number | null = null;

    ///////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////
    constructor(parent: Task | null, type: TaskType, rsrc: ResourceReq | null, ets: number = 0, etf: number = 0, order: number = 0) {
        // Instatiating
        this.taskId = uuidv4();
        this.status = 'scheduled';
        this.parent = parent || null;
        this.type = type;
        this.rsrc = rsrc;
        this.ets  = ets;
        this.etf  = etf;

        // Linking
        this.crew_ = [];
        this.subs_ = [];

        // Inserting this on TaskTree
        if ( this.parent ) {
            this.depth = this.parent.depth + 1;
            this.order = this.parent.subs_.length;
            this.prev_ = this.parent.subs_[this.order - 1];
            
            if ( this.prev_ ) {
                this.prev_.next_ = this;
            }
            
            this.parent.subs_.push(this);
        } else {
            this.depth = 0;
            this.order = 0;
        }

        // Cook Recipes
        getRecipes(type, rsrc)
            .forEach( (r: Recipe) => {
                 new Task(this, r.type, r.rsrc, (this.ets + r.dts), (this.etf + r.dtf));
            });
    }

    ///////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////
    // Methods
    print(recurse: boolean = false, verbose: boolean = false): void {
        const hour = (ms: number): string => { 
            const h = (ms/3600000);           
            return h.toFixed(0)
                    .toString()
                    .padStart(2, '0')
                    .padStart(3, ' ') + 'h';
        }

        const id = verbose ? this.taskId.padEnd(24,' ') : '';
        const ts = hour(this.ets);
        const tf = hour(this.etf);
        const type = this.type.padEnd(8, ' ');

        const rsrc = (width: number = 32) => {
            const indent = ' '.repeat(this.depth * 3);
            
            const content = this.rsrc ? (this.rsrc.rsrcId 
                                         ? this.rsrc.rsrcId 
                                         : 'Resource Not Defined')
                                      : 'Resource Not Requested';
            
            return (indent + content).padEnd(width, ' ');
        } 
        
        console.log(`(${ts} -> ${tf}) => [ ${type }] ${rsrc(40)} | ${id}`);

        if ( recurse ) {
            this.subs.forEach( (t: Task) => {
                t.print(recurse, verbose);
            });
        }
    }
    
    ///////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////
    engage(type: TaskType, rsrc: Resource): Person[] {
        return [];
    }

    ///////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////
    // Accessors
    get prev(): Task | null { 
        return this.prev_;
    }

    get next(): Task | null { 
        return this.next_;
    }

    get subs(): Task[] {
        return this.subs_;
    }

    get crew(): Person[] {
        return this.crew_;
    }
}
