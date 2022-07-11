/1������contextMenus
var contextMenu = {
    id:"addAmount",
    title:"�������",
    //contexts:page,video...
    contexts:["selection"]
}
chrome.contextMenus.create(contextMenu);
//2��ΪcontextMenus����¼�����
chrome.contextMenus.onClicked.addListener(function(clickData){
    //clickData.menuItemId:������Ĳ˵�ѡ���id
    //clickData.selectionText:ѡ�е�����
    if(clickData.menuItemId == 'addAmount' && clickData.selectionText){
        var amount = parseFloat(clickData.selectionText);
        //1�����������ȡ�洢�Ľ��
        chrome.storage.sync.get('total',function(budget){
            var totalAmount = 0;
            if(budget.total){
                totalAmount = parseFloat(budget.total);
            }
            //2�������ν��ӵ��ܽ����
            if(amount){
                totalAmount += amount;
                chrome.storage.sync.set({'total':totalAmount},function(){
                    if(totalAmount > parseFloat(budget.limit)){
                        var notifyOptions = {
                            type:'basic',
                            title:'��ʾ��',
                            iconUrl:'img/logo.png',
                            message:'�����ѵ��ܽ���Ѿ��������ƣ�'
                        }
                        chrome.notifications.create('limitNotify',notifyOptions);
                    }
                });
            }
        })
    }
})

//����Badge����
chrome.storage.onChanged.addListener(function(changes,storageName){
    //changes.total.newValue:�ܽ��仯���ֵ
    chrome.browserAction.setBadgeText({"text":changes.total.newValue.toString()});
    chrome.browserAction.setBadgeBackgroundColor({"color":[0,255,0,255]});
});