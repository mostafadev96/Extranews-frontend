import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-art-culture',
  templateUrl: './art-culture.component.html',
  styleUrls: ['./art-culture.component.css']
})
export class ArtCultureComponent implements OnInit {
  sub: Subscription;
  post = {
    title : "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    author : "AMRUISMAIIL",
    author_photo : "assets/images/profile.jpg",
    video : "#",
    photo : "assets/images/profile.jpg",
    since : "25MIN",
    description : [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy " +
    "text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not " +
    "only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in " +
    "the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing" +
    " software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and " +
    "typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer" +
    " took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also " +
    "the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release " +
    "of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus" +
      " PageMaker including versions of Lorem Ipsum",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard " +
      "dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen " +
      "book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially " +
      "unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more " +
      "recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply " +
      "dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since " +
      "the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived " +
      "not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was " +
      "popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum" +
      " passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    ]
  };
  video = {
    id: 0,
    photo: 'assets/images/video.jpg',
    title: "Egypt's Sisi: Defaming security forces is 'high treason'",
    link: "#",
    since : "25 min",
    duration : "03:45"
  };
  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    // this.sub = this.route.params.subscribe(params => {
    //   const id = params['id'];
    //   if (id) {
    //     this.carService.get(id).subscribe((car: any) => {
    //       if (car) {
    //         this.car = car;
    //         this.car.href = this.carService.API + '/' + id;
    //         this.giphyService.get(car.name).subscribe(url => this.car.giphyUrl = url);
    //       } else {
    //         console.log(`Car with id '${id}' not found, returning to list`);
    //         this.gotoList();
    //       }
    //     });
    //   }
    // });
  }

}
