import { HttpClientXsrfModule } from '@angular/common/http'
import { NgModule } from '@angular/core'

@NgModule({
  declarations: [],
  imports: [
    HttpClientXsrfModule.withOptions({
      cookieName: 'My-Xsrf-Cookie',
      headerName: 'My-Xsrf-Header',
    }),
  ],
  exports: [],
})
export class GnApiModule {}
