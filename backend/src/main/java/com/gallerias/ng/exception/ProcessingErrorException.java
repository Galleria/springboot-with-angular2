package com.gallerias.ng.exception;


public class ProcessingErrorException extends BaseException {

	private static final long serialVersionUID = 1L;
	private static final String PRICESSING_ERROR_EXCEPTION = "Processing Error";
	
	
	public ProcessingErrorException() {
		super(PRICESSING_ERROR_EXCEPTION);
	}
	
	public ProcessingErrorException(String message) {
		super(message);
	}

	
}
