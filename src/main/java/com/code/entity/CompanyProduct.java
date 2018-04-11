package com.code.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.io.Serializable;

/**
 * @author Alex$
 * @create 11$ 15:41$
 * @desc
 **/
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class CompanyProduct extends BaseModel implements Serializable {
    @Id
    @GeneratedValue
    private Long id;
    private String productName;
    private String productModel;
    private String productIntroduction;
    private String productState;
}
