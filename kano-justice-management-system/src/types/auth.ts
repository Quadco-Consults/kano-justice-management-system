export interface User {
  id: string
  email: string
  name: string
  role: UserRole
  department: string
  avatar?: string
  isActive: boolean
  createdAt: Date
  updatedAt: Date
}

export enum UserRole {
  ADMIN = 'ADMIN',
  ATTORNEY_GENERAL = 'ATTORNEY_GENERAL',
  DEPUTY_ATTORNEY_GENERAL = 'DEPUTY_ATTORNEY_GENERAL',
  DIRECTOR = 'DIRECTOR',
  PROSECUTOR = 'PROSECUTOR',
  LEGAL_OFFICER = 'LEGAL_OFFICER',
  LEGISLATIVE_DRAFTER = 'LEGISLATIVE_DRAFTER',
  COURT_LIAISON = 'COURT_LIAISON',
  CASE_MANAGER = 'CASE_MANAGER',
  CLERK = 'CLERK'
}

export interface LoginCredentials {
  email: string
  password: string
}

export interface RegisterData {
  email: string
  password: string
  name: string
  role: UserRole
  department: string
}

export interface AuthSession {
  user: User
  accessToken: string
  refreshToken?: string
  expires: string
}

export interface Department {
  id: string
  name: string
  description: string
  head: string
}

// Available departments in the Ministry of Justice
export const DEPARTMENTS = [
  'Legal Advisory',
  'Public Prosecution',
  'Civil Litigation',
  'Legislative Drafting',
  'Court Affairs',
  'Administration',
  'Legal Records',
  'Statutory Compliance'
] as const

export type DepartmentType = typeof DEPARTMENTS[number]