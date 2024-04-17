import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-esempio-due',
  templateUrl: './esempio-due.component.html',
  styleUrl: './esempio-due.component.scss'
})
export class EsempioDueComponent {

  persona = new FormGroup({

    nome: new FormControl("", Validators.required), //qui *
    cognome:new FormControl("", Validators.minLength(2)),
   
  })


  anagrafica = new FormGroup({

    nome: new FormControl("", Validators.required), 
    cognome:new FormControl("", [Validators.required,Validators.minLength(2)]),
    //ANNIDAMENTO **
    indirizzo: new FormGroup({
      via: new FormControl("",Validators.required),
      civico: new FormControl <number | null> (null) //ritorna null se faccio console.log --> undefined esiste solo in JS --> null != undefined --> partiamo dalla base secondo cui se istanzio una variabile il suo valore è il valore datole, altrimenti il suo valore è null --> è utile undefined perchè in Java, per esempio, non posso sapere se una variabile è null perche non è stata istanziata o perchè è stata istanziata e distrutta, mentre undefined mi permette di conferire uno stato in più alla variabile, ovvero "undefined" quando non è mai stata istanziata, "null" quando non ha un valore successivamente ad un istanziamento
    })
  })

  //UTILIZZO DEL FORM BUILDER
  //--------
  // constructor(private fb: FormBuilder){

  //   const campoNumeroDiTelefono = this.fb.control("") //=> new Formcontrol("")

  // }

  ngOnInit(){

    this.persona.get('nome')?.setValue("ciao") //con questa dicitura sono arrivato qui * (se faccio setValue scrivo nell'input) --> nb il metodo get mi torna un AbstractControl + il ? significa "se arrivi ad un form control che si chiama nome allora setta il suo valore su... altrimenti non eseguire quello che viene dopo", se metto ! è perchè quell'input deve esistere e se non lo trova Angular mi da un errore (si preferisce)
    //RICORDA: il setValue mi serve per modificare dati già esistenti e può essere applicato anche ai form group (vedi di seguito)

    setTimeout(() => {
      //this.persona.setValue({nome:"ivano", cognome:"di gese"})
      //OPPURE USO PatchValue se voglio fare il setValue di un sottoinsieme del formGroup e non di tutto il formGroup
      this.persona.patchValue({cognome: "rossi"})

    }, 2000)

    this.anagrafica.get('indirizzo')?.get('civico')?.value
  }

  inviaNomeCognome(){
    console.log(this.persona.value); //NB vedo il valore di tutti i campi appartenenti al formGroup persona + formGroup ha gli stessi metodi del formControl, questo perchè entrambi sono figli della classe abstractControl (posso dire anche che sono definiti da questa classe) --> quando due classi sono figlie della stessa superclasse ne ereditano i metodi --> mi serve sapere della classe AbstractControl perchè nel codice posso ritrovarmi una risposta di quel tipo --> AbstractControl è una classe astratta = rispetto alla classe "normale" rappresenta un concetto così astratto che non si può istanziare --> esempio vita reale: veicolo = modellazione di un oggetto atto a muoversi, ma rimane un concetto astratto perchè non esiste un veicolo in quanto tale --> dato che i formGroup si possono annidare --> a fronte di una chiave di un from group non è detto che io mi trovi un form control, ma posso trovarmi un form group = motivo per il quale esiste l'abstractControl --> nb l'annidamento mi permette di modulare i dati come vuole che glieli mando il BE e di individuare errori da mostrare all'utente in un dato punto del form (ANNIDAMETO **)
  }

  inviaAnagrafica(){

    // console.log(this.anagrafica.value)

    if(this.anagrafica.invalid){

      this.anagrafica.markAllAsTouched() //markAsTuched = rende tutti i formControlTuched quando clicco su invio anche se non ci sono mai entrato realmente

      return

      //..backend
    }

  }

  compilaFormGroup(){

    this.anagrafica.setValue({
      nome: "Ivano",
      cognome: "Di Gese",
      indirizzo:{
        via:"Via Solari",
        civico: 100
      }

    })

  }

  compilaIndirizzo(){
    // 1 modo
    // this.anagrafica.patchValue({
    //   indirizzo:{via: "via sconosciuta!"}
    // })

    // 2 modo (simile)

    this.anagrafica.get('indirizzo')?.setValue({
      via:"via del corso",
      civico:42
    })
  }

  //GETTER del campo "nome" --> dovrò reiterare il get per ogni campo --> unico vantaggio rispetto alla versione in cui scrivo tutto nell'html è che in questo modo quest'ultimo rimane più pulito
  //1. versione "standard"
  //getNome(){ return this.anagrafica.get("nome")!} //ho un metodo (che richiamo nell'html)

  //2. versione "typescript"
  get frmNome(){ return this.anagrafica.get("nome")!} //ho una proprietà (che richiamo nell'html) --> si usa nei form array

  //questa versione va bene per tutti i campi
  getCampo(campo:string){
    return this.anagrafica.get(campo)!
  }


}
