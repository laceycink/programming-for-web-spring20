var baseURL = "https://binaryjazz.us/wp-json/genrenator/v1";
var vm = new Vue({
    el: "#app",
    data: {
        stories: []
    },
    methods: {
        getStories: function() {
            axios.get(baseURL + "/story/25").then(function(response){
                console.log(response);
                vm.stories = response.data;
            })
        }
    },
    created: function() {
        this.getStories();
    }
});