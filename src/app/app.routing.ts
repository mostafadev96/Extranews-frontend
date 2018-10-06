import {RouterModule, Routes} from '@angular/router';
import {ErrorrsComponent} from './errorrs/errorrs.component';
import {ArtHomeLayoutComponent} from './art-home-layout/art-home-layout.component';
import {HomeComponent} from './Home/home/home.component';
import {SearchResultComponent} from './search-result/search-result.component';
import {InternalPostComponent} from './internal-post/internal-post.component';
import {NotfoundComponent} from './notfound/notfound.component';
import {ServeErrorComponent} from './serve-error/serve-error.component';
import {StyleComponent} from './style/style.component';
import {WomenComponent} from './women/women.component';
import {CultureComponent} from './culture/culture.component';
import {GroomingComponent} from './grooming/grooming.component';
import {EntertainmentComponent} from './entertainment/entertainment.component';
import {VideosComponent} from './videos/videos.component';

const appRoutes: Routes = [
  {
    path: '',
    component: ArtHomeLayoutComponent,
    children: [
      { path: '', component: HomeComponent},
      { path: 'home', redirectTo: '', pathMatch: 'full' },
      // { path: 'style/:id', component: StyleComponent},
      // { path: 'women/:id', component: WomenComponent},
      // { path: 'culture/:id', component: CultureComponent},
      // { path: 'grooming/:id', component: GroomingComponent},
      // { path: 'entertainment/:id', component: EntertainmentComponent},
      // { path: 'videos/:id', component: VideosComponent},
    ]
  },
  {
    path: '',
    component: ErrorrsComponent,
    children: [
      { path: 'notfound', component: NotfoundComponent },
      { path: 'error', component: ServeErrorComponent }
    ]
  },
  {
    path: '',
    component: SearchResultComponent,
    children: [
      // { path: '', component: SearchC, pathMatch: 'full'},
    ]
  },
  {
    path: '',
    component: InternalPostComponent,
    children: [
      { path: 'style', component: StyleComponent},
      { path: 'women', component: WomenComponent},
      { path: 'culture', component: CultureComponent},
      { path: 'grooming', component: GroomingComponent},
      { path: 'entertainment', component: EntertainmentComponent},
      { path: 'videos', component: VideosComponent},
    ]
  },
  { path: '**', redirectTo: 'notfound', pathMatch: 'full' },


];
export const routing = RouterModule.forRoot(appRoutes);
