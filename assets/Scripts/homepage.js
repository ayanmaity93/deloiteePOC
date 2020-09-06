var products;

function showData(data){
    console.log(data);
    products = JSON.parse(data);
    if(products.status == 0){
        if(products.products.length>0){

        }
        else {
            document.getElementById('serviceCallHomeMessage').innerHTML = "No Results Found.";
        }
    }
    else {
        document.getElementById('serviceCallHomeMessage').innerHTML = products.message || "Sorry, Something Went Wrong. Please try again after sometime.";
    }
}



window.homeInit = function homeInit(){
    window.doServiceCall('products.json', showData);
}