package com.code.repository;

import com.code.entity.BaseModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.NoRepositoryBean;

/**
 * @author Alex$
 * @create 11$ 18:43$
 * @desc
 **/
@NoRepositoryBean
public interface BaseRepository<Model extends BaseModel> extends JpaRepository<Model, Long>, JpaSpecificationExecutor<Model> {
}
