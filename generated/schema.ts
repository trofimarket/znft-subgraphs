// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Merchant extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Merchant entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Merchant entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Merchant", id.toString(), this);
  }

  static load(id: string): Merchant | null {
    return store.get("Merchant", id) as Merchant | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get proposalId(): BigInt {
    let value = this.get("proposalId");
    return value.toBigInt();
  }

  set proposalId(value: BigInt) {
    this.set("proposalId", Value.fromBigInt(value));
  }

  get ipfs(): string {
    let value = this.get("ipfs");
    return value.toString();
  }

  set ipfs(value: string) {
    this.set("ipfs", Value.fromString(value));
  }

  get address(): Bytes {
    let value = this.get("address");
    return value.toBytes();
  }

  set address(value: Bytes) {
    this.set("address", Value.fromBytes(value));
  }

  get listingFee(): BigInt {
    let value = this.get("listingFee");
    return value.toBigInt();
  }

  set listingFee(value: BigInt) {
    this.set("listingFee", Value.fromBigInt(value));
  }

  get platformFee(): BigInt {
    let value = this.get("platformFee");
    return value.toBigInt();
  }

  set platformFee(value: BigInt) {
    this.set("platformFee", Value.fromBigInt(value));
  }

  get ethWallet(): string | null {
    let value = this.get("ethWallet");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set ethWallet(value: string | null) {
    if (value === null) {
      this.unset("ethWallet");
    } else {
      this.set("ethWallet", Value.fromString(value as string));
    }
  }

  get btcWallet(): string | null {
    let value = this.get("btcWallet");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set btcWallet(value: string | null) {
    if (value === null) {
      this.unset("btcWallet");
    } else {
      this.set("btcWallet", Value.fromString(value as string));
    }
  }

  get bscWallet(): string | null {
    let value = this.get("bscWallet");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set bscWallet(value: string | null) {
    if (value === null) {
      this.unset("bscWallet");
    } else {
      this.set("bscWallet", Value.fromString(value as string));
    }
  }
}

export class VoteInfo extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save VoteInfo entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save VoteInfo entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("VoteInfo", id.toString(), this);
  }

  static load(id: string): VoteInfo | null {
    return store.get("VoteInfo", id) as VoteInfo | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get proposalId(): BigInt {
    let value = this.get("proposalId");
    return value.toBigInt();
  }

  set proposalId(value: BigInt) {
    this.set("proposalId", Value.fromBigInt(value));
  }

  get voter(): Bytes {
    let value = this.get("voter");
    return value.toBytes();
  }

  set voter(value: Bytes) {
    this.set("voter", Value.fromBytes(value));
  }

  get balance(): BigInt {
    let value = this.get("balance");
    return value.toBigInt();
  }

  set balance(value: BigInt) {
    this.set("balance", Value.fromBigInt(value));
  }
}

export class Proposal extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Proposal entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Proposal entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Proposal", id.toString(), this);
  }

  static load(id: string): Proposal | null {
    return store.get("Proposal", id) as Proposal | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get votes(): BigInt {
    let value = this.get("votes");
    return value.toBigInt();
  }

  set votes(value: BigInt) {
    this.set("votes", Value.fromBigInt(value));
  }

  get status(): boolean {
    let value = this.get("status");
    return value.toBoolean();
  }

  set status(value: boolean) {
    this.set("status", Value.fromBoolean(value));
  }
}

export class Token extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Token entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Token entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Token", id.toString(), this);
  }

  static load(id: string): Token | null {
    return store.get("Token", id) as Token | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get hash(): string {
    let value = this.get("hash");
    return value.toString();
  }

  set hash(value: string) {
    this.set("hash", Value.fromString(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }
}

export class Transfers extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Transfers entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Transfers entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Transfers", id.toString(), this);
  }

  static load(id: string): Transfers | null {
    return store.get("Transfers", id) as Transfers | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get from(): Bytes {
    let value = this.get("from");
    return value.toBytes();
  }

  set from(value: Bytes) {
    this.set("from", Value.fromBytes(value));
  }

  get to(): Bytes {
    let value = this.get("to");
    return value.toBytes();
  }

  set to(value: Bytes) {
    this.set("to", Value.fromBytes(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    return value.toBigInt();
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }
}

export class Auction extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Auction entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Auction entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Auction", id.toString(), this);
  }

  static load(id: string): Auction | null {
    return store.get("Auction", id) as Auction | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    return value.toBigInt();
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }

  get starts(): BigInt {
    let value = this.get("starts");
    return value.toBigInt();
  }

  set starts(value: BigInt) {
    this.set("starts", Value.fromBigInt(value));
  }

  get listingPrice(): BigInt {
    let value = this.get("listingPrice");
    return value.toBigInt();
  }

  set listingPrice(value: BigInt) {
    this.set("listingPrice", Value.fromBigInt(value));
  }

  get highestBid(): BigInt | null {
    let value = this.get("highestBid");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set highestBid(value: BigInt | null) {
    if (value === null) {
      this.unset("highestBid");
    } else {
      this.set("highestBid", Value.fromBigInt(value as BigInt));
    }
  }

  get highestBidder(): Bytes | null {
    let value = this.get("highestBidder");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set highestBidder(value: Bytes | null) {
    if (value === null) {
      this.unset("highestBidder");
    } else {
      this.set("highestBidder", Value.fromBytes(value as Bytes));
    }
  }

  get amountPaid(): BigInt | null {
    let value = this.get("amountPaid");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set amountPaid(value: BigInt | null) {
    if (value === null) {
      this.unset("amountPaid");
    } else {
      this.set("amountPaid", Value.fromBigInt(value as BigInt));
    }
  }

  get ends(): BigInt | null {
    let value = this.get("ends");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set ends(value: BigInt | null) {
    if (value === null) {
      this.unset("ends");
    } else {
      this.set("ends", Value.fromBigInt(value as BigInt));
    }
  }

  get creator(): Bytes | null {
    let value = this.get("creator");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set creator(value: Bytes | null) {
    if (value === null) {
      this.unset("creator");
    } else {
      this.set("creator", Value.fromBytes(value as Bytes));
    }
  }

  get paymentHash(): string | null {
    let value = this.get("paymentHash");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set paymentHash(value: string | null) {
    if (value === null) {
      this.unset("paymentHash");
    } else {
      this.set("paymentHash", Value.fromString(value as string));
    }
  }

  get creationHash(): Bytes | null {
    let value = this.get("creationHash");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set creationHash(value: Bytes | null) {
    if (value === null) {
      this.unset("creationHash");
    } else {
      this.set("creationHash", Value.fromBytes(value as Bytes));
    }
  }

  get settlementHash(): Bytes | null {
    let value = this.get("settlementHash");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set settlementHash(value: Bytes | null) {
    if (value === null) {
      this.unset("settlementHash");
    } else {
      this.set("settlementHash", Value.fromBytes(value as Bytes));
    }
  }

  get isSettled(): boolean {
    let value = this.get("isSettled");
    return value.toBoolean();
  }

  set isSettled(value: boolean) {
    this.set("isSettled", Value.fromBoolean(value));
  }

  get createdAt(): BigInt {
    let value = this.get("createdAt");
    return value.toBigInt();
  }

  set createdAt(value: BigInt) {
    this.set("createdAt", Value.fromBigInt(value));
  }

  get settledAt(): BigInt | null {
    let value = this.get("settledAt");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set settledAt(value: BigInt | null) {
    if (value === null) {
      this.unset("settledAt");
    } else {
      this.set("settledAt", Value.fromBigInt(value as BigInt));
    }
  }

  get highestBidAt(): BigInt | null {
    let value = this.get("highestBidAt");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set highestBidAt(value: BigInt | null) {
    if (value === null) {
      this.unset("highestBidAt");
    } else {
      this.set("highestBidAt", Value.fromBigInt(value as BigInt));
    }
  }
}

export class TopTime extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save TopTime entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save TopTime entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("TopTime", id.toString(), this);
  }

  static load(id: string): TopTime | null {
    return store.get("TopTime", id) as TopTime | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    return value.toBigInt();
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }

  get starts(): BigInt {
    let value = this.get("starts");
    return value.toBigInt();
  }

  set starts(value: BigInt) {
    this.set("starts", Value.fromBigInt(value));
  }

  get listingPrice(): BigInt {
    let value = this.get("listingPrice");
    return value.toBigInt();
  }

  set listingPrice(value: BigInt) {
    this.set("listingPrice", Value.fromBigInt(value));
  }

  get highestBid(): BigInt | null {
    let value = this.get("highestBid");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set highestBid(value: BigInt | null) {
    if (value === null) {
      this.unset("highestBid");
    } else {
      this.set("highestBid", Value.fromBigInt(value as BigInt));
    }
  }

  get highestBidder(): Bytes | null {
    let value = this.get("highestBidder");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set highestBidder(value: Bytes | null) {
    if (value === null) {
      this.unset("highestBidder");
    } else {
      this.set("highestBidder", Value.fromBytes(value as Bytes));
    }
  }

  get amountPaid(): BigInt | null {
    let value = this.get("amountPaid");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set amountPaid(value: BigInt | null) {
    if (value === null) {
      this.unset("amountPaid");
    } else {
      this.set("amountPaid", Value.fromBigInt(value as BigInt));
    }
  }

  get toptime(): BigInt | null {
    let value = this.get("toptime");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set toptime(value: BigInt | null) {
    if (value === null) {
      this.unset("toptime");
    } else {
      this.set("toptime", Value.fromBigInt(value as BigInt));
    }
  }

  get creator(): Bytes | null {
    let value = this.get("creator");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set creator(value: Bytes | null) {
    if (value === null) {
      this.unset("creator");
    } else {
      this.set("creator", Value.fromBytes(value as Bytes));
    }
  }

  get paymentHash(): string | null {
    let value = this.get("paymentHash");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set paymentHash(value: string | null) {
    if (value === null) {
      this.unset("paymentHash");
    } else {
      this.set("paymentHash", Value.fromString(value as string));
    }
  }

  get creationHash(): Bytes | null {
    let value = this.get("creationHash");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set creationHash(value: Bytes | null) {
    if (value === null) {
      this.unset("creationHash");
    } else {
      this.set("creationHash", Value.fromBytes(value as Bytes));
    }
  }

  get settlementHash(): Bytes | null {
    let value = this.get("settlementHash");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set settlementHash(value: Bytes | null) {
    if (value === null) {
      this.unset("settlementHash");
    } else {
      this.set("settlementHash", Value.fromBytes(value as Bytes));
    }
  }

  get isSettled(): boolean {
    let value = this.get("isSettled");
    return value.toBoolean();
  }

  set isSettled(value: boolean) {
    this.set("isSettled", Value.fromBoolean(value));
  }

  get createdAt(): BigInt {
    let value = this.get("createdAt");
    return value.toBigInt();
  }

  set createdAt(value: BigInt) {
    this.set("createdAt", Value.fromBigInt(value));
  }

  get settledAt(): BigInt | null {
    let value = this.get("settledAt");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set settledAt(value: BigInt | null) {
    if (value === null) {
      this.unset("settledAt");
    } else {
      this.set("settledAt", Value.fromBigInt(value as BigInt));
    }
  }

  get highestBidAt(): BigInt | null {
    let value = this.get("highestBidAt");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set highestBidAt(value: BigInt | null) {
    if (value === null) {
      this.unset("highestBidAt");
    } else {
      this.set("highestBidAt", Value.fromBigInt(value as BigInt));
    }
  }
}

export class aBidInfo extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save aBidInfo entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save aBidInfo entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("aBidInfo", id.toString(), this);
  }

  static load(id: string): aBidInfo | null {
    return store.get("aBidInfo", id) as aBidInfo | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get bidder(): Bytes | null {
    let value = this.get("bidder");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set bidder(value: Bytes | null) {
    if (value === null) {
      this.unset("bidder");
    } else {
      this.set("bidder", Value.fromBytes(value as Bytes));
    }
  }

  get auctionId(): BigInt {
    let value = this.get("auctionId");
    return value.toBigInt();
  }

  set auctionId(value: BigInt) {
    this.set("auctionId", Value.fromBigInt(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    return value.toBigInt();
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }

  get currency(): string {
    let value = this.get("currency");
    return value.toString();
  }

  set currency(value: string) {
    this.set("currency", Value.fromString(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }

  get paid(): BigInt | null {
    let value = this.get("paid");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set paid(value: BigInt | null) {
    if (value === null) {
      this.unset("paid");
    } else {
      this.set("paid", Value.fromBigInt(value as BigInt));
    }
  }
}

export class tBidInfo extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save tBidInfo entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save tBidInfo entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("tBidInfo", id.toString(), this);
  }

  static load(id: string): tBidInfo | null {
    return store.get("tBidInfo", id) as tBidInfo | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get bidder(): Bytes | null {
    let value = this.get("bidder");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set bidder(value: Bytes | null) {
    if (value === null) {
      this.unset("bidder");
    } else {
      this.set("bidder", Value.fromBytes(value as Bytes));
    }
  }

  get auctionId(): BigInt {
    let value = this.get("auctionId");
    return value.toBigInt();
  }

  set auctionId(value: BigInt) {
    this.set("auctionId", Value.fromBigInt(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    return value.toBigInt();
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }

  get currency(): string {
    let value = this.get("currency");
    return value.toString();
  }

  set currency(value: string) {
    this.set("currency", Value.fromString(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }

  get paid(): BigInt | null {
    let value = this.get("paid");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set paid(value: BigInt | null) {
    if (value === null) {
      this.unset("paid");
    } else {
      this.set("paid", Value.fromBigInt(value as BigInt));
    }
  }
}

export class FixedPrice extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save FixedPrice entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save FixedPrice entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("FixedPrice", id.toString(), this);
  }

  static load(id: string): FixedPrice | null {
    return store.get("FixedPrice", id) as FixedPrice | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tokenId(): BigInt | null {
    let value = this.get("tokenId");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set tokenId(value: BigInt | null) {
    if (value === null) {
      this.unset("tokenId");
    } else {
      this.set("tokenId", Value.fromBigInt(value as BigInt));
    }
  }

  get saleId(): BigInt | null {
    let value = this.get("saleId");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set saleId(value: BigInt | null) {
    if (value === null) {
      this.unset("saleId");
    } else {
      this.set("saleId", Value.fromBigInt(value as BigInt));
    }
  }

  get price(): BigInt | null {
    let value = this.get("price");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set price(value: BigInt | null) {
    if (value === null) {
      this.unset("price");
    } else {
      this.set("price", Value.fromBigInt(value as BigInt));
    }
  }

  get creator(): Bytes | null {
    let value = this.get("creator");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set creator(value: Bytes | null) {
    if (value === null) {
      this.unset("creator");
    } else {
      this.set("creator", Value.fromBytes(value as Bytes));
    }
  }

  get creationHash(): Bytes | null {
    let value = this.get("creationHash");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set creationHash(value: Bytes | null) {
    if (value === null) {
      this.unset("creationHash");
    } else {
      this.set("creationHash", Value.fromBytes(value as Bytes));
    }
  }

  get settlementHash(): Bytes | null {
    let value = this.get("settlementHash");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set settlementHash(value: Bytes | null) {
    if (value === null) {
      this.unset("settlementHash");
    } else {
      this.set("settlementHash", Value.fromBytes(value as Bytes));
    }
  }

  get buyer(): Bytes | null {
    let value = this.get("buyer");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set buyer(value: Bytes | null) {
    if (value === null) {
      this.unset("buyer");
    } else {
      this.set("buyer", Value.fromBytes(value as Bytes));
    }
  }

  get createdAt(): BigInt | null {
    let value = this.get("createdAt");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set createdAt(value: BigInt | null) {
    if (value === null) {
      this.unset("createdAt");
    } else {
      this.set("createdAt", Value.fromBigInt(value as BigInt));
    }
  }

  get boughtAt(): BigInt | null {
    let value = this.get("boughtAt");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set boughtAt(value: BigInt | null) {
    if (value === null) {
      this.unset("boughtAt");
    } else {
      this.set("boughtAt", Value.fromBigInt(value as BigInt));
    }
  }
}
