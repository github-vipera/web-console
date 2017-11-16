import { Component } from '@angular/core';
import { PluginView } from 'web-admin-core';

@Component({
  selector: 'user-page',
  templateUrl: './user.component.html'
})
@PluginView("myPlugin")
export class UserComponent {
  title = 'app';
}
