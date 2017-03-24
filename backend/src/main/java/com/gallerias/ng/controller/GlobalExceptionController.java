package com.gallerias.ng.controller;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.gallerias.ng.exception.BadRequestErrorException;
import com.gallerias.ng.exception.BaseException;
import com.gallerias.ng.exception.ProcessingErrorException;
import com.gallerias.ng.exception.ResourceNotFoundException;

@ControllerAdvice
@RestController 
public class GlobalExceptionController {
	
	@ResponseStatus(HttpStatus.BAD_REQUEST)
	@ExceptionHandler(value = BadRequestErrorException.class)
	public String handleBadRequestException(BadRequestErrorException e) {
		return e.getMessage();
	}
	
	@ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
	@ExceptionHandler(value = ProcessingErrorException.class)
	public String handleProcessErrorException(ProcessingErrorException e) {
		return e.getMessage();
	}
	
	@ResponseStatus(HttpStatus.NOT_FOUND)
	@ExceptionHandler(value = ResourceNotFoundException.class)
	public String handleResourceNotFoundException(ResourceNotFoundException e) {
		return e.getMessage();
	}
	
	
	@ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
	@ExceptionHandler(value = BaseException.class)
	public String handleBaseException(Exception e) {
		return e.getMessage();
	}
	
	
	@ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
	@ExceptionHandler(value = Exception.class)
	public String handleException(Exception e) {
		return e.getMessage();
	}
}
