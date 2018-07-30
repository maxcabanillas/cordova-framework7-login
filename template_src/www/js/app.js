// ruta del servidor
var ruta_server = 'http://192.168.0.246:4000/api/';
// Dom7
var $$ = Dom7;
// Framework7 App main instance
var app = new Framework7({
  root: '#app', // App root element
  id: 'io.framework7.testapp', // App bundle ID
  name: 'Framework7', // App name
  theme: 'ios', // ios / material Automatic theme detection
  fastClicksDelayBetweenClicks: 1000,
  fastClicks: true,
  view: {
    iosDynamicNavbar: false,
    xhrCache: true,
  },
  // App root data
  data: function() {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },
    };
  },
  // App root methods
  methods: {
    helloWorld: function() {
      var app = this
      app.dialog.alert('Hello World!');
    },
    entrar: function() {
      app.router.navigate('/request-and-load/user/1/', {
        reloadCurrent: true,
        ignoreCache: true,
      })
    }
  },
  // App routes
  routes: routes,
});
// Init/Create main view
var mainView = app.views.create('.view-main', {
  url: '/'
});
var toggle = app.toggle.create({
  el: '#guarda_usuario',
  on: {
    change: function() {
      console.log('Toggle changed 1')
    }
  }
})
