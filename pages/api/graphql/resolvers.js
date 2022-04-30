import Nomics from 'nomics'


const nomics = new Nomics({
    apiKey: process.env.API_KEY
})

const resolvers = {
    Query: {
        getCoins: async (_, args) => {
            // fetch all coins from Nomics
            const coins = await nomics.currenciesTicker()
            
            return coins.slice(0, 9)
        },

        getCoinDetails: async (_, args) => {
            // fetch coin details
            const {coinid, interval} = args

            const fetchCoinDetails = await nomics.currenciesTicker({
                ids: [`${coinid}`.toUpperCase()],
                interval: [`${interval}`]

            })
        }
    }
}
