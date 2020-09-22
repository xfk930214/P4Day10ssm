package org.xue.demo;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class JdbcDemo {
    public static void main(String[] args) {
        try {
            // 1.加载驱动
            Class.forName("com.mysql.jdbc.Driver");
            // 2.连接数据库
            Connection con = DriverManager.getConnection(
                    "jdbc:mysql://localhost:3306/student?characterEncoding=utf8",
                    "root",
                    ""
            );
            // 操作数据库
            // 3.预编译SQL（这里的SQL语句不需要分号）
            PreparedStatement ps = con.prepareStatement("select * from student");
            // 4.执行SQL语句并获取结果
            ResultSet rs = ps.executeQuery();
            // 5.处理结果
            while (rs.next()) {
                String name = rs.getString(1);
                String time = rs.getString(2);
                String sal = rs.getString(3);
                String no = rs.getString(4);
                System.out.println(name + "-" + time + "-" + sal + "-" + no);
            }
            // 6.关闭
            rs.close();
            ps.close();
            con.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
