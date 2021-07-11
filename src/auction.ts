import { BigInt, ByteArray, Bytes } from "@graphprotocol/graph-ts";
import {ListItem, Bid, Settle, UpdateHash, UpdateAuction} from "../generated/Auction/Auction";
import {Auction, aBidInfo} from "../generated/schema";

export function handleCreation(event: ListItem) : void {
    let transactionHash = event.transaction.hash;
    let info = event.params;
    let auctionId = info.auctionId.toHexString();

    let auction = Auction.load(auctionId);

    if(auction === null) {
        auction = new Auction(auctionId);
    }

    auction.tokenId = info.tokenId;
    auction.starts = event.block.timestamp;
    auction.ends = info.endsAt;
    auction.creator = info.owner;
    auction.listingPrice = info.price;
    auction.creationHash = transactionHash;

    auction.createdAt = event.block.timestamp;
    auction.isSettled = false;

    auction.save();
}

export function handleBid(event: Bid) : void {
    let info = event.params;
    let auctionId = info.auctionId.toHexString();
    let transactionHash = event.transaction.hash.toHexString();

    let auction = Auction.load(auctionId);
    let bid = aBidInfo.load(transactionHash);

    if(auction === null) {
        auction = new Auction(auctionId);
    }

    if(bid === null) {
        bid = new aBidInfo(transactionHash);
    }

    auction.highestBid = info.bidValue;
    auction.highestBidder = event.transaction.from;
    auction.highestBidAt = event.block.timestamp;
    auction.amountPaid = info.amountPaid;
    
    bid.bidder = event.transaction.from;
    bid.auctionId = event.params.auctionId;
    bid.tokenId = auction.tokenId;
    bid.currency = info.currency;
    bid.amount = info.bidValue;
    bid.paid = info.amountPaid;

    bid.save();
    auction.save();
}

export function handleSettlement(event: Settle) : void {
    let info = event.params;
    let auctionId = info.auctionId.toHexString();

    let auction = Auction.load(auctionId);
    
    if(auction === null) {
        auction = new Auction(auctionId);
    }

    auction.isSettled = true;
    auction.settlementHash = event.transaction.hash;
    auction.settledAt = event.block.timestamp;

    auction.save();
}

export function handleHashUpdate(event: UpdateHash) : void {
    let info = event.params;
    let auctionId = info.auctionId.toHexString();

    let auction = Auction.load(auctionId);

    if(auction === null) {
        auction = new Auction(auctionId);
    }

    auction.paymentHash = info.hash;
    auction.save();
}

export function handleAuctionRestart(event: UpdateAuction) : void {
    let info = event.params;
    let auctionId = info.auctionId.toHexString();

    let auction = Auction.load(auctionId);

    if(auction === null) {
        auction = new Auction(auctionId);
    }

    auction.highestBid = null;
    auction.amountPaid = null;
    auction.isSettled = false;

    auction.highestBidder = null;
    auction.highestBidder = null;

    auction.highestBidAt = null;
    auction.ends = info.ends;
    auction.starts = event.block.timestamp;

    auction.creationHash = event.transaction.hash;
    auction.save();
}   