import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { InventoryService } from 'app/modules/admin/inventory/inventory.service';
import { InventoryComponent } from 'app/modules/admin/inventory/inventory.component';

export default [
    {
        path     : '',
        component: InventoryComponent,
        children : [
            {
                path     : '',
                component: InventoryComponent,
                resolve  : {
                    products  : () => inject(InventoryService).getProducts(),
                },
            },
        ],
    },
] as Routes;
