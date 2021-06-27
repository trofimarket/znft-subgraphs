import {ListItem, Bid, Settle} from "../generated/Auction/Auction";
import {Auction, BidInfo} from "../generated/schema";

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
    auction.toptime = info.topTime;
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
    let bid = BidInfo.load(transactionHash);

    if(auction === null) {
        auction = new Auction(auctionId);
    }

    if(bid === null) {
        bid = new BidInfo(transactionHash);
    }

    auction.highestBid = info.amount;
    auction.highestBidder = event.transaction.from;
    auction.highestBidAt = event.block.timestamp;
    
    bid.bidder = event.transaction.from;
    bid.auctionId = event.params.auctionId;
    bid.tokenId = auction.tokenId;
    bid.currency = info.currency;
    bid.amount = info.amount;

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