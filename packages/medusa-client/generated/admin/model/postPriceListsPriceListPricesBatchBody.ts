/**
 * Generated by orval v6.7.1 🍺
 * Do not edit manually.
 * Medusa Admin API
 * OpenAPI spec version: 1.0.0
 */
import type { PostPriceListsPriceListPricesBatchBodyPricesItem } from "./postPriceListsPriceListPricesBatchBodyPricesItem"

export type PostPriceListsPriceListPricesBatchBody = {
  /** The prices to update or add. */
  prices?: PostPriceListsPriceListPricesBatchBodyPricesItem[]
  /** If true the prices will replace all existing prices associated with the Price List. */
  override?: boolean
}
