$(function(){
    var timeOut = function(){  //超时函数
        $("#lotteryBtn").rotate({
            angle:0, 
            duration: 10000, 
            animateTo: 2160,  //这里是设置请求超时后返回的角度，所以应该还是回到最原始的位置，2160是因为我要让它转6圈，就是360*6得来的
            callback:function(){
                alert('网络超时')
            }
        }); 
    }; 
    var rotateFunc = function(awards,angle,data){  //awards:奖项，angle:奖项对应的角度，text:提示文字
        $('#trunplate').stopRotate();
        $("#trunplate").rotate({
            angle:0, 
            duration: 5000, 
            animateTo: angle+1440, //angle是图片上各奖项对应的角度，1440是我要让指针旋转4圈。所以最后的结束的角度就是这样子^^
            callback:function(){
                succFn(data);
            }
        }); 
    };
    
    // $("#trunplate").rotate({ 
    //    bind: 
    //      { 
    //         click: function(){
    //             // var time = [0,1];
    //             //     time = time[Math.floor(Math.random()*time.length)];
    //             var time = 1;
    //             if(time==0){
    //                 timeOut(); //网络超时
    //             }
    //             if(time==1){
    //                 var data = [1,2,3,0]; //返回的数组
    //                     data = data[Math.floor(Math.random()*data.length)];
    //                 if(data==1){
    //                     rotateFunc(1,157,'恭喜您抽中的一等奖')
    //                 }
    //                 if(data==2){
    //                     rotateFunc(2,247,'恭喜您抽中的二等奖')
    //                 }
    //                 if(data==3){
    //                     rotateFunc(3,22,'恭喜您抽中的三等奖')
    //                 }
    //                 if(data==0){
    //                     var angle = [67,112,202,292,337];
    //                         angle = angle[Math.floor(Math.random()*angle.length)]
    //                     rotateFunc(0,angle,'很遗憾，这次您未抽中奖')
    //                 }
    //             }
    //         }
    //      }   
    // });
    $("#startBtn").on("click",function(){
        var time = 1;
        if(time==0){
            timeOut(); //网络超时
        }
        if(time==1){
            var data = [1,2,3,0]; //返回的数组
                data = data[Math.floor(Math.random()*data.length)];
            if(data==1){
                rotateFunc(1,-75,data)
            }
            if(data==2){
                var angle = [135,45];
                angle = angle[Math.floor(Math.random()*angle.length)]
                rotateFunc(2,angle,data)
            }
            if(data==3){
                var angle = [15,195,-45];
                angle = angle[Math.floor(Math.random()*angle.length)]
                rotateFunc(3,angle,data)
            }
            if(data==0){
                var angle = [75,105,165,-15,-105,-135];
                    angle = angle[Math.floor(Math.random()*angle.length)]
                rotateFunc(0,angle,data)
            }
        }
    })
    function succFn(data){
        $(".page").hide().siblings("#page10").show();
        switch(data){
            case 0:
                $("#noawardBox").show();
                break;
            case 1:
                $("#awardBox").show();
                $("#priseBox").attr("src","img/prise1.png");
                break;
            case 2:
                $("#awardBox").show();
                $("#priseBox").attr("src","img/prise2.png");
                break;
            case 3:
                $("#awardBox").show();
                $("#priseBox").attr("src","img/prise3.png");
                break;

        }
    }
})