import { NgModule } from '@angular/core';
import { TestComponent } from './index';

@NgModule({
    declarations: [
        TestComponent
    ],
    exports: [
        TestComponent
    ]
})
export class TestModule {
}
