package com.code.service.impl;

import com.code.entity.CompanyInfo;
import com.code.repository.BaseRepository;
import com.code.repository.CompanyInfoRepository;
import com.code.service.CompanyInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @author Alex$
 * @create 11$ 19:15$
 * @desc
 **/
@Service
public class CompanyInfoServiceImpl extends BaseServiceImpl implements CompanyInfoService{

    @Autowired
    private CompanyInfoRepository companyInfoRepository;

    @Override
    public BaseRepository getRepository() {
        return companyInfoRepository;
    }
}
