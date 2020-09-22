package org.xue.service.impl;

import org.apache.ibatis.session.RowBounds;
import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.xue.dao.EmpMapper;
import org.xue.model.Emp;
import org.xue.service.EmpService;
import org.xue.utils.MyBatisUtils;
import org.xue.utils.PageUtils;
import org.xue.utils.TableData;

import javax.annotation.Resource;
import java.util.List;
@Service
public class EmpServiceImpl implements EmpService {

    //练习注解方式依赖注入所用的属性，跟项目无关  ${testDIData}在mydata里面
//    @Value("${testDIData}")
//    private int testDIData;

    @Resource
    private EmpMapper mapper;

    /**
     * 锁定账号
     * @param id
     * @return
     */
    @Override
    @Transactional(rollbackFor = Exception.class)
    public boolean doLockEmp(int id){
        boolean flag = false;
        Integer lock=null;

        Emp emp = findByID(id);

        int state = emp.getState();
//        System.out.println(state);
        if (state == 0){
             lock = mapper.lock(1, id);
        }else {
             lock = mapper.lock(0, id);
        }
        if (lock > 0) {
            flag = true;
        } else {
            flag = false;
        }
        return flag;
    }

//    @Override
//    public List<Emp> doFind(String name, int index, int eachPageDataNumb) {
//        // 分页数据计算
//        int offset = (index - 1) * eachPageDataNumb;
//        int limit = eachPageDataNumb;
//
//        //分页
//        RowBounds rb = new RowBounds(offset, limit);
//        List<Emp> list = mapper.getList(rb, name);
//        return list;
//    }

//    @Override
//    public Integer listCount(String name) {
//        Integer count = mapper.listCount(name);
//        return count;
//    }

    @Override
    public TableData<Emp> list(int index,int eachPageDataNumb, String name) {
        //构造结果数据
        TableData<Emp> tableData = new TableData<>();
        tableData.setPageIndex(index);
        tableData.setPageSize(eachPageDataNumb);

        //查询总数据量
        Integer count = mapper.listCount(name);
        tableData.setDataCount(count);
        if (count<=0){
            return tableData;
        }

        //查询结果
        RowBounds rb = PageUtils.getRowBounds(index,eachPageDataNumb);
        List<Emp> list = mapper.getList(rb, name);
        tableData.setDataList(list);

        return tableData;
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public boolean save(Emp emp) {
        boolean flag = false;
        Integer res = null;
        if (emp.getId() > 0) {
            // 更新
            res = mapper.update(emp);
        } else {
            // 新增
            res = mapper.add(emp);
        }

        if (res > 0) {
            flag = true;
        } else {
            flag = false;
        }
        System.out.println("进入新的save方法了");
        return flag;
    }

    @Override
    public Emp findByID(int id) {
        return mapper.findByID(id);
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public boolean doAdd(Emp emp) {
        boolean flag = false;
        Integer add = mapper.add(emp);
        if (add > 0) {
            flag = true;
        } else {
            flag = false;
        }
        return flag;
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public boolean doDelete(List<Integer> ids) {
        boolean flag = false;
        Integer del = mapper.del(ids);
        if (del > 0) {
            flag = true;
        } else {
            flag = false;
        }
        return flag;
    }


//    @MyAnnotation(val1 = "ceshi123",val2 = "val222")//自定义注解


    @Override
    @Transactional(rollbackFor = Exception.class)
    public boolean doUpdate(String id, Emp emp) {
        boolean flag = false;
        Integer update = mapper.update(emp);
        if (update > 0) {
            flag = true;
        } else {
            flag = false;
        }
        return flag;
    }



}
