import {Transfer} from "../generated/NFT/NFT";
import {NFT, Transfers} from "../generated/schema";

export function handleTransfer(event: Transfer) : void {
    let tokenId = event.params.tokenId.toHexString();
    let transactionHash = event.transaction.hash.toHexString();

    let nft = NFT.load(tokenId);
    let transaction = Transfers.load(transactionHash);

    if(nft === null) {
      nft = new NFT(tokenId);
    }

    if(transaction === null) {
        transaction = new Transfers(transactionHash);
    }

    nft.owner = event.params.to;

    transaction.from = event.params.from;
    transaction.to = event.params.to;
    transaction.tokenId = event.params.tokenId;

    nft.save();
    transaction.save();
}