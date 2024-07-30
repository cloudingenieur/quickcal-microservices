package com.cloudingenieur.order.controllers;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/orders/v1")
public class OrderController {

    @PreAuthorize("hasAuthority('SCOPE_TEST')")
    @GetMapping("")
    public String getOrders() {
        SecurityContext context = SecurityContextHolder.getContext();
        Authentication authentication = context.getAuthentication();
        return "Hello Orders + Scopes: " + authentication.getAuthorities();
    }
}
