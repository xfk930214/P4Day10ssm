package org.xue.controller;

import com.alibaba.fastjson.JSONObject;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.xue.model.Emp;
import org.xue.service.EmpService;
import org.xue.utils.StringUtils;
import org.xue.utils.TableData;
import org.xue.utils.WebUtils;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;

@Controller
public class EmpController {

    @Resource
    private EmpService empService;

    @RequestMapping("/addEmp.ajax")
    @ResponseBody
    public String addEmp(Emp emp){

        boolean b = empService.doAdd(emp);

        JSONObject data = new JSONObject();
        if (b){
            data.put("addState", true);
        }else {
            data.put("addState", false);
        }
        return data.toJSONString();
    }

    @RequestMapping("/deleteEmp.ajax")
    @ResponseBody
    public String deleteEmp(String ids){

        //删除业务
        JSONObject data = new JSONObject();

        if (StringUtils.isEmpty(ids)){
            data.put("delState", false);
        }

        String[] idListStr = ids.split(",");
        List<Integer> idList = new ArrayList<>();
        for (String idStr: idListStr) {
            int id = Integer.parseInt(idStr);
            idList.add(id);
        }

        boolean b = empService.doDelete(idList);

        if (b){
            data.put("delState", true);
        }else {
            data.put("delState", false);
        }
        return data.toJSONString();
    }

    @RequestMapping("/do-updateEmp.ajax")
    @ResponseBody
    public String updateEmp(Emp emp){
        boolean b = empService.doUpdate(Integer.toString(emp.getId()),emp);

//        System.out.println(emp);
        JSONObject data = new JSONObject();
        if (b){
            data.put("updateState",true);
        }else {
            data.put("updateState",false);
        }
        return data.toJSONString();
    }

    @RequestMapping("/searchEmp.ajax")
    @ResponseBody
    public String searchEmp(String input,Integer index,int eachPageDataNumb){

        //获得搜索后的emp list
        //校验参数
        if (index == null){
            index = 1;
        }
        //调用Service
        TableData<Emp> td = empService.list(index, eachPageDataNumb, input);

        //处理结果
        return WebUtils.returnData(td);
//        List<Emp> findList = empService.doFind(input,index,eachPageDataNumb);//分页后的数据
//        int allDataSize = empService.listCount(input);//总数据
//
//        int pageSize = 1;
//        if (allDataSize%eachPageDataNumb == 0){
//            pageSize = allDataSize/eachPageDataNumb;
//        }else {
//            pageSize = allDataSize/eachPageDataNumb+1;
//        }
//
//        JSONObject data = new JSONObject();
//        data.put("findList",findList);
//        data.put("pageSize",pageSize);
//        data.put("allDataSize",allDataSize);
//        return data.toJSONString();
    }

    @RequestMapping("/lockEmp.ajax")
    @ResponseBody
    public String lockEmp(String id){
        boolean b = empService.doLockEmp(Integer.parseInt(id));

        JSONObject data = new JSONObject();
        if (b){
            data.put("updateState",true);
        }else {
            data.put("updateState",false);
        }
        return data.toJSONString();
    }
}
