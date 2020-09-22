
var app = new Vue({
    el:'.modal-content',
    data:{
        signUsername:'',
        signPassword1:'',
        signPassword2:''
    },
    methods:{
        newDoSingUp:function () {
            //前端三个参数传到servlet
            var username = this.signUsername;
            var signPassword1 = this.signPassword1;
            var signPassword2 = this.signPassword2;
            if (signPassword1 !== signPassword2){
                alert("两次密码不一致！");
            }else {
                $.ajax({
                    url : "/SignUpServlet.ajax",    //注册的servlet
                    type : "post",                  //post请求
                    data : {
                        signUsername : username,  //左边是发给服务器的变量，右边是js代码的var变量
                        signPassword1 : signPassword1,  //为什么明明三个参数却只发给了服务器两个呢？
                    },
                    dataType : "JSON",
                    success : function (data) {     //前端接收服务器返回的状态
                        if (data.SignState=="hasbeenSigned") {
                            alert("该用户名已经被注册");
                        }else if (data.SignState=="available"){
                            alert("注册成功！");
                        }
                    }

                });
            }
        }
    }
});