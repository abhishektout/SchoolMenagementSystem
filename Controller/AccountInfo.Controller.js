import { AccountInfo } from "../Model/SchoolAccountInfo";

export const verifyTransactioId = (request, response, next) => {
    try {
        let transaction = AccountInfo.findOne({ transactionId: request.body.transactionId });
        if (transaction) {
            let payment = transaction.payment;
            console.log(payment);
            return response.status(200).json({ result: payment, status: false });
        }
        else {
            console.log("invalid transaction id");
            return response.status(401).json({ err: "transaction id is invalid", status: false });
        }
    }
    catch (err) {
        return response.status(500).json({ err: "internal server error", status: false });
    }
}