import {CreateMerchant, Vote} from "../generated/DAO/DAO";
import {Merchant, VoteInfo, Proposal } from "../generated/schema";
import {BigInt} from "@graphprotocol/graph-ts";

export function handleMerchantCreation(event: CreateMerchant) : void {
    let transactionHash = event.transaction.hash.toHexString();
    let merchant = Merchant.load(transactionHash);

    if(merchant === null) {
        merchant = new Merchant(transactionHash);
    }

    merchant.proposalId = event.params.proposalId;
    merchant.listingFee = BigInt.fromI32(event.params.listingFee);
    merchant.platformFee = BigInt.fromI32(event.params.listingFee);
    merchant.ipfs = event.params.hash.toString();
    merchant.address = event.transaction.from;

    merchant.save();
}

export function handleVote(event: Vote) : void {
    let transactionHash = event.transaction.hash.toHexString();
    let info = VoteInfo.load(transactionHash);

    if(info === null) {
        info = new VoteInfo(transactionHash);
    }

    info.proposalId = event.params.proposalId;
    info.voter = event.params.voter;
    info.balance = event.params.znftShares;

    let proposalId = event.params.proposalId.toHexString();
    let proposal = Proposal.load(proposalId);

    if(proposal === null) {
        proposal = new Proposal(proposalId);
        proposal.votes = event.params.znftShares;
    } else {
        proposal.votes = proposal.votes.plus(event.params.znftShares);
    }

    proposal.save();
    info.save();
}