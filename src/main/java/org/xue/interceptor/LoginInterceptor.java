package org.xue.interceptor;

import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class LoginInterceptor implements HandlerInterceptor {

    /**
     *
     * @param request
     * @param response
     * @param handler
     * @return true放过 || false拦截
     * @throws Exception 异常
     */
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
            throws Exception {

        String uri = request.getRequestURI();

        Object logined = request.getSession().getAttribute("logined");

        System.out.println(uri + ":=================登陆状态："+logined);


        if (logined != null) {
            // 放过
            return true;
        } else {
            response.sendRedirect("login.html");
            return false;
        }
    }

}
