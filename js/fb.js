define(['facebook'], function(){
  FB.init({
    appId      : '450703675359521',
    version    : 'v5.0'
  });
  FB.getLoginStatus(function(response) {
    console.log(response);
  });
});