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
            emailList: [],
        }
    },
    methods: {
        generateRandomEmail(){
            for (let i = 0; i < 10; i++) {
                axios
                .get(this.url)
                .then(response => {
                    this.emailList.push(response.data.response);
                })
    
            }
        }
    },
    mounted() {
        this.generateRandomEmail()
    }
}).mount('#app')
