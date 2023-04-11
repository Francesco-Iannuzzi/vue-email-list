/*

Descrizione:
Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

Bonus
- Far comparire gli indirizzi email solamente quando sono stati tutti generati.

*/

const { createApp } = Vue

 createApp({
   data() {
     return {
       url: "https://flynn.boolean.careers/exercises/api/random/mail",
       email: null,
     }
   },
   mounted(){
    // console.log(axios);
    // console.log(axios.get(this.url));
    axios.get(this.url)
    .then(response => {
        this.email = response.data.response;
        console.log(this.email);
    })
   }
}).mount('#app')