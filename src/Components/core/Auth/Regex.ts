export const FIRST_NAME_REGEX = /^[a-zA-Z]{3,25}$/
export const LAST_NAME_REGEX = /^[a-zA-Z]{3,25}$/
export const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
export const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,25}$/

const only_letters = (input: string) => /^[a-zA-Z]$/.test(input)
const length = (input: string, min: number, max: number) => {
    return min <= input.length && input.length <= max
}

export const validate_name = (name: string) => {
    const is_valid = [only_letters(name), length(name, 3, 25)].every(el => el === true)
}