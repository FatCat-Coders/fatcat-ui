const MAX_ALLOWED_FILE_SIZE = 1048576;
const ALLOWED_FILE_TYPE = 'application/pdf';

enum FileErrors {
  maxFileSize = 'File too large (up to 1 MB)',
  fileType = 'Incorrect file type (PDF only)',
  required = 'This field is required'
}

export const validateFile = (file) => {
	const errors = [];

	if (file) {
		if (file.size > MAX_ALLOWED_FILE_SIZE) {
			errors.push(FileErrors.maxFileSize);
		}
		if (file.type !== ALLOWED_FILE_TYPE) {
			errors.push(FileErrors.fileType);
		}
	} else {
		errors.push(FileErrors.required);
	}

	return errors;
};
