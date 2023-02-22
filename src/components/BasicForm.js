import useInput from '../hooks/use-input';

const isNotEmpty = value => value.trim() !== '';
const isEmail = value => value.trim() !== '' && value.includes('@');

const BasicForm = (props) => {
	const {
		value: firstNameValue,
		isValid: firstNameIsValid,
		hasError: firstNameHasError,
		valueChangeHandler: firstNameChangeHandler,
		inputBlurHandler: firstNameBlurHandler,
		reset: firstNameReset,
	} = useInput(isNotEmpty);

	const {
		value: lastNameValue,
		isValid: lastNameIsValid,
		hasError: lastNameHasError,
		valueChangeHandler: lastNameChangeHandler,
		inputBlurHandler: lastNameBlurHandler,
		reset: lastNameReset,
	} = useInput(isNotEmpty);

	const {
		value: emailValue,
		isValid: emailIsValid,
		hasError: emailHasError,
		valueChangeHandler: emailChangeHandler,
		inputBlurHandler: emailBlurHandler,
		reset: EmailReset,
	} = useInput(isEmail);

	const firstNameStyles = firstNameHasError
		? 'form-control invalid'
		: 'form-control';

	const lastNameStyles = lastNameHasError
		? 'form-control invalid'
		: 'form-control';

	const emailStyles = emailHasError ? 'form-control invalid' : 'form-control';

	let formIsValid = false;

	if (firstNameIsValid && lastNameIsValid && emailIsValid) {
		formIsValid = true;
	}

	const formSubmissionHandler = (event) => {
		event.preventDefault();

		if (!formIsValid) {
			return;
		}

		console.log(firstNameValue, lastNameValue, emailValue);

		firstNameReset();
		lastNameReset();
		EmailReset();
	};

	return (
		<form onSubmit={formSubmissionHandler}>
			<div className='control-group'>
				<div className={firstNameStyles}>
					<label htmlFor='name'>이름</label>
					<input
						type='text'
						id='name'
						onChange={firstNameChangeHandler}
						onBlur={firstNameBlurHandler}
						value={firstNameValue}
					/>
					{firstNameHasError && (
						<p className='error-text'>
							이름을 정확히 입력해주세요.
						</p>
					)}
				</div>
				<div className={lastNameStyles}>
					<label htmlFor='name'>성</label>
					<input
						type='text'
						id='name'
						onChange={lastNameChangeHandler}
						onBlur={lastNameBlurHandler}
						value={lastNameValue}
					/>
					{lastNameHasError && (
						<p className='error-text'>성을 정확히 입력해주세요.</p>
					)}
				</div>
			</div>
			<div className={emailStyles}>
				<label htmlFor='name'>이메일</label>
				<input
					type='text'
					id='name'
					onChange={emailChangeHandler}
					onBlur={emailBlurHandler}
					value={emailValue}
				/>
				{emailHasError && (
					<p className='error-text'>이메일을 정확히 입력해주세요.</p>
				)}
			</div>
			<div className='form-actions'>
				<button disabled={!formIsValid}>제출</button>
			</div>
		</form>
	);
};

export default BasicForm;
