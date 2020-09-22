package org.xue.service;

import org.xue.model.Emp;
import org.xue.utils.TableData;

import java.util.List;

public interface EmpService {
    /**
     * 根据id查询一条信息
     * @param id
     * @return
     */
    Emp findByID(int id);

    /**
     * 添加业务
     * @param emp
     * @return
     */
    boolean doAdd(Emp emp);

    /**
     * 删除数据业务
     * @param ids
     * @return
     */
    boolean doDelete(List<Integer> ids);

    /**
     * 根据id更改信息
     * @param id
     * @param emp
     * @return
     */
    boolean doUpdate(String id, Emp emp);

    /**
     * 锁定 解锁
     * @param i
     * @return
     */
    boolean doLockEmp(int i);

    /**
     * 两个方法合并
     */
//    List<Emp> doFind(String input, int index, int eachPageDataNumb);
//
//    Integer listCount(String input);

    /**
     *  包含分页以及所有相关数据
     * @param index     当前页
     * @param name      根据name搜索
     * @return
     */
    TableData<Emp> list(int index,int eachPageDataNumb, String name);

    boolean save(Emp emp);
}
