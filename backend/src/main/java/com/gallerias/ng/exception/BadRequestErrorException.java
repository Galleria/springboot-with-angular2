package com.gallerias.ng.exception;

public class BadRequestErrorException extends BaseException{

	private static final long serialVersionUID = 1L;
	private static final String BAD_REQUEST_EXCEPTION = "Bad Request";

	public BadRequestErrorException() {
		super(BAD_REQUEST_EXCEPTION);
	}
	
	public BadRequestErrorException(String message) {
		super(message);
	}

}
