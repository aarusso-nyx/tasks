
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
std::list<Schedule> lineup ( Resource *port, numberTime ta, numberTime tb ) {
    dockings = db.query('smartlps-tasks', { type: 'docking', ta, tb });
    moorings = db.query('smartlps-tasks', { type: 'mooring', ta, tb });

    return dockings.map ( d => ({ 
        vessel:         this->super->super->rsrc;
        port:           this->super->rsrc;
        berth:          this->rsrc;

        next_call:      this->super->next();
        eta:            this->super->ETA;
        ata:            moorings.find (m => m->super === d.super);

        etb:            d.ets;
        atb:            d.ats;
        
        atd:            d.atf;
        etd:            d.etf;
    }) );
} 




//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
Charter(navio) 
    Voyages(port_1, ETA)  
        Mooring(fence(port_1)),
        Piloting(master_1),
        Docking(berth(port2))),
            Operation(load_1),    
            Operation(load_1),    
            Operation(load_1),  
            Operation(  ... ),  
            Operation(load_n),    
        Piloting(master_2),

    Voyages(port_2, ETA)  
        Mooring(fence(port_2)),
        Piloting(master_1),
        Docking(berth(port_2)),
            Operation(load_1),    
            Operation(load_1),    
            Operation(load_1),  
            Operation(  ... ),  
            Operation(load_n),    
        Piloting(master_2),

    Voyages(port..., ETA)  