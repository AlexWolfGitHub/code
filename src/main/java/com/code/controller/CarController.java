package com.code.controller;

import com.code.entity.Car;
import com.code.service.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.querydsl.QPageRequest;
import org.springframework.web.bind.annotation.*;
import utils.ResultUtils;

import java.util.Map;

/**
 * @author Alex$
 * @create 03$ 15:14$
 * @desc
 **/
@RestController
@RequestMapping("/car")
public class CarController {

    @Autowired
    private CarService carService;

    @RequestMapping(value = "/findAll",method = RequestMethod.GET)
    public Page<Car> findAll(@RequestParam(required = false,defaultValue = "0")Integer currentPage,
                             @RequestParam(required = false,defaultValue = "10")Integer pageSize){
        Pageable pageable= new PageRequest(currentPage,pageSize);
        return carService.findAll(pageable);
    }

    @RequestMapping(value = "/addCar",method = RequestMethod.POST)
    public Map<String,Object> addCar(@RequestBody Car car){
        carService.addCar(car);
        return ResultUtils.getSuccessResultData();
    }

    @RequestMapping(value = "/")
    public String findAll(){
        return "hello";
    }
}
