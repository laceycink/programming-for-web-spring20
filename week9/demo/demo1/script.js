//   var vm = new Vue({
  //     el: '#app',
    // data (property) asteroids: undefined [],
 //      get asteroids() {
 //         return this._asteroids;
  //     },
  //     set asteroids(value) {
  //         this._asteroids = value;
  //     },
  //         asteroids: []
//   },
    //computed: {
     //   numAsteroids: function () {
      //      return this.asteroids.length;
      //  },
     //   closestObj: function () {
          //     var neosHavingData = this.asteroids.filter(function (neo) {
              //     return neo.close_approach_data.length > 0;
         //      });
          //     var simpleNeos = neoHavingData.map(function (neo) {
          //         return {name: neo.name, miles: neo.close_approach_data[0].miss_distance.miles};
          //     });
           //    var sortedNeos = simpleNeos.sort(function (a, b) {
          //         return a.miles - b.miles;
          //    });
           //    return sortedNeos[0].name;
       //  }
//  })