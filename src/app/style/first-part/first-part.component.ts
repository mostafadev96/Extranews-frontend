import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-part',
  templateUrl: './first-part.component.html',
  styleUrls: ['./first-part.component.css']
})
export class FirstPartComponent implements OnInit {
  config: any = {
    spaceBetween: 100,
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    loop: true,
  };
  todayPost = {
    day : 3,
    month : "MARCH",
    year : "2018",
    type : "style",
    slides : [
      {
        title : "Egypt's Sisi: Defaming security forces is 'high reason'",
        description : "Egypt's President Abdel Fattah el-Sisi warned on Thursday he considers" +
        " defamation of the country's armed forces and police an act of 'high treason'" +
        " that wouldn't be tolerated. In televised comments during a visit to the Mediterranean" +
        " coastal town of Alamein, he reminded viewers of the hundreds of soldiers ..."
      },
      {
        title : "Egypt's Sisi: Defaming security forces is 'high reason'",
        description : "Egypt's President Abdel Fattah el-Sisi warned on Thursday he considers" +
        " defamation of the country's armed forces and police an act of 'high treason'" +
        " that wouldn't be tolerated. In televised comments during a visit to the Mediterranean" +
        " coastal town of Alamein, he reminded viewers of the hundreds of soldiers ..."
      },
      {
        title : "Egypt's Sisi: Defaming security forces is 'high reason'",
        description : "Egypt's President Abdel Fattah el-Sisi warned on Thursday he considers" +
        " defamation of the country's armed forces and police an act of 'high treason'" +
        " that wouldn't be tolerated. In televised comments during a visit to the Mediterranean" +
        " coastal town of Alamein, he reminded viewers of the hundreds of soldiers ..."
      }
    ]
  };
  constructor() { }

  ngOnInit() {
  }

}
