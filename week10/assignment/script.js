let vm = new Vue ({
    el: "#myApp",
    data: {
      jazzObjects: []
    },
    mounted: function (){
      const baseURL = "https://binaryjazz.us/wp-json/genrenator/v1/story/25";
    //fetch ids from department
    axios.get(baseURL + "?departmentId=13").then(function(response) {
      console.log("response", response);
      let responseArray =response.data.objectIDs.slice(0, 9);
      console.log(responseArray);
      for(let i = 0; i < responseArray.length; i++) {
        axios.get(baseURL + "/" + responseArray[i]).then(function(objectResponse) {
          console.log(":D", objectResponse.data);
          vm.jazzObjects.push(objectResponse.data)
        })
      }
    })
      }
  });
  