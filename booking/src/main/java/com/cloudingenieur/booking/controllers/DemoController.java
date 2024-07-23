package com.cloudingenieur.booking.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DemoController {

    @GetMapping("api/v1/events")
    public String getEvents() {
        return "Hello World";
    }
}
