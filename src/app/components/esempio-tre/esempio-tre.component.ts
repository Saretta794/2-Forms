import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-esempio-tre',
  templateUrl: './esempio-tre.component.html',
  styleUrl: './esempio-tre.component.scss'
})
export class EsempioTreComponent {

  inputType: 'text' | 'password' = 'password' //parametrizzo il valore di un attributo

  showHide(){
    this.inputType = this.inputType === 'text' ? 'password' : 'text'
  }

  //validator function è una funzione che prende in entrata un abstractControl, che non è altro che il formControl su cui agisce, e restituisce null (valore è valido) o validationError (valore non è valido --> mi torna unaa key che è di tipo stringa e il suo valore che è any)

  // cittaIsValid: ValidatorFn = (a: AbstractControl) => {return null} //validator function salvata in una variabile --> posso scriverla direttamente nel new form control, come sotto, e posso scrivere un oggetto che ne contieme molte
  citta = new FormControl("", 
  
  // (a: AbstractControl) => {return null}

  (a: AbstractControl) => {

    //scrittura che evita l'utilizzo di "or", ulteriori valori giusti basta che li inserisco nella costante "accepted"
    const value: string = a.value //specifico string perchè l'abstract control è any di base
    const accepted = ["roma","milano","napoli"] //potrei mettere direttamente l'array al posto di accepted nell'if
    if(accepted.includes(value.toLowerCase())){

      return null //OK

    }

    // KO (non ha senso mettere else perchè prima ho un return)

    return{ info: {
      msg: "Si accetta soltanto",
      accepted //equivalente  ascrivere accepted: accepted (lo faccio quando chiave e valore hanno lo stesso nome) --> capita molto spesso!

    }//posso scrivere qualsiasi cosa (invece che un unico messaggio/stringa)
    
    }

  }
  

) //Roma, Milano, Napoli

frm= new FormGroup({ // i valori dei due formControl devono coincidere --> l'uno non può accedere al valore dell'altro, dunque agisco con un validatore sul FormGroup, ovvero sul genitore --> ogni genitore ha controllo di validazione sui figli

  password: new FormControl(""),
  password_confirm: new FormControl("")

}, (a:AbstractControl) => {

  const p1 = a.get('password')!.value
  const p2 = a.get('password_confirm')!.value

  //OPERATORE TERNARIO = mi permette un codice più compatto ed elegante che mi permette di evitare uso if ed else

  return p1 == p2 ? null : {msg: "Le password non coincidono"}


})
  

}
