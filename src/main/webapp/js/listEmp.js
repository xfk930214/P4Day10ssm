var app = new Vue({
    el:'.myBig-body',
    data:{
        empState:true,
        list: [], //获取到的
        username:'',
        emp:'',//更新数据时先查询
        id:'',  //删除用
        searchByName:'', //根据姓名搜索
        //多选删除
        deleteIds:[],

        empName:'',
        empJob:'',
        empIdCard:'',
        empUsername:'',
        empPassword:'',
        empNickname:'',
        empEnterTime:'',
        empBirthday:'',
        empID:'',

        addempName:'',
        addempJob:'',
        addempIdCard:'',
        addempUsername:'',
        addempPassword:'',
        addempNickname:'',
        addempEnterTime:'',
        addempBirthday:'',
        addempID:'',

        //分页变量
        nowPage:1,//当前页
        pageSize : 1,    //总页数
        pageList: [],   //存分页后的数据， 1234那种
        allDataSize:'', //总数据量
        // alleachPageDataNumb: [{id: 1, name: 1}, {id: 2, name: 3}, {id: 3, name: 5}],//分页用的数组
        eachPageDataNumb: '4',    //每页数据 数量
        //全选标志
        allSelect:false

    },
    methods:{
        //全选
        selectAll: function(){
            if (this.allSelect){
                //取消
                this.deleteIds=[];
            } else {
                for (var i = 0 ; i<this.list.length;i++){
                    this.deleteIds.push(this.list[i].id);
                }
            }
            this.allSelect = !this.allSelect;
        },
        deleteByIds: function(){
            if (this.deleteIds.length<=0){
                layer.alert("请选择要删除的数据");
                return;
            }
            var idStr = this.deleteIds.join(",");
            this.delData(idStr);

        },
        search: function (indexPage) {
            $.ajax({
                url: "/searchEmp.ajax",
                type: "POST",
                data: {
                    input:app.searchByName,      //向服务器发送前端数据
                    index:indexPage,
                    eachPageDataNumb:this.eachPageDataNumb,
                },
                dataType: "JSON",
                success: function (data) {
                    app.list=data.dataList;
                    app.pageSize = data.pageCount;
                    app.allDataSize = data.dataCount;

                },
                error: function () {
                    alert("err");
                }
            });
        },
        delData: function (ids) {
            layer.confirm('确定要删除数据吗？', {
                    btn: ['删除','取消'] //按钮
                }, function(index) {
                $.ajax({
                    url: "deleteEmp.ajax",
                    type: "POST",
                    data: {
                        ids: ids      //向服务器发送前端数据
                    },
                    dataType: "JSON",
                    success: function (data) {
                        if (data) {
                            layer.alert("删除成功");
                            app.deleteIds = [];
                            app.jumpPage(app.nowPage);
                        }
                    },
                    error: function () {
                        layer.alert("err");
                    }
                });
            });
        },
        upPage:function(){
            if (this.nowPage == 1){
                this.nowPage=1;
                layer.alert("已经是首页了！");
            }else {
                this.nowPage -=1;
                this.search(this.nowPage);
            }
        },
        downPage:function(){
            if (this.nowPage == this.pageSize){
                this.nowPage=this.pageSize;
                layer.alert("已经是最后一页了");
            }else {
                this.nowPage ++;
                this.search(this.nowPage);
            }
        },
        toUpdateEmp: function (data) {
            app.id = data.id;

            app.empName=data.name;
            app.empJob=data.job;
            app.empIdCard=data.idCard;
            app.empUsername=data.username;
            app.empPassword=data.password;
            app.empNickname=data.nickname;
            app.empEnterTime=data.entryDate;
            app.empBirthday=data.birthday;
            app.empID=data.empId;

        },
        doAddEmp: function () {
            if (this.addempName===""){
                layer.alert("姓名不能为空！");
            }else if (this.addempJob===""){
                layer.alert("职务不能为空！");
            }else if (this.addempIdCard===""){
                layer.alert("身份证不能为空！");
            }else if (this.addempUsername===""){
                layer.alert("用户名不能为空！");
            }else if (this.addempPassword===""){
                layer.alert("密码不能为空！");
            }else if (this.addempNickname===""){
                layer.alert("昵称不能为空！");
            }else if (this.addempEnterTime===""){
                layer.alert("入职时间不能为空！");
            }else if (this.addempBirthday===""){
                layer.alert("生日不能为空！");
            }else if (this.addempID===""){
                layer.alert("工号不能为空！");
            }else {
                $.ajax({
                    url: "/addEmp.ajax",
                    type: "POST",
                    data: {
                        // id:19,
                        name:this.addempName,      //向服务器发送前端数据
                        job:this.addempJob,
                        idCard:this.addempIdCard,
                        username:this.addempUsername,
                        password:this.addempPassword,
                        nickname:this.addempNickname,
                        // state:1,
                        entryDate:this.addempEnterTime,
                        birthday:this.addempBirthday,
                        empId:this.addempID,
                    },
                    dataType: "JSON",
                    success: function (data) {
                        if (data.addState){
                            layer.alert("成功添加一位员工~");
                            app.hideMo();
                            app.jumpPage(app.nowPage);
                        }else {
                            layer.alert("添加失败");

                        }
                    },
                    error: function () {
                        layer.alert("服务器插入数据出错");
                    }
                });
            }

        },
        doUpdateEmp: function () {
            if (this.empName===""){
                layer.alert("姓名不能为空！");
            }else if (this.empJob===""){
                layer.alert("职务不能为空！");
            }else if (this.empIdCard===""){
                layer.alert("身份证不能为空！");
            }else if (this.empUsername===""){
                layer.alert("用户名不能为空！");
            }else if (this.empPassword===""){
                layer.alert("密码不能为空！");
            }else if (this.empNickname===""){
                layer.alert("昵称不能为空！");
            }else if (this.empEnterTime===""){
                layer.alert("入职时间不能为空！");
            }else if (this.empBirthday===""){
                layer.alert("生日不能为空！");
            }else if (this.empID===""){
                layer.alert("工号不能为空！");
            }else {
                $.ajax({
                    url: "/do-updateEmp.ajax",
                    type: "POST",
                    data: {
                        id:app.id,
                        name:this.empName,
                        job:this.empJob,
                        idCard:this.empIdCard,
                        username:this.empUsername,
                        password:this.empPassword,
                        nickname:this.empNickname,
                        entryDate:this.empEnterTime,
                        birthday:this.empBirthday,
                        empId:this.empID
                    },
                    dataType: "JSON",
                    success: function (data) {
                        if (data.updateState){
                            layer.alert('修改成功');
                            app.hideMo();
                            app.jumpPage(app.nowPage);
                        }
                    },
                    error: function () {
                        layer.alert("服务器出错");
                    }
                });
            }
        },
        lockEmp:function (data) {
            data.state=!data.state;
            $.ajax({
                url: "/lockEmp.ajax",
                type: "POST",
                data: {
                    id:data.id,
                },
                dataType: "JSON",
                success: function (data) {
                    if (data.updateState){
                        // layer.alert("已锁定该账号");

                    }
                },
                error: function () {
                    layer.alert("服务器出错");
                }
            });

        },
        getPage:function(eachPageDataNumb){
            app.eachPageDataNumb = eachPageDataNumb;
            app.search(app.nowPage);
        },
        jumpPage:function (nowPage) {
            if (nowPage>app.pageSize){
                app.search(app.pageSize);
                app.nowPage = app.pageSize;
                layer.alert("我也是有底线的~已为您翻到最后一页！");
            }else {
                app.search(nowPage);
            }
        },
        hideMo: function () {
            // this.ed.id = 0;
            // this.ed.account = '';
            // this.ed.passwd = '';
            $('#addnewdata').modal('hide');
        },
    }
});

Vue.filter('accountState', function (value) {
    if (value==1){
        return '可用';
    }else {
        return "锁定";
    }
});
// app.getData(1);
