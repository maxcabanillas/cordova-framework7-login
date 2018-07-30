routes = [{
    path: '/',
    url: './index.html',
  },
  // Page Loaders & Router
  {
    path: '/request-and-load/user/:userId/',
    async: function(routeTo, routeFrom, resolve, reject) {
      // Router instance
      var router = this;

      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      var userId = routeTo.params.userId;

      app.request({
        async: false,
        dataType: 'json',
        method: 'GET',
        data: {},
        url: ruta_server + 'funciones/prueba',
        success: function(datos) {
          app.dialog.alert('Prueba', 'Alerta');
          var user = {
            firstName: 'Vladimir',
            lastName: 'Kharlampidi',
            about: 'Hello, i am creator of Framework7! Hope you like it!',
            links: [{
                title: 'Framework7 Website',
                url: 'http://framework7.io',
              },
              {
                title: 'Framework7 Forum',
                url: 'http://forum.framework7.io',
              },
            ]
          };
          app.preloader.hide();
          resolve({
            componentUrl: './pages/page-loader-component.html',
          }, {
            context: {
              resultados: user
            }
          });
        },
        error: function() {},
        statusCode: {
          404: function(xhr) {
            app.dialog.alert('Error al conectar con el servidor, Verifique que tenga su servicio de internet activado..', 'Alerta');
          }
        }
      })
    },
  },
  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];
