package com.cloudingenieur.booking.repositories;

import com.cloudingenieur.booking.entities.Customer;
import jakarta.persistence.Tuple;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@Transactional
public interface CustomerRepository extends JpaRepository<Customer, Long> {

    @Query(value = "SELECT * FROM `customerDB`.customer", nativeQuery = true)
    List<Tuple> findAllCustomers();
}
