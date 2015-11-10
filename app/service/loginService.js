adminGuiApp.service('loginService', function () {
  
    var data = {
       email:"admin@admin",
       password:"admin"
    };

	this.validate = function(signupData){
		return (signupData.email === data.email && signupData.password === data.password) ? true : false;
	};


});