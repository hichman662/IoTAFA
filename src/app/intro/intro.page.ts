import { Component, OnInit ,ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';



@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {
  @ViewChild(IonSlides)slides: IonSlides;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  next() {
    this.slides.slideNext();
  }
 
  async start() {
    this.router.navigateByUrl('/', { replaceUrl:true });
  }

}
