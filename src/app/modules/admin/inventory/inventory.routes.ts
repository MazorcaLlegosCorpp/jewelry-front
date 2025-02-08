import { Routes } from '@angular/router';
import { NotesListComponent } from 'app/modules/admin/inventory/list/list.component';
import { NotesComponent } from 'app/modules/admin/inventory/inventory.component';

export default [
    {
        path     : '',
        component: NotesComponent,
        children : [
            {
                path     : '',
                component: NotesListComponent,
            },
        ],
    },
] as Routes;
