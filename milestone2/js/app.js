
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
                //console.log(resp.data);
                
                this.albums = resp.data;
                this.getGeneri(resp.data);
            })
        },
        fetchGeneri: function() {


            axios.get('php/server.php')
            .then(resp => {

                this.albums = [];
                const dischi = resp.data;

                if(this.genere != 'All') {

                    dischi.forEach(el => {
    
                        const genre = el.genre;
    
                        if (genre === this.genere) {
    
                            this.albums.push(el);
                        } 
                    })
                } else {

                    this.albums = dischi;
                }

            })
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

    // mounted() {
    //     this.fetchGeneri();
    // }
});
console.log(app);