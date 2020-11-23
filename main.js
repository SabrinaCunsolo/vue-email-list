// Tramite l'API https://flynn.boolean.careers/exercises/api/random/mail generare una lista di 10 indirizzi email e stamparle in pagina con vue. Nome repo: vue-email-list

var app = new Vue ({
    el: '#root',
    data: {
        listaEmail: [],
        numeroMail: 10
    },

    mounted() {
        for (var i = 0; i < this.numeroMail; i++) {
            
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
                if (!this.listaEmail.includes(response.data.response)) {
                    this.listaEmail.push(response.data.response);
                } else {
                    i--;
                }
            });
        }
        // console.log(this.listaEmail);
    }

})
