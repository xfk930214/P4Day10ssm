package org.xue.utils;

import com.alibaba.fastjson.JSONObject;

public class WebUtils {

    /**
     *  传入对象转为json字符串对象
     * @param obj
     * @return
     */
    public static String returnData(Object obj) {
        JSONObject data = (JSONObject) JSONObject.toJSON(obj);
        return data.toJSONString();
    }

}
