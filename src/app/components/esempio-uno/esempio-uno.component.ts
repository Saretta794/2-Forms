import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-esempio-uno',
  templateUrl: './esempio-uno.component.html',
  styleUrl: './esempio-uno.component.scss'
})
export class EsempioUnoComponent {

  nome = new FormControl('')//nelle tonde metto valore di default + nb il FormControl è un oggetto che conta dei metodi
  nomeConValidatore = new FormControl('', [Validators.required, Validators.minLength(5)]) //secondo parametro:validatore che può essere anche una funzione + può essere asincrona, ovvero la logica di validazione è gestita dal BE --> es. controllo che un username non già in uso o una password non sia stata utilizzata dall'utente quando quasta deve essere cambiata + QUANDO HO PIù VALIDATORI UTILIZZO UN ARRAY DI VALIDATORI!! = L'INPUT SARà VALID QUANDO IL VALORE INSERITO SUPERERà TUTTI I VALIDATORI, ma quando è invalid come faccio a sapere quale validatore non ha superato il valore inserito? -->IN HTML nomeConValidatore HA CHIAVE ERRORS CHE CONTIENE UN OGGETTO CHE A SUA VOLTA CONTIENE TUTTI GLI ERRORI GENERATI DAL FALLIMENTO DELLA VALIDAZIONE || NULL SE NON CI SONO ERRORI --> {{nomeConValidatore.errors | json}} --> ricorda che in Angular posso creare dei validatori castom!! --- esiste un validatore specifico per l'email

  //^IT[ ]?\d{2}[ ]?[A-Z][ ]?\d{5}[ ]?\d{5}[ ]?[0-9A-Z]{12}$

  checkBoxCC = new FormControl<boolean>(false) //false = checbox di default è "spento"
  iban = new FormControl ('', Validators.pattern(/^IT[ ]?\d{2}[ ]?[A-Z][ ]?\d{5}[ ]?\d{5}[ ]?[0-9A-Z]{12}$/)) //posso salvare la regex in una variabile

  ngOnInit(){

    this.nome.valueChanges.subscribe(v => {console.log("Hai digitato: " + v )}) //il valueChanges è un observable che riemette il valore del form control ogni volta che cambia --> ad un observable devo sottoscrivermi --> in questo caso ha senso avere solo next, quindi un'unica arrow function --> "v" rappresenta il valore che ha assunto il form control (lo posso chiamare come voglio) --> nb "v" può essere una stringa, un boolean etc., dipende dal tipo di input --> se mi metto su "v" angular mi dice il tipo = lo sa grazie al valore di default impostato per il form control (vedi sopra righe 16 - 17), ma potrei mettere in generic sul form control per specificare (vedi riga 16) --> nb potrei specificare una serie di valori possibili per un dato input <'audi' | 'mercedes'> + il form controll può assumere il valore null (anche checkbox --> passa sopra v per vedere) perchè un campo potrebbe avere l'attributo "disabled" = al BE quel campo non arriva proprio = il campo assume valore "null" --> tutti i form control sono nullable, anche se esiste una tecnica avanzata grazie alla quale si può fare in modo che un form control non sia nullable
    // this.checkBoxCC.disable() //valore = null
    this.checkBoxCC.valueChanges.subscribe(v => {
      if(v === true){
        this.iban.enable();
        this.iban.addValidators([Validators.required,Validators.pattern(/^IT[ ]?\d{2}[ ]?[A-Z][ ]?\d{5}[ ]?\d{5}[ ]?[0-9A-Z]{12}$/)]);//NB devo mettere il required per un corretto funzionamento delll'input rispetto alla dinamicità + per rendere funzionante un addValidators devo anche inserire...
        this.iban.updateValueAndValidity() //...questo metodo che aggiorna il metodo e i sui valori
      }
      else{
        this.iban.disable();
        this.iban.removeValidators([Validators.required,Validators.pattern(/^IT[ ]?\d{2}[ ]?[A-Z][ ]?\d{5}[ ]?\d{5}[ ]?[0-9A-Z]{12}$/)]);
        this.iban.updateValueAndValidity();
      }
    })//condizione per rendere un input abilitato o meno in modo dinamico, in questo caso in base al check sul ckeboxCC --> nb è importante disattivare il validatore quando l'input è disabilitato!!
  }

  cambiaNome(){
    this.nome.setValue("Ivano") // Imposta il valore del formControl -- qui ho utilizzato un metodo --> nb il setValue mi serve per modificare qualcosa in un'applicazione web --> es = pagina di modifica dati precedentemente inviati e salvati nel server --> salvo un iban e successivamente lo cambio = l'utente vede lo stesso form, ma il controllo cambia perchè sta sovrascrivendo dati --> il setValue lo posso fare sul form control o sul form group
  }
  stampaValore(){
    const valore = this.nome.value; //qui ho utilizzato una proprietà --- accessibile sia dal controller che dalla view
    alert(`Hai inserito ${valore}`)
  }
}
