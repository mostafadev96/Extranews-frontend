import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {ArticleService} from '../../Services/article.service';
import {Post} from '../../Model/Post';

@Component({
  selector: 'app-art-culture',
  templateUrl: './art-culture.component.html',
  styleUrls: ['./art-culture.component.css']
})
export class ArtCultureComponent implements OnInit {
  sub: Subscription;
  post: Post;
  constructor(private route: ActivatedRoute, private router: Router, private aService: ArticleService) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.aService.findPost(id).subscribe(data => {
          if (data.found) {
            this.post = data.post;
          } else {
            this.router.navigate(['/notfound']);
          }
        });
      }
    });
  }

}
