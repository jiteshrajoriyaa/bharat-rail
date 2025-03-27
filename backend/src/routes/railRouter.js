const axios = require('axios')
const { Router } = require('express')
const router = Router()
require('dotenv').config()

router.get('/stations/:stationCodeOrName', async (req, res) => {
    try {
        const stationCodeOrName = req.params.stationCodeOrName
        const api = process.env.API_KEY
        const url = `http://indianrailapi.com/api/v2/AutoCompleteStation/apikey/${api}/StationCodeOrName/${stationCodeOrName}/`
        const response = await axios.get(url)
        const sCodeOrName = response.data;
        return res.json({
            sCodeOrName
        })

    } catch (e) {
        res.status(500).json({
            msg: "Failed to fetch stations"
        })
    }
})

router.get('/stationNameToCode/:stationName', async (req, res) => {
    try {
        const stationName = req.params.stationName;
        const api = process.env.API_KEY
        const url = `http://indianrailapi.com/api/v2/StationNameToCode/apikey/${api}/StationName/${stationName}/`
        const response = await axios.get(url)
        const data = response.data
        return res.json({
            data
        })
    } catch (e) {
        console.log(e)
        return res.status(500).json({
            msg: "Failed to fetch code of station"
        })
    }
})
router.get('/stationCodeToName/:stationCode', async (req, res) => {
    try {
        const stationCode = req.params.stationCode
        const api = process.env.API_KEY
        const url = `http://indianrailapi.com/api/v2/StationCodeToName/apikey/${api}/StationCode/${stationCode}/`
        const response = await axios.get(url)
        const data = response.data
        return res.json({
            data
        })
    } catch (e) {
        console.log(e)
        return res.status(500).json({
            msg: "Failed to fetch the name of station"
        })
    }
})

router.get('/allTrains/:stationCode', async (req, res) => {
    try {
        const stationCode = req.params.stationCode
        const api = process.env.API_KEY
        const url = `http://indianrailapi.com/api/v2/AllTrainOnStation/apikey/${api}/StationCode/${stationCode}/`
        const response = await axios.get(url)
        const jsonData = response.data
        
            // const trains =  jonData?.Trains
            return res.json({
                jsonData
            })

    } catch (e) {
        console.log(e)
        return res.status(500).json({
            msg: "Failed to fetch detail of all trains on the station"
        })
    }
})

router.get('/trainInfo/:trainNo', async (req, res) => {
    try {
        const trainNo = req.params.trainNo
        const api = process.env.API_KEY
        const url = `http://indianrailapi.com/api/v2/TrainInformation/apikey/${api}/TrainNumber/${trainNo}/`
        const response = await axios.get(url)
        const data = response.data
        return res.json({
            data
        })
    } catch (e) {
        console.log(e)
        return res.status(500).json({
            msg: "Failed to fetch the train information"
        })
    }
})

router.get('/haritageTrains', async (req, res) => {
    try {
        const api = process.env.API_KEY
        const url = `https://indianrailapi.com/api/v2/HeritageTrains/apikey/${api}/`
        const response = await axios.get(url)
        const data = response.data
        return res.json({
            data
        })
    } catch (e) {
        console.log(e)
        return res.status(500).json({
            msg: "Failed to fetch the haritage trains"
        })
    }
})

router.get('/rajdhaniTrains', async (req, res) => {
    try {
        const api = process.env.API_KEY
        const url = `https://indianrailapi.com/api/v2/RajdhaniTrain/apikey/${api}/`
        const response = await axios.get(url)
        const data = response.data
        return res.json({
            data
        })
    } catch (e) {
        console.log(e)
        return res.status(500).json({
            msg: "Failed to fetch the rajdhani trains"
        })
    }
})

router.get('/shatabdiTrains', async (req, res) => {
    try {
        const api = process.env.API_KEY
        const url = `https://indianrailapi.com/api/v2/ShatabdiTrains/apikey/${api}/`
        const response = await axios.get(url)
        const data = response.data
        return res.json({
            data
        })
    } catch (e) {
        console.log(e)
        return res.status(500).json({
            msg: "Failed to fetch the shatabdi trains"
        })
    }
})

router.get('/premiumTrains', async (req, res) => {
    try {
        const api = process.env.API_KEY
        const url = `https://indianrailapi.com/api/v2/PremiumTrains/apikey/${api}/`
        const response = await axios.get(url)
        const data = response.data
        return res.json({
            data
        })
    } catch (e) {
        console.log(e)
        return res.status(500).json({
            msg: "Failed to fetch the premium trains"
        })
    }
})

router.get('/superfastTrains', async (req, res) => {
    try {
        const api = process.env.API_KEY
        const url = `https://indianrailapi.com/api/v2/SuperfastTrains/apikey/${api}/`
        const response = await axios.get(url)
        const data = response.data
        return res.json({
            data
        })
    } catch (e) {
        console.log(e)
        return res.status(500).json({
            msg: "Failed to fetch the superfast trains"
        })
    }
})

router.get('/stationLocationOnMap/:stationCode', async (req, res) => {
    try {
        const api = process.env.API_KEY
        const stationCode = req.params.stationCode
        const url = `http://indianrailapi.com/api/v2/StationLocationOnMap/apikey/${api}/StationCode/${stationCode}`
        const response = await axios.get(url)
        const data = response.data
        return res.json({
            data
        })
    } catch (e) {
        console.log(e)
        return res.status(500).json({
            msg: "Failed to fetch location on map of a station"
        })
    }
})




module.exports = router