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
                    url: "/DeleteAssetType.ajax",
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
                url: "/listAssetType.ajax",
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
    el:'.updateFinance',
    data:{
        assetType:'',

    },
    methods:{
        toUpdateFinance:function (){
            if (this.assetType===""){
                alert("资产类型不能为空！");
            }
            else {
                $.ajax({
                    url: "/doUpdateAssetType.ajax",
                    type: "POST",
                    data: {
                        id:app.id,
                        assetType:this.assetType,

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
    el:'.doAddFinance',
    data:{
        assetType:'',

    },
    methods:{
        doAddEmp: function () {
            if (this.assetType===""){
                alert("财务id不能为空！");
            }else {
                $.ajax({
                    url: "/addAssetType.ajax",
                    type: "POST",
                    data: {
                        assetType:this.assetType,      //向服务器发送前端数据

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
