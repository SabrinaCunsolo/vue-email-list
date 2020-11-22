// Tramite l'API https://flynn.boolean.careers/exercises/api/random/mail generare una lista di 10 indirizzi email e stamparle in pagina con vue. Nome repo: vue-email-list

var app = new Vue ({
    el: '#root',
    data: {
        listaEmail: []
    },

    mounted() {
        for (var i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
            this.listaEmail.push(response.data.response);
        });
        }
        // console.log(this.listaEmail);
    }

})
