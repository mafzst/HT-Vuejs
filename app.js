new Vue({
  el: '#app',
  data: {
    message: 'Hello',
    lang: 'es',
    counter: 0,
    langs: {
      codes: ['fr', 'en', 'de', 'es'],
      labels: ['Français', 'English', 'Deutsch', 'Español'],
      messages: ['Bonjour', 'Hello', 'Hallo', 'Hola']
    }
  },
  methods: {
    incrementCounter: function() {
      this.counter++
    },
    decrementCounter: function() {
      this.counter--
    }
  },
  computed: {
    translatedMessage: function() {
      let translatedMessage = '';
      for (let i = 0; i < this.message.length; i++) {
        translatedMessage += String.fromCharCode(this.message[i].charCodeAt() + this.counter)
      }
      return translatedMessage
    }
  },
  watch: {
    counter: function(newValue) {
      if(newValue > 5 || newValue < 0) {
        this.counter = 0
      }
    },
    lang: function(newLang) {
      this.message = this.langs.messages[this.langs.codes.indexOf(newLang)]
    }
  },
  mounted: function() {
    this.message = this.langs.messages[this.langs.codes.indexOf(this.lang)]
  }
})
