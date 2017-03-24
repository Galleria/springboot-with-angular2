package com.gallerias.ng.exception;

public class UnauthorizedErrorException extends BaseException{

	private static final long serialVersionUID = 1L;
	private static final String UNAUTHORIZED_ERROR_EXCEPTION = "Unauthorized";

	public UnauthorizedErrorException() {
		super(UNAUTHORIZED_ERROR_EXCEPTION);
	}
	
	public UnauthorizedErrorException(String message) {
		super(message);
	}
	
}