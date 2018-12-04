import { NgModule } from '@angular/core';

import { TreeModule } from 'angular-tree-component';
import { ToasterModule } from 'angular2-toaster';
import { ThemeModule } from '../../@theme/theme.module';
import { ExtraComponentsRoutingModule } from './extra-components-routing.module';
import { ExtraComponentsComponent } from './extra-components.component';

// service
import { NewsService } from './services/news.service';

const COMPONENTS = [
  ExtraComponentsComponent,
];

const SERVICES = [
  NewsService,
];

const MODULES = [
  ThemeModule,
  ExtraComponentsRoutingModule,
  TreeModule,
  ToasterModule.forRoot(),
];

@NgModule({
  imports: [
    ...MODULES,
  ],
  declarations: [
    ...COMPONENTS,
  ],
  providers: [
    ...SERVICES,
  ],
})
export class ExtraComponentsModule { }
