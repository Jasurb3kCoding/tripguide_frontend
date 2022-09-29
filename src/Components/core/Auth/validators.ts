const ERROR_MESSAGES = {
    ONLY_LETTERS_AND_SPACE: 'This field can include only letters and space',
    MIN_LENGTH: 'This field should include at least {MIN_LENGTH} characters',
    MAX_LENGTH: 'This field should include maximum of {MAX_LENGTH} characters',
    WRONG_EMAIL: 'Invalid Email',
    PWD_INCLUDE_LOWERCASE_LETTER: 'Password should include at least one lower case letter',
    PWD_INCLUDE_UPPERCASE_LETTER: 'Password should include at least one UPPER case letter',
    PWD_INCLUDE_NUMBER: 'Password should include at least one NUMBER',
    PWD_INCLUDE_SPECIAL_CHARACTER: 'Password should include at least one SPECIAL CHARACTER',
}

const error = (message: string) => {
    return {
        is_valid: false,
        message: message
    }
}
const VALID = {
    is_valid: true,
    message: ''
}

export const validateName = (name: string) => {
    const MIN_NAME_LENGTH = 3
    const MAX_NAME_LENGTH = 25
    // Check if it includes only letters and space " "
    if (!/^[a-zA-Z\s]*$/.test(name)) return error(ERROR_MESSAGES.ONLY_LETTERS_AND_SPACE)

    // Check the length
    if (MIN_NAME_LENGTH > name.length) return error(ERROR_MESSAGES.MIN_LENGTH.replace('{MIN_LENGTH}', MIN_NAME_LENGTH.toString()))
    if (MAX_NAME_LENGTH < name.length) return error(ERROR_MESSAGES.MAX_LENGTH.replace('{MAX_LENGTH}', MAX_NAME_LENGTH.toString()))
    return VALID
}

export const validateEmail = (email: string) => {
    // Check if it includes only letters and space " "
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) return error(ERROR_MESSAGES.WRONG_EMAIL)
    return VALID
}

export const validatePassword = (password: string) => {
    const MIN_PASSWORD_LENGTH = 8
    const MAX_PASSWORD_LENGTH = 45

    // Check if it includes only letters and space " "
    if (!/(?=.*[a-z])/.test(password)) return error(ERROR_MESSAGES.PWD_INCLUDE_LOWERCASE_LETTER)
    if (!/(?=.*[A-Z])/.test(password)) return error(ERROR_MESSAGES.PWD_INCLUDE_UPPERCASE_LETTER)
    if (!/(?=.*\d)/.test(password)) return error(ERROR_MESSAGES.PWD_INCLUDE_NUMBER)
    if (!/(?=.*\W)/.test(password)) return error(ERROR_MESSAGES.PWD_INCLUDE_SPECIAL_CHARACTER)

    // Check the length
    if (MIN_PASSWORD_LENGTH > password.length) return error(ERROR_MESSAGES.MIN_LENGTH.replace('{MIN_LENGTH}', MIN_PASSWORD_LENGTH.toString()))
    if (MAX_PASSWORD_LENGTH < password.length) return error(ERROR_MESSAGES.MAX_LENGTH.replace('{MAX_LENGTH}', MAX_PASSWORD_LENGTH.toString()))

    return VALID
}

export const validatePasswordForLogin = (password: string) => {
    const MIN_PASSWORD_LENGTH = 8
    const MAX_PASSWORD_LENGTH = 45
    // Check the length
    if (MIN_PASSWORD_LENGTH > password.length) return error(ERROR_MESSAGES.MIN_LENGTH.replace('{MIN_LENGTH}', MIN_PASSWORD_LENGTH.toString()))
    if (MAX_PASSWORD_LENGTH < password.length) return error(ERROR_MESSAGES.MAX_LENGTH.replace('{MAX_LENGTH}', MAX_PASSWORD_LENGTH.toString()))
    return VALID
}

