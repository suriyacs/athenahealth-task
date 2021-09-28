const DATA = {
    countryDetailSource: {
        "india": {
            "tamilnadu": {
                "chennai": {
                    "displayName" : "Chennai",
                    "population": 89832,
                    "vaccinated": 69092,
                    "availableDoses": 67890
                },
                "coimbatore": {
                    "displayName" : "Coimbatore",
                    "population": 67890,
                    "vaccinated": 65378,
                    "availableDoses": 70987
                },
                "madurai": {
                    "displayName" : "Madurai",
                    "population": 90876,
                    "vaccinated": 55367,
                    "availableDoses": 49084
                },
                "tirunelveli": {
                    "displayName" : "Tirunelveli",
                    "population": 67827,
                    "vaccinated": 62834,
                    "availableDoses": 80938
                },
                "trichy": {
                    "displayName" : "Trichy",
                    "population": 94939,
                    "vaccinated": 32452,
                    "availableDoses": 25676
                }
            },
            "delhi": {
                "tughlqabad": {
                    "displayName" : "Tughlqabad",
                    "population": 90874,
                    "vaccinated": 43290,
                    "availableDoses": 45522
                },
                "jahanpanah": {
                    "displayName" : "Jahanpanah",
                    "population": 74662,
                    "vaccinated": 33457,
                    "availableDoses": 22890
                },
                "firozobad": {
                    "displayName" : "Firozobad",
                    "population": 90876,
                    "vaccinated": 23452,
                    "availableDoses": 24892
                },
                "shahjahanabad": {
                    "displayName" : "Shahjahanabad",
                    "population": 38928,
                    "vaccinated": 18374,
                    "availableDoses": 21390
                }
            },
            "kerala": {
                "kochi": {
                    "displayName" : "Kochi",
                    "population": 38928,
                    "vaccinated": 18374,
                    "availableDoses": 21390
                },
                "kollam": {
                    "displayName" : "Kollam",
                    "population": 94939,
                    "vaccinated": 32452,
                    "availableDoses": 25676
                },
                "tiruvandram": {
                    "displayName" : "Tiruvandram",
                    "population": 74662,
                    "vaccinated": 33457,
                    "availableDoses": 22890
                }
            }
        },
        "china": {
            "qinghai": {
                "xining": {
                    "displayName" : "Xining",
                    "population": 40902,
                    "vaccinated": 21093,
                    "availableDoses": 12442
                },
                "golmud": {
                    "displayName" : "Golmud",
                    "population": 50902,
                    "vaccinated": 35098,
                    "availableDoses": 29487
                },
                "delingha": {
                    "displayName" : "Delingha",
                    "population": 72746,
                    "vaccinated": 32938,
                    "availableDoses": 26724
                },
                "yosuchu": {
                    "displayName" : "Yosuchu",
                    "population": 48294,
                    "vaccinated": 32450,
                    "availableDoses": 23450
                },
                "haibei": {
                    "displayName" : "Haibei",
                    "population": 94939,
                    "vaccinated": 32452,
                    "availableDoses": 43240
                }
            },
            "sichuan": {
                "tughlqabad": {
                    "displayName" : "Tughlqabad",
                    "population": 76264,
                    "vaccinated": 22452,
                    "availableDoses": 45522
                },
                "jahanpanah": {
                    "displayName" : "Jahanpanah",
                    "population": 48332,
                    "vaccinated": 12645,
                    "availableDoses": 89284
                },
                "firozobad": {
                    "displayName" : "Firozobad",
                    "population": 49838,
                    "vaccinated": 23472,
                    "availableDoses": 89287
                },
                "shahjahanabad": {
                    "displayName" : "Shahjahanabad",
                    "population": 28484,
                    "vaccinated": 18374,
                    "availableDoses": 38470
                }
            }
        },
        "us": {
            "texas": {
                "houston": {
                    "displayName" : "Houston",
                    "population": 94939,
                    "vaccinated": 32452,
                    "availableDoses": 25676
                },
                "austin": {
                    "displayName" : "Austin",
                    "population": 76264,
                    "vaccinated": 22452,
                    "availableDoses": 45522
                },
                "sanantonio": {
                    "displayName" : "San Antonio",
                    "population": 28484,
                    "vaccinated": 18374,
                    "availableDoses": 38470
                },
                "dallas": {
                    "displayName" : "Dallas",
                    "population": 38928,
                    "vaccinated": 18374,
                    "availableDoses": 21390
                }
            },
            "california": {
                "losangeles": {
                    "displayName" : "Los Angeles",
                    "population": 74662,
                    "vaccinated": 33457,
                    "availableDoses": 22890
                },
                "sandiago": {
                    "displayName" : "San Diago",
                    "population": 94939,
                    "vaccinated": 32452,
                    "availableDoses": 25676
                },
                "sanjose": {
                    "displayName" : "San Jose",
                    "population": 90876,
                    "vaccinated": 23452,
                    "availableDoses": 24892
                },
                "mountainview": {
                    "displayName" : "Mountain View",
                    "population": 50902,
                    "vaccinated": 35098,
                    "availableDoses": 29487
                }
            },
            "pennsylvania": {
                "philadelphia": {
                    "displayName" : "Philadelphia",
                    "population": 76264,
                    "vaccinated": 22452,
                    "availableDoses": 45522
                },
                "lebanon": {
                    "displayName" : "Lebanon",
                    "population": 72746,
                    "vaccinated": 32938,
                    "availableDoses": 26724
                },
                "lawrence": {
                    "displayName" : "lawrence",
                    "population": 40902,
                    "vaccinated": 21093,
                    "availableDoses": 12442
                },
                "allegheny": {
                    "displayName" : "Allegheny",
                    "population": 76264,
                    "vaccinated": 22452,
                    "availableDoses": 45522
                }
            }
        }
    },
    countryListSource: [
        {
            label: "India",
            value: "india"
        },
        {
            label: "China",
            value: "china"
        },
        {
            label: "US",
            value: "us"
        }
    ],
    statesListSource: {
        "india": [
            {
                label: "Tamilnadu",
                value: "tamilnadu"
            },
            {
                label: "Delhi",
                value: "delhi"
            },
            {
                label: "Kerala",
                value: "kerala"
            }
        ],
        "china": [
            {
                label: "Qinghai",
                value: "qinghai"
            },
            {
                label: "Sichuan",
                value: "sichuan"
            }
        ],
        "us": [
            {
                label: "Texas",
                value: "texas"
            },
            {
                label: "California",
                value: "california"
            },
            {
                label: "Pennsylvania",
                value: "pennsylvania"
            }
        ]
    }
};

export default DATA;