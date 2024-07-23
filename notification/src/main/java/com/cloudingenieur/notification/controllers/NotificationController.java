package com.cloudingenieur.notification.controllers;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/notifications/v1")
public class NotificationController {

    @PreAuthorize("hasAuthority('SCOPE_TEST')")
    @GetMapping("")
    public String getAllNotifications() {
        SecurityContext context = SecurityContextHolder.getContext();
        Authentication authentication = context.getAuthentication();
        return "Scopes Notifications: " + authentication.getAuthorities();
    }
}
