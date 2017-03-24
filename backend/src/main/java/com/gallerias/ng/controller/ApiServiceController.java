package com.gallerias.ng.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.gallerias.ng.model.Person;

@Controller
public class ApiServiceController {
	
	@RequestMapping({"/hello"})
    public ResponseEntity<?> helloAnonymous() {
		Person p = new Person();
		p.setName("Anonymous");
        return new ResponseEntity<>( p , HttpStatus.OK );
    }
	
}
