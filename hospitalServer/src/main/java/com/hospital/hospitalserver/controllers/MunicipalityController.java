package com.hospital.hospitalserver.controllers;

import com.hospital.hospitalserver.dao.municipaly.MunicipalityDao;
import com.hospital.hospitalserver.models.Municipality;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class MunicipalityController {
    @Autowired
    private MunicipalityDao municipalityDao;

    @RequestMapping(value = "api/municipalities/{departmentId}", method = RequestMethod.GET)
    public List<Municipality> getMunicipalities(@PathVariable int departmentId) {
        return municipalityDao.getMunicipalities(departmentId);
    }
}
