var vm = new Vue ({
    el: "#app",
    data: {
        llamaFacts: "https://en.wikipedia.org/wiki/Llama",
        llamaTitle: "Nav to the llama wiki page",
        alpacaFacts: "https://en.wikipedia.org/wiki/Alpaca",
        alpacaTitle: "Nav to the alpaca wiki page", 
        }
  });

var vm = new Vue ({
    el: "#same",
    data: {
        activeClass: 'active',
        errorClass: 'text-danger'
    }
});

var vm = new Vue ({
    el: "#list",
    data: {
        styleFact: {
            color: "white",
            fontSize: "15px",
        }
    }
});
