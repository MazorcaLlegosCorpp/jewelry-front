import { Injectable } from '@angular/core';
import { FuseMockApiService } from '@fuse/lib/mock-api';
import { project as projectData } from 'app/mock-api/dashboards/project/data';
import { cloneDeep } from 'lodash-es';

@Injectable({providedIn: 'root'})
export class ProjectMockApi
{
    private _project: any = projectData;
    private _defaultNavigation: any = []
    private _compactNavigation:any = []

    /**
     * Constructor
     */
    constructor(private _fuseMockApiService: FuseMockApiService)
    {
        // Register Mock API handlers
        this.registerHandlers();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Register Mock API handlers
     */
    registerHandlers(): void
    {

        this._fuseMockApiService
            .onGet('api/dashboards/project')
            .reply(() => [200, cloneDeep(this._project)]);

        // Navigation - GET
        this._fuseMockApiService
            .onGet('api/navigation')
            .reply(() => {

            // Clone the data to preserve the originals
            const compactNavigation = cloneDeep(this._compactNavigation);
            const defaultNavigation = cloneDeep(this._defaultNavigation);

            // Do some stuff with your data

            // Return
            return [200, {
                compact: compactNavigation,
                default: defaultNavigation,
            }];
        })

    }
}
