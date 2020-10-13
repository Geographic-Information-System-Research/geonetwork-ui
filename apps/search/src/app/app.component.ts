import { Component } from '@angular/core'
import { MeApiService } from '@lib/gn-api'
import { ColorService } from '../../../../libs/common/src/lib/color.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'search'

  constructor(private meService: MeApiService) {
    this.meService.getMe().subscribe()
    ColorService.applyCssVariables('#e73f51', '#c2e9dc', '#212029', '#fdfbff')
  }
}
