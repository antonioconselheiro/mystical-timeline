import { Routes } from '@angular/router';
import { TimelinesPage } from './pages/timelines-page/timelines-page';

export const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'timelines'
	},
	{
		path: 'timelines',
		component: TimelinesPage
	}
];
