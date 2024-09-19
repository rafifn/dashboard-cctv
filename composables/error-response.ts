interface Fields {
  [key: string]: string
}

interface Errors {
  [key: string]: string[]
}

export const useToastError = (fields: Fields, errors: Errors) => {
  const toast = useToast()
  for (const key in errors) {
    // eslint-disable-next-line no-prototype-builtins
    if (errors.hasOwnProperty(key)) {
      const fieldName = fields[key] || 'something went wrong'
      const errorMessages = errors[key] || []
      const alertMessage = `${fieldName}: ${Array.isArray(errorMessages) ? errorMessages?.join(', ') : errorMessages}`
      toast.add({ description: alertMessage, color: 'red' })
    }
  }
}
