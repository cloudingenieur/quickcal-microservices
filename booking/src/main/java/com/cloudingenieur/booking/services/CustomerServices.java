package com.cloudingenieur.booking.services;

import com.cloudingenieur.booking.entities.Customer;
import com.cloudingenieur.booking.repositories.CustomerRepository;
import org.springframework.data.domain.Page;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class CustomerServices {

    @Autowired
    private CustomerRepository customerRepository;

    public Page<Customer> getCustomers(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);

        return customerRepository.findAll(pageable);
    }

    public void saveCustomer(Customer customer) {
        customerRepository.save(customer);
    }
}
