export const DEPARTMENTS = [
    { id: 'cs', name: 'Computer Science' },
    { id: 'math', name: 'Mathematics' },
    { id: 'eng', name: 'English' },
]

export const DEPARTMENT_OPTIONS = DEPARTMENTS.map(dept => ({
    value: dept.id,
    label: dept.name,
}))