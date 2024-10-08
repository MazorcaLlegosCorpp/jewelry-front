import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { MyOrdersComponent } from 'app/modules/admin/my-orders/my-orders.component';
import { MyOrdersService } from 'app/modules/admin/my-orders/my-orders.service';

export default [
    {
        path     : '',
        component: MyOrdersComponent,
        resolve  : {
            data: () => inject(MyOrdersService).getData(),
        },
    },
] as Routes;
