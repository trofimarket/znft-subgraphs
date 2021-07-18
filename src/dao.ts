import {CreateMerchant, Vote, DAO, CreateDistribution, VoteDistribution, Distribute} from "../generated/DAO/DAO";
import {Merchant, VoteInfo, Proposal, Distribution, DistributionVote } from "../generated/schema";
import { BigInt, Address, Bytes, ByteArray} from "@graphprotocol/graph-ts";

export function handleMerchantCreation(event: CreateMerchant) : void {
    let merchant = Merchant.load(event.params.proposalId.toHexString());
    let proposalId = event.params.proposalId.toHexString();
    let proposal = Proposal.load(proposalId);
    let contract =  DAO.bind(event.address);

    if(merchant === null) {
        merchant = new Merchant(event.params.proposalId.toHexString());
    }

    if(proposal === null) {
        proposal = new Proposal(proposalId);  
    } 

    merchant.proposalId = event.params.proposalId;
    merchant.listingFee = event.params.listingFee;
    merchant.platformFee = BigInt.fromI32(event.params.platformTax);
    merchant.ipfs = event.params.hash.toString();
    merchant.address = event.transaction.from;
    merchant.ethWallet = contract.ethWallet(event.params.merchant);
    merchant.bscWallet = contract.bscWallet(event.params.merchant);
    merchant.btcWallet = contract.btcWallet(event.params.merchant);

    proposal.votes = BigInt.fromString("0");
    proposal.status = false;

    merchant.save();
    proposal.save();
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

export function handleDistribution(event: CreateDistribution) : void {
    let transactionHash = event.transaction.hash;
    let info = event.params;

    let distributionId = info.distributionId.toHexString();

    let distribution = Distribution.load(distributionId);

    if(distribution === null) {
        distribution = new Distribution(distributionId);
    }

    let earners: string[] = AddressToBytes(info.earners);

    distribution.earners = earners;
    distribution.percentages = info.percentages;

    distribution.proposalHash = transactionHash;
    distribution.save();
}

function AddressToBytes(params: Address[]) : string[] {
    let length = params.length;

    let Array:string[] = [];

    for(let i=0; i < length; i++) {
        Array.push(params[i].toHexString());
    }

    return Array;
}

export function handleDistributionVote(event: VoteDistribution) : void {
    let transactionHash = event.transaction.hash.toHexString();
    let info = event.params;
    let contract =  DAO.bind(event.address);
    let distributionId = info.distributionId.toHexString();

    let vote = DistributionVote.load(transactionHash);
    let distribution = Distribution.load(distributionId);

    if(vote === null) {
        vote = new DistributionVote(transactionHash);
    }

    if(distribution === null) {
        distribution = new Distribution(distributionId);
    }

    vote.distributionId = info.distributionId;
    vote.support = info.support;
    vote.votes = info.votes;
        
    distribution.voteFor = contract.distribution(info.distributionId).voteFor;
    distribution.voteAgainst = contract.distribution(info.distributionId).voteAgainst;
    distribution.Approved = contract.distribution(info.distributionId).approved;
    distribution.Rejected = contract.distribution(info.distributionId).rejected;

    distribution.save();
    vote.save();
}

export function handleDisbursement(event: Distribute) : void {
    let info = event.params;
    let contract =  DAO.bind(event.address);

    let distribution = Distribution.load(info.distributionId.toHexString());

    if(distribution === null) {
        distribution = new Distribution(info.distributionId.toHexString());
    }
    
    distribution.Approved = contract.distribution(info.distributionId).approved;
    distribution.Rejected = contract.distribution(info.distributionId).rejected;
    distribution.Settled = true;
    distribution.SettlementHash = event.transaction.hash;

    distribution.save();
}