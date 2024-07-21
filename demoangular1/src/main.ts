import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { TableComponent } from './app/table/table.component';
bootstrapApplication(TableComponent, appConfig)
  .catch((err) => console.error(err));
