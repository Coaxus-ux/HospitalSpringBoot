package com.hospital.hospitalserver.controllers;
import com.hospital.hospitalserver.dao.department.DepartmentDao;
import com.hospital.hospitalserver.models.Departments;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class DepartmentController {
    @Autowired
    private DepartmentDao departmentDao;

    @RequestMapping(value = "api/departments", method = RequestMethod.GET)
    public List<Departments> getDepartments() {
        return departmentDao.getDepartments();
    }

}
