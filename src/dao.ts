import {CreateMerchant, Vote, DAO} from "../generated/DAO/DAO";
import {Merchant, VoteInfo, Proposal } from "../generated/schema";
import {Address, BigInt, Bytes} from "@graphprotocol/graph-ts";

export function handleMerchantCreation(event: CreateMerchant) : void {
    let transactionHash = event.transaction.hash.toHexString();
    let merchant = Merchant.load(transactionHash);

    if(merchant === null) {
        merchant = new Merchant(transactionHash);
    }

    merchant.proposalId = event.params.proposalId;
    merchant.listingFee = event.params.listingFee;
    merchant.platformFee = BigInt.fromI32(event.params.platformTax);
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
    let contract =  DAO.bind(event.address);

    if(proposal === null) {
        proposal = new Proposal(proposalId);
        proposal.votes = event.params.znftShares;
        proposal.status = contract.proposal(event.params.proposalId).value3;
    } else {
        proposal.votes = proposal.votes.plus(event.params.znftShares);
        proposal.status = contract.proposal(event.params.proposalId).value3;
    }

    proposal.save();
    info.save();
}