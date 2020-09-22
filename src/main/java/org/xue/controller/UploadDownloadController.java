package org.xue.controller;

import com.alibaba.fastjson.JSONObject;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.net.URLEncoder;

@Controller
public class UploadDownloadController {

    @RequestMapping("/do-upload")
    @ResponseBody
    public String doUpload(String docs, MultipartFile myfile) {
        System.out.println(docs);

        JSONObject data = new JSONObject();
        if (myfile.isEmpty()) {
            data.put("type", false);
            return data.toJSONString();
        } else {
            // 文件名
            String name = myfile.getOriginalFilename();
            // 文件大小
            long size = myfile.getSize();
            // 文件类型
            String contentType = myfile.getContentType();

            System.out.println(name);
            System.out.println(size);
            System.out.println(contentType);

            File file = new File("d:\\upload\\" + name);

            // 保存文件
            try {
                myfile.transferTo(file);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        data.put("type", true);
        return data.toJSONString();
    }

    @RequestMapping("/download")
    public void download(String fname, HttpServletResponse response) throws Exception {
        // 告诉浏览器我是一个文件,你要拿去下载不能用普通网页形式打开
        response.setContentType("application/x-msdownload");
        // 转码文件名
        String encode = URLEncoder.encode(fname, "utf-8");
        // 告诉浏览器文件名
        response.setHeader("content-disposition", "attachment;filename=" + encode);

        // 获取输出流
        OutputStream outputStream = response.getOutputStream();
        // 读文件
        FileInputStream in = new FileInputStream(new File("d:\\upload\\" + fname));
        byte[] b = new byte[1024];
        int num = 0;
        while ((num = in.read(b)) != -1) {
            outputStream.write(b, 0, num);
        }
        in.close();
        outputStream.close();
    }


    @RequestMapping("/img")
    public void img(HttpServletResponse response) throws Exception {
        // 获取输出流
        OutputStream outputStream = response.getOutputStream();
        // 读文件
        FileInputStream in = new FileInputStream(new File("d:\\upload\\dog.jpg"));
        byte[] b = new byte[1024];
        int num = 0;
        while ((num = in.read(b)) != -1) {
            outputStream.write(b, 0, num);
        }
        in.close();
        outputStream.close();
    }
}
