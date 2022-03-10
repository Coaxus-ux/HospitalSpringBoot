package com.hospital.hospitalserver.dao.municipaly;

import com.hospital.hospitalserver.models.Municipality;

import java.util.List;

public interface MunicipalityDao {
    List<Municipality> getMunicipalities(int departmentId);
}
