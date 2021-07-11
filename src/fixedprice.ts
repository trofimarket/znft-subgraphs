import { FixedPrice } from "../generated/schema";
import {CreateSale, BuySale} from "../generated/FixedPriceSale/FixedPriceABI";

export function handleCreation(event: CreateSale) : void {
    let transactionHash = event.transaction.hash;
    let info = event.params;
    let saleId = info.saleId.toHexString();

    let sale = FixedPrice.load(saleId);

    if(sale === null) {
        sale = new FixedPrice(saleId);
    }

    sale.tokenId = info.tokenId;
    sale.price = info.price;
    sale.saleId = info.saleId;
    sale.creator = info.creator
    sale.creationHash = transactionHash;
    sale.createdAt = event.block.timestamp;

    sale.save();
}

export function handlePurchase(event: BuySale) : void {
    let transactionHash = event.transaction.hash;
    let info = event.params;
    let saleId = info.saleId.toHexString();

    let sale = FixedPrice.load(saleId);

    if(sale === null) {
        sale = new FixedPrice(saleId);
    }

    sale.buyer = info.buyer;
    sale.boughtAt = event.block.timestamp;
    sale.settlementHash = transactionHash;

    sale.save();
}