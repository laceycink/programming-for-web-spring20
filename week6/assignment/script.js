// for some reason lodash is breaking my code so I'm commenting it out but it is: import _ from "lodash";

// header
new Vue({
    el: "#header",
    data: {
      message: "Llama Facts",
      conditional: true
    }
  });
  
  // facts
  var facts = new Vue({
    el: '#facts',
    data: {
      items: [
        { message: 'They make a variety of sounds. The most common sound is a humming noise' },
        { message: 'They usually spit to settle an argument over food or to decide which is the dominant llama' },
        { message: 'Their flattened ears are a signal to back off and are usually sufficient' },
        { message: 'Their red blood corpuscles are oval instead of round' },
        { message: 'They are native to the South American Andes' },
        { message: 'They are pack animals and can carry 50-75 pounds' },
        { message: 'Their poop makes great fuel and fertilizer' },
        { message: 'They can reach speeds up to 35mph' },
        { message: 'Llama fiber is used locally for rugs, rope, and fabric' },
        { message: 'Although usually white, llamas may be solid black or brown' },
      ]
    }
  })
  