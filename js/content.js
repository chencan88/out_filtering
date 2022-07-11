
//公司所有信息
var bossData=$(".gray");
//公司职位信息
var text=$(".text");
//姓名
var name=$(".name");
//时间
var time=$(".time");
//删除按钮
var del=$(".delete");
//控制一次移出移入
var  num=0;

var   testhtml="";

var   gray="";
function outsource(){
    $.ajax({
        async : false,
        cache : false,
        contentType: "application/json;charset=UTF-8",
        type : 'POST',
        url : 'http://localhost:8080/boss/queryCompany',
        dataType : 'json',
        timeout : 30000, //超时时间设定
        success : function(data) {
            $.each(data, function (index) {
                for(var i=0;i<bossData.length-1;i++){
                    var str= bossData[i].innerText;
                    var ret = str.split("  ");
                    //ret数组长度为2，0是公司，1是职位
                    if(data[index]==$.trim(ret[0])){
                        //给是外包的加背景色
                        bossData.eq(i).css({'color':'#ffffff'});
                        name.eq(i).css({'color':'#ffffff'});
                        del.eq(i).css({'background-color':'#ffffff'});
                        time.eq(i).css({'background-color':'#ffffff'});
                        text.eq(i).css({'backgroundColor':'#00c2b3'});
                        bossData.eq(i).text(bossData.eq(i).text()+'外包');
                    }
                }
            });

        },
        error : function() {
            console.log('smx失败 ');
        }
    });
}
function icon() {

    var w1 = '<ul style="margin-top: 50px;margin-left: 16px;padding: 0;width: 120px;\n' +
        'height: 250px;font-size: 18px;background-color: #00d7c6;">' +
        '<li  id="signboss"  style="width: 90px ;height: 35px;border: 2px solid #00d7c6;background-color: #00d7c6;' +
        'color: #ffffff;margin-left: 11px;border-bottom: 2px dotted #ffffff;margin-bottom: 10px;' +
        'box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);" >标记外包</li>' +
        '<li style="width: 90px ;height: 35px;border: 2px solid #00d7c6;background-color: #00d7c6;' +
        'color: #ffffff;margin-left: 11px;border-bottom: 2px dotted #ffffff;margin-bottom: 10px;' +
        'box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);">数码</li>' +
        '</ul>';

    $.each($("#header"), function (i, t) {
        $(t).html($(t).html() + w1);
    });

    //点击删除按钮批量删除外包公司
    $("#signboss").click(function (){
        alert("111");
    });

}


function addoutsourc() {
    //加移动事件
    var w2='<ul>' +
        '<li id="addout" style="border: 0px solid #00d7c6;\n' +
        'background-color: #00d7c6;color: #ffffff;font-size: 18px;">添为外包</li>' +
        '</ul>';

    $(".user-list ul li").mouseenter(function (){
        if(num==0){
            testhtml=$(this).html();
            $(this).html(testhtml+w2);
            num++;
            var i= $(this).index();
            $("#addout").click(function(){
                gray= $(".gray").eq(i).html();
                addboss();
            });
        }
    }).mouseleave(function(){
        if(num==1){
            $(this).html(testhtml);
            num--;
        }
    });


}


function addboss(){
    $.ajax({
        async : false,
        cache : false,
        contentType: "application/json;charset=UTF-8",
        type : 'PUT',
        url : 'http://localhost:8080/boss/addBoss?testhtml='+gray,
        dataType : 'json',
        timeout : 30000, //超时时间设定
        success : function(data) {

        },
        error : function() {
            console.log('smx失败 ');
        }
    });
}


setTimeout(function(){
    outsource();
    icon();
    addoutsourc();
    },2000);

$(function(){

   $('.guide-icon').click(function(){
       //公司所有信息
       var bossData=$(".gray");
       //公司职位信息
       var text=$(".text");
       //姓名
       var name=$(".name");
       //时间
       var time=$(".time");
       //删除按钮
       var del=$(".delete");
       $.ajax({
           async : false,
           cache : false,
           contentType: "application/json;charset=UTF-8",
           type : 'POST',
           url : 'http://localhost:8080/boss/queryCompany',
           dataType : 'json',
           timeout : 30000, //超时时间设定
           success : function(data) {
               $.each(data, function (index) {
                   for(var i=0;i<bossData.length-1;i++){
                       var str= bossData[i].innerText;
                       var ret = str.split("  ");
                       //ret数组长度为2，0是公司，1是职位
                       if(data[index]==$.trim(ret[0])){
                           //给是外包的加背景色
                           bossData.eq(i).css({'color':'#ffffff'});
                           name.eq(i).css({'color':'#ffffff'});
                           del.eq(i).css({'background-color':'#ffffff'});
                           time.eq(i).css({'background-color':'#ffffff'});
                           text.eq(i).css({'backgroundColor':'#00c2b3'});
                           bossData.eq(i).text(bossData.eq(i).text()+'外包');
                       }
                   }
               });

           },
           error : function() {
               console.log('smx失败 ');
           }
       });
});

})



//等页面加载完了在跳出外包公司
// window.setTimeout(function(){
//     outsource();
// }, 5000);