package org.xue.service;

public interface AccountService {

    /**
     * 登录校验
     *
     * @param username   用户名
     * @param password 密码
     * @return 校验结果
     */
    Integer doLogin(String username, String password);
    /**
     * 注册校验
     *
     * @param username   用户名
     * @param password 密码
     * @return 校验结果
     */
    boolean doSignUp(String username, String password);
}
