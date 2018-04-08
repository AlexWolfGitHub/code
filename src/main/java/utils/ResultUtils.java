package utils;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

/**
 * 返回结果使用类
 */
public abstract class ResultUtils {

    public final static String RESULT_SYMBOL = "RESULT_SYMBOL";

    /**
     * @return 错误返回Map
     */
    public static final Map<String, Object> getFaildResultData() {
        Map<String, Object> faildResultData = new HashMap<String, Object>();
        faildResultData.put("success", false);
        return faildResultData;
    }

    /**
     * @param errorMessages 错误信息
     * @return 错误返回Map
     */
    public static final Map<String, Object> getFaildResultData(String... errorMessages) {
        Map<String, Object> faildResultData = new HashMap<String, Object>();
        faildResultData.put("success", false);
        faildResultData.put("errorMessages", errorMessages);
        return faildResultData;
    }

    /**
     * @param errorMessages 错误信息
     * @return 错误返回Map
     */
    public static final Map<String, Object> getFaildResultDataWithErrorCode(Object errorCode, String... errorMessages) {
        Map<String, Object> faildResultData = new HashMap<String, Object>();
        faildResultData.put("success", false);
        faildResultData.put("errorCode", errorCode);
        faildResultData.put("errorMessages", errorMessages);
        return faildResultData;
    }

    public static final Map<String, Object> getFaildResultData(Collection<String> errorMessages) {

        if (errorMessages!=null && errorMessages.size() > 0) {
            final String[] errorMessagesAry = errorMessages.toArray(new String[errorMessages.size()]);
            return getFaildResultData(errorMessagesAry);
        }
        return getFaildResultData();
    }

    /**
     * @return 请求成功返回Map
     */
    public static final Map<String, Object> getSuccessResultData() {
        Map<String, Object> successResultData = new HashMap<String, Object>();
        successResultData.put("success", true);
        return successResultData;
    }

    /**
     * @param data 返回数据
     * @return 请求成功返回Map
     */
    public static final Map<String, Object> getSuccessResultData(Object data) {
        Map<String, Object> successResultData = new HashMap<String, Object>();
        successResultData.put("success", true);
        successResultData.put("data", data);
        return successResultData;
    }

    /**
     * @param root 返回数据键值
     * @param data 返回数据
     * @return 请求成功返回Map
     */
    public static final Map<String, Object> getSuccessResultData(String root, Object data) {
        Map<String, Object> successResultData = new HashMap<String, Object>();
        successResultData.put("success", true);
        successResultData.put(root, data);
        return successResultData;
    }

}
