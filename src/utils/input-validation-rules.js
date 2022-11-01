
export const requiredRule = (name, value) => {
    
    return value.trim() === '' ? name + ' is required' : '';
}