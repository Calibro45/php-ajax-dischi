
const app = new Vue ({
    el: '#app',

    data: {
        albums: [],
        generi: [],
        genere: '',
    },

    methods: {
        fetchAlbum: function() {

            axios.get('php/server.php')
            .then(resp => {
                
                this.albums = resp.data;
                this.getGeneri(resp.data);
            })
        },
        fetchGeneri: function() {

            axios.get('php/server.php')
            .then(resp => {

                this.albums = [];
                const dischi = resp.data;

                this.genControl(dischi,this.genere);

            })
        },

        genControl: function(dischi, genere) {

            if(genere != 'All') {

                dischi.forEach(el => {

                    const genre = el.genre;

                    if (genre === genere) {

                        this.albums.push(el);
                    }
                })

            } else {

                this.albums = dischi;
            }
        },

        getGeneri: function(el) {
            el.forEach(element => {

                const genere = element.genre;

                if (!this.generi.includes(genere)) {

                    this.generi.push(genere);
                }
            });
        },
    },

    created() {

        this.fetchAlbum();
    },
});
//console.log(app);