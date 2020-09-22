package org.xue.service.impl;
import org.springframework.stereotype.Service;
import org.xue.dao.AccountMapper;
import org.xue.model.Emp;
import org.xue.service.AccountService;
import javax.annotation.Resource;

@Service
public class AccountServiceImpl implements AccountService {

    @Resource
    private AccountMapper mapper;

    @Override
    public Integer doLogin(String username, String password) {
        //状态码
        int code = -6;

        Emp emp = mapper.login(username, password);
        if (emp!=null){
            code = emp.getState();
        }else {
            code = -2;
        }
        return code;
    }

    @Override
    public boolean doSignUp(String username, String password) {
        return false;
    }

}
