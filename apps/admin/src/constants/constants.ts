import { ApiRole } from 'ordercloud-javascript-sdk'

//Basic auth configuration
const APP_NAME = import.meta.env.VITE_APP_NAME || 'Application Name'
const BASE_API_URL =
  import.meta.env.VITE_APP_ORDERCLOUD_BASE_API_URL || 'https://api.ordercloud.io/v1'
const CLIENT_ID = import.meta.env.VITE_APP_ORDERCLOUD_CLIENT_ID
const SCOPE_STRING = import.meta.env.VITE_APP_ORDERCLOUD_SCOPE
const CUSTOM_SCOPE_STRING = import.meta.env.VITE_APP_ORDERCLOUD_CUSTOM_SCOPE

const SCOPE: ApiRole[] = SCOPE_STRING?.length ? (SCOPE_STRING.split(',') as ApiRole[]) : []
const CUSTOM_SCOPE: string[] = CUSTOM_SCOPE_STRING?.length ? CUSTOM_SCOPE_STRING.split(',') : []

//Anonymous auth configuration
const ALLOW_ANONYMOUS_STRING = import.meta.env.VITE_APP_ORDERCLOUD_ALLOW_ANONYMOUS
const ALLOW_ANONYMOUS: boolean = Boolean(ALLOW_ANONYMOUS_STRING === 'true')

// Site Theming
const THEME_COLOR_PRIMARY = import.meta.env.VITE_APP_PUBLIC_THEME_COLOR_PRIMARY
const THEME_COLOR_SECONDARY = import.meta.env.VITE_APP_PUBLIC_THEME_COLOR_SECONDARY
const THEME_COLOR_ACCENT = import.meta.env.VITE_APP_PUBLIC_THEME_COLOR_ACCENT
const THEME_LOGO_URL = import.meta.env.VITE_APP_PUBLIC_THEME_LOGO_URL

export {
  APP_NAME,
  BASE_API_URL,
  CLIENT_ID,
  SCOPE,
  CUSTOM_SCOPE,
  ALLOW_ANONYMOUS,
  THEME_COLOR_PRIMARY,
  THEME_COLOR_SECONDARY,
  THEME_COLOR_ACCENT,
  THEME_LOGO_URL,
}