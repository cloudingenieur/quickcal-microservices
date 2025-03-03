package com.cloudingenieur.booking.controllers;

import com.cloudingenieur.booking.entities.Customer;
import com.cloudingenieur.booking.repositories.CustomerRepository;
import com.cloudingenieur.booking.services.CustomerServices;
import com.cloudingenieur.booking.util.JsonConverter;
import com.fasterxml.jackson.databind.node.ObjectNode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import jakarta.persistence.Tuple;

import java.io.IOException;
import java.util.List;


@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/bookings/v1")
public class CustomerController {


    @Autowired
    private CustomerRepository customerRepository;

    @Autowired
    private CustomerServices customerServices;

    @Autowired
    private JsonConverter jsonConverter;

    @PreAuthorize("hasAuthority('SCOPE_TEST')")
    @GetMapping("/scopes")
    public String getScopes() {
        SecurityContext context = SecurityContextHolder.getContext();
        Authentication authentication = context.getAuthentication();
        return "Scopes: " + authentication.getAuthorities();
    }


    @PreAuthorize("hasAuthority('SCOPE_TEST')")
    @GetMapping("/customers")
    public ResponseEntity<?> getAllCustomers(@RequestParam(defaultValue = "0") int page,
                                             @RequestParam(defaultValue = "10") int size) {
        var x = customerServices.getCustomers(0, 1);
        System.out.println(x);

        return ResponseEntity.status(HttpStatus.OK).body(customerServices.getCustomers(page, size));

    }


    @CrossOrigin(origins = "*")
    @PostMapping(value = "/customer/new", produces = "application/json", consumes = "application/json")
    @PreAuthorize("hasAuthority('SCOPE_TEST')")
    public ResponseEntity<?> createCustomer(@RequestBody Customer customer) throws IOException {
        var id = customerRepository.findById(customer.getId());

        // TODO: fix dublicated user
        /*if(id.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Customer is already found");
        } */
        customerServices.saveCustomer(customer);
        return ResponseEntity.status(HttpStatus.CREATED).body("Customer created");
    }


    @DeleteMapping(value = "/customer/{id}")
    @PreAuthorize("hasAuthority('SCOPE_TEST')")
    public void deleteCustomer(@PathVariable final Long id) {
        //Customer customerById = customerRepository.findById(id)
        customerRepository.deleteById(id);
    }

    @PutMapping(value = "/customer/{id}")
    @PreAuthorize("hasAuthority('SCOPE_TEST')")
    public ResponseEntity<?> updateCustomer(@PathVariable final Long id, @RequestBody Customer customers) {
        return customerRepository.findById(id)
                .map(client -> {
                    client.setName(customers.getName());
                    client.setAddress(customers.getAddress());
                    client.setEmail(customers.getEmail());
                    client.setPhone(customers.getPhone());
                    client.setCreated_date(customers.getCreated_date());

                     customerRepository.save(client);
                    return ResponseEntity.status(HttpStatus.CREATED).body("Customer Updated" + client);
                })
                .orElseGet(() -> {
                    customers.setId(id);
                    customerRepository.save(customers);

                    return  ResponseEntity.status(HttpStatus.CREATED).body("New Customer Created!");

                });
    }
}
