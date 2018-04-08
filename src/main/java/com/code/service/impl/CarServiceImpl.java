package com.code.service.impl;

import com.code.entity.Car;
import com.code.repository.CarRepository;
import com.code.service.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import utils.ResultUtils;

import java.util.Map;


/**
 * @author Alex$
 * @create 03$ 15:10$
 * @desc
 **/
@Service
public class CarServiceImpl implements CarService{

    @Autowired
    private CarRepository carRepository;

    @Override
    public Page<Car> findAll(Pageable pageable) {
        return carRepository.findAll(pageable);
    }

    @Override
    public Map<String, Object> addCar(Car car) {
        carRepository.save(car);
        return ResultUtils.getSuccessResultData();
    }
}
