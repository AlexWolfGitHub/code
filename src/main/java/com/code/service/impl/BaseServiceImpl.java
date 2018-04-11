package com.code.service.impl;

import com.code.entity.BaseModel;
import com.code.repository.BaseRepository;
import com.code.service.BaseService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

/**
 * @author Alex$
 * @create 11$ 18:35$
 * @desc
 **/
public class BaseServiceImpl implements BaseService {

    protected BaseRepository repository;

    public BaseServiceImpl() {
    }

    public BaseRepository getRepository() {
        if (this.repository == null) {
            throw new NullPointerException("repository is null!");
        } else {
            return this.repository;
        }
    }

    @Override
    public <Model extends BaseModel> Page findAll(Pageable pageable) {
        return this.getRepository().findAll(pageable);
    }

    @Override
    public <Model extends BaseModel> Model selectByPrimaryKey(Object primaryKey) {
        return (Model)this.getRepository().getOne(primaryKey);
    }

    @Override
    public <Model extends BaseModel> int save(Model var) {
        this.getRepository().save(var);
        return 1;
    }

    @Override
    public <Model extends BaseModel> int update(Model var) {
        this.getRepository().save(var);
        return 1;
    }

    @Override
    public <Model extends BaseModel> int deleteByPrimaryKey(Object primaryKey) {
        this.getRepository().deleteById(primaryKey);
        return 1;
    }
}
