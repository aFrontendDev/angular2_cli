import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CompletedFilterPipe, AboutComponent } from './index';

@NgModule({
    declarations: [
        CompletedFilterPipe,
        AboutComponent
    ],
    imports: [
        FormsModule,
        BrowserModule
    ],
    exports: [
        CompletedFilterPipe,
        AboutComponent
    ]
})
export class AboutModule {
}
