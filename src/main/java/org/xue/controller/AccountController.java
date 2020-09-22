package org.xue.controller;

import com.alibaba.fastjson.JSONObject;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.xue.service.AccountService;
import org.xue.utils.StringUtils;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

@Controller
public class AccountController {

    @Resource
    private AccountService ac;

    @RequestMapping("/SignUpServlet.ajax")
    @ResponseBody
    public String signUp(String signUsername,String signPassword1){
        if (!StringUtils.isAllNotEmpty(signUsername,signPassword1)){
            //空参数操作
        }else {
            // 3.调用业务处理(service)
            boolean signUp = ac.doSignUp(signUsername, signPassword1);//传 账号到注册业务中

            //前端是Ajax请求，返回注册的状态数据给前端用
            JSONObject data = new JSONObject();
            if (signUp){
                data.put("SignState", "available");         //提示用户名可用
            }else {
                data.put("SignState", "hasbeenSigned");     //提示用户名已被注册
            }
            return data.toJSONString();
        }
        return null;
    }

    public static String username;
    @RequestMapping("/login.ajax")
    @ResponseBody
    public String login(String username, String password, HttpServletRequest request){
        //状态码
        Integer code = null;

        //2参数校验
        if (!StringUtils.isAllNotEmpty(username,password)){
            //空参数操作
            code = -1;
        }else {
            // 3.调用业务处理(service)

            Integer login = ac.doLogin(username, password);
            code = login;

            if (code!= null){
                if (code == 1){
                    request.getSession().setAttribute("logined",true);//标记成功
                    // 成功
                    this.username=username;
                    code = 1;
                }
            }
            else {
                code = -2;
            }
        }

        //4.展示
        JSONObject data = new JSONObject();
        data.put("tiaozhuan",code);
        return data.toJSONString();
    }

    @RequestMapping("/out-login")
    @ResponseBody
    public String outLogin(HttpServletRequest request){
        request.getSession().setAttribute("logined", null);
        JSONObject data = new JSONObject();
        data.put("type", true);
        return data.toJSONString();
    }

    @RequestMapping("/main.ajax")
    @ResponseBody
    public String main(){
        JSONObject data = new JSONObject();
        data.put("username",username);
        return data.toString();
    }

}
