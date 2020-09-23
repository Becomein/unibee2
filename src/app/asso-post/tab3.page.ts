import { ModalPage } from './../modal/modal.page';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Observable, from } from 'rxjs';
import { ImageCroppedEvent, ImageCropperComponent, ImageTransform } from 'ngx-image-cropper';
import { Crop } from '@ionic-native/crop/ngx';
import { AngularFireStorage } from '@angular/fire/storage';
import { LoadingController, AlertController, ToastController } from '@ionic/angular';
// Pass data between pages
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router'
import { AngularFirestore } from '@angular/fire/firestore';
import { firestore } from 'firebase';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  imagePath: string;
  imageUrl: string;
  upload: any;
  URL

  constructor(public loadingController: LoadingController,
    public alertController: AlertController,
    public afSG: AngularFireStorage,
    public afAuth: AngularFireAuth,
    private Afs: AngularFirestore,
    private camera: Camera,
    private crop: Crop,
    public router: Router,
    private modalController: ModalController,
    private route: ActivatedRoute,
    public toastController: ToastController,
   ) {
    


  }


  dataEvent = {
    titre: '',
    description: '',
    deadline: '',
    maxgens:'',
    photocrop:'',
    date: '',
    heureD:new Date(),
    heureF:new Date(),
    photo:'',
    geolat: '',
    geolng:''
  }

    // async car temps de choisir photo non limité
    async addPhoto(source: string) {  
      console.log('library');
      //stocke image selectionné dans libraryImage
      const libraryImage = await this.openLibrary();
  }
  //ionic existing fonction ouvre la librarie
  async openLibrary() {
    const options: CameraOptions = {
      quality: 100,
      correctOrientation:true,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      targetWidth: 1000,
      targetHeight: 1000,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    };
    return await this.camera.getPicture(options).then((ImageData)=>{
      this.dataEvent.photo = 'data:image/jpg;base64,' + ImageData;
        this.GoandPass();
    })
  }

  getGallery(){
    this.camera.getPicture({
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      // data url convert url into text
      destinationType: this.camera.DestinationType.DATA_URL,
      
    }).then((res) =>{
      console.log('res')
      this.URL ='data:image/jpg;base64,'+ res;
    }).catch(e => {
      console.log(e);
    })
  }



  Post() {
    
   if(!this.dataEvent.titre){this.presentAlert('Entrez un titre')}
   else{
      let verif = this.dataEvent.photocrop.slice(0,4)
  
      // si logochangé, logocrop est en base 64 
      if (verif == 'data' ){
  
    
        this.uploadFirebase();
      }
      else{
        this.imageUrl = this.dataEvent.photocrop;
        this.uploadFirestore();
      }
    }
    
  }


  uploadFirestore() {
    // see assoedit upload firestore to use old picture
 
    let currentDate = new Date().getTime();
    let start = this.dataEvent.heureD.getTime();
    let end = this.dataEvent.heureF.getTime();
    this.Afs.collection("publicevents").doc().set({
      
      titre: this.dataEvent.titre,
      description: this.dataEvent.description, 
      deadline: this.dataEvent.deadline,
      geolat: this.dataEvent.geolat,
      geolng: this.dataEvent.geolng,
      maxgens: this.dataEvent.maxgens,
      photo: this.dataEvent.photocrop,
     date: this.dataEvent.date,

     starthour: start,
     endhour: end
    }, { merge: true })
      .then(function () {
        console.log("Document successfully written!");
        
      })
      .catch(function (error) {
        console.error("Error writing document: ", error);
      });
      this.router.navigate(['/tabs/tab5']);
  }


// go to other page and pass dataUser
GoandPass(){
  let navigationExtras: NavigationExtras ={
    state: {
      dataEvent: this.dataEvent
    }
  }
  this.router.navigate(['croplogopost'], navigationExtras);
 }

 // go to other page and pass dataUser
GoMap(){
  let navigationExtras: NavigationExtras ={
    state: {
      dataEvent: this.dataEvent
    }
  }
  this.router.navigate(['asso-map'], navigationExtras);
 }
 
// receptionner dataUser
 recepData() {
  console.log('recepdataUser')
  this.route.queryParams.subscribe(params => {
    console.log('params:', params);
    if (this.router.getCurrentNavigation().extras.state) {
      this.dataEvent= this.router.getCurrentNavigation().extras.state.dataEvent;
      console.log(this.dataEvent)
    }
  })
}

ionViewWillEnter(){
  
  this.recepData();
}
ngOnInit(){
  
  this.recepData();
}

uploadFirebase() {
  let currentDate = new Date().getTime();
  
  this.afSG.ref(this.imagePath).putString(this.dataEvent.photocrop, 'data_url');
  this.upload = this.afSG.ref(this.imagePath).putString(this.dataEvent.photocrop, 'data_url');
  this.upload.then(async () => {
    //get download Url
    this.afSG.ref(this.imagePath).getDownloadURL().subscribe(imgUrl => {
      console.log('down   ' + imgUrl);
      this.dataEvent.photocrop = imgUrl;
      this.uploadFirestore();
    });

  
  });
}

async chooseDate(){
  const alert = await this.modalController.create({
    component: ModalPage,
    cssClass: 'ion-modal ionbg'
  });

 return await alert.present();
}

async presentAlert(message) {
  const alert = await this.alertController.create({
    
    message: message,
    buttons: ['OK']
  });

  await alert.present();
}

}
