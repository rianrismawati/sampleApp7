var app = new Framework7({
  modalTitle : 'My App',

  pushState : true,
  material:true,
  onAjaxStart: function (xhr) {
  	myApp.showIndicator();
  },
  onAjaxComplete: function (xhr){
  	myApp.hideIndicator();
  },

  // App root element
  // root: '#app',
  // App Name
  name: 'My App',
  // App id
  id: 'com.myapp.test',
  // Enable swipe panel
  panel: {
    swipe: 'left',
  },
  // Add default routes
  routes: [
    {
      path: '/about/',
      url: 'about.html',
    },
  ],
  // ... other parameters
});

var $$ = Dom7;

var mainView = app.views.create('.view-main',{
	domCache: true,
});