import { Component, OnInit } from '@angular/core';
import {Storage, ref, uploadBytes, listAll, getDownloadURL} from '@angular/fire/storage'

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.css']
})
export class PrivateComponent implements OnInit {

  pdf : string[];

  constructor(private storage: Storage) {
    this.pdf = [];
   }


  ngOnInit(): void {
    this.getpdf();
  }


  cargarpdf($event:any){

   const archivos = $event.target.files[0]
   console.log(archivos);

   const imgRef =ref(this.storage, `PDF/${archivos.name}`)

   uploadBytes(imgRef, archivos)
   .then(response => {console.log(response)
   this.getpdf()
  })
   .catch(error => console.log(error));
  }

   getpdf(){
    const pdfref = ref(this.storage, 'PDF')

    listAll(pdfref)
    .then(async response =>{
      console.log(response);
      this.pdf = [];
      for(let item of response.items){
        const url = await getDownloadURL(item);
        this.pdf.push(url);
      }
    })
    .catch(error => console.log(error))
   }




}
