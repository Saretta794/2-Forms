import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-esempio-quattro',
  templateUrl: './esempio-quattro.component.html',
  styleUrl: './esempio-quattro.component.scss'
})
export class EsempioQuattroComponent {

  indirizzi_email = new FormArray<FormControl>([])

  frm = new FormGroup({
    nome: new FormControl(""),
    cognome: new FormControl(""),
    indirizzi: new FormArray([

    ])
  })

  //METODO CHE CREA UN FORMGROUP E LO RESTITUISCE

  creaIndirizzo(){

    const f = new FormGroup({
      via: new FormControl(""),
      civico: new FormControl(""),
      cap: new FormControl("")
    })

    return f
  }

  get indirizzi(){return this.frm.get("indirizzi") as FormArray} //una volta reso cast lo rendo proprietà così da facilitarne l'utilizzo successivo

  get indirizziControls(){return this.indirizzi.controls as FormGroup[]} //posso anche scriverl direttamente nell'html (indirizzi.controls) --- as FormGroup = sto dicendo ad angular che in quell'array tutti i controlli sono dei formGroup

  ngOnInit(){

    this.aggiungiIndirizzo(); 

    //this.indirizzi.push(this.creaIndirizzo()) //se duplico questa riga si duplica l'html --> lo salvo in un metodo e lo inserisco in ngOnInit come tale, poi lo riutilizzo nel click del bottone che mi permette la duplicazione dall'interfaccia
    
    //(this.frm.get("indirizzi") as FormArray)// *  

    // * non mi fa fare push (subito dopo le tonde) perchè la get mi restituisce un abstract control --> come faccio a dire ad angular che quella chiave del formGroup contiene sicuramete un formArray? ci sono diversi modi, il più veloce è il cast --> CAST = "prendere un oggetto di un certo tipo e trattarlo con un altro tipo" --> in questo caso prendo l'abstract control e dico ad angular che lo tratto come un FormArray perchè so che lo è! --> altro esempio: prendo un tre stringa e lo casto come numero, ovvero lo tratto come numero --> nb il cat deve essere lecito, ovvero i due tipi devono essere compatibili --> concetto collegato a quello del POLIMORFISMO, che fa parte della programmazione ad oggetti --> ESEMPIO

    //CONCETTO DI POLIMORFISMO
    // export class Mammifero{}
    // export class Cane extends Mammifero{}
    // export class Delfino extends Mammifero{}
    // const cane : Cane = new Cane()
    // const mam : Mammifero = new Mammifero()
    // let cane2 : Mammifero = new Cane()
    // cane2 = new Delfino()
  }

  aggiungiIndirizzo() {
    this.indirizzi.push(this.creaIndirizzo());
  }

  aggiungiEmail(){
    this.indirizzi_email.push(new FormControl("", Validators.email))
  }

  eliminaEmail(posizione:number){
    this.indirizzi_email.removeAt(posizione) //in JS non esiste removeAt, ho splice(posizione, quanti elementi eliminare)
  }

  eliminaTutteEmail(){
    this.indirizzi_email.clear()
  }

  //SPOSTARE GLI ELEMENTI

  su(posizione:number){

    if(posizione === 0){

      throw new Error ("Non puoi spastare su il primo elemento!")
    }

    // const daSpostare = this.indirizzi_email.at(posizione)
    this.indirizzi_email.insert(posizione - 1, this.indirizzi_email.at(posizione))
    this.indirizzi_email.removeAt(posizione + 1)

  }

  giu(posizione:number){

    if(posizione === this.indirizzi_email.length - 1){

      throw new Error ("Non puoi spostare giù l'ultimo elemento!")
    }

    const successore = this.indirizzi_email.at(posizione + 1)
    this.indirizzi_email.removeAt(posizione + 1)
    this.indirizzi_email.insert(posizione, successore)

  }

}


