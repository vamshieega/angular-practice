import { Component, OnInit } from '@angular/core';
import { from, fromEvent } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-practise';

  ngOnInit(): void {

  }


  async downloadImage(imageSrc: any, nameOfDownload: string) {
    console.log(imageSrc);
    console.log(imageSrc.length);
    console.log(typeof (imageSrc));

    const response = await fetch(imageSrc);
    console.log(response)
    const blobImage = await response.blob();
    const href = URL.createObjectURL(blobImage);
    const anchorElement = document.createElement('a');
    anchorElement.href = href;
    anchorElement.download = nameOfDownload;
    document.body.appendChild(anchorElement);
    anchorElement.click();
    document.body.removeChild(anchorElement);
    window.URL.revokeObjectURL(href);
  }

  imageDownload(url: string) {
    this.downloadImage(url, "fileName",).then(() => {
      console.log('The image has been downloaded');
    }).catch(err => {
      console.log('Error downloading image: ', err);
    });

  }
}
