package com.code.entity;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.io.Serializable;

/**
 * @author Alex$
 * @create 03$ 14:40$
 * @desc
 **/
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Car extends BaseModel implements Serializable{

    @Id
    @GeneratedValue
    private Long id;

    private String brand;

    private int speed;

}
