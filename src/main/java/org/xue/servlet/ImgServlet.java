package org.xue.servlet;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.OutputStream;

@WebServlet(urlPatterns = "/img")
public class ImgServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String name = request.getParameter("name");
        System.out.println(name);
        // 获取输出流
        OutputStream outputStream = response.getOutputStream();
        // 读文件
        FileInputStream in = new FileInputStream(new File(name));
        byte[] b = new byte[1024];
        int num = 0;
        while ((num = in.read(b)) != -1) {
            outputStream.write(b, 0, num);
        }
        in.close();
        outputStream.close();
    }
}
