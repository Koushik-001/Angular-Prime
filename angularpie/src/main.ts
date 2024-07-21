import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { PieComponent } from './app/pie/pie.component';

bootstrapApplication(PieComponent, appConfig)
  .catch((err) => console.error(err));
