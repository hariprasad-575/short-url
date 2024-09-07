const mongoose=require('mongoose')


async function mongoDbConnector(url) {
    return mongoose.connect(url)    
}

module.exports={mongoDbConnector};