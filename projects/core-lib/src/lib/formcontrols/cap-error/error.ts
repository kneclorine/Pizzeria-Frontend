const ERRORS: { [key: string]: any } = {
    required: "valor requerido",
    email: "El email debe ser correcto",
    requiredTrue: "Debe aceptar las condiciones"
}

export function getError(error: string): string {
    return ERRORS[error]
}