import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {gameData} from '../../data/gameData'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  gamePhoto:string = ""
  gameName:string = ""
  gameDescription:string = ""
  gameSmallPhoto:string = ""
  gamePlayDescription:string = ""
  gamePlayPhoto:string = ""
  textColor:string = ""
  bgColor:string = ""
  gradientColor:string = ""
  imageSizeClass:string = ""
  finalImage:string = ""
  linkForDownload:string = ""

  private id:string | null = "0"

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
     this.id = value.get("id")
    )

    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null){
    const result = gameData.filter(article => article.id == id)[0]

    this.gamePhoto = result.gamePhoto
    this.gameName = result.gameName
    this.gameDescription = result.gameDescription
    this.gameSmallPhoto = result.gameSmallPhoto
    this.gamePlayDescription = result.gamePlayDescription
    this.gamePlayPhoto = result.gamePlayPhoto
    this.textColor = result.textColor
    this.bgColor = result.bgColor
    this.finalImage = result.finalImage
    this.imageSizeClass = result.imageSizeClass
    this.gradientColor = result.gradientColor
    this.linkForDownload = result.linkForDownload
  }

}
