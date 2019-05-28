// Cookie check function
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// Log visitor page function
function visitLog(){
    var currentPage = window.location.pathname;
    console.log("current page", currentPage)
    var Http = new XMLHttpRequest();
    var url='https://reqres.in/api/users';
    var sample = {
        "name": "morpheus",
        "job": "leader"
    };
    Http.open("POST", url, sample);
    Http.send();

    Http.onreadystatechange = function(response){
        console.log("API response",response)
    }
}

// Checking Cookie
if( getCookie('partners_user') ){
    console.log("Yes! Logged In!", getCookie('partners_user'));
    visitLog();
}else{
    console.log("Not Logged!");
    // setCookie('qrveyuser','qrveyuseridhere',365);
    // console.log("Cookie created", getCookie('qrveyuser') )
    // debugger;
    // window.location.href = 'https://qrvey.com';
}