package com.code.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
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
 * @create 11$ 15:39$
 * @desc
 **/
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer","handler"})
public class CompanyInfo extends BaseModel implements Serializable {

    @Id
    @GeneratedValue
    private Long id;
    private String companyName;
    private String companyCulture;
    private String companyIntroduction;
    private String companyLogo;
    private String companyIndustry;
    private String registrantPosition;
    private String responsiblePerson;
    private String mobilePhone;
    private String email;
    private String address;
    private String postcodes;
    private String telephone;
    private Date businessRegistrationTime;
}
