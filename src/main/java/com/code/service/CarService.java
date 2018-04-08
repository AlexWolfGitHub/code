package com.code.service;

import com.code.entity.Car;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Map;

/**
 * @author Alex$
 * @create 03$ 15:08$
 * @desc
 **/
public interface CarService {
    Page<Car> findAll(Pageable pageable);

    Map<String, Object> addCar(Car car);
}
