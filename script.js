(function(){

  var generator = {
    burns: [
      "Don't be such a rhymin' hymen.",
      "Don't have a crap attack.",
      "Don't be such a tattle-tampon.",
      "This is such a snoregasm.",
      "That is literally the stupidest thing anyone has said in the history of mankind ever.",
      "Don't be such a boob punch.",
      "Your face looks like math class.",
      "Don't be such a prudeabega.",
      "Later, square bear.",
      "You lamepon."
    ],
    getBurn: function(index) {
      history.pushState(null, null, '#' + index);
      return this.burns[index];
    },
    getRandomBurn: function() {
      var index = Math.floor(Math.random() * this.burns.length);
      return this.getBurn(index);
    },
    getBurnFromHash: function() {
      var index = parseInt(window.location.hash.substr(1));
      return this.getBurn(index);
    },
    render: function(string) {
      var el = document.getElementById('burn');
      el.innerHTML = string;
    },
    addEventListeners: function() {
      var self = this;
      var el = document.getElementById('getBurn');
      el.addEventListener('click', function(){
        self.render(self.getRandomBurn());
      }, false);
    },
    init: function() {
      this.addEventListeners();
      if (window.location.hash) {
        this.render(this.getBurnFromHash());
      } else {
        this.render(this.getRandomBurn());
      }
    }
  }

  generator.init();

})();

