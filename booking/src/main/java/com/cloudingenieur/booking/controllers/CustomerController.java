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
}
