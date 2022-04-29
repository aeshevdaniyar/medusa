/**
 * Generated by orval v6.7.1 🍺
 * Do not edit manually.
 * Medusa Admin API
 * OpenAPI spec version: 1.0.0
 */
import type { Product } from "./product"
import type { ProductCollectionMetadata } from "./productCollectionMetadata"

/**
 * Product Collections represents a group of Products that are related.
 */
export interface ProductCollection {
  /** The id of the Product Collection. This value will be prefixed with `pcol_`. */
  id?: string
  /** The title that the Product Collection is identified by. */
  title?: string
  /** A unique string that identifies the Product Collection - can for example be used in slug structures. */
  handle?: string
  /** The Products contained in the Product Collection. */
  products?: Product[]
  /** The date with timezone at which the resource was created. */
  created_at?: string
  /** The date with timezone at which the resource was last updated. */
  updated_at?: string
  /** The date with timezone at which the resource was last updated. */
  deleted_at?: string
  /** An optional key-value map with additional information. */
  metadata?: ProductCollectionMetadata
}
