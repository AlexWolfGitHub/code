package com.code.controller;

import com.code.entity.CompanyInfo;
import com.code.service.CompanyInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;
import utils.ResultUtils;

import java.util.Map;

/**
 * @author Alex$
 * @create 11$ 19:26$
 * @desc
 **/
@RestController
@RequestMapping("/companyInfo")
public class CompanyInfoController {

    @Autowired
    private CompanyInfoService companyInfoService;

    @RequestMapping(value = "/findAll", method = RequestMethod.GET)
    public Page<CompanyInfo> findAll(@RequestParam(required = false, defaultValue = "0") Integer currentPage,
                                     @RequestParam(required = false, defaultValue = "10") Integer pageSize) {
        Pageable pageable = new PageRequest(currentPage, pageSize);
        return companyInfoService.findAll(pageable);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public CompanyInfo findOne(@PathVariable("id") Long id) {
        return companyInfoService.selectByPrimaryKey(id);
    }

    @RequestMapping(method = RequestMethod.POST)
    public Map<String, Object> add(@RequestBody CompanyInfo companyInfo) {
        companyInfoService.save(companyInfo);
        return ResultUtils.getSuccessResultData();
    }

    @RequestMapping(method = RequestMethod.PUT)
    public Map<String, Object> update(@RequestBody CompanyInfo companyInfo) {
        companyInfoService.update(companyInfo);
        return ResultUtils.getSuccessResultData();
    }

    @RequestMapping(value = "/{id}",method = RequestMethod.DELETE)
    public Map<String, Object> delete(@PathVariable("id") Long id) {
        companyInfoService.deleteByPrimaryKey(id);
        return ResultUtils.getSuccessResultData();
    }

}
