import {Transfer, NFT} from "../generated/NFT/NFT";
import {Token, Transfers} from "../generated/schema";

export function handleTransfer(event: Transfer) : void {
    let tokenId = event.params.tokenId.toHexString();
    let transactionHash = event.transaction.hash.toHexString();
    let contract = NFT.bind(event.address);

    let nft = Token.load(tokenId);
    let transaction = Transfers.load(transactionHash);

    if(nft === null) {
      nft = new Token(tokenId);
    }

    if(transaction === null) {
        transaction = new Transfers(transactionHash);
    }

    nft.owner = event.params.to;
    nft.hash = contract.tokenURI(event.params.tokenId);

    transaction.from = event.params.from;
    transaction.to = event.params.to;
    transaction.tokenId = event.params.tokenId;

    nft.save();
    transaction.save();
}