export type ProfileInfo = {
    id?: number
    first_name?: string
    last_name?: string
    profile_photo?: string
    date_joined?: string
    background_photo?: string
    address?: string
    phone_number?: string
    email?: string
    [rest: string]: any
}