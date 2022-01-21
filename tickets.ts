import { v4 as uuidv4 } from 'uuid';
import { getResource, Resource, ResourceReq } from "./resources";
import { Task } from "./tasks";


type TicketStatus = 'idle' | 'assigned' | 'done' | 'cancelled';

///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
export class Ticket { 
    ticketId: string;

    status:   TicketStatus;
    rsrc?:    ResourceReq | null;
    task:     Task;

    ///////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////
    constructor(task: Task) {
        this.ticketId = uuidv4();
        this.task = task;
        this.rsrc = task.rsrc;  //getResource(task.rsrc?.rsrcId);     
        this.status = 'idle';

        this.print(true);
        // console.log(this);
    }

    ///////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////
    print(verbose: boolean = false): void {
        const id = verbose ? this.ticketId : '';
        const rsrc = this.rsrc ? this.rsrc.rsrcName ? this.rsrc.rsrcName : ' no name ' : ' no resource ';
        const task = this.task ? this.task.type : ' no task ';
        const status = this.status;
        // console.log(`(${ts} -> ${tf}) => [ ${type }] ${rsrc(40)} | ${id}`);
// ${this.task.type} - ${this.resource?.rsrcName}
        console.log(`Ticket ${task.padEnd(10,' ')} [ ${status.padEnd(7, ' ')} ] - ${rsrc?.padEnd(38, ' ')} | ${id}`);
    }
}