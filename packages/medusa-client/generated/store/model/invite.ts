/**
 * Generated by orval v6.7.1 🍺
 * Do not edit manually.
 * Medusa Storefront API
 * OpenAPI spec version: 1.0.0
 */
import type { InviteRole } from "./inviteRole"
import type { InviteMetadata } from "./inviteMetadata"

/**
 * Represents an invite
 */
export interface Invite {
  id?: string
  user_email?: string
  role?: InviteRole
  accepted?: boolean
  token?: string
  expores_at?: string
  created_at?: string
  updated_at?: string
  deleted_at?: string
  metadata?: InviteMetadata
}
