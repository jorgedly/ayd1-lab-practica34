import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';

const mods = [
    MatButtonModule,
    MatTabsModule,
    MatGridListModule,
    MatIconModule
]

@NgModule({
    imports: [
        ...mods
    ],
    exports: [
        ...mods
    ]
})
export class MaterialModule {

}