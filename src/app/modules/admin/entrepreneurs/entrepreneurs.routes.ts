import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { EntrepreneursComponent } from 'app/modules/admin/entrepreneurs/entrepreneurs.component';
import { EntrepreneurService } from './entrepreneurs.service';

export default [
    {
        path     : '',
        component: EntrepreneursComponent,
        children : [
            {
                path     : '',
                component: EntrepreneursComponent,
                resolve  : {
                    products  : () => inject(EntrepreneurService).getEntrepreneurs(),
                },
            },
        ],
    },
] as Routes;
