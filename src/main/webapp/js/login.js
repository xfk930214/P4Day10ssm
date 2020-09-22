var login = new Vue({
    el:'.login',
    data:{
        username:'',
        password:'',
        haschange:true
    },
    methods:{
        newDoLogin:function () {
            var username = this.username;
            var password = this.password;
            if (username === "") {
                alert("用户名不能为空");
                return;
            }
            if (password === "") {
                alert("密码不能为空");
                return;
            }
            $.ajax({
                url : "/login.ajax",
                type : "post",
                data : {
                    username : username,  //左边是发给服务器的变量，右边是js代码的var变量
                    password : password
                },
                dataType : "JSON",
                success : function (data) {
                    // alert(data.tiaozhuan);
                    if (data.tiaozhuan == 1) {
                        window.location.href = "main.html";
                    }else if (data.tiaozhuan ==0){
                        alert("该账号已被锁定~")
                    }
                    else if (data.tiaozhuan == -2){
                        $(".wrongidorps").show();
                        setTimeout(function (){
                            $(".wrongidorps").hide();
                        },2000);
                    }else {
                        alert("非法操作");
                    }


                },
                error : function () {
                    alert("错误");
                }
            });
        }
    }
});