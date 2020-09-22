package org.xue.utils;

import org.apache.ibatis.session.RowBounds;

public class PageUtils {
    /**
     * 获取最后一页页码
     *
     * @param dataCount 数据总条数
     * @param pageSize  一页数据条数
     * @return 最后一页页码
     */
    public static Integer getLastPage(Integer dataCount, Integer pageSize) {
        if (dataCount % pageSize == 0) {
            return dataCount / pageSize;
        } else {
            return (dataCount / pageSize) + 1;
        }
    }

    /**
     * 分页数据计算
     *
     * @param pageIndex 当前页
     * @param pageSize  每页数据条数
     * @return RowBounds
     */
    public static RowBounds getRowBounds(Integer pageIndex, Integer pageSize) {
        int offset = (pageIndex - 1) * pageSize;
        int limit = pageSize;
        RowBounds rb = new RowBounds(offset, limit);
        return rb;
    }
}
