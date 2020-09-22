package org.xue.dao;

import org.apache.ibatis.annotations.Param;
import org.xue.model.Emp;

public interface AccountMapper {
    Emp login(@Param("username") String username, @Param("password") String password);
}
