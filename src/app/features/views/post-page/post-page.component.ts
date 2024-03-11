import { Component } from '@angular/core';
import { HeaderComponent } from '../../../core/components/header/header.component';

@Component({
  selector: 'app-post-page',
  standalone: true,
  imports: [
    HeaderComponent
  ],
  templateUrl: './post-page.component.html',
  styleUrl: './post-page.component.scss'
})
export class PostPageComponent {

}
