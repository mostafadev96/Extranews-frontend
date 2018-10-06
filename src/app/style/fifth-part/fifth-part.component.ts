import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fifth-part',
  templateUrl: './fifth-part.component.html',
  styleUrls: ['./fifth-part.component.css']
})
export class FifthPartComponent implements OnInit {
  featured = [
    {
      title : 'Egypt\'s Sisi: Defaming security forces is \'high treason\'',
      description : 'DALIAAAA Blandit rutrum, erat et egestas ultricies,' +
      ' dolor tortor egestas enim, quiste rhoncus sem purus eu sapien. Curabitur a orci nec ' +
      'risus lacinia vehic. Lorem ipsum dolor adipcising elit. Erat egestan sagittis lorem aupo ' +
      'dolor sit ameta, auctor libero tempor Lebrons Cleveland  Cavaiers Fire Coach Midseason Lebrons ' +
      'Cleveland  Cavaiers Fire Coach Midseason',
      photo: 'assets/images/small.jpg',
      author : 'amruismaiil',
      since : '25 min',
      link : '#',
    },
    {
      title : 'Egypt\'s Sisi: Defaming security forces is \'high treason\'',
      description : 'DALIAAAA Blandit rutrum, erat et egestas ultricies,' +
      ' dolor tortor egestas enim, quiste rhoncus sem purus eu sapien. Curabitur a orci nec ' +
      'risus lacinia vehic. Lorem ipsum dolor adipcising elit. Erat egestan sagittis lorem aupo ' +
      'dolor sit ameta, auctor libero tempor Lebrons Cleveland  Cavaiers Fire Coach Midseason Lebrons ' +
      'Cleveland  Cavaiers Fire Coach Midseason',
      photo: 'assets/images/small.jpg',
      author : 'amruismaiil',
      since : '25 min',
      link : '#',
    },
    {
      title : 'Egypt\'s Sisi: Defaming security forces is \'high treason\'',
      description : 'DALIAAAA Blandit rutrum, erat et egestas ultricies,' +
      ' dolor tortor egestas enim, quiste rhoncus sem purus eu sapien. Curabitur a orci nec ' +
      'risus lacinia vehic. Lorem ipsum dolor adipcising elit. Erat egestan sagittis lorem aupo ' +
      'dolor sit ameta, auctor libero tempor Lebrons Cleveland  Cavaiers Fire Coach Midseason Lebrons ' +
      'Cleveland  Cavaiers Fire Coach Midseason',
      photo: 'assets/images/small.jpg',
      author : 'amruismaiil',
      since : '25 min',
      link : '#',
    },
    {
      title : 'Egypt\'s Sisi: Defaming security forces is \'high treason\'',
      description : 'DALIAAAA Blandit rutrum, erat et egestas ultricies,' +
      ' dolor tortor egestas enim, quiste rhoncus sem purus eu sapien. Curabitur a orci nec ' +
      'risus lacinia vehic. Lorem ipsum dolor adipcising elit. Erat egestan sagittis lorem aupo ' +
      'dolor sit ameta, auctor libero tempor Lebrons Cleveland  Cavaiers Fire Coach Midseason Lebrons ' +
      'Cleveland  Cavaiers Fire Coach Midseason',
      photo: 'assets/images/small.jpg',
      author : 'amruismaiil',
      since : '25 min',
      link : '#',
    },
  ];
  constructor() { }

  ngOnInit() {
  }

  loadmore() {
    this.featured.push({
      title : 'Egypt\'s Sisi: Defaming security forces is \'high treason\'',
      description : 'DALIAAAA Blandit rutrum, erat et egestas ultricies,' +
      ' dolor tortor egestas enim, quiste rhoncus sem purus eu sapien. Curabitur a orci nec ' +
      'risus lacinia vehic. Lorem ipsum dolor adipcising elit. Erat egestan sagittis lorem aupo ' +
      'dolor sit ameta, auctor libero tempor Lebrons Cleveland  Cavaiers Fire Coach Midseason Lebrons ' +
      'Cleveland  Cavaiers Fire Coach Midseason',
      photo: 'assets/images/small.jpg',
      author : 'amruismaiil',
      since : '25 min',
      link : '#',
    });
    this.featured.push({
      title : 'Egypt\'s Sisi: Defaming security forces is \'high treason\'',
      description : 'DALIAAAA Blandit rutrum, erat et egestas ultricies,' +
      ' dolor tortor egestas enim, quiste rhoncus sem purus eu sapien. Curabitur a orci nec ' +
      'risus lacinia vehic. Lorem ipsum dolor adipcising elit. Erat egestan sagittis lorem aupo ' +
      'dolor sit ameta, auctor libero tempor Lebrons Cleveland  Cavaiers Fire Coach Midseason Lebrons ' +
      'Cleveland  Cavaiers Fire Coach Midseason',
      photo: 'assets/images/small.jpg',
      author : 'amruismaiil',
      since : '25 min',
      link : '#',
    });
  }
}
