import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { AccountRoutingModule, routedComponents } from './account-routing.module';
import { ButtonsModule } from '../bootstrap/buttons/buttons.module';

// smart table
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { SmartTableService } from '../../@core/data/smart-table.service';

@NgModule({
  imports: [
    ThemeModule,
    AccountRoutingModule,
    ButtonsModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    ...routedComponents,
  ],
  providers: [
    SmartTableService,
  ],
})

export class AccountModule { }
