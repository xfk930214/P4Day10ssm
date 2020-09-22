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
                    url: "/DeleteAsset.ajax",
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
                url: "/listAssets.ajax",
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
        assetType_id:'',
        financeId:'',
        productId:'',
        empId:'',
        state:'',
        listType:[],
        listProductType: [],
    },

    methods:{
        toUpdateFinance:function (){
            if (this.assetType_id===""){
                alert("资产类型id不能为空！");
            }else if (this.financeId===""){
                alert("财务id不能为空！");
            }else if (this.productId===""){
                alert("产品id不能为空！");
            }else if (this.empId===""){
                alert("保管员id不能为空！");
            }
            else {
                $.ajax({
                    url: "/doUpdateAsset.ajax",
                    type: "POST",
                    data: {
                        id:app.id,
                        assetType_id:this.assetType_id,
                        productId:this.productId,
                        empId:this.empId,
                        financeId:this.financeId
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
    el:'.doAddFinance ',
    data:{
        assetType_id:'',
        financeId:'',
        productId:'',
        empId:'',
        state:'',
        listType:[],
        listProductType:[],
    },
    methods:{
        doAddEmp: function () {
            alert(this.assetType_id);
            alert(this.productId);
            if (this.assetType_id===""){
                alert("不能为空！");
            }else if (this.financeId===""){
                alert("不能为空！");
            }else if (this.productId===""){
                alert("不能为空！");
            }else if (this.empId===""){
                alert("不能为空！");
            }else {
                $.ajax({
                    url: "/addAsset",
                    type: "POST",
                    data: {
                        assetType_id:this.assetType_id,      //向服务器发送前端数据
                        financeId:this.financeId,
                        productId:this.productId,
                        empId:this.empId,
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
var tofind = new Vue({
    el:'.tofindtype',
    data:{
    },
    methods:{
        findAssetType:function(){
            $.ajax({
                url: "/toFindAssetType",
                type: "POST",
                dataType: "JSON",
                success: function (data) {
                    add.listType=data.findList;
                    update.listType=data.findList;
                },
                error: function () {
                    alert("服务器数据出错");
                }
            });
        }
    }
});
var toFindProduct = new Vue({
    el:'.tofindtype',
    data:{
    },
    methods:{
        findProduct:function(){
            $.ajax({
                url: "/toFindProduct",
                type: "POST",
                dataType: "JSON",
                success: function (data) {
                    add.listProductType=data.findList;
                    update.listProductType=data.findList;
                },
                error: function () {
                    alert("服务器数据出错");
                }
            });
        }
    }
});
tofind.findAssetType();
toFindProduct.findProduct();
app.getData();
// app.search();
