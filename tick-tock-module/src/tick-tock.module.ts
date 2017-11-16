import { NgModule } from '@angular/core';
import { TickTockComponent } from './components';
import { TickTockService } from './services';

@NgModule({
  providers: [
    TickTockService,
  ],
  declarations: [
    TickTockComponent,
  ],
  entryComponents: [
    TickTockComponent
  ],
  exports: [
    TickTockComponent,
  ]
})
export class TickTockModule {
}
