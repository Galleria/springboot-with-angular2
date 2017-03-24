package com.gallerias.ng.exception;

public class ResourceNotFoundException extends BaseException{

	private static final long serialVersionUID = 1L;
	private static final String RESOURCE_NOT_FOUND_EXCEPTION = "Not Found";
	
	public ResourceNotFoundException() {
		super(RESOURCE_NOT_FOUND_EXCEPTION);
	}
	
	public ResourceNotFoundException(String message) {
		super(message);
	}
	
}