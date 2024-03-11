import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
<<<<<<< HEAD
import { HeaderComponent } from './core/components/header/header.component';
=======
>>>>>>> 557b68b8445d2fe3d769a703d636e85a1142bd7a

@Component({
  selector: 'app-root',
  standalone: true,
<<<<<<< HEAD
  imports: [
    HeaderComponent,
    
    CommonModule,
    RouterOutlet
  ],
=======
  imports: [CommonModule, RouterOutlet],
>>>>>>> 557b68b8445d2fe3d769a703d636e85a1142bd7a
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-blog';
}
