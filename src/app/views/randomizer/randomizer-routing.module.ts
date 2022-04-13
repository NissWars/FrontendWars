import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RandomizerComponent } from './randomizer.component';

const routes: Routes = [
  {path: '',
  component: RandomizerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RandomizerRoutingModule { }
