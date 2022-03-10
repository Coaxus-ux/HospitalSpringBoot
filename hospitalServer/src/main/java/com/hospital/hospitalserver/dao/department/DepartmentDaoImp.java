package com.hospital.hospitalserver.dao.department;

import com.hospital.hospitalserver.models.Departments;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;
import java.util.List;

@Repository
@Transactional
public class DepartmentDaoImp implements DepartmentDao {
    @PersistenceContext
    EntityManager entityManager;
    @Override
    public List<Departments> getDepartments() {
        String query = "FROM Departments ORDER BY departmentName";
        List<Departments> result = entityManager.createQuery(query).getResultList();
        return result;
    }
}
