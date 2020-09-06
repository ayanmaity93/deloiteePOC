var item;

function showDetailData(data){
    item = JSON.parse(data);
    if(item.status == 0){
        document.getElementById('itemTag').innerHTML = item.product.tag;
        document.getElementById('itemHeading').innerHTML = item.product.name;
        document.getElementById('itemDesc').innerHTML = item.product.desc;
        document.getElementById('itemPrice').innerHTML = "$" + item.product.amount;
    }
    else {
        document.getElementById('itemDetail').innerHTML = "";
        document.getElementById('serviceCallDetailMessage').innerHTML = item.message || "Sorry, Something Went Wrong. Please try again after sometime.";
    }
}



window.detailedInit = function detailedInit(){
    window.doServiceCall('productDetails.json', showDetailData);
}