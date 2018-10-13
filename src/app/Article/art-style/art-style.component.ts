import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-art-style',
  templateUrl: './art-style.component.html',
  styleUrls: ['./art-style.component.css']
})
export class ArtStyleComponent implements OnInit {
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
  constructor() { }

  ngOnInit() {
  }

}
