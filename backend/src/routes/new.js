const jsonBigData = {
    "data": {
        "ResponseCode": "200",
        "TotalTrain": "14",
        "Trains": [
            {
                "TrainNumber": "52443",
                "TrainName": "KLK-SML HSP SPL",
                "Source": "KLK",
                "Departure": "13:05",
                "Destination": "SML",
                "Arrival": "19:35",
                "Days": [
                    {
                        "Name": "SUN",
                        "Available": "Y"
                    },
                    {
                        "Name": "MON",
                        "Available": "Y"
                    },
                    {
                        "Name": "TUE",
                        "Available": "Y"
                    },
                    {
                        "Name": "WED",
                        "Available": "Y"
                    },
                    {
                        "Name": "THR",
                        "Available": "Y"
                    },
                    {
                        "Name": "FRI",
                        "Available": "Y"
                    },
                    {
                        "Name": "SAT",
                        "Available": "Y"
                    }
                ]
            }]
    }
}


console.log(jsonBigData.data.Trains)