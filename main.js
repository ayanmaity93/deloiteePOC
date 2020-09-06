var init;
location.hash = "home";

window.doServiceCall = function doServiceCall (url, successCallback){
    document.getElementById('loader').classList.remove("d-none");
    document.getElementById('loader').classList.add("d-block");

    var xhtp = new XMLHttpRequest();

    xhtp.onreadystatechange = function() 
    {
        if (this.readyState == 4 ) 
        {
            document.getElementById('loader').classList.add("d-none");
            document.getElementById('loader').classList.remove("d-block");
            if(this.status == 200){
                successCallback(this.responseText);
            }
            else {
                document.getElementById('mainFailure').innerHTML = "Sorry, something went wrong. Please try again later."
            }
        }
    }

    xhtp.open("GET", url, true);
    xhtp.send();
}
function loadExtTemplate(responseHtml) {
    document.getElementById("loadTemplate").innerHTML = responseHtml;
    var allScripts = document.getElementById("loadTemplate").getElementsByTagName('script');
    for (var n = 0; n < allScripts .length; n++)
    {
        eval(allScripts [n].innerHTML)
    }
    init();

}

function getTemplate(){
    var templateUrl;
    switch(location.hash){
        case '#detail': templateUrl = "./assets/Templates/detailedItem.html";
            init = window.detailedInit;
            break;
        case '#home': templateUrl = "./assets/Templates/homepage.html";
            init = window.homeInit;
            break;
        default: templateUrl = "./assets/Templates/comingSoon.html";
            init = window.homeInit;
    }
    return templateUrl;
}

window.onhashchange = function(){
    window.doServiceCall(getTemplate(),loadExtTemplate);
}

window.changeLink = function changeLink(linkItem){
    location.hash = linkItem;
}

window.doServiceCall(getTemplate(),loadExtTemplate)