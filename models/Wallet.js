const WalletBalanceSchema = {
    amount: {
        type: Number,
        default: 0

    },
    accountType: {
        type: String,
        default: "Savings"
    },
    currency: {
        type: String,
        default: "NGN"
    }
}