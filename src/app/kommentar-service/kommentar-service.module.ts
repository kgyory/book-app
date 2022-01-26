import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KommentarComponent } from './ui/kommentar/kommentar.component';
import { KommentarBlockComponent } from './feature/kommentar-block/kommentar-block.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        KommentarComponent,
        KommentarBlockComponent
    ],
    imports: [
        CommonModule,
        SharedModule
    ],
    exports: [
        KommentarBlockComponent
    ]
})
export class KommentarServiceModule { }