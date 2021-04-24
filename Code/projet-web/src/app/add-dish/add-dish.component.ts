import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-dish',
  templateUrl: './add-dish.component.html',
  styleUrls: ['./add-dish.component.scss']
})
export class AddDishComponent implements OnInit {

  constructor() { }
  url!:string;
  ngOnInit(): void {
  }
  async Add(){
    //awel haja bech ne5dhou el values mtaa el inputs mteena lkol w nhotouhom fi des variables
    var nom = (<HTMLInputElement>document.getElementById("nom")).value
    var price = (<HTMLInputElement>document.getElementById("price")).value
    var type = (<HTMLInputElement>document.getElementById("type")).value
    var desc = (<HTMLInputElement>document.getElementById("desc")).value
    var body = `{"nom":"${nom}" , "type":"${type}" , "price":"${price}" , "desc":"${desc}" , "img":"${this.url}"}` //LEHNE hadharna el objet body eli bech nebaathouh fi requete el POST
    // BAATHNA el requete lena aal endpoint "/add"
    const rep = await fetch("http://127.0.0.1:8000/add" , {
      method:"POST" , 
      body : body
    })
    if (rep.ok){//traitement mtaa el reponse
      rep.json().then((data)=>{ // data bech ykouna fiha objet json fih el reponse
        console.log(data)
      })
    }

  }
  onSelectFile(event:any){
    console.log("here");//hedhi juste bech naarfou eli ahna fi west el fonction
    if (event.target.files && event.target.files[0]){//nthabtou ken aana al akal file wala lee
      var reader = new FileReader()// sna3na instance  men FileReader()  , FileReader howa class tajem takra bihom data mtaa ay file w thawlou l format URI
      reader.readAsDataURL(event.target.files[0])// hawlna el image mteena l format URI
      reader.onload = async (data) =>{//wakteli el reader ykamel bech yraj3lna el resultat fi `data`
        this.url = data.target?.result as string;//hnneee juste hawlna el data l string w hatineha fi variable gloable url
      }
    }
  }

}
