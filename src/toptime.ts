import {ListItem, Bid, Settle} from "../generated/Toptime/Toptime";
import {TopTime, tBidInfo} from "../generated/schema";

export function handleCreation(event: ListItem) : void {
    let transactionHash = event.transaction.hash;
    let info = event.params;
    let auctionId = info.auctionId.toHexString();

    let toptime = TopTime.load(auctionId);

    if(toptime === null) {
        toptime = new TopTime(auctionId);
    }

    toptime.tokenId = info.tokenId;
    toptime.starts = event.block.timestamp;
    toptime.toptime = info.toptime;
    toptime.creator = info.owner;
    toptime.listingPrice = info.price;
    toptime.creationHash = transactionHash;

    toptime.createdAt = event.block.timestamp;
    toptime.isSettled = false;

    toptime.save();
}

export function handleBid(event: Bid) : void {
    let info = event.params;
    let auctionId = info.auctionId.toHexString();
    let transactionHash = event.transaction.hash.toHexString();

    let toptime = TopTime.load(auctionId);
    let bid = tBidInfo.load(transactionHash);

    if(toptime === null) {
        toptime = new TopTime(auctionId);
    }

    if(bid === null) {
        bid = new tBidInfo(transactionHash);
    }

    toptime.highestBid = info.amount;
    toptime.highestBidder = event.transaction.from;
    toptime.highestBidAt = event.block.timestamp;
    
    bid.bidder = event.transaction.from;
    bid.auctionId = event.params.auctionId;
    bid.tokenId = toptime.tokenId;
    bid.currency = info.currency;
    bid.amount = info.amount;

    bid.save();
    toptime.save();
}

export function handleSettlement(event: Settle) : void {
    let info = event.params;
    let auctionId = info.auctionId.toHexString();

    let toptime = TopTime.load(auctionId);
    
    if(toptime === null) {
        toptime = new TopTime(auctionId);
    }

    toptime.isSettled = true;
    toptime.settlementHash = event.transaction.hash;
    toptime.settledAt = event.block.timestamp;

    toptime.save();
}