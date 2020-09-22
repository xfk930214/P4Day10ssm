package org.xue.servlet;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.net.URLEncoder;

@WebServlet(urlPatterns = "/download")
public class DownloadServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String filename = "用户协议须知.doc";

        //让浏览器识别成文件，进行下载
        response.setContentType("application/x-msdownload");
        //告诉浏览器文件名
        String encode = URLEncoder.encode(filename, "utf-8");
        response.setHeader("content-disposition","attachment;filename="+encode);

        OutputStream outputStream = response.getOutputStream();

        FileInputStream in = new FileInputStream("D:\\upload\\"+filename);
        byte[] b = new byte[1024];
        int num = 0;
        while ((num = in.read(b))!=-1){
            outputStream.write(b,0,num);

        }
        in.close();
        outputStream.close();
    }
}
