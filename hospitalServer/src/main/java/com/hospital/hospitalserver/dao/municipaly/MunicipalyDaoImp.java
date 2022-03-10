package com.hospital.hospitalserver.dao.municipaly;

import com.hospital.hospitalserver.models.Municipality;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;
import java.util.List;

@Repository
@Transactional
public class MunicipalyDaoImp implements MunicipalityDao {
    @PersistenceContext
    EntityManager entityManager;

    @Override
    public List<Municipality> getMunicipalities(int departmentId) {
        String query = "FROM Municipality WHERE departmentId = :departmentId";
        List<Municipality> result = entityManager.createQuery(query)
                .setParameter("departmentId", departmentId)
                .getResultList();
        return result;
    }
}
