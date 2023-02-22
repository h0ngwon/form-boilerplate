import useInput from '../hooks/use-input';

const SimpleInput = (props) => {
	const {
		value: enteredName,
		isValid: enteredNameIsValid,
		hasError: nameInputHasError,
		valueChangeHandler: nameChangedHandler,
		inputBlurHandler: nameBlurHandler,
		reset: resetName,
	} = useInput((value) => value.trim() !== '');

	const {
		value: enteredEmail,
		isValid: enteredEmailIsValid,
		hasError: emailInputHasError,
        valueChangeHandler : emailChangeHandler,
        inputBlurHandler : emailBlurHandler,
        reset: resetEmail
	} = useInput((value) => {
		return value.trim() !== '' && value.includes('@');
	});

	let formIsValid = false;

	if (enteredNameIsValid && enteredEmailIsValid) {
		formIsValid = true;
	}

	const formSubmissionHandler = (event) => {
		event.preventDefault();

		if (!enteredNameIsValid) {
			return;
		}

		resetName();
		resetEmail();
	};

	const nameInputClasses = nameInputHasError
		? 'form-control invalid'
		: 'form-control';

	const emailInputClasses = emailInputHasError
		? 'form-control invalid'
		: 'form-control';
	return (
		<form onSubmit={formSubmissionHandler}>
			<div className={nameInputClasses}>
				<label htmlFor='name'>이름</label>
				<input
					type='text'
					id='name'
					onChange={nameChangedHandler}
					onBlur={nameBlurHandler}
					value={enteredName}
				/>
				{nameInputHasError && (
					<p className='error-text'>이름은 공백일 수 없습니다.</p>
				)}
			</div>

			<div className={emailInputClasses}>
				<label htmlFor='email'>이메일</label>
				<input
					type='email'
					id='email'
					onChange={emailChangeHandler}
					onBlur={emailBlurHandler}
					value={enteredEmail}
				/>
				{emailInputHasError && (
					<p className='error-text'>정확한 이메일을 적어주세요.</p>
				)}
			</div>
			<div className='form-actions'>
				<button disabled={!formIsValid}>제출</button>
			</div>
		</form>
	);
};

export default SimpleInput;
