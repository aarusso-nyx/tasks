// import db from "../../backend/db";
import { v4 as uuidv4 } from 'uuid';

import { Resource, getResource } from "./resources";
import { Recipe, getRecipes } from "./recipes";

////////////////////////////////////////////////////////////////////////////////////
export type TaskType = 'charter' | 'voyage' | 'docking' | 'mooring' | 'piloting' | 'operation';
export type TaskStatus = 'scheduled' | '...' | 'finished';


////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
export class Task { 
    taskId:     string;
    type:       TaskType;
    rsrc:       Resource;
    status:     TaskStatus;

    parent:     Task;
    prev_:      Task;
    next_:      Task;
    subs_:      Task[];    
    crew_:      Person[];

    depth:      number;
    order:      number;

    etf:        number;
    ets:        number;
    atf:        number;
    ats:        number;

    ///////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////
    constructor(parent: Task | null, type: TaskType, rsrc: Resource | null, ets: number = 0, etf?: number) {
        // Instatiating
        this.taskId = uuidv4();
        this.status = 'scheduled';
        this.parent = parent || null;
        this.type = type;
        this.rsrc = rsrc;
        this.ets  = ets;
        this.ets  = etf;

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
