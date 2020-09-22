package org.xue.utils;

/**
 * 字符串工具类
 */
public class StringUtils {

    /**
     * 一个都不为空
     * @param arr
     * @return
     */
    public static boolean isAllNotEmpty(String... arr){
        for (String str:arr) {
            if (isEmpty(str))
                return false;
        }
        return true;
    }

    /**
     * 判断字符串是否为空
     * @param str   字符串
     * @return  t or f
     */
    public static boolean isEmpty(String str){
        return str==null||"".equals(str);
    }

    public static boolean isNotEmpty(String str){
        return !isEmpty(str);
    }
}
