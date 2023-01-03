// express 
const express = require('express')
const app = express()

// deta
const { Deta } = require('deta');
const deta = Deta(); 


// user route
app.get('/:id', async (req, res) => {
    const item = await fetchData(req.params.id)
    res.send(item)
})

// home route
app.get('/', (req, res) => {
    res.send('Api is running.')
})


// function to fetch data from deta base
const fetchData = async (key) => {
    const db = deta.Base('humans')
    return await db.get(key)
}



// export 'app'
module.exports = app