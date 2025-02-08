import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { ProfileComponent } from 'app/modules/admin/profile/profile.component';
import { ProjectService } from 'app/modules/admin/profile/profile.service';

export default [
    {
        path     : '',
        component: ProfileComponent,
        resolve  : {
            data: () => inject(ProjectService).getData(),
        },
    },
] as Routes;
