package com.code.service;

import com.code.entity.BaseModel;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

/**
 * @author Alex$
 * @create 11$ 16:34$
 * @desc
 **/
public interface BaseService {
    <Model extends BaseModel> Page<Model> findAll(Pageable pageable);

    <Model extends BaseModel> Model selectByPrimaryKey(Object primaryKey);

    <Model extends BaseModel> int save(Model var);

    <Model extends BaseModel> int update(Model var);

    <Model extends BaseModel> int deleteByPrimaryKey(Object primaryKey);
}
