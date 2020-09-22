package org.xue.dao;

import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.session.RowBounds;
import org.xue.model.Emp;

import java.util.List;

public interface EmpMapper {
    Integer add(Emp emp);

    Integer update(Emp emp);

    Integer del(@Param("ids") List<Integer> ids);

    List<Emp> getList(RowBounds rb, @Param("name") String name);

    Integer listCount(@Param("name") String name);

    Integer lock(@Param("state") Integer state, @Param("id") Integer id);

    Emp findByID(@Param("id") Integer id);

}
