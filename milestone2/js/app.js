
const app = new Vue ({
    el: '#app',

    data: {
        albums: [],
    },

    methods: {
        fetchAlbum: function() {

            axios.get('php/server.php')
            .then(resp => {
                //console.log(resp.data);
                this.albums = resp.data;
            })
        }
    },
    created() {

        this.fetchAlbum();
    },
});
console.log(app);