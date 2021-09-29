const ERRORS: { [key: string]: any } = {
    required: "valor requerido",
}

export function getError(error: string): string {
    return ERRORS[error]
}