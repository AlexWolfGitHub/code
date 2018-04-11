package com.code.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.io.Serializable;
import java.util.Date;

/**
 * @author Alex$
 * @create 11$ 15:40$
 * @desc
 **/
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class CompanyNews extends BaseModel implements Serializable {
    @Id
    @GeneratedValue
    private Long id;
    private String title;
    private String content;
    private Date date;
}
