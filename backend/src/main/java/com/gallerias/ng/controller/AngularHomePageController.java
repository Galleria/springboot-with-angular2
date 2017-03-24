package com.gallerias.ng.controller;

import org.springframework.boot.autoconfigure.web.ErrorController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class AngularHomePageController implements ErrorController{
	
	private static final String PATH = "/error";
	private static final String INDEX = "forward:index.html";
	
	@RequestMapping({"/"})
    public String index() {
        return INDEX;
    }
	
	@RequestMapping(value=PATH)
    public String error() {
        return INDEX;
    }

	@Override
	public String getErrorPath() {
		return PATH;
	}
}
