import { Component } from '@angular/core';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { File } from '@ionic-native/file/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  text:string = "this is my first shared";
  url:'https://ionicacademy.com';
  constructor(private shared:SocialSharing,
    private file:File){

  }

  sharedTwitter(){
    this.shared.shareViaTwitter(null,`https://i.ytimg.com/vi/jeq8DGH1CSU/maxresdefault.jpg`).then(()=>{
      console.log('voy por buen camino');
      
    }).catch(err=>{
      console.log('la jodi');
    })
  }
  async resolveLocalDirectory(){
    console.log('file at:' + this.file);
    
    return this.file.copyFile(`${this.file.applicationDirectory}assets/img`
    ,'kyoka.png',
     this.file.cacheDirectory,
     `${new Date().getTime()}.png`);  
  }
  removeTempFile(name){
    this.file.removeFile(this.file.cacheDirectory,name);
  }
  async sharedFacebook(){
    
    this.shared.shareViaFacebook(null,'https://i.ytimg.com/vi/jeq8DGH1CSU/maxresdefault.jpg',this.url ).then(()=>{
      console.log('voy por buen camino');
      
    }).catch(err=>{
      console.log('la jodi');
      
    })
    
  }
  async sharedEmail(){
    
    
    this.shared.shareViaEmail('this is my message','probe subject',['cacero95@gmail.com'], null,null,'https://i.ytimg.com/vi/jeq8DGH1CSU/maxresdefault.jpg').then(()=>{
    console.log('voy por buen camino');
    
    }).catch(err=>{
      console.log('la jodi');
      
    })
  }
  sharedWhatapp(){
    
    
    this.shared.shareViaWhatsApp(this.text,null,this.url).then(()=>{
    console.log('voy por buen camino');
    
    }).catch(err=>{
      console.log('la jodi');
      
    })
  }

}
