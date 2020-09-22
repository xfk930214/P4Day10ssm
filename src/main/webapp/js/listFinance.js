var app = new Vue({
    el:'.my-body',
    data:{
        list: [],
        username:'',
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
                    url: "/DeleteFinance.ajax",
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
                url: "/listFinance",
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
        financeID:'',
        empID:'',
        bill:'',
        entryTime:''

    },
    methods:{
        toUpdateFinance:function (){
            if (this.financeID===""){
                alert("财务id不能为空！");
            }else if (this.empID===""){
                alert("员工id不能为空！");
            }else if (this.bill===""){
                alert("发票不能为空！");
            }else if (this.entryTime===""){
                alert("入账时间不能为空！");
            }
            else {
                $.ajax({
                    url: "/doUpdateFinance.ajax",
                    type: "POST",
                    data: {
                        id:app.id,
                        financeID:this.financeID,
                        empID:this.empID,
                        bill:this.bill,
                        entryTime:this.entryTime,
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
        financeID:'',
        empID:'',
        bill:'',
        entryTime:'',
        state:''
    },
    methods:{
        doAddEmp: function () {
            if (this.financeID===""){
                alert("财务id不能为空！");
            }else if (this.empID===""){
                alert("员工id不能为空！");
            }else if (this.bill===""){
                alert("发票不能为空！");
            }else if (this.entryTime===""){
                alert("入账时间不能为空！");
            }else {
                $.ajax({
                    url: "/addFinance",
                    type: "POST",
                    data: {
                        asset_id:this.financeID,      //向服务器发送前端数据
                        emp_id:this.empID,
                        bill:this.bill,
                        enter_time:this.entryTime,
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
