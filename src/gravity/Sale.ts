import {
  String,
  Null,
  Record,
  Number,
  Static,
  Boolean,
  Array,
  Undefined,
} from "runtypes";

export const Sale = Record({
  _id: String,
  id: String,
  name: String,
  description: String,
  sale_code: String,
  past_sale_codes: Array(String),
  is_auction: Boolean,
  is_benefit: Boolean,
  is_gallery_auction: Boolean,
  is_preliminary: Boolean,
  sale_type: String,
  start_at: String.Or(Null),
  end_at: String.Or(Null),
  ended_at: String.Or(Null),
  event_start_at: String.Or(Null),
  event_end_at: String.Or(Null),
  live_start_at: String.Or(Null),
  time_zone: String,
  event_location: String.Or(Null),
  auction_state: String.Or(Null),
  eligible_sale_artworks_count: Number,
  published: Boolean,
  original_width: Number.Or(Null),
  original_height: Number.Or(Null),
  image_url: String.Or(Null),
  image_versions: Array(String),
  image_urls: Record({
    large_rectangle: String.Or(Undefined),
    source: String.Or(Undefined),
    square: String.Or(Undefined),
    wide: String.Or(Undefined),
  }),
  created_at: String,
  currency: String,
  symbol: String,
  registration_ends_at: String.Or(Null),
  require_bidder_approval: Boolean,
  require_identity_verification: Boolean,
  hide_total: Boolean,
  increment_strategy: String,
  trusted_client_bypasses_card_requirement: Boolean,
  auto_approval_ends_at: String.Or(Null),
  lot_conditions_report_enabled: Boolean,
});

export type Sale = Static<typeof Sale>;