function Slideshow() {
  var dataAttr = 'data-slideshow-images';
  var selector = '[' + dataAttr + ']';

  var element = document.querySelectorAll(selector)[0];
  var images = element.getAttribute('data-slideshow-images').split(',');

  return {
    init() {
      var _this = this;

      _this.timedSlide();

      return _this;
    },

    currentIndex: 0,

    timedSlide: function(timeout = 5000) {
      var _this = this;

      setTimeout(function() {
        _this.advanceSlide();
      }, timeout);
    },

    advanceSlide: function() {
      this.advanceIndex();
      this.changeBackground();

      this.timedSlide();
    },

    advanceIndex: function() {
      if ((this.currentIndex + 1) >= images.length) {
        this.currentIndex = 0;
      } else {
        this.currentIndex++;
      }
    },

    changeBackground: function() {
      element.setAttribute('style', "background: url('/assets/images/home-slideshow/" + this.currentImage() + "') no-repeat center scroll");
    },

    currentImage: function() {
      return images[this.currentIndex];
    }
  }
}

function App() {
  var slideshow = Slideshow();

  return {
    init: function() {
      slideshow.init();
    }
  };
};
window.addEventListener('load', function () {
  App().init();
})
