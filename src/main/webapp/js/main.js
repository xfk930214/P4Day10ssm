$(".xitong").bind("click", function(){
    var url = $(this).attr("url");
    $("#myif").attr("src", url);
});

//完善用户信息
function doUploadInformation() {
    var Tel = $("#Tel").val();
    var IDcard = $("#IDcard").val();
    //向服务器发起请求
    $.ajax({
        url : "/do-upload",
        type : "post",
        data : {
            Tel : Tel,  //左边是发给服务器的变量，右边是js代码的var变量
            IDcard : IDcard
        },
        dataType : "JSON",
        success : function (data) {
            alert(data.picPath);
            if (data.updata == "done") {
                alert("完成！");

                // window.location.href = "main";

            } else {

            }
        },
        error : function () {
            alert("错误");
        }
    });
}

function doOutLogin(){
    $.ajax({
        url : "/out-login",
        type : "POST",
        dataType : "JSON",
        success : function (data) {
            if (data.type) {
                location.href = "login.html";
                alert("退出成功");
            } else {
                alert("系统异常");
            }
        },
        error : function () {
            alert("err");
        }
    });
}

var showUsername = new Vue({
    el: '.dropdown',
    data: {
        username:'未知用户',
    },
    created() {
        $.ajax({
            url : "/main.ajax",
            type : "POST",
            dataType : "JSON",
            success : function (data) {
                showUsername.username = data.username;
                // showUsername.fullPath = data.fullPath;
            }
        })
    }

});