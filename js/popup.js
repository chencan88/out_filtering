$(function(){
    //�ڵ�һ������ʱ������ܽ��Ϊ0��Ҳ�������գ�������ֵ��ʾ
    chrome.storage.sync.get(['.gray'],function(budget){
        var varList = new Array();
        $(".gray").each(function(index, el) {
         varList[index] = el.value;
        });
        console.log("varList:"+varList);
	    alert(varList);
    });
    $('#add').click(function(){
        //1�����������ȡ�洢�Ľ��
        chrome.storage.sync.get('.gray',function(budget){
           alert(budget.gray);
        })
    })
})