$(function(){
    //在第一次运行时，如果总金额为0，也不会留空，而是有值显示
    chrome.storage.sync.get(['.gray'],function(budget){
        var varList = new Array();
        $(".gray").each(function(index, el) {
         varList[index] = el.value;
        });
        console.log("varList:"+varList);
	    alert(varList);
    });
    $('#add').click(function(){
        //1、从浏览器获取存储的金额
        chrome.storage.sync.get('.gray',function(budget){
           alert(budget.gray);
        })
    })
})