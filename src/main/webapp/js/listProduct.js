var app = new Vue({
    el:'.my-body',
    data:{
        list: [],
        id:''
    },
    methods:{
        toUpdateFinance:function (data){
            this.id = data.id;
        },
        delData: function (data) {
            let b = confirm("确定删除该数据吗？");
            if (b){
                $.ajax({
                    url: "/DeleteProduct.ajax",
                    type: "POST",
                    data: {
                        id: data.id      //向服务器发送前端数据
                    },
                    dataType: "JSON",
                    success: function (data) {
                        if (data){
                            alert("删除成功");
                            window.location.reload();
                        }
                    },
                    error: function () {
                        alert("err");
                    }
                });
            }
        },
        getData: function () {
            $.ajax({
                url: "/listProductType.ajax",
                type: "POST",
                data: {

                },
                dataType: "JSON",
                success: function (data) {
                    app.list = data.list;
                },
                error: function () {
                    alert("err");
                }
            });
        }
    }
});
var update = new Vue({
    el:'.update',
    data:{
        name:'',
        specifications:'',
        buy_time:'',
        unit:'',
        counts:'',
        price:'',

    },
    methods:{
        toUpdateFinance:function (){
            if (this.name===""){
                alert("还有空的！");
            }else if (this.specifications===""){
                alert("还有空的！");
            }else if (this.buy_time===""){
                alert("还有空的！");
            }else if (this.unit===""){
                alert("还有空的！");
            }else if (this.counts===""){
                alert("还有空的！");
            }else if (this.price===""){
                alert("还有空的！");
            }
            else {
                $.ajax({
                    url: "/doUpdateProduct.ajax",
                    type: "POST",
                    data: {
                        id:app.id,
                        name:this.name,
                        specifications:this.specifications,
                        buy_time:this.buy_time,
                        unit:this.unit,
                        counts:this.counts,
                        price:this.price,

                    },
                    dataType: "JSON",
                    success: function (data) {
                        if (data.updateState){
                            alert('修改成功');
                            window.location.reload();
                        }
                    },
                    error: function () {
                        alert("服务器出错");
                    }
                });
            }
        }

    }
});
var add = new Vue({
    el:'.doAdd',
    data:{
        name:'',
        specifications:'',
        buy_time:'',
        unit:'',
        counts:'',
        price:'',

    },
    methods:{
        doAdd: function () {
            if (this.name===""){
                alert("还有空的！");
            }else if (this.specifications===""){
                alert("还有空的！");
            }else if (this.buy_time===""){
                alert("还有空的！");
            }else if (this.unit===""){
                alert("还有空的！");
            }else if (this.counts===""){
                alert("还有空的！");
            }else if (this.price===""){
                alert("还有空的！");
            }else {
                $.ajax({
                    url: "/addProductType.ajax",
                    type: "POST",
                    data: {
                        name:this.name,
                        specifications:this.specifications,
                        buy_time:this.buy_time,
                        unit:this.unit,
                        counts:this.counts,
                        price:this.price,
                    },
                    dataType: "JSON",
                    success: function (data) {
                        if (data.addState){
                            alert("成功添加一个数据~");
                            window.location.reload();
                        }else {
                            alert("添加失败");

                        }
                    },
                    error: function () {
                        alert("服务器插入数据出错");
                    }
                });
            }

        }
    }
});
app.getData();
// app.search();
