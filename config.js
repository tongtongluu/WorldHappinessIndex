var config = {
    style: 'mapbox://styles/luq778/ckie0vrzp2y7519t093ruv03h',
    accessToken: 'pk.eyJ1IjoibHVxNzc4IiwiYSI6ImNrMzdsZ3hxaDAwMHEzamxkdTJtcGppc3UifQ.oQP1bg5nLong5oE0dh8GgQ',
    showMarkers: true,
    markerColor: '#BB6BD9',
    theme: 'dark',
    mapAnimation: 'flyTo',
    // title: 'The Title Text of this Story',
    // subtitle: 'A descriptive and interesting subtitle to draw in the reader',
    // byline: 'By a Digital Storyteller',
    footer: 'Source: source citations, etc.',
    chapters: [{
            layerType :'fill',
            id: 'slug-style-id',
            alignment: 'center',
            //title: 'The World Happiness Report',
            image: './images/1.png',
            description: 'The World Happiness Report is a landmark survey of the state of global happiness that ranks 156 countries by how happy their citizens perceive themselves to be. The World Happiness Report 2020 for the first time ranks cities around the world by their subjective well-being and digs more deeply into how the social, urban and natural environments combine to affect our happiness.',
            location: {
                center: [-97.9222112121185, 39.3812661305678],
                zoom: 1,
                pitch: 0,
                bearing: 0,
                code: 'USA'
            },
            hide: true,
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '1',
            alignment: 'left',
            title: 'How are the measures weighted?',
            image: './images/legend.png',
            description: '',
            location: {
                center: [121.46667, 31.16667],
                zoom: 1,
                pitch: 0,
                bearing: 0,
                code: 'CHN'
            },
            hide: false,
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '2',
            alignment: 'left',
            title: 'Who is the happiest? 🇩🇰',
            image: './images/denmark.jpg',
            description: 'Over the past 5 years, Denmark was found to be the happiest nation.Is it the relative lack of crime and corruption, or just plain Danish hygge? According to the World Happiness Report, happiness is closely linked to social equality and community spirit - and Denmark does well on both. Denmark has a high level of equality and a strong sense of common responsibility for social welfare.',
            location: {
                center: [10.0462968058278, 55.9633978748347],
                zoom: 3,
                pitch: 0,
                bearing: 10,
                code: 'DNK'
            },
            hide: false,
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '3',
            alignment: 'left',
            title: 'Those who are unhappy 🇨🇫',
            image: './images/cafrican.jpg',
            description: 'The Central African Republic, a landlocked country with a population of close to 4.9 million, embarked on a long recovery process, following a major security crisis in 2013 that unraveled its social fabric and displaced over 25% of its population.Poverty remains high and projections suggest that roughly 71% of the population was living below the international poverty line ($1.90 per day, in terms of PPP) in 2018.',
            location: {
                center: [20.4828261100212, 6.57134078462119],
                zoom: 3,
                pitch: 60,
                bearing: 0,
                code: 'CAF'
            },
            hide: false,
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '4',
            alignment: 'left',
            title: 'Who changed the most? 🇻🇪',
            image: './images/venezuela.jpg',
            description: 'Venezuela dropped from 23rd to 108th over the 5 years. Economic crisis, intensifying in 2015. Dropped in "Social Support" and "GDP Per Capita" ranks by over 20 places.Amid numerous blackouts, fuel shortages impacting agriculture and food production, and inflation on pace to reach over 10 million percent by the end of 2019, Venezuela’s humanitarian, economic, and political crisis has forced more than 4 million citizens to flee their homeland. That number could surge past 5 million by the end of 2019.',
            location: {
                center: [-65.801997444749, 7.61957014788959],
                zoom: 3,
                pitch: 60,
                bearing: 50,
                code: 'VEN'
            },
            hide: false,
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '5',
            alignment: 'center',
            title: 'Why we are not happy? Becase of money? Maybe yes',
            image: './images/gdp.png',
            description: 'Areas like Greece, have an above average GDP per capita but below average happiness score. Almost all South/Latin American countries have a high happiness score despite most having a below average GDP per capita.',
            location: {
                center: [23.8285537394706, 38.5890212896367],
                zoom: 3,
                pitch: 60,
                bearing: 0,
                code: 'GRC'
            },
            hide: true,
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '6',
            alignment: 'center',
            title: 'Why we are happy? Wait I didnt say that',
            image: './images/conversation.png',
            //description: 'Areas like Greece, have an above average GDP per capita but below average happiness score. Almost all South/Latin American countries have a high happiness score despite most having a below average GDP per capita.',
            location: {
                center: [23.8285537394706, 38.5890212896367],
                zoom: 3,
                pitch: 60,
                bearing: 0,
                code: 'GRC'
            },
            hide: true,
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '7',
            alignment: 'left',
            title: 'Looks like Americans currently live in a RICH AND HAPPY country, But would you describe you are happy in general?',
            image: './images/usdata.png',
            //description: 'Jeffrey D. Sachs, situates the decline of American well-being in the context of a mass-addiction society. A variety of interrelated evolutionary, socioeconomic, physiological, and regulatory factors are associated with rising addiction rates across areas including drugs and alcohol, food and obesity, and internet usage. The United States’ historical failure to implement public health policies that emphasize well-being over corporate interests must be addressed to respond to the addiction epidemic. Effective interventions might include a rapid scale-up of publicly financed mental health services and increased regulation of the prescriptive drug industry and other addictive products and activities.',
            location: {
                center: [-97.9222112121185, 39.3812661305678],
                zoom: 3,
                pitch: 60,
                bearing: 0,
                code: 'USA'
            },
            hide: false,
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: '8',
            alignment: 'center',
            title: 'the U.S. is suffering an epidemic of addictions, and that these addictions are leaving a rising portion of American society unhappy and a rising number clinically depressed ',
            //image: './images/gdp.png',
            description: 'Jeffrey D. Sachs, situates the decline of American well-being in the context of a mass-addiction society. A variety of interrelated evolutionary, socioeconomic, physiological, and regulatory factors are associated with rising addiction rates across areas including drugs and alcohol, food and obesity, and internet usage. The United States’ historical failure to implement public health policies that emphasize well-being over corporate interests must be addressed to respond to the addiction epidemic. Effective interventions might include a rapid scale-up of publicly financed mental health services and increased regulation of the prescriptive drug industry and other addictive products and activities.',
            location: {
                center: [-97.9222112121185, 39.3812661305678],
                zoom: 3,
                pitch: 60,
                bearing: 0,
                code: 'USA'
            },
            hide: true,
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '9',
            alignment: 'center',
            title: 'Oh hello looking for your phones again? ',
            description: 'How many times have you been trying to fall asleep when suddenly you hear your phone cut through the silence with a notification? You think to yourself, “No, I’ll just check it in the morning,” but then you start to wonder what it could be. Could it be a monumental sports trade? A confession of love from your crush? ',
            image: './images/phone.png',
            location: {
                center: [-73.9808, 40.7648],
                zoom: 7,
                pitch: 0,
                bearing: 0,
                code: 'USA'
            },
            hide: true,
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '10',
            alignment: 'center',
            title: 'No answer to this but still wish yall as happy as you can ',
            //description: 'How many times have you been trying to fall asleep when suddenly you hear your phone cut through the silence with a notification? You think to yourself, “No, I’ll just check it in the morning,” but then you start to wonder what it could be. Could it be a monumental sports trade? A confession of love from your crush? ',
            image: './images/happyall.png',
            location: {
                center: [-73.9808, 40.7648],
                zoom: 1,
                pitch: 0,
                bearing: 0,
                code: 'USA'
            },
            hide: false,
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};

var activecategory = 'gdp'
var activeyear = 2020
var med1 = 5.515
var med2 = 9.500

function gdpbutton() {
    var matchExpression = ['match', ['get', 'iso_3166_1_alpha_3']];
    switch (activeyear) {
        case 2020:
            set = data;
            med1 = 5.406
            med2 = 9.500
            break;
        case 2019:
            set = data_2019;
            med1 = 5.515
            med2 = 0.973
            break;
        case 2018:
            set = data_2018;
            med1 = 5.404
            med2 = 0.970
            break;
        case 2017:
            set = data_2017;
            med1 = 5.311
            med2 = 1.075
            break;
        case 2016:
            set = data_2016;
            med1 = 5.314
            med2 = 1.034
            break;
        case 2015:
            set = data_2015;
            med1 = 5.268
            med2 = 0.920
            break;
    }

    set.forEach(function(row) {
        // Convert the range of data values to a suitable color
        let color;
        if (row['Ladder score'] > med1) {
            if (row['Logged GDP per capita'] > med2) {
                color = 'rgba(188,109,217,1)';
            } else {
                color = 'rgba(215,194,223,1)';
            }
        } else {
            if (row['Logged GDP per capita'] > med2) {
                color = 'rgba(255,255,255,1)';
            } else {
                color = 'rgba(177,177,177,1)';
            }
        }
        matchExpression.push(row['A3 Code'], color);

    });
    matchExpression.push('rgba(0, 0, 0, 0)');

    map2.setPaintProperty('countries-join', 'fill-color', matchExpression)

    Array.from(document.getElementsByClassName('categorybutton')).forEach(function(d) {
        d.style.borderStyle = "solid";
    })

    document.getElementById('gdpbutton').style.borderStyle = "inset";

    activecategory = 'gdp';
}

function socialbutton() {
    var matchExpression = ['match', ['get', 'iso_3166_1_alpha_3']];
    switch (activeyear) {
        case 2020:
            set = data;
            med1 = 5.406
            med2 = 0.835
            break;
        case 2019:
            set = data_2019;
            med1 = 5.515
            med2 = 1.276
            break;
        case 2018:
            set = data_2018;
            med1 = 5.404
            med2 = 1.274
            break;
        case 2017:
            set = data_2017;
            med1 = 5.311
            med2 = 1.126
            break;
        case 2016:
            set = data_2016;
            med1 = 5.314
            med2 = 0.862
            break;
        case 2015:
            set = data_2015;
            med1 = 5.268
            med2 = 1.035
            break;
    }

    set.forEach(function(row) {
        // Convert the range of data values to a suitable color
        let color;
        if (row['Ladder score'] > med1) {
            if (row['Social support'] > med2) {
                color = 'rgba(255,156,56,1)';
            } else {
                color = 'rgba(255,219,183,1)';
            }
        } else {
            if (row['Social support'] > med2) {
                color = 'rgba(255,255,255,1)';
            } else {
                color = 'rgba(177,177,177,1)';
            }
        }
        matchExpression.push(row['A3 Code'], color);

    });
    matchExpression.push('rgba(0, 0, 0, 0)');

    map2.setPaintProperty('countries-join', 'fill-color', matchExpression)

    Array.from(document.getElementsByClassName('categorybutton')).forEach(function(d) {
        d.style.borderStyle = "solid";
    })

    document.getElementById('socialbutton').style.borderStyle = "inset";

    activecategory = 'social';
}

function lifebutton() {
    var matchExpression = ['match', ['get', 'iso_3166_1_alpha_3']];
    switch (activeyear) {
        case 2020:
            set = data;
            med1 = 5.406
            med2 = 66.404
            break;
        case 2019:
            set = data_2019;
            med1 = 5.515
            med2 = 0.797
            break;
        case 2018:
            set = data_2018;
            med1 = 5.404
            med2 = 0.669
            break;
        case 2017:
            set = data_2017;
            med1 = 5.311
            med2 = 0.617
            break;
        case 2016:
            set = data_2016;
            med1 = 5.314
            med2 = 0.618
            break;
        case 2015:
            set = data_2015;
            med1 = 5.268
            med2 = 0.704
            break;
    }

    set.forEach(function(row) {
        // Convert the range of data values to a suitable color
        let color;
        if (row['Ladder score'] > med1) {
            if (row['Healthy life expectancy'] > med2) {
                color = 'rgba(102,208,146,1)';
            } else {
                color = 'rgba(181,236,204,1)';
            }
        } else {
            if (row['Healthy life expectancy'] > med2) {
                color = 'rgba(255,255,255,1)';
            } else {
                color = 'rgba(177,177,177,1)';
            }
        }
        matchExpression.push(row['A3 Code'], color);

    });
    matchExpression.push('rgba(0, 0, 0, 0)');

    map2.setPaintProperty('countries-join', 'fill-color', matchExpression)

    Array.from(document.getElementsByClassName('categorybutton')).forEach(function(d) {
        d.style.borderStyle = "solid";
    })

    document.getElementById('lifebutton').style.borderStyle = "inset";

    activecategory = 'life';
}

function freedombutton() {
    var matchExpression = ['match', ['get', 'iso_3166_1_alpha_3']];
    switch (activeyear) {
        case 2020:
            set = data;
            med1 = 5.406
            med2 = 0.800
            break;
        case 2019:
            set = data_2019;
            med1 = 5.515
            med2 = 0.413
            break;
        case 2018:
            set = data_2018;
            med1 = 5.404
            med2 = 0.480
            break;
        case 2017:
            set = data_2017;
            med1 = 5.311
            med2 = 0.437
            break;
        case 2016:
            set = data_2016;
            med1 = 5.314
            med2 = 0.390
            break;
        case 2015:
            set = data_2015;
            med1 = 5.268
            med2 = 0.431
            break;
    }

    set.forEach(function(row) {
        // Convert the range of data values to a suitable color
        let color;
        if (row['Ladder score'] > med1) {
            if (row['Freedom to make life choices'] > med2) {
                color = 'rgba(187,25,187,1)';
            } else {
                color = 'rgba(255,168,255,1)';
            }
        } else {
            if (row['Freedom to make life choices'] > med2) {
                color = 'rgba(255,255,255,1)';
            } else {
                color = 'rgba(177,177,177,1)';
            }
        }
        matchExpression.push(row['A3 Code'], color);

    });
    matchExpression.push('rgba(0, 0, 0, 0)');

    map2.setPaintProperty('countries-join', 'fill-color', matchExpression)

    Array.from(document.getElementsByClassName('categorybutton')).forEach(function(d) {
        d.style.borderStyle = "solid";
    })

    document.getElementById('freedombutton').style.borderStyle = "inset";

    activecategory = 'freedom';
}

function generositybutton() {
    var matchExpression = ['match', ['get', 'iso_3166_1_alpha_3']];
    switch (activeyear) {
        case 2020:
            set = data;
            med1 = 5.406
            med2 = -0.038
            break;
        case 2019:
            set = data_2019;
            med1 = 5.515
            med2 = 0.175
            break;
        case 2018:
            set = data_2018;
            med1 = 5.404
            med2 = 0.172
            break;
        case 2017:
            set = data_2017;
            med1 = 5.311
            med2 = 0.231
            break;
        case 2016:
            set = data_2016;
            med1 = 5.314
            med2 = 0.217
            break;
        case 2015:
            set = data_2015;
            med1 = 5.268
            med2 = 0.215
            break;
    }

    set.forEach(function(row) {
        // Convert the range of data values to a suitable color
        let color;
        if (row['Ladder score'] > med1) {
            if (row['Generosity'] > med2) {
                color = 'rgba(209,59,64,1)';
            } else {
                color = 'rgba(220,164,167,1)';
            }
        } else {
            if (row['Generosity'] > med2) {
                color = 'rgba(255,255,255,1)';
            } else {
                color = 'rgba(177,177,177,1)';
            }
        }
        matchExpression.push(row['A3 Code'], color);

    });
    matchExpression.push('rgba(0, 0, 0, 0)');

    map2.setPaintProperty('countries-join', 'fill-color', matchExpression)

    Array.from(document.getElementsByClassName('categorybutton')).forEach(function(d) {
        d.style.borderStyle = "solid";
    })

    document.getElementById('generositybutton').style.borderStyle = "inset";

    activecategory = 'generosity';
}

function corruptionbutton() {
    var matchExpression = ['match', ['get', 'iso_3166_1_alpha_3']];
    switch (activeyear) {
        case 2020:
            set = data;
            med1 = 5.406
            med2 = 0.783
            break;
        case 2019:
            set = data_2019;
            med1 = 5.515
            med2 = 0.084
            break;
        case 2018:
            set = data_2018;
            med1 = 5.404
            med2 = 0.080
            break;
        case 2017:
            set = data_2017;
            med1 = 5.311
            med2 = 0.088
            break;
        case 2016:
            set = data_2016;
            med1 = 5.314
            med2 = 0.098
            break;
        case 2015:
            set = data_2015;
            med1 = 5.268
            med2 = 0.104
            break;
    }

    set.forEach(function(row) {
        // Convert the range of data values to a suitable color
        let color;
        if (row['Ladder score'] > med1) {
            if (row['Perceptions of corruption'] > med2) {
                color = 'rgba(10,90,242,1)';
            } else {
                color = 'rgba(136,177,255,1)';
            }
        } else {
            if (row['Perceptions of corruption'] > med2) {
                color = 'rgba(255,255,255,1)';
            } else {
                color = 'rgba(177,177,177,1)';
            }
        }
        matchExpression.push(row['A3 Code'], color);

    });
    matchExpression.push('rgba(0, 0, 0, 0)');

    map2.setPaintProperty('countries-join', 'fill-color', matchExpression)

    Array.from(document.getElementsByClassName('categorybutton')).forEach(function(d) {
        d.style.borderStyle = "solid";
    })

    document.getElementById('corruptionbutton').style.borderStyle = "inset";

    activecategory = 'corruption';
}

function buttonyear(year) {
    activeyear = year;
    switch (activecategory) {
        case 'gdp':
            gdpbutton();
            break;
        case 'social':
            socialbutton();
            break;
        case 'life':
            lifebutton();
            break;
        case 'freedom':
            freedombutton();
            break;
        case 'generosity':
            generositybutton();
            break;
        case 'corruption':
            corruptionbutton();
            break;
    }
}


var data = [{
        "A3 Code": "FIN",
        "Ladder score": 7.808700085,
        "Social support": 0.954329729,
        "Logged GDP per capita": 10.63926697,
        "Healthy life expectancy": 71.9008255,
        "Freedom to make life choices": 0.949172199,
        "Generosity": -0.059482019,
        "Perceptions of corruption": 0.195444584
    },
    {
        "A3 Code": "DNK",
        "Ladder score": 7.645599842,
        "Social support": 0.955990791,
        "Logged GDP per capita": 10.77400112,
        "Healthy life expectancy": 72.40250397,
        "Freedom to make life choices": 0.951444268,
        "Generosity": 0.066201776,
        "Perceptions of corruption": 0.168489456
    },
    {
        "A3 Code": "CHE",
        "Ladder score": 7.559899807,
        "Social support": 0.942846596,
        "Logged GDP per capita": 10.97993279,
        "Healthy life expectancy": 74.10244751,
        "Freedom to make life choices": 0.921336651,
        "Generosity": 0.105911039,
        "Perceptions of corruption": 0.303728431
    },
    {
        "A3 Code": "ISL",
        "Ladder score": 7.504499912,
        "Social support": 0.974669576,
        "Logged GDP per capita": 10.77255917,
        "Healthy life expectancy": 73,
        "Freedom to make life choices": 0.948891878,
        "Generosity": 0.246944219,
        "Perceptions of corruption": 0.711709738
    },
    {
        "A3 Code": "NOR",
        "Ladder score": 7.487999916,
        "Social support": 0.952486575,
        "Logged GDP per capita": 11.08780384,
        "Healthy life expectancy": 73.20078278,
        "Freedom to make life choices": 0.955750287,
        "Generosity": 0.13453263,
        "Perceptions of corruption": 0.263218194
    },
    {
        "A3 Code": "NLD",
        "Ladder score": 7.448900223,
        "Social support": 0.93913883,
        "Logged GDP per capita": 10.81271172,
        "Healthy life expectancy": 72.30091858,
        "Freedom to make life choices": 0.908547819,
        "Generosity": 0.20761244,
        "Perceptions of corruption": 0.364717126
    },
    {
        "A3 Code": "SWE",
        "Ladder score": 7.353499889,
        "Social support": 0.926311195,
        "Logged GDP per capita": 10.75879383,
        "Healthy life expectancy": 72.60076904,
        "Freedom to make life choices": 0.939144194,
        "Generosity": 0.111614622,
        "Perceptions of corruption": 0.250880182
    },
    {
        "A3 Code": "NZL",
        "Ladder score": 7.299600124,
        "Social support": 0.949118972,
        "Logged GDP per capita": 10.50094318,
        "Healthy life expectancy": 73.20262909,
        "Freedom to make life choices": 0.936217487,
        "Generosity": 0.191598073,
        "Perceptions of corruption": 0.22113885
    },
    {
        "A3 Code": "AUT",
        "Ladder score": 7.294199944,
        "Social support": 0.928045869,
        "Logged GDP per capita": 10.7428236,
        "Healthy life expectancy": 73.00250244,
        "Freedom to make life choices": 0.899989486,
        "Generosity": 0.085429221,
        "Perceptions of corruption": 0.499954879
    },
    {
        "A3 Code": "LUX",
        "Ladder score": 7.237500191,
        "Social support": 0.906912208,
        "Logged GDP per capita": 11.45068073,
        "Healthy life expectancy": 72.59999847,
        "Freedom to make life choices": 0.90563643,
        "Generosity": -0.004620588,
        "Perceptions of corruption": 0.367084295
    },
    {
        "A3 Code": "CAN",
        "Ladder score": 7.23210001,
        "Social support": 0.927176654,
        "Logged GDP per capita": 10.69236851,
        "Healthy life expectancy": 73.60160065,
        "Freedom to make life choices": 0.933913231,
        "Generosity": 0.124770768,
        "Perceptions of corruption": 0.390843362
    },
    {
        "A3 Code": "AUS",
        "Ladder score": 7.222799778,
        "Social support": 0.944854617,
        "Logged GDP per capita": 10.72059631,
        "Healthy life expectancy": 73.60453796,
        "Freedom to make life choices": 0.915431738,
        "Generosity": 0.19046016,
        "Perceptions of corruption": 0.41516912
    },
    {
        "A3 Code": "GBR",
        "Ladder score": 7.164500237,
        "Social support": 0.93668282,
        "Logged GDP per capita": 10.60013485,
        "Healthy life expectancy": 72.30160522,
        "Freedom to make life choices": 0.834743679,
        "Generosity": 0.263732493,
        "Perceptions of corruption": 0.435915917
    },
    {
        "A3 Code": "ISR",
        "Ladder score": 7.128600121,
        "Social support": 0.913571239,
        "Logged GDP per capita": 10.41752529,
        "Healthy life expectancy": 73.20025635,
        "Freedom to make life choices": 0.747580588,
        "Generosity": 0.10259372,
        "Perceptions of corruption": 0.78085506
    },
    {
        "A3 Code": "CRI",
        "Ladder score": 7.121399879,
        "Social support": 0.901545942,
        "Logged GDP per capita": 9.658156395,
        "Healthy life expectancy": 71.29985046,
        "Freedom to make life choices": 0.934738934,
        "Generosity": -0.10242971,
        "Perceptions of corruption": 0.786332428
    },
    {
        "A3 Code": "IRL",
        "Ladder score": 7.093699932,
        "Social support": 0.942081571,
        "Logged GDP per capita": 11.16097832,
        "Healthy life expectancy": 72.30078888,
        "Freedom to make life choices": 0.886982977,
        "Generosity": 0.145784974,
        "Perceptions of corruption": 0.357184172
    },
    {
        "A3 Code": "DEU",
        "Ladder score": 7.075799942,
        "Social support": 0.898874462,
        "Logged GDP per capita": 10.7328186,
        "Healthy life expectancy": 72.20201874,
        "Freedom to make life choices": 0.867371082,
        "Generosity": 0.080179386,
        "Perceptions of corruption": 0.456422031
    },
    {
        "A3 Code": "USA",
        "Ladder score": 6.939599991,
        "Social support": 0.914219022,
        "Logged GDP per capita": 10.92576885,
        "Healthy life expectancy": 68.29949951,
        "Freedom to make life choices": 0.842619538,
        "Generosity": 0.149891734,
        "Perceptions of corruption": 0.699715316
    },
    {
        "A3 Code": "CZE",
        "Ladder score": 6.910900116,
        "Social support": 0.914430678,
        "Logged GDP per capita": 10.40416336,
        "Healthy life expectancy": 70.04793549,
        "Freedom to make life choices": 0.818537354,
        "Generosity": -0.230861515,
        "Perceptions of corruption": 0.85844624
    },
    {
        "A3 Code": "BEL",
        "Ladder score": 6.863500118,
        "Social support": 0.911632538,
        "Logged GDP per capita": 10.6736393,
        "Healthy life expectancy": 72.00164795,
        "Freedom to make life choices": 0.813582063,
        "Generosity": -0.078691199,
        "Perceptions of corruption": 0.612297952
    },
    {
        "A3 Code": "ARE",
        "Ladder score": 6.790800095,
        "Social support": 0.849181116,
        "Logged GDP per capita": 11.1099987,
        "Healthy life expectancy": 67.08278656,
        "Freedom to make life choices": 0.941345513,
        "Generosity": 0.123450845,
        "Perceptions of corruption": 0.594502211
    },
    {
        "A3 Code": "MLT",
        "Ladder score": 6.772799969,
        "Social support": 0.93037951,
        "Logged GDP per capita": 10.53383827,
        "Healthy life expectancy": 72.19999695,
        "Freedom to make life choices": 0.924911439,
        "Generosity": 0.214965805,
        "Perceptions of corruption": 0.658547282
    },
    {
        "A3 Code": "FRA",
        "Ladder score": 6.663799763,
        "Social support": 0.937103748,
        "Logged GDP per capita": 10.58422279,
        "Healthy life expectancy": 73.80193329,
        "Freedom to make life choices": 0.825467646,
        "Generosity": -0.130641967,
        "Perceptions of corruption": 0.583521128
    },
    {
        "A3 Code": "MEX",
        "Ladder score": 6.465000153,
        "Social support": 0.838665426,
        "Logged GDP per capita": 9.797797203,
        "Healthy life expectancy": 68.29902649,
        "Freedom to make life choices": 0.858709276,
        "Generosity": -0.175266623,
        "Perceptions of corruption": 0.806821585
    },
    {
        "A3 Code": "TWN",
        "Ladder score": 6.45539999,
        "Social support": 0.894309103,
        "Logged GDP per capita": 10.77568531,
        "Healthy life expectancy": 69.59999847,
        "Freedom to make life choices": 0.77153033,
        "Generosity": -0.073198698,
        "Perceptions of corruption": 0.73188293
    },
    {
        "A3 Code": "URY",
        "Ladder score": 6.440100193,
        "Social support": 0.92281127,
        "Logged GDP per capita": 9.948192596,
        "Healthy life expectancy": 69.00254822,
        "Freedom to make life choices": 0.892395437,
        "Generosity": -0.101103112,
        "Perceptions of corruption": 0.635994136
    },
    {
        "A3 Code": "SAU",
        "Ladder score": 6.406499863,
        "Social support": 0.874067068,
        "Logged GDP per capita": 10.79781246,
        "Healthy life expectancy": 66.30514526,
        "Freedom to make life choices": 0.854191244,
        "Generosity": -0.168695062,
        "Perceptions of corruption": 0.682619512
    },
    {
        "A3 Code": "ESP",
        "Ladder score": 6.400899887,
        "Social support": 0.921125412,
        "Logged GDP per capita": 10.46292686,
        "Healthy life expectancy": 74.40270996,
        "Freedom to make life choices": 0.751989543,
        "Generosity": -0.050961714,
        "Perceptions of corruption": 0.765859902
    },
    {
        "A3 Code": "GTM",
        "Ladder score": 6.398900032,
        "Social support": 0.816621482,
        "Logged GDP per capita": 8.924805641,
        "Healthy life expectancy": 64.8089447,
        "Freedom to make life choices": 0.908147573,
        "Generosity": -0.042938665,
        "Perceptions of corruption": 0.783237457
    },
    {
        "A3 Code": "ITA",
        "Ladder score": 6.38740015,
        "Social support": 0.889878571,
        "Logged GDP per capita": 10.48183632,
        "Healthy life expectancy": 73.60168457,
        "Freedom to make life choices": 0.66465199,
        "Generosity": -0.043460999,
        "Perceptions of corruption": 0.873404682
    },
    {
        "A3 Code": "SGP",
        "Ladder score": 6.377099991,
        "Social support": 0.910268962,
        "Logged GDP per capita": 11.39552116,
        "Healthy life expectancy": 76.80458069,
        "Freedom to make life choices": 0.926645339,
        "Generosity": 0.029879224,
        "Perceptions of corruption": 0.109784193
    },
    {
        "A3 Code": "BRA",
        "Ladder score": 6.375599861,
        "Social support": 0.896723807,
        "Logged GDP per capita": 9.56643486,
        "Healthy life expectancy": 66.48016357,
        "Freedom to make life choices": 0.799804807,
        "Generosity": -0.101812392,
        "Perceptions of corruption": 0.770601273
    },
    {
        "A3 Code": "SVN",
        "Ladder score": 6.363399982,
        "Social support": 0.939575672,
        "Logged GDP per capita": 10.39232254,
        "Healthy life expectancy": 71.1029892,
        "Freedom to make life choices": 0.936142623,
        "Generosity": -0.080603383,
        "Perceptions of corruption": 0.817071021
    },
    {
        "A3 Code": "SLV",
        "Ladder score": 6.34829998,
        "Social support": 0.806092262,
        "Logged GDP per capita": 8.909075737,
        "Healthy life expectancy": 66.10826111,
        "Freedom to make life choices": 0.833805263,
        "Generosity": -0.121072978,
        "Perceptions of corruption": 0.754319906
    },
    {
        "A3 Code": "PAN",
        "Ladder score": 6.304800034,
        "Social support": 0.902094483,
        "Logged GDP per capita": 10.03423405,
        "Healthy life expectancy": 69.60301208,
        "Freedom to make life choices": 0.880366504,
        "Generosity": -0.153927714,
        "Perceptions of corruption": 0.851588905
    },
    {
        "A3 Code": "SVK",
        "Ladder score": 6.280600071,
        "Social support": 0.922493756,
        "Logged GDP per capita": 10.34774971,
        "Healthy life expectancy": 68.90634155,
        "Freedom to make life choices": 0.749952674,
        "Generosity": -0.124409303,
        "Perceptions of corruption": 0.918096125
    },
    {
        "A3 Code": "UZB",
        "Ladder score": 6.257599831,
        "Social support": 0.926595807,
        "Logged GDP per capita": 8.740371704,
        "Healthy life expectancy": 65.10757446,
        "Freedom to make life choices": 0.974998116,
        "Generosity": 0.248427153,
        "Perceptions of corruption": 0.501497388
    },
    {
        "A3 Code": "CHL",
        "Ladder score": 6.228499889,
        "Social support": 0.879713595,
        "Logged GDP per capita": 10.0320549,
        "Healthy life expectancy": 69.90061951,
        "Freedom to make life choices": 0.744896293,
        "Generosity": -0.065668367,
        "Perceptions of corruption": 0.838239431
    },
    {
        "A3 Code": "BHR",
        "Ladder score": 6.227300167,
        "Social support": 0.876342118,
        "Logged GDP per capita": 10.67638016,
        "Healthy life expectancy": 68.5,
        "Freedom to make life choices": 0.905855775,
        "Generosity": 0.13372919,
        "Perceptions of corruption": 0.7393471
    },
    {
        "A3 Code": "LTU",
        "Ladder score": 6.215499878,
        "Social support": 0.926107109,
        "Logged GDP per capita": 10.34362602,
        "Healthy life expectancy": 67.29407501,
        "Freedom to make life choices": 0.747381449,
        "Generosity": -0.219725296,
        "Perceptions of corruption": 0.809583843
    },
    {
        "A3 Code": "TTO",
        "Ladder score": 6.191899776,
        "Social support": 0.91529417,
        "Logged GDP per capita": 10.26000214,
        "Healthy life expectancy": 63.5,
        "Freedom to make life choices": 0.857907116,
        "Generosity": 0.000526841,
        "Perceptions of corruption": 0.912230611
    },
    {
        "A3 Code": "POL",
        "Ladder score": 6.186299801,
        "Social support": 0.874257445,
        "Logged GDP per capita": 10.26512432,
        "Healthy life expectancy": 69.31113434,
        "Freedom to make life choices": 0.862055779,
        "Generosity": -0.205084071,
        "Perceptions of corruption": 0.686927021
    },
    {
        "A3 Code": "COL",
        "Ladder score": 6.163400173,
        "Social support": 0.884440243,
        "Logged GDP per capita": 9.500369072,
        "Healthy life expectancy": 67.69958496,
        "Freedom to make life choices": 0.836179912,
        "Generosity": -0.161235645,
        "Perceptions of corruption": 0.86457181
    },
    {
        "A3 Code": "CYP",
        "Ladder score": 6.15899992,
        "Social support": 0.805996239,
        "Logged GDP per capita": 10.40570259,
        "Healthy life expectancy": 73.70222473,
        "Freedom to make life choices": 0.779858291,
        "Generosity": 0.043731496,
        "Perceptions of corruption": 0.856271744
    },
    {
        "A3 Code": "NIC",
        "Ladder score": 6.13710022,
        "Social support": 0.857497036,
        "Logged GDP per capita": 8.493160248,
        "Healthy life expectancy": 67.50717926,
        "Freedom to make life choices": 0.863902867,
        "Generosity": 0.020959141,
        "Perceptions of corruption": 0.665950119
    },
    {
        "A3 Code": "ROU",
        "Ladder score": 6.123700142,
        "Social support": 0.825161517,
        "Logged GDP per capita": 10.107584,
        "Healthy life expectancy": 67.20723724,
        "Freedom to make life choices": 0.842823207,
        "Generosity": -0.19781521,
        "Perceptions of corruption": 0.934300244
    },
    {
        "A3 Code": "KWT",
        "Ladder score": 6.102099895,
        "Social support": 0.846475244,
        "Logged GDP per capita": 11.08982468,
        "Healthy life expectancy": 66.76764679,
        "Freedom to make life choices": 0.872366488,
        "Generosity": -0.100184701,
        "Perceptions of corruption": 0.760849059
    },
    {
        "A3 Code": "MUS",
        "Ladder score": 6.101299763,
        "Social support": 0.910357833,
        "Logged GDP per capita": 9.956786156,
        "Healthy life expectancy": 66.40434265,
        "Freedom to make life choices": 0.889534533,
        "Generosity": -0.018318573,
        "Perceptions of corruption": 0.805343091
    },
    {
        "A3 Code": "KAZ",
        "Ladder score": 6.057899952,
        "Social support": 0.934744895,
        "Logged GDP per capita": 10.11465836,
        "Healthy life expectancy": 64.60996246,
        "Freedom to make life choices": 0.811601937,
        "Generosity": -0.068488635,
        "Perceptions of corruption": 0.764490843
    },
    {
        "A3 Code": "EST",
        "Ladder score": 6.021800041,
        "Social support": 0.934729993,
        "Logged GDP per capita": 10.34001732,
        "Healthy life expectancy": 68.60495758,
        "Freedom to make life choices": 0.87770915,
        "Generosity": -0.111697771,
        "Perceptions of corruption": 0.623073816
    },
    {
        "A3 Code": "PHL",
        "Ladder score": 6.006000042,
        "Social support": 0.846730053,
        "Logged GDP per capita": 8.993545532,
        "Healthy life expectancy": 61.92676163,
        "Freedom to make life choices": 0.915463448,
        "Generosity": -0.105463006,
        "Perceptions of corruption": 0.733634114
    },
    {
        "A3 Code": "HUN",
        "Ladder score": 6.000400066,
        "Social support": 0.921934128,
        "Logged GDP per capita": 10.24924374,
        "Healthy life expectancy": 67.60997009,
        "Freedom to make life choices": 0.718964577,
        "Generosity": -0.194323018,
        "Perceptions of corruption": 0.892916501
    },
    {
        "A3 Code": "THA",
        "Ladder score": 5.998799801,
        "Social support": 0.889973223,
        "Logged GDP per capita": 9.741791725,
        "Healthy life expectancy": 67.25059509,
        "Freedom to make life choices": 0.905063033,
        "Generosity": 0.268685192,
        "Perceptions of corruption": 0.886272311
    },
    {
        "A3 Code": "ARG",
        "Ladder score": 5.974699974,
        "Social support": 0.900567949,
        "Logged GDP per capita": 9.810955048,
        "Healthy life expectancy": 68.80380249,
        "Freedom to make life choices": 0.831132412,
        "Generosity": -0.194913864,
        "Perceptions of corruption": 0.842009842
    },
    {
        "A3 Code": "HND",
        "Ladder score": 5.953199863,
        "Social support": 0.821870148,
        "Logged GDP per capita": 8.424534798,
        "Healthy life expectancy": 67.19876862,
        "Freedom to make life choices": 0.870603263,
        "Generosity": 0.086969115,
        "Perceptions of corruption": 0.801131904
    },
    {
        "A3 Code": "LVA",
        "Ladder score": 5.949999809,
        "Social support": 0.918288589,
        "Logged GDP per capita": 10.17531967,
        "Healthy life expectancy": 66.8074646,
        "Freedom to make life choices": 0.671237648,
        "Generosity": -0.186888844,
        "Perceptions of corruption": 0.795580089
    },
    {
        "A3 Code": "ECU",
        "Ladder score": 5.925199986,
        "Social support": 0.836418986,
        "Logged GDP per capita": 9.246058464,
        "Healthy life expectancy": 68.50003815,
        "Freedom to make life choices": 0.859828949,
        "Generosity": -0.127014965,
        "Perceptions of corruption": 0.801215112
    },
    {
        "A3 Code": "PRT",
        "Ladder score": 5.910900116,
        "Social support": 0.886590719,
        "Logged GDP per capita": 10.26374245,
        "Healthy life expectancy": 72.40202332,
        "Freedom to make life choices": 0.888747811,
        "Generosity": -0.220714301,
        "Perceptions of corruption": 0.892629504
    },
    {
        "A3 Code": "JAM",
        "Ladder score": 5.889800072,
        "Social support": 0.915701866,
        "Logged GDP per capita": 9.006250381,
        "Healthy life expectancy": 67.09999847,
        "Freedom to make life choices": 0.858068526,
        "Generosity": -0.125106767,
        "Perceptions of corruption": 0.888890028
    },
    {
        "A3 Code": "KOR",
        "Ladder score": 5.872399807,
        "Social support": 0.799387157,
        "Logged GDP per capita": 10.51056671,
        "Healthy life expectancy": 73.6027298,
        "Freedom to make life choices": 0.612965107,
        "Generosity": -0.043404032,
        "Perceptions of corruption": 0.789067447
    },
    {
        "A3 Code": "JPN",
        "Ladder score": 5.870800018,
        "Social support": 0.883545935,
        "Logged GDP per capita": 10.57968903,
        "Healthy life expectancy": 75.00096893,
        "Freedom to make life choices": 0.809961379,
        "Generosity": -0.246910349,
        "Perceptions of corruption": 0.654558063
    },
    {
        "A3 Code": "PER",
        "Ladder score": 5.796800137,
        "Social support": 0.831075251,
        "Logged GDP per capita": 9.456313133,
        "Healthy life expectancy": 68.10023499,
        "Freedom to make life choices": 0.824766099,
        "Generosity": -0.16238822,
        "Perceptions of corruption": 0.893714964
    },
    {
        "A3 Code": "SRB",
        "Ladder score": 5.77820015,
        "Social support": 0.881475747,
        "Logged GDP per capita": 9.680980682,
        "Healthy life expectancy": 68.21020508,
        "Freedom to make life choices": 0.726495862,
        "Generosity": -0.073676221,
        "Perceptions of corruption": 0.843509018
    },
    {
        "A3 Code": "BOL",
        "Ladder score": 5.747499943,
        "Social support": 0.803108692,
        "Logged GDP per capita": 8.851115227,
        "Healthy life expectancy": 63.6004715,
        "Freedom to make life choices": 0.875873327,
        "Generosity": -0.09168113,
        "Perceptions of corruption": 0.822606206
    },
    {
        "A3 Code": "PAK",
        "Ladder score": 5.69329977,
        "Social support": 0.689062297,
        "Logged GDP per capita": 8.482727051,
        "Healthy life expectancy": 58.25313568,
        "Freedom to make life choices": 0.734833717,
        "Generosity": 0.04489987,
        "Perceptions of corruption": 0.745705426
    },
    {
        "A3 Code": "PRY",
        "Ladder score": 5.692100048,
        "Social support": 0.898727894,
        "Logged GDP per capita": 9.389982224,
        "Healthy life expectancy": 65.63993835,
        "Freedom to make life choices": 0.885923445,
        "Generosity": 0.007997713,
        "Perceptions of corruption": 0.834788501
    },
    {
        "A3 Code": "DOM",
        "Ladder score": 5.689199924,
        "Social support": 0.882085383,
        "Logged GDP per capita": 9.664880753,
        "Healthy life expectancy": 65.80748749,
        "Freedom to make life choices": 0.866202772,
        "Generosity": -0.131263286,
        "Perceptions of corruption": 0.755999923
    },
    {
        "A3 Code": "BIH",
        "Ladder score": 5.674099922,
        "Social support": 0.829204142,
        "Logged GDP per capita": 9.455817223,
        "Healthy life expectancy": 67.80813599,
        "Freedom to make life choices": 0.651352704,
        "Generosity": 0.098274559,
        "Perceptions of corruption": 0.933769107
    },
    {
        "A3 Code": "MDA",
        "Ladder score": 5.607500076,
        "Social support": 0.843313575,
        "Logged GDP per capita": 8.776714325,
        "Healthy life expectancy": 65.01301575,
        "Freedom to make life choices": 0.721609175,
        "Generosity": -0.037741039,
        "Perceptions of corruption": 0.913314283
    },
    {
        "A3 Code": "TJK",
        "Ladder score": 5.555699825,
        "Social support": 0.835297108,
        "Logged GDP per capita": 8.024810791,
        "Healthy life expectancy": 64.10459137,
        "Freedom to make life choices": 0.831383407,
        "Generosity": -0.025088511,
        "Perceptions of corruption": 0.592076063
    },
    {
        "A3 Code": "MNE",
        "Ladder score": 5.54610014,
        "Social support": 0.855314612,
        "Logged GDP per capita": 9.751860619,
        "Healthy life expectancy": 68.50534821,
        "Freedom to make life choices": 0.649565637,
        "Generosity": -0.075600356,
        "Perceptions of corruption": 0.783121586
    },
    {
        "A3 Code": "RUS",
        "Ladder score": 5.546000004,
        "Social support": 0.903150737,
        "Logged GDP per capita": 10.12887192,
        "Healthy life expectancy": 64.10045624,
        "Freedom to make life choices": 0.729892612,
        "Generosity": -0.151153743,
        "Perceptions of corruption": 0.864802599
    },
    {
        "A3 Code": "KGZ",
        "Ladder score": 5.541500092,
        "Social support": 0.887228489,
        "Logged GDP per capita": 8.148405075,
        "Healthy life expectancy": 64.10601044,
        "Freedom to make life choices": 0.909374893,
        "Generosity": 0.154772058,
        "Perceptions of corruption": 0.888396084
    },
    {
        "A3 Code": "BLR",
        "Ladder score": 5.539899826,
        "Social support": 0.90674746,
        "Logged GDP per capita": 9.779945374,
        "Healthy life expectancy": 66.10433197,
        "Freedom to make life choices": 0.639163077,
        "Generosity": -0.164926544,
        "Perceptions of corruption": 0.63571167
    },
    {
        "A3 Code": "GRC",
        "Ladder score": 5.514999866,
        "Social support": 0.814380348,
        "Logged GDP per capita": 10.13232613,
        "Healthy life expectancy": 72.40525818,
        "Freedom to make life choices": 0.541345119,
        "Generosity": -0.300907373,
        "Perceptions of corruption": 0.859931409
    },
    {
        "A3 Code": "HKG",
        "Ladder score": 5.510399818,
        "Social support": 0.845969081,
        "Logged GDP per capita": 10.9346714,
        "Healthy life expectancy": 76.77170563,
        "Freedom to make life choices": 0.779833794,
        "Generosity": 0.134979904,
        "Perceptions of corruption": 0.420607209
    },
    {
        "A3 Code": "HRV",
        "Ladder score": 5.504700184,
        "Social support": 0.874623716,
        "Logged GDP per capita": 10.07087517,
        "Healthy life expectancy": 70.21490479,
        "Freedom to make life choices": 0.714838803,
        "Generosity": -0.128538325,
        "Perceptions of corruption": 0.916495264
    },
    {
        "A3 Code": "LBY",
        "Ladder score": 5.488800049,
        "Social support": 0.825942934,
        "Logged GDP per capita": 9.789815903,
        "Healthy life expectancy": 62.29999924,
        "Freedom to make life choices": 0.773157001,
        "Generosity": -0.085054487,
        "Perceptions of corruption": 0.668779135
    },
    {
        "A3 Code": "MNG",
        "Ladder score": 5.456200123,
        "Social support": 0.937142491,
        "Logged GDP per capita": 9.412186623,
        "Healthy life expectancy": 62.30448532,
        "Freedom to make life choices": 0.693351328,
        "Generosity": 0.098093867,
        "Perceptions of corruption": 0.863511205
    },
    {
        "A3 Code": "MYS",
        "Ladder score": 5.384300232,
        "Social support": 0.816509426,
        "Logged GDP per capita": 10.26251888,
        "Healthy life expectancy": 67.10215759,
        "Freedom to make life choices": 0.894626856,
        "Generosity": 0.114726797,
        "Perceptions of corruption": 0.839302301
    },
    {
        "A3 Code": "VNM",
        "Ladder score": 5.353499889,
        "Social support": 0.849987149,
        "Logged GDP per capita": 8.809545517,
        "Healthy life expectancy": 67.9527359,
        "Freedom to make life choices": 0.939592957,
        "Generosity": -0.094533332,
        "Perceptions of corruption": 0.79642123
    },
    {
        "A3 Code": "IDN",
        "Ladder score": 5.285600185,
        "Social support": 0.808379889,
        "Logged GDP per capita": 9.36975193,
        "Healthy life expectancy": 62.15584946,
        "Freedom to make life choices": 0.870614409,
        "Generosity": 0.519586504,
        "Perceptions of corruption": 0.876296401
    },
    {
        "A3 Code": "BEN",
        "Ladder score": 5.21600008,
        "Social support": 0.468671143,
        "Logged GDP per capita": 7.674319744,
        "Healthy life expectancy": 54.31246567,
        "Freedom to make life choices": 0.735182583,
        "Generosity": -0.003537213,
        "Perceptions of corruption": 0.740532577
    },
    {
        "A3 Code": "MDV",
        "Ladder score": 5.197599888,
        "Social support": 0.91316092,
        "Logged GDP per capita": 9.518632889,
        "Healthy life expectancy": 70.59999847,
        "Freedom to make life choices": 0.853962779,
        "Generosity": 0.038085498,
        "Perceptions of corruption": 0.824211061
    },
    {
        "A3 Code": "COD",
        "Ladder score": 5.194399834,
        "Social support": 0.640228093,
        "Logged GDP per capita": 8.536987305,
        "Healthy life expectancy": 57.92448044,
        "Freedom to make life choices": 0.719058514,
        "Generosity": -0.123674095,
        "Perceptions of corruption": 0.751779079
    },
    {
        "A3 Code": "AZE",
        "Ladder score": 5.164800167,
        "Social support": 0.819308281,
        "Logged GDP per capita": 9.687726974,
        "Healthy life expectancy": 65.50839996,
        "Freedom to make life choices": 0.786824107,
        "Generosity": -0.240255281,
        "Perceptions of corruption": 0.55253756
    },
    {
        "A3 Code": "MKD",
        "Ladder score": 5.159800053,
        "Social support": 0.820392311,
        "Logged GDP per capita": 9.510591507,
        "Healthy life expectancy": 67.50442505,
        "Freedom to make life choices": 0.738840938,
        "Generosity": -0.019877451,
        "Perceptions of corruption": 0.897490501
    },
    {
        "A3 Code": "GHA",
        "Ladder score": 5.147999763,
        "Social support": 0.728601098,
        "Logged GDP per capita": 8.350645065,
        "Healthy life expectancy": 57.20398712,
        "Freedom to make life choices": 0.794796526,
        "Generosity": 0.094170853,
        "Perceptions of corruption": 0.847964764
    },
    {
        "A3 Code": "NPL",
        "Ladder score": 5.137199879,
        "Social support": 0.785512447,
        "Logged GDP per capita": 7.925357342,
        "Healthy life expectancy": 63.77917862,
        "Freedom to make life choices": 0.797565043,
        "Generosity": 0.154168829,
        "Perceptions of corruption": 0.738099158
    },
    {
        "A3 Code": "TUR",
        "Ladder score": 5.131800175,
        "Social support": 0.826313555,
        "Logged GDP per capita": 10.12941933,
        "Healthy life expectancy": 66.90281677,
        "Freedom to make life choices": 0.608830452,
        "Generosity": -0.171046436,
        "Perceptions of corruption": 0.748197377
    },
    {
        "A3 Code": "CHN",
        "Ladder score": 5.123899937,
        "Social support": 0.798760593,
        "Logged GDP per capita": 9.688568115,
        "Healthy life expectancy": 69.2891922,
        "Freedom to make life choices": 0.898517907,
        "Generosity": -0.18142575,
        "Perceptions of corruption": 0.7539711
    },
    {
        "A3 Code": "TKM",
        "Ladder score": 5.119100094,
        "Social support": 0.958966196,
        "Logged GDP per capita": 9.74803257,
        "Healthy life expectancy": 62.21170807,
        "Freedom to make life choices": 0.826457024,
        "Generosity": 0.187671542,
        "Perceptions of corruption": 0.883691847
    },
    {
        "A3 Code": "BGR",
        "Ladder score": 5.101500034,
        "Social support": 0.937840343,
        "Logged GDP per capita": 9.869318962,
        "Healthy life expectancy": 66.80397797,
        "Freedom to make life choices": 0.745178163,
        "Generosity": -0.143908441,
        "Perceptions of corruption": 0.935585141
    },
    {
        "A3 Code": "MAR",
        "Ladder score": 5.094799995,
        "Social support": 0.592628479,
        "Logged GDP per capita": 8.940313339,
        "Healthy life expectancy": 65.89624023,
        "Freedom to make life choices": 0.772072434,
        "Generosity": -0.240377247,
        "Perceptions of corruption": 0.815724611
    },
    {
        "A3 Code": "CMR",
        "Ladder score": 5.084899902,
        "Social support": 0.700386405,
        "Logged GDP per capita": 8.118647575,
        "Healthy life expectancy": 52.7049408,
        "Freedom to make life choices": 0.763051808,
        "Generosity": -0.00149645,
        "Perceptions of corruption": 0.851336598
    },
    {
        "A3 Code": "VEN",
        "Ladder score": 5.053199768,
        "Social support": 0.890408158,
        "Logged GDP per capita": 8.977793694,
        "Healthy life expectancy": 66.50534058,
        "Freedom to make life choices": 0.62327832,
        "Generosity": -0.169090509,
        "Perceptions of corruption": 0.837038398
    },
    {
        "A3 Code": "DZA",
        "Ladder score": 5.005099773,
        "Social support": 0.803385139,
        "Logged GDP per capita": 9.537964821,
        "Healthy life expectancy": 65.90517426,
        "Freedom to make life choices": 0.466610909,
        "Generosity": -0.121105164,
        "Perceptions of corruption": 0.735485137
    },
    {
        "A3 Code": "SEN",
        "Ladder score": 4.980800152,
        "Social support": 0.723616004,
        "Logged GDP per capita": 8.118982315,
        "Healthy life expectancy": 59.59915161,
        "Freedom to make life choices": 0.690596163,
        "Generosity": -0.052335154,
        "Perceptions of corruption": 0.808785141
    },
    {
        "A3 Code": "GIN",
        "Ladder score": 4.949299812,
        "Social support": 0.637573481,
        "Logged GDP per capita": 7.750990391,
        "Healthy life expectancy": 54.46780014,
        "Freedom to make life choices": 0.706846774,
        "Generosity": 0.076328471,
        "Perceptions of corruption": 0.761794448
    },
    {
        "A3 Code": "NER",
        "Ladder score": 4.909599781,
        "Social support": 0.617435038,
        "Logged GDP per capita": 6.842166901,
        "Healthy life expectancy": 53.50009537,
        "Freedom to make life choices": 0.759772122,
        "Generosity": 0.013860817,
        "Perceptions of corruption": 0.722530186
    },
    {
        "A3 Code": "ALB",
        "Ladder score": 4.882699966,
        "Social support": 0.671070457,
        "Logged GDP per capita": 9.417930603,
        "Healthy life expectancy": 68.70813751,
        "Freedom to make life choices": 0.781994224,
        "Generosity": -0.042309489,
        "Perceptions of corruption": 0.896303713
    },
    {
        "A3 Code": "KHM",
        "Ladder score": 4.848400116,
        "Social support": 0.773080647,
        "Logged GDP per capita": 8.249890327,
        "Healthy life expectancy": 61.52996826,
        "Freedom to make life choices": 0.959704638,
        "Generosity": 0.051911179,
        "Perceptions of corruption": 0.822769046
    },
    {
        "A3 Code": "BGD",
        "Ladder score": 4.832799911,
        "Social support": 0.687292993,
        "Logged GDP per capita": 8.287063599,
        "Healthy life expectancy": 64.50306702,
        "Freedom to make life choices": 0.90062499,
        "Generosity": -0.033664726,
        "Perceptions of corruption": 0.661843538
    },
    {
        "A3 Code": "GAB",
        "Ladder score": 4.829299927,
        "Social support": 0.787886858,
        "Logged GDP per capita": 9.680537224,
        "Healthy life expectancy": 59.71533966,
        "Freedom to make life choices": 0.704829216,
        "Generosity": -0.222261623,
        "Perceptions of corruption": 0.849150956
    },
    {
        "A3 Code": "ZAF",
        "Ladder score": 4.814099789,
        "Social support": 0.852532268,
        "Logged GDP per capita": 9.403370857,
        "Healthy life expectancy": 56.50601196,
        "Freedom to make life choices": 0.759330094,
        "Generosity": -0.109777324,
        "Perceptions of corruption": 0.843423843
    },
    {
        "A3 Code": "IRQ",
        "Ladder score": 4.784800053,
        "Social support": 0.747694969,
        "Logged GDP per capita": 9.661095619,
        "Healthy life expectancy": 59.90354919,
        "Freedom to make life choices": 0.633182645,
        "Generosity": -0.06956476,
        "Perceptions of corruption": 0.82226181
    },
    {
        "A3 Code": "LBN",
        "Ladder score": 4.771500111,
        "Social support": 0.824338138,
        "Logged GDP per capita": 9.3617239,
        "Healthy life expectancy": 67.10658264,
        "Freedom to make life choices": 0.551357508,
        "Generosity": -0.06121527,
        "Perceptions of corruption": 0.90225625
    },
    {
        "A3 Code": "BFA",
        "Ladder score": 4.768700123,
        "Social support": 0.712943614,
        "Logged GDP per capita": 7.46854496,
        "Healthy life expectancy": 53.88945389,
        "Freedom to make life choices": 0.665563583,
        "Generosity": -0.019080516,
        "Perceptions of corruption": 0.739795029
    },
    {
        "A3 Code": "GMB",
        "Ladder score": 4.750599861,
        "Social support": 0.6931687,
        "Logged GDP per capita": 7.321814537,
        "Healthy life expectancy": 55.0120163,
        "Freedom to make life choices": 0.733163178,
        "Generosity": 0.343198717,
        "Perceptions of corruption": 0.690717816
    },
    {
        "A3 Code": "MLI",
        "Ladder score": 4.729300022,
        "Social support": 0.731468976,
        "Logged GDP per capita": 7.629852295,
        "Healthy life expectancy": 51.72698212,
        "Freedom to make life choices": 0.71156615,
        "Generosity": -0.044366926,
        "Perceptions of corruption": 0.839328408
    },
    {
        "A3 Code": "NGA",
        "Ladder score": 4.724100113,
        "Social support": 0.73721689,
        "Logged GDP per capita": 8.57662487,
        "Healthy life expectancy": 49.86190796,
        "Freedom to make life choices": 0.759578407,
        "Generosity": 0.033745807,
        "Perceptions of corruption": 0.861874342
    },
    {
        "A3 Code": "ARM",
        "Ladder score": 4.676799774,
        "Social support": 0.757479429,
        "Logged GDP per capita": 9.100476265,
        "Healthy life expectancy": 66.75065613,
        "Freedom to make life choices": 0.712017834,
        "Generosity": -0.13877961,
        "Perceptions of corruption": 0.773544788
    },
    {
        "A3 Code": "GEO",
        "Ladder score": 4.672599792,
        "Social support": 0.629033029,
        "Logged GDP per capita": 9.226100922,
        "Healthy life expectancy": 64.49520874,
        "Freedom to make life choices": 0.801641524,
        "Generosity": -0.22892037,
        "Perceptions of corruption": 0.665944695
    },
    {
        "A3 Code": "IRN",
        "Ladder score": 4.672399998,
        "Social support": 0.694689691,
        "Logged GDP per capita": 9.813719749,
        "Healthy life expectancy": 66.00614929,
        "Freedom to make life choices": 0.647873282,
        "Generosity": 0.117891103,
        "Perceptions of corruption": 0.714635968
    },
    {
        "A3 Code": "JOR",
        "Ladder score": 4.633399963,
        "Social support": 0.80216372,
        "Logged GDP per capita": 9.025999069,
        "Healthy life expectancy": 66.79975128,
        "Freedom to make life choices": 0.75104779,
        "Generosity": -0.162565202,
        "Perceptions of corruption": 0.700344324
    },
    {
        "A3 Code": "MOZ",
        "Ladder score": 4.623600006,
        "Social support": 0.723874032,
        "Logged GDP per capita": 7.069345951,
        "Healthy life expectancy": 54.20582199,
        "Freedom to make life choices": 0.864451885,
        "Generosity": 0.032375868,
        "Perceptions of corruption": 0.683019102
    },
    {
        "A3 Code": "KEN",
        "Ladder score": 4.583000183,
        "Social support": 0.702652037,
        "Logged GDP per capita": 8.02977562,
        "Healthy life expectancy": 60.09693146,
        "Freedom to make life choices": 0.829747558,
        "Generosity": 0.294681519,
        "Perceptions of corruption": 0.831499159
    },
    {
        "A3 Code": "NAM",
        "Ladder score": 4.571100235,
        "Social support": 0.846880972,
        "Logged GDP per capita": 9.203141212,
        "Healthy life expectancy": 56.50148773,
        "Freedom to make life choices": 0.767520964,
        "Generosity": -0.18530646,
        "Perceptions of corruption": 0.851449788
    },
    {
        "A3 Code": "UKR",
        "Ladder score": 4.56069994,
        "Social support": 0.878879368,
        "Logged GDP per capita": 9.010690689,
        "Healthy life expectancy": 64.60678101,
        "Freedom to make life choices": 0.663081884,
        "Generosity": -0.030933706,
        "Perceptions of corruption": 0.920636714
    },
    {
        "A3 Code": "LBR",
        "Ladder score": 4.557899952,
        "Social support": 0.70928055,
        "Logged GDP per capita": 7.054380417,
        "Healthy life expectancy": 56.09631348,
        "Freedom to make life choices": 0.735268712,
        "Generosity": 0.04227322,
        "Perceptions of corruption": 0.856375933
    },
    {
        "A3 Code": "PSE",
        "Ladder score": 4.552800179,
        "Social support": 0.825295925,
        "Logged GDP per capita": 8.389223099,
        "Healthy life expectancy": 62.25,
        "Freedom to make life choices": 0.645791829,
        "Generosity": -0.162079096,
        "Perceptions of corruption": 0.824199975
    },
    {
        "A3 Code": "UGA",
        "Ladder score": 4.43200016,
        "Social support": 0.764994621,
        "Logged GDP per capita": 7.500389576,
        "Healthy life expectancy": 55.70820236,
        "Freedom to make life choices": 0.731713951,
        "Generosity": 0.099487431,
        "Perceptions of corruption": 0.836737812
    },
    {
        "A3 Code": "TCD",
        "Ladder score": 4.422699928,
        "Social support": 0.632388055,
        "Logged GDP per capita": 7.467963696,
        "Healthy life expectancy": 48.22053909,
        "Freedom to make life choices": 0.587305248,
        "Generosity": 0.017834719,
        "Perceptions of corruption": 0.802760839
    },
    {
        "A3 Code": "TUN",
        "Ladder score": 4.392199993,
        "Social support": 0.688718557,
        "Logged GDP per capita": 9.314972878,
        "Healthy life expectancy": 66.89785767,
        "Freedom to make life choices": 0.593361557,
        "Generosity": -0.216413811,
        "Perceptions of corruption": 0.867590249
    },
    {
        "A3 Code": "MRT",
        "Ladder score": 4.374599934,
        "Social support": 0.790819228,
        "Logged GDP per capita": 8.233919144,
        "Healthy life expectancy": 57.01017761,
        "Freedom to make life choices": 0.551522553,
        "Generosity": -0.106008142,
        "Perceptions of corruption": 0.746223509
    },
    {
        "A3 Code": "LKA",
        "Ladder score": 4.327000141,
        "Social support": 0.825374067,
        "Logged GDP per capita": 9.389969826,
        "Healthy life expectancy": 67.20006561,
        "Freedom to make life choices": 0.837633669,
        "Generosity": 0.081129618,
        "Perceptions of corruption": 0.859001756
    },
    {
        "A3 Code": "COG",
        "Ladder score": 4.31099987,
        "Social support": 0.672159016,
        "Logged GDP per capita": 6.694256306,
        "Healthy life expectancy": 52.90000153,
        "Freedom to make life choices": 0.700793564,
        "Generosity": 0.083637655,
        "Perceptions of corruption": 0.809403598
    },
    {
        "A3 Code": "SWZ",
        "Ladder score": 4.308100224,
        "Social support": 0.770290196,
        "Logged GDP per capita": 9.16267395,
        "Healthy life expectancy": 51.18823624,
        "Freedom to make life choices": 0.646822274,
        "Generosity": -0.19920142,
        "Perceptions of corruption": 0.708263338
    },
    {
        "A3 Code": "MMR",
        "Ladder score": 4.308000088,
        "Social support": 0.78440702,
        "Logged GDP per capita": 8.680481911,
        "Healthy life expectancy": 58.96171188,
        "Freedom to make life choices": 0.895075202,
        "Generosity": 0.560663998,
        "Perceptions of corruption": 0.645124316
    },
    {
        "A3 Code": "COM",
        "Ladder score": 4.288599968,
        "Social support": 0.625662446,
        "Logged GDP per capita": 7.833630085,
        "Healthy life expectancy": 57.34901047,
        "Freedom to make life choices": 0.547612607,
        "Generosity": 0.090008408,
        "Perceptions of corruption": 0.780622602
    },
    {
        "A3 Code": "TGO",
        "Ladder score": 4.187200069,
        "Social support": 0.551312625,
        "Logged GDP per capita": 7.357711315,
        "Healthy life expectancy": 54.71989822,
        "Freedom to make life choices": 0.649828613,
        "Generosity": 0.002667875,
        "Perceptions of corruption": 0.757733464
    },
    {
        "A3 Code": "ETH",
        "Ladder score": 4.186200142,
        "Social support": 0.743307352,
        "Logged GDP per capita": 7.509385586,
        "Healthy life expectancy": 58.63959122,
        "Freedom to make life choices": 0.740795195,
        "Generosity": 0.043377332,
        "Perceptions of corruption": 0.753690004
    },
    {
        "A3 Code": "MDG",
        "Ladder score": 4.165599823,
        "Social support": 0.668195903,
        "Logged GDP per capita": 7.281685829,
        "Healthy life expectancy": 59.10542679,
        "Freedom to make life choices": 0.557574093,
        "Generosity": -0.011823639,
        "Perceptions of corruption": 0.817485631
    },
    {
        "A3 Code": "EGY",
        "Ladder score": 4.151400089,
        "Social support": 0.735447824,
        "Logged GDP per capita": 9.316541672,
        "Healthy life expectancy": 61.78015137,
        "Freedom to make life choices": 0.708354175,
        "Generosity": -0.196878314,
        "Perceptions of corruption": 0.787726879
    },
    {
        "A3 Code": "SLE",
        "Ladder score": 3.926399946,
        "Social support": 0.636142015,
        "Logged GDP per capita": 7.26880312,
        "Healthy life expectancy": 50.86514282,
        "Freedom to make life choices": 0.715315044,
        "Generosity": 0.088660747,
        "Perceptions of corruption": 0.861330688
    },
    {
        "A3 Code": "BDI",
        "Ladder score": 3.775300026,
        "Social support": 0.490325719,
        "Logged GDP per capita": 6.492642403,
        "Healthy life expectancy": 53.40000153,
        "Freedom to make life choices": 0.626350224,
        "Generosity": -0.017551597,
        "Perceptions of corruption": 0.606934547
    },
    {
        "A3 Code": "ZMB",
        "Ladder score": 3.759399891,
        "Social support": 0.698824465,
        "Logged GDP per capita": 8.224720001,
        "Healthy life expectancy": 55.29937744,
        "Freedom to make life choices": 0.806500256,
        "Generosity": 0.078037128,
        "Perceptions of corruption": 0.801289678
    },
    {
        "A3 Code": "HTI",
        "Ladder score": 3.720799923,
        "Social support": 0.593247831,
        "Logged GDP per capita": 7.411329269,
        "Healthy life expectancy": 55.59862518,
        "Freedom to make life choices": 0.537825167,
        "Generosity": 0.40053457,
        "Perceptions of corruption": 0.684767246
    },
    {
        "A3 Code": "LSO",
        "Ladder score": 3.652800083,
        "Social support": 0.780495703,
        "Logged GDP per capita": 7.960488319,
        "Healthy life expectancy": 48.00362396,
        "Freedom to make life choices": 0.738125861,
        "Generosity": -0.145732045,
        "Perceptions of corruption": 0.857392073
    },
    {
        "A3 Code": "IND",
        "Ladder score": 3.573299885,
        "Social support": 0.592200935,
        "Logged GDP per capita": 8.849823952,
        "Healthy life expectancy": 60.21518707,
        "Freedom to make life choices": 0.881444871,
        "Generosity": 0.057551607,
        "Perceptions of corruption": 0.772042692
    },
    {
        "A3 Code": "MWI",
        "Ladder score": 3.538000107,
        "Social support": 0.544007301,
        "Logged GDP per capita": 7.062226295,
        "Healthy life expectancy": 57.59288788,
        "Freedom to make life choices": 0.803223193,
        "Generosity": 0.021433279,
        "Perceptions of corruption": 0.731700778
    },
    {
        "A3 Code": "YEM",
        "Ladder score": 3.527400017,
        "Social support": 0.817980587,
        "Logged GDP per capita": 7.759682655,
        "Healthy life expectancy": 56.72728348,
        "Freedom to make life choices": 0.599920273,
        "Generosity": -0.157735437,
        "Perceptions of corruption": 0.800287724
    },
    {
        "A3 Code": "BWA",
        "Ladder score": 3.478899956,
        "Social support": 0.779121757,
        "Logged GDP per capita": 9.711203575,
        "Healthy life expectancy": 58.92445374,
        "Freedom to make life choices": 0.821328104,
        "Generosity": -0.250394493,
        "Perceptions of corruption": 0.777930915
    },
    {
        "A3 Code": "TZA",
        "Ladder score": 3.476200104,
        "Social support": 0.688933194,
        "Logged GDP per capita": 7.967665195,
        "Healthy life expectancy": 57.49607468,
        "Freedom to make life choices": 0.82153976,
        "Generosity": 0.109668687,
        "Perceptions of corruption": 0.619799435
    },
    {
        "A3 Code": "CAF",
        "Ladder score": 3.475899935,
        "Social support": 0.319459856,
        "Logged GDP per capita": 6.625160217,
        "Healthy life expectancy": 45.20000076,
        "Freedom to make life choices": 0.640880644,
        "Generosity": 0.082410358,
        "Perceptions of corruption": 0.891806662
    },
    {
        "A3 Code": "RWA",
        "Ladder score": 3.312299967,
        "Social support": 0.54083544,
        "Logged GDP per capita": 7.600104332,
        "Healthy life expectancy": 61.09884644,
        "Freedom to make life choices": 0.900589406,
        "Generosity": 0.055483952,
        "Perceptions of corruption": 0.183541179
    },
    {
        "A3 Code": "ZWE",
        "Ladder score": 3.299200058,
        "Social support": 0.763092756,
        "Logged GDP per capita": 7.865711689,
        "Healthy life expectancy": 55.61725998,
        "Freedom to make life choices": 0.711457908,
        "Generosity": -0.072063953,
        "Perceptions of corruption": 0.81023699
    },
    {
        "A3 Code": "SSD",
        "Ladder score": 2.816600084,
        "Social support": 0.553707123,
        "Logged GDP per capita": 7.425359726,
        "Healthy life expectancy": 51,
        "Freedom to make life choices": 0.451313615,
        "Generosity": 0.016518548,
        "Perceptions of corruption": 0.763417304
    },
    {
        "A3 Code": "AFG",
        "Ladder score": 2.566900015,
        "Social support": 0.470366955,
        "Logged GDP per capita": 7.462860584,
        "Healthy life expectancy": 52.59000015,
        "Freedom to make life choices": 0.396573007,
        "Generosity": -0.0964294,
        "Perceptions of corruption": 0.933686554
    }
]

var data_2019 = [{
        "A3 Code": "FIN",
        "Ladder score": 7.769,
        "Social support": 1.587,
        "Logged GDP per capita": 1.34,
        "Healthy life expectancy": 0.986,
        "Freedom to make life choices": 0.596,
        "Generosity": 0.153,
        "Perceptions of corruption": 0.393
    },
    {
        "A3 Code": "DNK",
        "Ladder score": 7.6,
        "Social support": 1.573,
        "Logged GDP per capita": 1.383,
        "Healthy life expectancy": 0.996,
        "Freedom to make life choices": 0.592,
        "Generosity": 0.252,
        "Perceptions of corruption": 0.41
    },
    {
        "A3 Code": "NOR",
        "Ladder score": 7.554,
        "Social support": 1.582,
        "Logged GDP per capita": 1.488,
        "Healthy life expectancy": 1.028,
        "Freedom to make life choices": 0.603,
        "Generosity": 0.271,
        "Perceptions of corruption": 0.341
    },
    {
        "A3 Code": "ISL",
        "Ladder score": 7.494,
        "Social support": 1.624,
        "Logged GDP per capita": 1.38,
        "Healthy life expectancy": 1.026,
        "Freedom to make life choices": 0.591,
        "Generosity": 0.354,
        "Perceptions of corruption": 0.118
    },
    {
        "A3 Code": "NLD",
        "Ladder score": 7.488,
        "Social support": 1.522,
        "Logged GDP per capita": 1.396,
        "Healthy life expectancy": 0.999,
        "Freedom to make life choices": 0.557,
        "Generosity": 0.322,
        "Perceptions of corruption": 0.298
    },
    {
        "A3 Code": "CHE",
        "Ladder score": 7.48,
        "Social support": 1.526,
        "Logged GDP per capita": 1.452,
        "Healthy life expectancy": 1.052,
        "Freedom to make life choices": 0.572,
        "Generosity": 0.263,
        "Perceptions of corruption": 0.343
    },
    {
        "A3 Code": "SWE",
        "Ladder score": 7.343,
        "Social support": 1.487,
        "Logged GDP per capita": 1.387,
        "Healthy life expectancy": 1.009,
        "Freedom to make life choices": 0.574,
        "Generosity": 0.267,
        "Perceptions of corruption": 0.373
    },
    {
        "A3 Code": "NZL",
        "Ladder score": 7.307,
        "Social support": 1.557,
        "Logged GDP per capita": 1.303,
        "Healthy life expectancy": 1.026,
        "Freedom to make life choices": 0.585,
        "Generosity": 0.33,
        "Perceptions of corruption": 0.38
    },
    {
        "A3 Code": "CAN",
        "Ladder score": 7.278,
        "Social support": 1.505,
        "Logged GDP per capita": 1.365,
        "Healthy life expectancy": 1.039,
        "Freedom to make life choices": 0.584,
        "Generosity": 0.285,
        "Perceptions of corruption": 0.308
    },
    {
        "A3 Code": "AUT",
        "Ladder score": 7.246,
        "Social support": 1.475,
        "Logged GDP per capita": 1.376,
        "Healthy life expectancy": 1.016,
        "Freedom to make life choices": 0.532,
        "Generosity": 0.244,
        "Perceptions of corruption": 0.226
    },
    {
        "A3 Code": "AUS",
        "Ladder score": 7.228,
        "Social support": 1.548,
        "Logged GDP per capita": 1.372,
        "Healthy life expectancy": 1.036,
        "Freedom to make life choices": 0.557,
        "Generosity": 0.332,
        "Perceptions of corruption": 0.29
    },
    {
        "A3 Code": "CRI",
        "Ladder score": 7.167,
        "Social support": 1.441,
        "Logged GDP per capita": 1.034,
        "Healthy life expectancy": 0.963,
        "Freedom to make life choices": 0.558,
        "Generosity": 0.144,
        "Perceptions of corruption": 0.093
    },
    {
        "A3 Code": "ISR",
        "Ladder score": 7.139,
        "Social support": 1.455,
        "Logged GDP per capita": 1.276,
        "Healthy life expectancy": 1.029,
        "Freedom to make life choices": 0.371,
        "Generosity": 0.261,
        "Perceptions of corruption": 0.082
    },
    {
        "A3 Code": "LUX",
        "Ladder score": 7.09,
        "Social support": 1.479,
        "Logged GDP per capita": 1.609,
        "Healthy life expectancy": 1.012,
        "Freedom to make life choices": 0.526,
        "Generosity": 0.194,
        "Perceptions of corruption": 0.316
    },
    {
        "A3 Code": "GBR",
        "Ladder score": 7.054,
        "Social support": 1.538,
        "Logged GDP per capita": 1.333,
        "Healthy life expectancy": 0.996,
        "Freedom to make life choices": 0.45,
        "Generosity": 0.348,
        "Perceptions of corruption": 0.278
    },
    {
        "A3 Code": "IRL",
        "Ladder score": 7.021,
        "Social support": 1.553,
        "Logged GDP per capita": 1.499,
        "Healthy life expectancy": 0.999,
        "Freedom to make life choices": 0.516,
        "Generosity": 0.298,
        "Perceptions of corruption": 0.31
    },
    {
        "A3 Code": "DEU",
        "Ladder score": 6.985,
        "Social support": 1.454,
        "Logged GDP per capita": 1.373,
        "Healthy life expectancy": 0.987,
        "Freedom to make life choices": 0.495,
        "Generosity": 0.261,
        "Perceptions of corruption": 0.265
    },
    {
        "A3 Code": "BEL",
        "Ladder score": 6.923,
        "Social support": 1.504,
        "Logged GDP per capita": 1.356,
        "Healthy life expectancy": 0.986,
        "Freedom to make life choices": 0.473,
        "Generosity": 0.16,
        "Perceptions of corruption": 0.21
    },
    {
        "A3 Code": "USA",
        "Ladder score": 6.892,
        "Social support": 1.457,
        "Logged GDP per capita": 1.433,
        "Healthy life expectancy": 0.874,
        "Freedom to make life choices": 0.454,
        "Generosity": 0.28,
        "Perceptions of corruption": 0.128
    },
    {
        "A3 Code": "CZE",
        "Ladder score": 6.852,
        "Social support": 1.487,
        "Logged GDP per capita": 1.269,
        "Healthy life expectancy": 0.92,
        "Freedom to make life choices": 0.457,
        "Generosity": 0.046,
        "Perceptions of corruption": 0.036
    },
    {
        "A3 Code": "ARE",
        "Ladder score": 6.825,
        "Social support": 1.31,
        "Logged GDP per capita": 1.503,
        "Healthy life expectancy": 0.825,
        "Freedom to make life choices": 0.598,
        "Generosity": 0.262,
        "Perceptions of corruption": 0.182
    },
    {
        "A3 Code": "MLT",
        "Ladder score": 6.726,
        "Social support": 1.52,
        "Logged GDP per capita": 1.3,
        "Healthy life expectancy": 0.999,
        "Freedom to make life choices": 0.564,
        "Generosity": 0.375,
        "Perceptions of corruption": 0.151
    },
    {
        "A3 Code": "MEX",
        "Ladder score": 6.595,
        "Social support": 1.323,
        "Logged GDP per capita": 1.07,
        "Healthy life expectancy": 0.861,
        "Freedom to make life choices": 0.433,
        "Generosity": 0.074,
        "Perceptions of corruption": 0.073
    },
    {
        "A3 Code": "FRA",
        "Ladder score": 6.592,
        "Social support": 1.472,
        "Logged GDP per capita": 1.324,
        "Healthy life expectancy": 1.045,
        "Freedom to make life choices": 0.436,
        "Generosity": 0.111,
        "Perceptions of corruption": 0.183
    },
    {
        "A3 Code": "TWN",
        "Ladder score": 6.446,
        "Social support": 1.43,
        "Logged GDP per capita": 1.368,
        "Healthy life expectancy": 0.914,
        "Freedom to make life choices": 0.351,
        "Generosity": 0.242,
        "Perceptions of corruption": 0.097
    },
    {
        "A3 Code": "CHL",
        "Ladder score": 6.444,
        "Social support": 1.369,
        "Logged GDP per capita": 1.159,
        "Healthy life expectancy": 0.92,
        "Freedom to make life choices": 0.357,
        "Generosity": 0.187,
        "Perceptions of corruption": 0.056
    },
    {
        "A3 Code": "GTM",
        "Ladder score": 6.436,
        "Social support": 1.269,
        "Logged GDP per capita": 0.8,
        "Healthy life expectancy": 0.746,
        "Freedom to make life choices": 0.535,
        "Generosity": 0.175,
        "Perceptions of corruption": 0.078
    },
    {
        "A3 Code": "SAU",
        "Ladder score": 6.375,
        "Social support": 1.357,
        "Logged GDP per capita": 1.403,
        "Healthy life expectancy": 0.795,
        "Freedom to make life choices": 0.439,
        "Generosity": 0.08,
        "Perceptions of corruption": 0.132
    },
    {
        "A3 Code": "ESP",
        "Ladder score": 6.354,
        "Social support": 1.484,
        "Logged GDP per capita": 1.286,
        "Healthy life expectancy": 1.062,
        "Freedom to make life choices": 0.362,
        "Generosity": 0.153,
        "Perceptions of corruption": 0.079
    },
    {
        "A3 Code": "PAN",
        "Ladder score": 6.321,
        "Social support": 1.442,
        "Logged GDP per capita": 1.149,
        "Healthy life expectancy": 0.91,
        "Freedom to make life choices": 0.516,
        "Generosity": 0.109,
        "Perceptions of corruption": 0.054
    },
    {
        "A3 Code": "BRA",
        "Ladder score": 6.3,
        "Social support": 1.439,
        "Logged GDP per capita": 1.004,
        "Healthy life expectancy": 0.802,
        "Freedom to make life choices": 0.39,
        "Generosity": 0.099,
        "Perceptions of corruption": 0.086
    },
    {
        "A3 Code": "URY",
        "Ladder score": 6.293,
        "Social support": 1.465,
        "Logged GDP per capita": 1.124,
        "Healthy life expectancy": 0.891,
        "Freedom to make life choices": 0.523,
        "Generosity": 0.127,
        "Perceptions of corruption": 0.15
    },
    {
        "A3 Code": "SGP",
        "Ladder score": 6.262,
        "Social support": 1.463,
        "Logged GDP per capita": 1.572,
        "Healthy life expectancy": 1.141,
        "Freedom to make life choices": 0.556,
        "Generosity": 0.271,
        "Perceptions of corruption": 0.453
    },
    {
        "A3 Code": "SLV",
        "Ladder score": 6.253,
        "Social support": 1.242,
        "Logged GDP per capita": 0.794,
        "Healthy life expectancy": 0.789,
        "Freedom to make life choices": 0.43,
        "Generosity": 0.093,
        "Perceptions of corruption": 0.074
    },
    {
        "A3 Code": "ITA",
        "Ladder score": 6.223,
        "Social support": 1.488,
        "Logged GDP per capita": 1.294,
        "Healthy life expectancy": 1.039,
        "Freedom to make life choices": 0.231,
        "Generosity": 0.158,
        "Perceptions of corruption": 0.03
    },
    {
        "A3 Code": "BHR",
        "Ladder score": 6.199,
        "Social support": 1.368,
        "Logged GDP per capita": 1.362,
        "Healthy life expectancy": 0.871,
        "Freedom to make life choices": 0.536,
        "Generosity": 0.255,
        "Perceptions of corruption": 0.11
    },
    {
        "A3 Code": "SVK",
        "Ladder score": 6.198,
        "Social support": 1.504,
        "Logged GDP per capita": 1.246,
        "Healthy life expectancy": 0.881,
        "Freedom to make life choices": 0.334,
        "Generosity": 0.121,
        "Perceptions of corruption": 0.014
    },
    {
        "A3 Code": "POL",
        "Ladder score": 6.182,
        "Social support": 1.438,
        "Logged GDP per capita": 1.206,
        "Healthy life expectancy": 0.884,
        "Freedom to make life choices": 0.483,
        "Generosity": 0.117,
        "Perceptions of corruption": 0.05
    },
    {
        "A3 Code": "UZB",
        "Ladder score": 6.174,
        "Social support": 1.529,
        "Logged GDP per capita": 0.745,
        "Healthy life expectancy": 0.756,
        "Freedom to make life choices": 0.631,
        "Generosity": 0.322,
        "Perceptions of corruption": 0.24
    },
    {
        "A3 Code": "LTU",
        "Ladder score": 6.149,
        "Social support": 1.515,
        "Logged GDP per capita": 1.238,
        "Healthy life expectancy": 0.818,
        "Freedom to make life choices": 0.291,
        "Generosity": 0.043,
        "Perceptions of corruption": 0.042
    },
    {
        "A3 Code": "COL",
        "Ladder score": 6.125,
        "Social support": 1.41,
        "Logged GDP per capita": 0.985,
        "Healthy life expectancy": 0.841,
        "Freedom to make life choices": 0.47,
        "Generosity": 0.099,
        "Perceptions of corruption": 0.034
    },
    {
        "A3 Code": "SVN",
        "Ladder score": 6.118,
        "Social support": 1.523,
        "Logged GDP per capita": 1.258,
        "Healthy life expectancy": 0.953,
        "Freedom to make life choices": 0.564,
        "Generosity": 0.144,
        "Perceptions of corruption": 0.057
    },
    {
        "A3 Code": "NIC",
        "Ladder score": 6.105,
        "Social support": 1.325,
        "Logged GDP per capita": 0.694,
        "Healthy life expectancy": 0.835,
        "Freedom to make life choices": 0.435,
        "Generosity": 0.2,
        "Perceptions of corruption": 0.127
    },
    {
        "A3 Code": "ARG",
        "Ladder score": 6.086,
        "Social support": 1.432,
        "Logged GDP per capita": 1.092,
        "Healthy life expectancy": 0.881,
        "Freedom to make life choices": 0.471,
        "Generosity": 0.066,
        "Perceptions of corruption": 0.05
    },
    {
        "A3 Code": "ROU",
        "Ladder score": 6.07,
        "Social support": 1.232,
        "Logged GDP per capita": 1.162,
        "Healthy life expectancy": 0.825,
        "Freedom to make life choices": 0.462,
        "Generosity": 0.083,
        "Perceptions of corruption": 0.005
    },
    {
        "A3 Code": "CYP",
        "Ladder score": 6.046,
        "Social support": 1.223,
        "Logged GDP per capita": 1.263,
        "Healthy life expectancy": 1.042,
        "Freedom to make life choices": 0.406,
        "Generosity": 0.19,
        "Perceptions of corruption": 0.041
    },
    {
        "A3 Code": "ECU",
        "Ladder score": 6.028,
        "Social support": 1.312,
        "Logged GDP per capita": 0.912,
        "Healthy life expectancy": 0.868,
        "Freedom to make life choices": 0.498,
        "Generosity": 0.126,
        "Perceptions of corruption": 0.087
    },
    {
        "A3 Code": "KWT",
        "Ladder score": 6.021,
        "Social support": 1.319,
        "Logged GDP per capita": 1.5,
        "Healthy life expectancy": 0.808,
        "Freedom to make life choices": 0.493,
        "Generosity": 0.142,
        "Perceptions of corruption": 0.097
    },
    {
        "A3 Code": "THA",
        "Ladder score": 6.008,
        "Social support": 1.409,
        "Logged GDP per capita": 1.05,
        "Healthy life expectancy": 0.828,
        "Freedom to make life choices": 0.557,
        "Generosity": 0.359,
        "Perceptions of corruption": 0.028
    },
    {
        "A3 Code": "LVA",
        "Ladder score": 5.94,
        "Social support": 1.465,
        "Logged GDP per capita": 1.187,
        "Healthy life expectancy": 0.812,
        "Freedom to make life choices": 0.264,
        "Generosity": 0.075,
        "Perceptions of corruption": 0.064
    },
    {
        "A3 Code": "KOR",
        "Ladder score": 5.895,
        "Social support": 1.219,
        "Logged GDP per capita": 1.301,
        "Healthy life expectancy": 1.036,
        "Freedom to make life choices": 0.159,
        "Generosity": 0.175,
        "Perceptions of corruption": 0.056
    },
    {
        "A3 Code": "EST",
        "Ladder score": 5.893,
        "Social support": 1.528,
        "Logged GDP per capita": 1.237,
        "Healthy life expectancy": 0.874,
        "Freedom to make life choices": 0.495,
        "Generosity": 0.103,
        "Perceptions of corruption": 0.161
    },
    {
        "A3 Code": "JAM",
        "Ladder score": 5.89,
        "Social support": 1.478,
        "Logged GDP per capita": 0.831,
        "Healthy life expectancy": 0.831,
        "Freedom to make life choices": 0.49,
        "Generosity": 0.107,
        "Perceptions of corruption": 0.028
    },
    {
        "A3 Code": "MUS",
        "Ladder score": 5.888,
        "Social support": 1.402,
        "Logged GDP per capita": 1.12,
        "Healthy life expectancy": 0.798,
        "Freedom to make life choices": 0.498,
        "Generosity": 0.215,
        "Perceptions of corruption": 0.06
    },
    {
        "A3 Code": "JPN",
        "Ladder score": 5.886,
        "Social support": 1.419,
        "Logged GDP per capita": 1.327,
        "Healthy life expectancy": 1.088,
        "Freedom to make life choices": 0.445,
        "Generosity": 0.069,
        "Perceptions of corruption": 0.14
    },
    {
        "A3 Code": "HND",
        "Ladder score": 5.86,
        "Social support": 1.236,
        "Logged GDP per capita": 0.642,
        "Healthy life expectancy": 0.828,
        "Freedom to make life choices": 0.507,
        "Generosity": 0.246,
        "Perceptions of corruption": 0.078
    },
    {
        "A3 Code": "KAZ",
        "Ladder score": 5.809,
        "Social support": 1.508,
        "Logged GDP per capita": 1.173,
        "Healthy life expectancy": 0.729,
        "Freedom to make life choices": 0.41,
        "Generosity": 0.146,
        "Perceptions of corruption": 0.096
    },
    {
        "A3 Code": "BOL",
        "Ladder score": 5.779,
        "Social support": 1.209,
        "Logged GDP per capita": 0.776,
        "Healthy life expectancy": 0.706,
        "Freedom to make life choices": 0.511,
        "Generosity": 0.137,
        "Perceptions of corruption": 0.064
    },
    {
        "A3 Code": "HUN",
        "Ladder score": 5.758,
        "Social support": 1.41,
        "Logged GDP per capita": 1.201,
        "Healthy life expectancy": 0.828,
        "Freedom to make life choices": 0.199,
        "Generosity": 0.081,
        "Perceptions of corruption": 0.02
    },
    {
        "A3 Code": "PRY",
        "Ladder score": 5.743,
        "Social support": 1.475,
        "Logged GDP per capita": 0.855,
        "Healthy life expectancy": 0.777,
        "Freedom to make life choices": 0.514,
        "Generosity": 0.184,
        "Perceptions of corruption": 0.08
    },
    {
        "A3 Code": "PER",
        "Ladder score": 5.697,
        "Social support": 1.274,
        "Logged GDP per capita": 0.96,
        "Healthy life expectancy": 0.854,
        "Freedom to make life choices": 0.455,
        "Generosity": 0.083,
        "Perceptions of corruption": 0.027
    },
    {
        "A3 Code": "PRT",
        "Ladder score": 5.693,
        "Social support": 1.431,
        "Logged GDP per capita": 1.221,
        "Healthy life expectancy": 0.999,
        "Freedom to make life choices": 0.508,
        "Generosity": 0.047,
        "Perceptions of corruption": 0.025
    },
    {
        "A3 Code": "PAK",
        "Ladder score": 5.653,
        "Social support": 0.886,
        "Logged GDP per capita": 0.677,
        "Healthy life expectancy": 0.535,
        "Freedom to make life choices": 0.313,
        "Generosity": 0.22,
        "Perceptions of corruption": 0.098
    },
    {
        "A3 Code": "RUS",
        "Ladder score": 5.648,
        "Social support": 1.452,
        "Logged GDP per capita": 1.183,
        "Healthy life expectancy": 0.726,
        "Freedom to make life choices": 0.334,
        "Generosity": 0.082,
        "Perceptions of corruption": 0.031
    },
    {
        "A3 Code": "PHL",
        "Ladder score": 5.631,
        "Social support": 1.293,
        "Logged GDP per capita": 0.807,
        "Healthy life expectancy": 0.657,
        "Freedom to make life choices": 0.558,
        "Generosity": 0.117,
        "Perceptions of corruption": 0.107
    },
    {
        "A3 Code": "SRB",
        "Ladder score": 5.603,
        "Social support": 1.383,
        "Logged GDP per capita": 1.004,
        "Healthy life expectancy": 0.854,
        "Freedom to make life choices": 0.282,
        "Generosity": 0.137,
        "Perceptions of corruption": 0.039
    },
    {
        "A3 Code": "MDA",
        "Ladder score": 5.529,
        "Social support": 1.328,
        "Logged GDP per capita": 0.685,
        "Healthy life expectancy": 0.739,
        "Freedom to make life choices": 0.245,
        "Generosity": 0.181,
        "Perceptions of corruption": 0
    },
    {
        "A3 Code": "LBY",
        "Ladder score": 5.525,
        "Social support": 1.303,
        "Logged GDP per capita": 1.044,
        "Healthy life expectancy": 0.673,
        "Freedom to make life choices": 0.416,
        "Generosity": 0.133,
        "Perceptions of corruption": 0.152
    },
    {
        "A3 Code": "MNE",
        "Ladder score": 5.523,
        "Social support": 1.361,
        "Logged GDP per capita": 1.051,
        "Healthy life expectancy": 0.871,
        "Freedom to make life choices": 0.197,
        "Generosity": 0.142,
        "Perceptions of corruption": 0.08
    },
    {
        "A3 Code": "TJK",
        "Ladder score": 5.467,
        "Social support": 1.098,
        "Logged GDP per capita": 0.493,
        "Healthy life expectancy": 0.718,
        "Freedom to make life choices": 0.389,
        "Generosity": 0.23,
        "Perceptions of corruption": 0.144
    },
    {
        "A3 Code": "HRV",
        "Ladder score": 5.432,
        "Social support": 1.266,
        "Logged GDP per capita": 1.155,
        "Healthy life expectancy": 0.914,
        "Freedom to make life choices": 0.296,
        "Generosity": 0.119,
        "Perceptions of corruption": 0.022
    },
    {
        "A3 Code": "HKG",
        "Ladder score": 5.43,
        "Social support": 1.277,
        "Logged GDP per capita": 1.438,
        "Healthy life expectancy": 1.122,
        "Freedom to make life choices": 0.44,
        "Generosity": 0.258,
        "Perceptions of corruption": 0.287
    },
    {
        "A3 Code": "DOM",
        "Ladder score": 5.425,
        "Social support": 1.401,
        "Logged GDP per capita": 1.015,
        "Healthy life expectancy": 0.779,
        "Freedom to make life choices": 0.497,
        "Generosity": 0.113,
        "Perceptions of corruption": 0.101
    },
    {
        "A3 Code": "BIH",
        "Ladder score": 5.386,
        "Social support": 1.212,
        "Logged GDP per capita": 0.945,
        "Healthy life expectancy": 0.845,
        "Freedom to make life choices": 0.212,
        "Generosity": 0.263,
        "Perceptions of corruption": 0.006
    },
    {
        "A3 Code": "TUR",
        "Ladder score": 5.373,
        "Social support": 1.36,
        "Logged GDP per capita": 1.183,
        "Healthy life expectancy": 0.808,
        "Freedom to make life choices": 0.195,
        "Generosity": 0.083,
        "Perceptions of corruption": 0.106
    },
    {
        "A3 Code": "MYS",
        "Ladder score": 5.339,
        "Social support": 1.171,
        "Logged GDP per capita": 1.221,
        "Healthy life expectancy": 0.828,
        "Freedom to make life choices": 0.508,
        "Generosity": 0.26,
        "Perceptions of corruption": 0.024
    },
    {
        "A3 Code": "BLR",
        "Ladder score": 5.323,
        "Social support": 1.465,
        "Logged GDP per capita": 1.067,
        "Healthy life expectancy": 0.789,
        "Freedom to make life choices": 0.235,
        "Generosity": 0.094,
        "Perceptions of corruption": 0.142
    },
    {
        "A3 Code": "GRC",
        "Ladder score": 5.287,
        "Social support": 1.156,
        "Logged GDP per capita": 1.181,
        "Healthy life expectancy": 0.999,
        "Freedom to make life choices": 0.067,
        "Generosity": 0,
        "Perceptions of corruption": 0.034
    },
    {
        "A3 Code": "MNG",
        "Ladder score": 5.285,
        "Social support": 1.531,
        "Logged GDP per capita": 0.948,
        "Healthy life expectancy": 0.667,
        "Freedom to make life choices": 0.317,
        "Generosity": 0.235,
        "Perceptions of corruption": 0.038
    },
    {
        "A3 Code": "NGA",
        "Ladder score": 5.265,
        "Social support": 1.111,
        "Logged GDP per capita": 0.696,
        "Healthy life expectancy": 0.245,
        "Freedom to make life choices": 0.426,
        "Generosity": 0.215,
        "Perceptions of corruption": 0.041
    },
    {
        "A3 Code": "KGZ",
        "Ladder score": 5.261,
        "Social support": 1.438,
        "Logged GDP per capita": 0.551,
        "Healthy life expectancy": 0.723,
        "Freedom to make life choices": 0.508,
        "Generosity": 0.3,
        "Perceptions of corruption": 0.023
    },
    {
        "A3 Code": "TKM",
        "Ladder score": 5.247,
        "Social support": 1.538,
        "Logged GDP per capita": 1.052,
        "Healthy life expectancy": 0.657,
        "Freedom to make life choices": 0.394,
        "Generosity": 0.244,
        "Perceptions of corruption": 0.028
    },
    {
        "A3 Code": "DZA",
        "Ladder score": 5.211,
        "Social support": 1.16,
        "Logged GDP per capita": 1.002,
        "Healthy life expectancy": 0.785,
        "Freedom to make life choices": 0.086,
        "Generosity": 0.073,
        "Perceptions of corruption": 0.114
    },
    {
        "A3 Code": "MAR",
        "Ladder score": 5.208,
        "Social support": 0.782,
        "Logged GDP per capita": 0.801,
        "Healthy life expectancy": 0.782,
        "Freedom to make life choices": 0.418,
        "Generosity": 0.036,
        "Perceptions of corruption": 0.076
    },
    {
        "A3 Code": "AZE",
        "Ladder score": 5.208,
        "Social support": 1.147,
        "Logged GDP per capita": 1.043,
        "Healthy life expectancy": 0.769,
        "Freedom to make life choices": 0.351,
        "Generosity": 0.035,
        "Perceptions of corruption": 0.182
    },
    {
        "A3 Code": "LBN",
        "Ladder score": 5.197,
        "Social support": 1.224,
        "Logged GDP per capita": 0.987,
        "Healthy life expectancy": 0.815,
        "Freedom to make life choices": 0.216,
        "Generosity": 0.166,
        "Perceptions of corruption": 0.027
    },
    {
        "A3 Code": "IDN",
        "Ladder score": 5.192,
        "Social support": 1.203,
        "Logged GDP per capita": 0.931,
        "Healthy life expectancy": 0.66,
        "Freedom to make life choices": 0.491,
        "Generosity": 0.498,
        "Perceptions of corruption": 0.028
    },
    {
        "A3 Code": "CHN",
        "Ladder score": 5.191,
        "Social support": 1.125,
        "Logged GDP per capita": 1.029,
        "Healthy life expectancy": 0.893,
        "Freedom to make life choices": 0.521,
        "Generosity": 0.058,
        "Perceptions of corruption": 0.1
    },
    {
        "A3 Code": "VNM",
        "Ladder score": 5.175,
        "Social support": 1.346,
        "Logged GDP per capita": 0.741,
        "Healthy life expectancy": 0.851,
        "Freedom to make life choices": 0.543,
        "Generosity": 0.147,
        "Perceptions of corruption": 0.073
    },
    {
        "A3 Code": "CMR",
        "Ladder score": 5.044,
        "Social support": 0.91,
        "Logged GDP per capita": 0.549,
        "Healthy life expectancy": 0.331,
        "Freedom to make life choices": 0.381,
        "Generosity": 0.187,
        "Perceptions of corruption": 0.037
    },
    {
        "A3 Code": "BGR",
        "Ladder score": 5.011,
        "Social support": 1.513,
        "Logged GDP per capita": 1.092,
        "Healthy life expectancy": 0.815,
        "Freedom to make life choices": 0.311,
        "Generosity": 0.081,
        "Perceptions of corruption": 0.004
    },
    {
        "A3 Code": "GHA",
        "Ladder score": 4.996,
        "Social support": 0.868,
        "Logged GDP per capita": 0.611,
        "Healthy life expectancy": 0.486,
        "Freedom to make life choices": 0.381,
        "Generosity": 0.245,
        "Perceptions of corruption": 0.04
    },
    {
        "A3 Code": "NPL",
        "Ladder score": 4.913,
        "Social support": 1.226,
        "Logged GDP per capita": 0.446,
        "Healthy life expectancy": 0.677,
        "Freedom to make life choices": 0.439,
        "Generosity": 0.285,
        "Perceptions of corruption": 0.089
    },
    {
        "A3 Code": "JOR",
        "Ladder score": 4.906,
        "Social support": 1.225,
        "Logged GDP per capita": 0.837,
        "Healthy life expectancy": 0.815,
        "Freedom to make life choices": 0.383,
        "Generosity": 0.11,
        "Perceptions of corruption": 0.13
    },
    {
        "A3 Code": "BEN",
        "Ladder score": 4.883,
        "Social support": 0.437,
        "Logged GDP per capita": 0.393,
        "Healthy life expectancy": 0.397,
        "Freedom to make life choices": 0.349,
        "Generosity": 0.175,
        "Perceptions of corruption": 0.082
    },
    {
        "A3 Code": "COD",
        "Ladder score": 4.812,
        "Social support": 0.799,
        "Logged GDP per capita": 0.673,
        "Healthy life expectancy": 0.508,
        "Freedom to make life choices": 0.372,
        "Generosity": 0.105,
        "Perceptions of corruption": 0.093
    },
    {
        "A3 Code": "GAB",
        "Ladder score": 4.799,
        "Social support": 1.183,
        "Logged GDP per capita": 1.057,
        "Healthy life expectancy": 0.571,
        "Freedom to make life choices": 0.295,
        "Generosity": 0.043,
        "Perceptions of corruption": 0.055
    },
    {
        "A3 Code": "ZAF",
        "Ladder score": 4.722,
        "Social support": 1.351,
        "Logged GDP per capita": 0.96,
        "Healthy life expectancy": 0.469,
        "Freedom to make life choices": 0.389,
        "Generosity": 0.13,
        "Perceptions of corruption": 0.055
    },
    {
        "A3 Code": "ALB",
        "Ladder score": 4.719,
        "Social support": 0.848,
        "Logged GDP per capita": 0.947,
        "Healthy life expectancy": 0.874,
        "Freedom to make life choices": 0.383,
        "Generosity": 0.178,
        "Perceptions of corruption": 0.027
    },
    {
        "A3 Code": "VEN",
        "Ladder score": 4.707,
        "Social support": 1.427,
        "Logged GDP per capita": 0.96,
        "Healthy life expectancy": 0.805,
        "Freedom to make life choices": 0.154,
        "Generosity": 0.064,
        "Perceptions of corruption": 0.047
    },
    {
        "A3 Code": "KHM",
        "Ladder score": 4.7,
        "Social support": 1.122,
        "Logged GDP per capita": 0.574,
        "Healthy life expectancy": 0.637,
        "Freedom to make life choices": 0.609,
        "Generosity": 0.232,
        "Perceptions of corruption": 0.062
    },
    {
        "A3 Code": "PSE",
        "Ladder score": 4.696,
        "Social support": 1.247,
        "Logged GDP per capita": 0.657,
        "Healthy life expectancy": 0.672,
        "Freedom to make life choices": 0.225,
        "Generosity": 0.103,
        "Perceptions of corruption": 0.066
    },
    {
        "A3 Code": "SEN",
        "Ladder score": 4.681,
        "Social support": 1.134,
        "Logged GDP per capita": 0.45,
        "Healthy life expectancy": 0.571,
        "Freedom to make life choices": 0.292,
        "Generosity": 0.153,
        "Perceptions of corruption": 0.072
    },
    {
        "A3 Code": "NAM",
        "Ladder score": 4.639,
        "Social support": 1.313,
        "Logged GDP per capita": 0.879,
        "Healthy life expectancy": 0.477,
        "Freedom to make life choices": 0.401,
        "Generosity": 0.07,
        "Perceptions of corruption": 0.056
    },
    {
        "A3 Code": "NER",
        "Ladder score": 4.628,
        "Social support": 0.774,
        "Logged GDP per capita": 0.138,
        "Healthy life expectancy": 0.366,
        "Freedom to make life choices": 0.318,
        "Generosity": 0.188,
        "Perceptions of corruption": 0.102
    },
    {
        "A3 Code": "BFA",
        "Ladder score": 4.587,
        "Social support": 1.056,
        "Logged GDP per capita": 0.331,
        "Healthy life expectancy": 0.38,
        "Freedom to make life choices": 0.255,
        "Generosity": 0.177,
        "Perceptions of corruption": 0.113
    },
    {
        "A3 Code": "ARM",
        "Ladder score": 4.559,
        "Social support": 1.055,
        "Logged GDP per capita": 0.85,
        "Healthy life expectancy": 0.815,
        "Freedom to make life choices": 0.283,
        "Generosity": 0.095,
        "Perceptions of corruption": 0.064
    },
    {
        "A3 Code": "IRN",
        "Ladder score": 4.548,
        "Social support": 0.842,
        "Logged GDP per capita": 1.1,
        "Healthy life expectancy": 0.785,
        "Freedom to make life choices": 0.305,
        "Generosity": 0.27,
        "Perceptions of corruption": 0.125
    },
    {
        "A3 Code": "GIN",
        "Ladder score": 4.534,
        "Social support": 0.829,
        "Logged GDP per capita": 0.38,
        "Healthy life expectancy": 0.375,
        "Freedom to make life choices": 0.332,
        "Generosity": 0.207,
        "Perceptions of corruption": 0.086
    },
    {
        "A3 Code": "GEO",
        "Ladder score": 4.519,
        "Social support": 0.666,
        "Logged GDP per capita": 0.886,
        "Healthy life expectancy": 0.752,
        "Freedom to make life choices": 0.346,
        "Generosity": 0.043,
        "Perceptions of corruption": 0.164
    },
    {
        "A3 Code": "GMB",
        "Ladder score": 4.516,
        "Social support": 0.939,
        "Logged GDP per capita": 0.308,
        "Healthy life expectancy": 0.428,
        "Freedom to make life choices": 0.382,
        "Generosity": 0.269,
        "Perceptions of corruption": 0.167
    },
    {
        "A3 Code": "KEN",
        "Ladder score": 4.509,
        "Social support": 0.983,
        "Logged GDP per capita": 0.512,
        "Healthy life expectancy": 0.581,
        "Freedom to make life choices": 0.431,
        "Generosity": 0.372,
        "Perceptions of corruption": 0.053
    },
    {
        "A3 Code": "MRT",
        "Ladder score": 4.49,
        "Social support": 1.167,
        "Logged GDP per capita": 0.57,
        "Healthy life expectancy": 0.489,
        "Freedom to make life choices": 0.066,
        "Generosity": 0.106,
        "Perceptions of corruption": 0.088
    },
    {
        "A3 Code": "MOZ",
        "Ladder score": 4.466,
        "Social support": 0.986,
        "Logged GDP per capita": 0.204,
        "Healthy life expectancy": 0.39,
        "Freedom to make life choices": 0.494,
        "Generosity": 0.197,
        "Perceptions of corruption": 0.138
    },
    {
        "A3 Code": "TUN",
        "Ladder score": 4.461,
        "Social support": 1,
        "Logged GDP per capita": 0.921,
        "Healthy life expectancy": 0.815,
        "Freedom to make life choices": 0.167,
        "Generosity": 0.059,
        "Perceptions of corruption": 0.055
    },
    {
        "A3 Code": "BGD",
        "Ladder score": 4.456,
        "Social support": 0.928,
        "Logged GDP per capita": 0.562,
        "Healthy life expectancy": 0.723,
        "Freedom to make life choices": 0.527,
        "Generosity": 0.166,
        "Perceptions of corruption": 0.143
    },
    {
        "A3 Code": "IRQ",
        "Ladder score": 4.437,
        "Social support": 0.98,
        "Logged GDP per capita": 1.043,
        "Healthy life expectancy": 0.574,
        "Freedom to make life choices": 0.241,
        "Generosity": 0.148,
        "Perceptions of corruption": 0.089
    },
    {
        "A3 Code": "COG",
        "Ladder score": 4.418,
        "Social support": 1.125,
        "Logged GDP per capita": 0.094,
        "Healthy life expectancy": 0.357,
        "Freedom to make life choices": 0.269,
        "Generosity": 0.212,
        "Perceptions of corruption": 0.053
    },
    {
        "A3 Code": "MLI",
        "Ladder score": 4.39,
        "Social support": 1.105,
        "Logged GDP per capita": 0.385,
        "Healthy life expectancy": 0.308,
        "Freedom to make life choices": 0.327,
        "Generosity": 0.153,
        "Perceptions of corruption": 0.052
    },
    {
        "A3 Code": "SLE",
        "Ladder score": 4.374,
        "Social support": 0.841,
        "Logged GDP per capita": 0.268,
        "Healthy life expectancy": 0.242,
        "Freedom to make life choices": 0.309,
        "Generosity": 0.252,
        "Perceptions of corruption": 0.045
    },
    {
        "A3 Code": "LKA",
        "Ladder score": 4.366,
        "Social support": 1.265,
        "Logged GDP per capita": 0.949,
        "Healthy life expectancy": 0.831,
        "Freedom to make life choices": 0.47,
        "Generosity": 0.244,
        "Perceptions of corruption": 0.047
    },
    {
        "A3 Code": "MMR",
        "Ladder score": 4.36,
        "Social support": 1.181,
        "Logged GDP per capita": 0.71,
        "Healthy life expectancy": 0.555,
        "Freedom to make life choices": 0.525,
        "Generosity": 0.566,
        "Perceptions of corruption": 0.172
    },
    {
        "A3 Code": "TCD",
        "Ladder score": 4.35,
        "Social support": 0.766,
        "Logged GDP per capita": 0.35,
        "Healthy life expectancy": 0.192,
        "Freedom to make life choices": 0.174,
        "Generosity": 0.198,
        "Perceptions of corruption": 0.078
    },
    {
        "A3 Code": "UKR",
        "Ladder score": 4.332,
        "Social support": 1.39,
        "Logged GDP per capita": 0.82,
        "Healthy life expectancy": 0.739,
        "Freedom to make life choices": 0.178,
        "Generosity": 0.187,
        "Perceptions of corruption": 0.01
    },
    {
        "A3 Code": "ETH",
        "Ladder score": 4.286,
        "Social support": 1.033,
        "Logged GDP per capita": 0.336,
        "Healthy life expectancy": 0.532,
        "Freedom to make life choices": 0.344,
        "Generosity": 0.209,
        "Perceptions of corruption": 0.1
    },
    {
        "A3 Code": "SWZ",
        "Ladder score": 4.212,
        "Social support": 1.149,
        "Logged GDP per capita": 0.811,
        "Healthy life expectancy": 0,
        "Freedom to make life choices": 0.313,
        "Generosity": 0.074,
        "Perceptions of corruption": 0.135
    },
    {
        "A3 Code": "UGA",
        "Ladder score": 4.189,
        "Social support": 1.069,
        "Logged GDP per capita": 0.332,
        "Healthy life expectancy": 0.443,
        "Freedom to make life choices": 0.356,
        "Generosity": 0.252,
        "Perceptions of corruption": 0.06
    },
    {
        "A3 Code": "EGY",
        "Ladder score": 4.166,
        "Social support": 1.039,
        "Logged GDP per capita": 0.913,
        "Healthy life expectancy": 0.644,
        "Freedom to make life choices": 0.241,
        "Generosity": 0.076,
        "Perceptions of corruption": 0.067
    },
    {
        "A3 Code": "ZMB",
        "Ladder score": 4.107,
        "Social support": 1.058,
        "Logged GDP per capita": 0.578,
        "Healthy life expectancy": 0.426,
        "Freedom to make life choices": 0.431,
        "Generosity": 0.247,
        "Perceptions of corruption": 0.087
    },
    {
        "A3 Code": "TGO",
        "Ladder score": 4.085,
        "Social support": 0.572,
        "Logged GDP per capita": 0.275,
        "Healthy life expectancy": 0.41,
        "Freedom to make life choices": 0.293,
        "Generosity": 0.177,
        "Perceptions of corruption": 0.085
    },
    {
        "A3 Code": "IND",
        "Ladder score": 4.015,
        "Social support": 0.765,
        "Logged GDP per capita": 0.755,
        "Healthy life expectancy": 0.588,
        "Freedom to make life choices": 0.498,
        "Generosity": 0.2,
        "Perceptions of corruption": 0.085
    },
    {
        "A3 Code": "LBR",
        "Ladder score": 3.975,
        "Social support": 0.922,
        "Logged GDP per capita": 0.073,
        "Healthy life expectancy": 0.443,
        "Freedom to make life choices": 0.37,
        "Generosity": 0.233,
        "Perceptions of corruption": 0.033
    },
    {
        "A3 Code": "COM",
        "Ladder score": 3.973,
        "Social support": 0.757,
        "Logged GDP per capita": 0.274,
        "Healthy life expectancy": 0.505,
        "Freedom to make life choices": 0.142,
        "Generosity": 0.275,
        "Perceptions of corruption": 0.078
    },
    {
        "A3 Code": "MDG",
        "Ladder score": 3.933,
        "Social support": 0.916,
        "Logged GDP per capita": 0.274,
        "Healthy life expectancy": 0.555,
        "Freedom to make life choices": 0.148,
        "Generosity": 0.169,
        "Perceptions of corruption": 0.041
    },
    {
        "A3 Code": "LSO",
        "Ladder score": 3.802,
        "Social support": 1.169,
        "Logged GDP per capita": 0.489,
        "Healthy life expectancy": 0.168,
        "Freedom to make life choices": 0.359,
        "Generosity": 0.107,
        "Perceptions of corruption": 0.093
    },
    {
        "A3 Code": "BDI",
        "Ladder score": 3.775,
        "Social support": 0.447,
        "Logged GDP per capita": 0.046,
        "Healthy life expectancy": 0.38,
        "Freedom to make life choices": 0.22,
        "Generosity": 0.176,
        "Perceptions of corruption": 0.18
    },
    {
        "A3 Code": "ZWE",
        "Ladder score": 3.663,
        "Social support": 1.114,
        "Logged GDP per capita": 0.366,
        "Healthy life expectancy": 0.433,
        "Freedom to make life choices": 0.361,
        "Generosity": 0.151,
        "Perceptions of corruption": 0.089
    },
    {
        "A3 Code": "HTI",
        "Ladder score": 3.597,
        "Social support": 0.688,
        "Logged GDP per capita": 0.323,
        "Healthy life expectancy": 0.449,
        "Freedom to make life choices": 0.026,
        "Generosity": 0.419,
        "Perceptions of corruption": 0.11
    },
    {
        "A3 Code": "BWA",
        "Ladder score": 3.488,
        "Social support": 1.145,
        "Logged GDP per capita": 1.041,
        "Healthy life expectancy": 0.538,
        "Freedom to make life choices": 0.455,
        "Generosity": 0.025,
        "Perceptions of corruption": 0.1
    },
    {
        "A3 Code": "MWI",
        "Ladder score": 3.41,
        "Social support": 0.56,
        "Logged GDP per capita": 0.191,
        "Healthy life expectancy": 0.495,
        "Freedom to make life choices": 0.443,
        "Generosity": 0.218,
        "Perceptions of corruption": 0.089
    },
    {
        "A3 Code": "YEM",
        "Ladder score": 3.38,
        "Social support": 1.163,
        "Logged GDP per capita": 0.287,
        "Healthy life expectancy": 0.463,
        "Freedom to make life choices": 0.143,
        "Generosity": 0.108,
        "Perceptions of corruption": 0.077
    },
    {
        "A3 Code": "RWA",
        "Ladder score": 3.334,
        "Social support": 0.711,
        "Logged GDP per capita": 0.359,
        "Healthy life expectancy": 0.614,
        "Freedom to make life choices": 0.555,
        "Generosity": 0.217,
        "Perceptions of corruption": 0.411
    },
    {
        "A3 Code": "TZA",
        "Ladder score": 3.231,
        "Social support": 0.885,
        "Logged GDP per capita": 0.476,
        "Healthy life expectancy": 0.499,
        "Freedom to make life choices": 0.417,
        "Generosity": 0.276,
        "Perceptions of corruption": 0.147
    },
    {
        "A3 Code": "AFG",
        "Ladder score": 3.203,
        "Social support": 0.517,
        "Logged GDP per capita": 0.35,
        "Healthy life expectancy": 0.361,
        "Freedom to make life choices": 0,
        "Generosity": 0.158,
        "Perceptions of corruption": 0.025
    },
    {
        "A3 Code": "CAF",
        "Ladder score": 3.083,
        "Social support": 0,
        "Logged GDP per capita": 0.026,
        "Healthy life expectancy": 0.105,
        "Freedom to make life choices": 0.225,
        "Generosity": 0.235,
        "Perceptions of corruption": 0.035
    },
    {
        "A3 Code": "SSD",
        "Ladder score": 2.853,
        "Social support": 0.575,
        "Logged GDP per capita": 0.306,
        "Healthy life expectancy": 0.295,
        "Freedom to make life choices": 0.01,
        "Generosity": 0.202,
        "Perceptions of corruption": 0.091
    }
]

var data_2018 = [{
        "A3 Code": "FIN",
        "Ladder score": 7.632,
        "Social support": 1.592,
        "Logged GDP per capita": 1.305,
        "Healthy life expectancy": 0.874,
        "Freedom to make life choices": 0.681,
        "Generosity": 0.202,
        "Perceptions of corruption": 0.393
    },
    {
        "A3 Code": "NOR",
        "Ladder score": 7.594,
        "Social support": 1.582,
        "Logged GDP per capita": 1.456,
        "Healthy life expectancy": 0.861,
        "Freedom to make life choices": 0.686,
        "Generosity": 0.286,
        "Perceptions of corruption": 0.34
    },
    {
        "A3 Code": "DNK",
        "Ladder score": 7.555,
        "Social support": 1.59,
        "Logged GDP per capita": 1.351,
        "Healthy life expectancy": 0.868,
        "Freedom to make life choices": 0.683,
        "Generosity": 0.284,
        "Perceptions of corruption": 0.408
    },
    {
        "A3 Code": "ISL",
        "Ladder score": 7.495,
        "Social support": 1.644,
        "Logged GDP per capita": 1.343,
        "Healthy life expectancy": 0.914,
        "Freedom to make life choices": 0.677,
        "Generosity": 0.353,
        "Perceptions of corruption": 0.138
    },
    {
        "A3 Code": "CHE",
        "Ladder score": 7.487,
        "Social support": 1.549,
        "Logged GDP per capita": 1.42,
        "Healthy life expectancy": 0.927,
        "Freedom to make life choices": 0.66,
        "Generosity": 0.256,
        "Perceptions of corruption": 0.357
    },
    {
        "A3 Code": "NLD",
        "Ladder score": 7.441,
        "Social support": 1.488,
        "Logged GDP per capita": 1.361,
        "Healthy life expectancy": 0.878,
        "Freedom to make life choices": 0.638,
        "Generosity": 0.333,
        "Perceptions of corruption": 0.295
    },
    {
        "A3 Code": "CAN",
        "Ladder score": 7.328,
        "Social support": 1.532,
        "Logged GDP per capita": 1.33,
        "Healthy life expectancy": 0.896,
        "Freedom to make life choices": 0.653,
        "Generosity": 0.321,
        "Perceptions of corruption": 0.291
    },
    {
        "A3 Code": "NZL",
        "Ladder score": 7.324,
        "Social support": 1.601,
        "Logged GDP per capita": 1.268,
        "Healthy life expectancy": 0.876,
        "Freedom to make life choices": 0.669,
        "Generosity": 0.365,
        "Perceptions of corruption": 0.389
    },
    {
        "A3 Code": "SWE",
        "Ladder score": 7.314,
        "Social support": 1.501,
        "Logged GDP per capita": 1.355,
        "Healthy life expectancy": 0.913,
        "Freedom to make life choices": 0.659,
        "Generosity": 0.285,
        "Perceptions of corruption": 0.383
    },
    {
        "A3 Code": "AUS",
        "Ladder score": 7.272,
        "Social support": 1.573,
        "Logged GDP per capita": 1.34,
        "Healthy life expectancy": 0.91,
        "Freedom to make life choices": 0.647,
        "Generosity": 0.361,
        "Perceptions of corruption": 0.302
    },
    {
        "A3 Code": "GBR",
        "Ladder score": 7.19,
        "Social support": 1.433,
        "Logged GDP per capita": 1.244,
        "Healthy life expectancy": 0.888,
        "Freedom to make life choices": 0.464,
        "Generosity": 0.262,
        "Perceptions of corruption": 0.082
    },
    {
        "A3 Code": "AUT",
        "Ladder score": 7.139,
        "Social support": 1.504,
        "Logged GDP per capita": 1.341,
        "Healthy life expectancy": 0.891,
        "Freedom to make life choices": 0.617,
        "Generosity": 0.242,
        "Perceptions of corruption": 0.224
    },
    {
        "A3 Code": "CRI",
        "Ladder score": 7.072,
        "Social support": 1.459,
        "Logged GDP per capita": 1.01,
        "Healthy life expectancy": 0.817,
        "Freedom to make life choices": 0.632,
        "Generosity": 0.143,
        "Perceptions of corruption": 0.101
    },
    {
        "A3 Code": "IRL",
        "Ladder score": 6.977,
        "Social support": 1.583,
        "Logged GDP per capita": 1.448,
        "Healthy life expectancy": 0.876,
        "Freedom to make life choices": 0.614,
        "Generosity": 0.307,
        "Perceptions of corruption": 0.306
    },
    {
        "A3 Code": "DEU",
        "Ladder score": 6.965,
        "Social support": 1.474,
        "Logged GDP per capita": 1.34,
        "Healthy life expectancy": 0.861,
        "Freedom to make life choices": 0.586,
        "Generosity": 0.273,
        "Perceptions of corruption": 0.28
    },
    {
        "A3 Code": "BEL",
        "Ladder score": 6.927,
        "Social support": 1.483,
        "Logged GDP per capita": 1.324,
        "Healthy life expectancy": 0.894,
        "Freedom to make life choices": 0.583,
        "Generosity": 0.188,
        "Perceptions of corruption": 0.24
    },
    {
        "A3 Code": "LUX",
        "Ladder score": 6.91,
        "Social support": 1.52,
        "Logged GDP per capita": 1.576,
        "Healthy life expectancy": 0.896,
        "Freedom to make life choices": 0.632,
        "Generosity": 0.196,
        "Perceptions of corruption": 0.321
    },
    {
        "A3 Code": "USA",
        "Ladder score": 6.886,
        "Social support": 1.471,
        "Logged GDP per capita": 1.398,
        "Healthy life expectancy": 0.819,
        "Freedom to make life choices": 0.547,
        "Generosity": 0.291,
        "Perceptions of corruption": 0.133
    },
    {
        "A3 Code": "ISR",
        "Ladder score": 6.814,
        "Social support": 1.559,
        "Logged GDP per capita": 1.301,
        "Healthy life expectancy": 0.883,
        "Freedom to make life choices": 0.533,
        "Generosity": 0.354,
        "Perceptions of corruption": 0.272
    },
    {
        "A3 Code": "ARE",
        "Ladder score": 6.774,
        "Social support": 0.776,
        "Logged GDP per capita": 2.096,
        "Healthy life expectancy": 0.67,
        "Freedom to make life choices": 0.284,
        "Generosity": 0.186,
        "Perceptions of corruption": "N/A"
    },
    {
        "A3 Code": "CZE",
        "Ladder score": 6.711,
        "Social support": 1.489,
        "Logged GDP per capita": 1.233,
        "Healthy life expectancy": 0.854,
        "Freedom to make life choices": 0.543,
        "Generosity": 0.064,
        "Perceptions of corruption": 0.034
    },
    {
        "A3 Code": "MLT",
        "Ladder score": 6.627,
        "Social support": 1.525,
        "Logged GDP per capita": 1.27,
        "Healthy life expectancy": 0.884,
        "Freedom to make life choices": 0.645,
        "Generosity": 0.376,
        "Perceptions of corruption": 0.142
    },
    {
        "A3 Code": "FRA",
        "Ladder score": 6.489,
        "Social support": 1.466,
        "Logged GDP per capita": 1.293,
        "Healthy life expectancy": 0.908,
        "Freedom to make life choices": 0.52,
        "Generosity": 0.098,
        "Perceptions of corruption": 0.176
    },
    {
        "A3 Code": "MEX",
        "Ladder score": 6.488,
        "Social support": 1.252,
        "Logged GDP per capita": 1.038,
        "Healthy life expectancy": 0.761,
        "Freedom to make life choices": 0.479,
        "Generosity": 0.069,
        "Perceptions of corruption": 0.095
    },
    {
        "A3 Code": "CHL",
        "Ladder score": 6.476,
        "Social support": 1.331,
        "Logged GDP per capita": 1.131,
        "Healthy life expectancy": 0.808,
        "Freedom to make life choices": 0.431,
        "Generosity": 0.197,
        "Perceptions of corruption": 0.061
    },
    {
        "A3 Code": "TWN",
        "Ladder score": 6.441,
        "Social support": 1.436,
        "Logged GDP per capita": 1.365,
        "Healthy life expectancy": 0.857,
        "Freedom to make life choices": 0.418,
        "Generosity": 0.151,
        "Perceptions of corruption": 0.078
    },
    {
        "A3 Code": "PAN",
        "Ladder score": 6.43,
        "Social support": 1.438,
        "Logged GDP per capita": 1.112,
        "Healthy life expectancy": 0.759,
        "Freedom to make life choices": 0.597,
        "Generosity": 0.125,
        "Perceptions of corruption": 0.063
    },
    {
        "A3 Code": "BRA",
        "Ladder score": 6.419,
        "Social support": 1.474,
        "Logged GDP per capita": 0.986,
        "Healthy life expectancy": 0.675,
        "Freedom to make life choices": 0.493,
        "Generosity": 0.11,
        "Perceptions of corruption": 0.088
    },
    {
        "A3 Code": "ARG",
        "Ladder score": 6.388,
        "Social support": 1.468,
        "Logged GDP per capita": 1.073,
        "Healthy life expectancy": 0.744,
        "Freedom to make life choices": 0.57,
        "Generosity": 0.062,
        "Perceptions of corruption": 0.054
    },
    {
        "A3 Code": "GTM",
        "Ladder score": 6.382,
        "Social support": 1.268,
        "Logged GDP per capita": 0.781,
        "Healthy life expectancy": 0.608,
        "Freedom to make life choices": 0.604,
        "Generosity": 0.179,
        "Perceptions of corruption": 0.071
    },
    {
        "A3 Code": "URY",
        "Ladder score": 6.379,
        "Social support": 1.459,
        "Logged GDP per capita": 1.093,
        "Healthy life expectancy": 0.771,
        "Freedom to make life choices": 0.625,
        "Generosity": 0.13,
        "Perceptions of corruption": 0.155
    },
    {
        "A3 Code": "SAU",
        "Ladder score": 6.371,
        "Social support": 1.331,
        "Logged GDP per capita": 1.379,
        "Healthy life expectancy": 0.633,
        "Freedom to make life choices": 0.509,
        "Generosity": 0.098,
        "Perceptions of corruption": 0.127
    },
    {
        "A3 Code": "SGP",
        "Ladder score": 6.343,
        "Social support": 1.451,
        "Logged GDP per capita": 1.529,
        "Healthy life expectancy": 1.008,
        "Freedom to make life choices": 0.631,
        "Generosity": 0.261,
        "Perceptions of corruption": 0.457
    },
    {
        "A3 Code": "MYS",
        "Ladder score": 6.322,
        "Social support": 1.258,
        "Logged GDP per capita": 1.161,
        "Healthy life expectancy": 0.669,
        "Freedom to make life choices": 0.356,
        "Generosity": 0.311,
        "Perceptions of corruption": 0.059
    },
    {
        "A3 Code": "ESP",
        "Ladder score": 6.31,
        "Social support": 1.538,
        "Logged GDP per capita": 1.251,
        "Healthy life expectancy": 0.965,
        "Freedom to make life choices": 0.449,
        "Generosity": 0.142,
        "Perceptions of corruption": 0.074
    },
    {
        "A3 Code": "COL",
        "Ladder score": 6.26,
        "Social support": 1.439,
        "Logged GDP per capita": 0.96,
        "Healthy life expectancy": 0.635,
        "Freedom to make life choices": 0.531,
        "Generosity": 0.099,
        "Perceptions of corruption": 0.039
    },
    {
        "A3 Code": "SVK",
        "Ladder score": 6.173,
        "Social support": 1.537,
        "Logged GDP per capita": 1.21,
        "Healthy life expectancy": 0.776,
        "Freedom to make life choices": 0.354,
        "Generosity": 0.118,
        "Perceptions of corruption": 0.014
    },
    {
        "A3 Code": "SLV",
        "Ladder score": 6.167,
        "Social support": 1.231,
        "Logged GDP per capita": 0.806,
        "Healthy life expectancy": 0.639,
        "Freedom to make life choices": 0.461,
        "Generosity": 0.065,
        "Perceptions of corruption": 0.082
    },
    {
        "A3 Code": "NIC",
        "Ladder score": 6.141,
        "Social support": 1.319,
        "Logged GDP per capita": 0.668,
        "Healthy life expectancy": 0.7,
        "Freedom to make life choices": 0.527,
        "Generosity": 0.208,
        "Perceptions of corruption": 0.128
    },
    {
        "A3 Code": "POL",
        "Ladder score": 6.123,
        "Social support": 1.448,
        "Logged GDP per capita": 1.176,
        "Healthy life expectancy": 0.781,
        "Freedom to make life choices": 0.546,
        "Generosity": 0.108,
        "Perceptions of corruption": 0.064
    },
    {
        "A3 Code": "BHR",
        "Ladder score": 6.105,
        "Social support": 1.366,
        "Logged GDP per capita": 1.338,
        "Healthy life expectancy": 0.698,
        "Freedom to make life choices": 0.594,
        "Generosity": 0.243,
        "Perceptions of corruption": 0.123
    },
    {
        "A3 Code": "UZB",
        "Ladder score": 6.096,
        "Social support": 1.584,
        "Logged GDP per capita": 0.719,
        "Healthy life expectancy": 0.605,
        "Freedom to make life choices": 0.724,
        "Generosity": 0.328,
        "Perceptions of corruption": 0.259
    },
    {
        "A3 Code": "KWT",
        "Ladder score": 6.083,
        "Social support": 1.301,
        "Logged GDP per capita": 1.474,
        "Healthy life expectancy": 0.675,
        "Freedom to make life choices": 0.554,
        "Generosity": 0.167,
        "Perceptions of corruption": 0.106
    },
    {
        "A3 Code": "THA",
        "Ladder score": 6.072,
        "Social support": 1.417,
        "Logged GDP per capita": 1.016,
        "Healthy life expectancy": 0.707,
        "Freedom to make life choices": 0.637,
        "Generosity": 0.364,
        "Perceptions of corruption": 0.029
    },
    {
        "A3 Code": "ITA",
        "Ladder score": 6,
        "Social support": 1.501,
        "Logged GDP per capita": 1.264,
        "Healthy life expectancy": 0.946,
        "Freedom to make life choices": 0.281,
        "Generosity": 0.137,
        "Perceptions of corruption": 0.028
    },
    {
        "A3 Code": "ECU",
        "Ladder score": 5.973,
        "Social support": 1.33,
        "Logged GDP per capita": 0.889,
        "Healthy life expectancy": 0.736,
        "Freedom to make life choices": 0.556,
        "Generosity": 0.114,
        "Perceptions of corruption": 0.12
    },
    {
        "A3 Code": "LTU",
        "Ladder score": 5.952,
        "Social support": 1.527,
        "Logged GDP per capita": 1.197,
        "Healthy life expectancy": 0.716,
        "Freedom to make life choices": 0.35,
        "Generosity": 0.026,
        "Perceptions of corruption": 0.006
    },
    {
        "A3 Code": "SVN",
        "Ladder score": 5.948,
        "Social support": 1.506,
        "Logged GDP per capita": 1.219,
        "Healthy life expectancy": 0.856,
        "Freedom to make life choices": 0.633,
        "Generosity": 0.16,
        "Perceptions of corruption": 0.051
    },
    {
        "A3 Code": "ROU",
        "Ladder score": 5.945,
        "Social support": 1.219,
        "Logged GDP per capita": 1.116,
        "Healthy life expectancy": 0.726,
        "Freedom to make life choices": 0.528,
        "Generosity": 0.088,
        "Perceptions of corruption": 0.001
    },
    {
        "A3 Code": "LVA",
        "Ladder score": 5.933,
        "Social support": 1.454,
        "Logged GDP per capita": 1.148,
        "Healthy life expectancy": 0.671,
        "Freedom to make life choices": 0.363,
        "Generosity": 0.092,
        "Perceptions of corruption": 0.066
    },
    {
        "A3 Code": "JPN",
        "Ladder score": 5.915,
        "Social support": 1.462,
        "Logged GDP per capita": 1.294,
        "Healthy life expectancy": 0.988,
        "Freedom to make life choices": 0.553,
        "Generosity": 0.079,
        "Perceptions of corruption": 0.15
    },
    {
        "A3 Code": "MUS",
        "Ladder score": 5.891,
        "Social support": 1.387,
        "Logged GDP per capita": 1.09,
        "Healthy life expectancy": 0.684,
        "Freedom to make life choices": 0.584,
        "Generosity": 0.245,
        "Perceptions of corruption": 0.05
    },
    {
        "A3 Code": "JAM",
        "Ladder score": 5.89,
        "Social support": 1.493,
        "Logged GDP per capita": 0.819,
        "Healthy life expectancy": 0.693,
        "Freedom to make life choices": 0.575,
        "Generosity": 0.096,
        "Perceptions of corruption": 0.031
    },
    {
        "A3 Code": "KOR",
        "Ladder score": 5.875,
        "Social support": 1.204,
        "Logged GDP per capita": 1.266,
        "Healthy life expectancy": 0.955,
        "Freedom to make life choices": 0.244,
        "Generosity": 0.175,
        "Perceptions of corruption": 0.051
    },
    {
        "A3 Code": "RUS",
        "Ladder score": 5.81,
        "Social support": 1.479,
        "Logged GDP per capita": 1.151,
        "Healthy life expectancy": 0.599,
        "Freedom to make life choices": 0.399,
        "Generosity": 0.065,
        "Perceptions of corruption": 0.025
    },
    {
        "A3 Code": "KAZ",
        "Ladder score": 5.79,
        "Social support": 1.516,
        "Logged GDP per capita": 1.143,
        "Healthy life expectancy": 0.631,
        "Freedom to make life choices": 0.454,
        "Generosity": 0.148,
        "Perceptions of corruption": 0.121
    },
    {
        "A3 Code": "CYP",
        "Ladder score": 5.762,
        "Social support": 1.191,
        "Logged GDP per capita": 1.229,
        "Healthy life expectancy": 0.909,
        "Freedom to make life choices": 0.423,
        "Generosity": 0.202,
        "Perceptions of corruption": 0.035
    },
    {
        "A3 Code": "BOL",
        "Ladder score": 5.752,
        "Social support": 1.223,
        "Logged GDP per capita": 0.751,
        "Healthy life expectancy": 0.508,
        "Freedom to make life choices": 0.606,
        "Generosity": 0.141,
        "Perceptions of corruption": 0.054
    },
    {
        "A3 Code": "EST",
        "Ladder score": 5.739,
        "Social support": 1.532,
        "Logged GDP per capita": 1.2,
        "Healthy life expectancy": 0.737,
        "Freedom to make life choices": 0.553,
        "Generosity": 0.086,
        "Perceptions of corruption": 0.174
    },
    {
        "A3 Code": "PRY",
        "Ladder score": 5.681,
        "Social support": 1.522,
        "Logged GDP per capita": 0.835,
        "Healthy life expectancy": 0.615,
        "Freedom to make life choices": 0.541,
        "Generosity": 0.162,
        "Perceptions of corruption": 0.074
    },
    {
        "A3 Code": "PER",
        "Ladder score": 5.663,
        "Social support": 1.249,
        "Logged GDP per capita": 0.934,
        "Healthy life expectancy": 0.674,
        "Freedom to make life choices": 0.53,
        "Generosity": 0.092,
        "Perceptions of corruption": 0.034
    },
    {
        "A3 Code": "MDA",
        "Ladder score": 5.64,
        "Social support": 1.301,
        "Logged GDP per capita": 0.657,
        "Healthy life expectancy": 0.62,
        "Freedom to make life choices": 0.232,
        "Generosity": 0.171,
        "Perceptions of corruption": 0
    },
    {
        "A3 Code": "TKM",
        "Ladder score": 5.636,
        "Social support": 1.533,
        "Logged GDP per capita": 1.016,
        "Healthy life expectancy": 0.517,
        "Freedom to make life choices": 0.417,
        "Generosity": 0.199,
        "Perceptions of corruption": 0.037
    },
    {
        "A3 Code": "HUN",
        "Ladder score": 5.62,
        "Social support": 1.401,
        "Logged GDP per capita": 1.171,
        "Healthy life expectancy": 0.732,
        "Freedom to make life choices": 0.259,
        "Generosity": 0.061,
        "Perceptions of corruption": 0.022
    },
    {
        "A3 Code": "LBY",
        "Ladder score": 5.566,
        "Social support": 1.35,
        "Logged GDP per capita": 0.985,
        "Healthy life expectancy": 0.553,
        "Freedom to make life choices": 0.496,
        "Generosity": 0.116,
        "Perceptions of corruption": 0.148
    },
    {
        "A3 Code": "PHL",
        "Ladder score": 5.524,
        "Social support": 1.312,
        "Logged GDP per capita": 0.775,
        "Healthy life expectancy": 0.513,
        "Freedom to make life choices": 0.643,
        "Generosity": 0.12,
        "Perceptions of corruption": 0.105
    },
    {
        "A3 Code": "HND",
        "Ladder score": 5.504,
        "Social support": 1.205,
        "Logged GDP per capita": 0.62,
        "Healthy life expectancy": 0.622,
        "Freedom to make life choices": 0.459,
        "Generosity": 0.197,
        "Perceptions of corruption": 0.074
    },
    {
        "A3 Code": "BLR",
        "Ladder score": 5.483,
        "Social support": 1.498,
        "Logged GDP per capita": 1.039,
        "Healthy life expectancy": 0.7,
        "Freedom to make life choices": 0.307,
        "Generosity": 0.101,
        "Perceptions of corruption": 0.154
    },
    {
        "A3 Code": "TUR",
        "Ladder score": 5.483,
        "Social support": 1.38,
        "Logged GDP per capita": 1.148,
        "Healthy life expectancy": 0.686,
        "Freedom to make life choices": 0.324,
        "Generosity": 0.106,
        "Perceptions of corruption": 0.109
    },
    {
        "A3 Code": "PAK",
        "Ladder score": 5.472,
        "Social support": 0.81,
        "Logged GDP per capita": 0.652,
        "Healthy life expectancy": 0.424,
        "Freedom to make life choices": 0.334,
        "Generosity": 0.216,
        "Perceptions of corruption": 0.113
    },
    {
        "A3 Code": "HKG",
        "Ladder score": 5.43,
        "Social support": 1.29,
        "Logged GDP per capita": 1.405,
        "Healthy life expectancy": 1.03,
        "Freedom to make life choices": 0.524,
        "Generosity": 0.246,
        "Perceptions of corruption": 0.291
    },
    {
        "A3 Code": "PRT",
        "Ladder score": 5.41,
        "Social support": 1.429,
        "Logged GDP per capita": 1.188,
        "Healthy life expectancy": 0.884,
        "Freedom to make life choices": 0.562,
        "Generosity": 0.055,
        "Perceptions of corruption": 0.017
    },
    {
        "A3 Code": "SRB",
        "Ladder score": 5.398,
        "Social support": 1.369,
        "Logged GDP per capita": 0.975,
        "Healthy life expectancy": 0.685,
        "Freedom to make life choices": 0.288,
        "Generosity": 0.134,
        "Perceptions of corruption": 0.043
    },
    {
        "A3 Code": "GRC",
        "Ladder score": 5.358,
        "Social support": 1.202,
        "Logged GDP per capita": 1.154,
        "Healthy life expectancy": 0.879,
        "Freedom to make life choices": 0.131,
        "Generosity": 0,
        "Perceptions of corruption": 0.044
    },
    {
        "A3 Code": "LBN",
        "Ladder score": 5.358,
        "Social support": 1.179,
        "Logged GDP per capita": 0.965,
        "Healthy life expectancy": 0.785,
        "Freedom to make life choices": 0.503,
        "Generosity": 0.214,
        "Perceptions of corruption": 0.136
    },
    {
        "A3 Code": "MNE",
        "Ladder score": 5.347,
        "Social support": 1.279,
        "Logged GDP per capita": 1.017,
        "Healthy life expectancy": 0.729,
        "Freedom to make life choices": 0.259,
        "Generosity": 0.111,
        "Perceptions of corruption": 0.081
    },
    {
        "A3 Code": "HRV",
        "Ladder score": 5.321,
        "Social support": 1.161,
        "Logged GDP per capita": 1.115,
        "Healthy life expectancy": 0.737,
        "Freedom to make life choices": 0.38,
        "Generosity": 0.12,
        "Perceptions of corruption": 0.039
    },
    {
        "A3 Code": "DOM",
        "Ladder score": 5.302,
        "Social support": 1.441,
        "Logged GDP per capita": 0.982,
        "Healthy life expectancy": 0.614,
        "Freedom to make life choices": 0.578,
        "Generosity": 0.12,
        "Perceptions of corruption": 0.106
    },
    {
        "A3 Code": "DZA",
        "Ladder score": 5.295,
        "Social support": 1.154,
        "Logged GDP per capita": 0.979,
        "Healthy life expectancy": 0.687,
        "Freedom to make life choices": 0.077,
        "Generosity": 0.055,
        "Perceptions of corruption": 0.135
    },
    {
        "A3 Code": "MAR",
        "Ladder score": 5.254,
        "Social support": 0.797,
        "Logged GDP per capita": 0.779,
        "Healthy life expectancy": 0.669,
        "Freedom to make life choices": 0.46,
        "Generosity": 0.026,
        "Perceptions of corruption": 0.074
    },
    {
        "A3 Code": "CHN",
        "Ladder score": 5.246,
        "Social support": 1.142,
        "Logged GDP per capita": 0.989,
        "Healthy life expectancy": 0.799,
        "Freedom to make life choices": 0.597,
        "Generosity": 0.029,
        "Perceptions of corruption": 0.103
    },
    {
        "A3 Code": "AZE",
        "Ladder score": 5.201,
        "Social support": 1.161,
        "Logged GDP per capita": 1.024,
        "Healthy life expectancy": 0.603,
        "Freedom to make life choices": 0.43,
        "Generosity": 0.031,
        "Perceptions of corruption": 0.176
    },
    {
        "A3 Code": "TJK",
        "Ladder score": 5.199,
        "Social support": 1.166,
        "Logged GDP per capita": 0.474,
        "Healthy life expectancy": 0.598,
        "Freedom to make life choices": 0.292,
        "Generosity": 0.187,
        "Perceptions of corruption": 0.034
    },
    {
        "A3 Code": "MKD",
        "Ladder score": 5.185,
        "Social support": 1.239,
        "Logged GDP per capita": 0.959,
        "Healthy life expectancy": 0.691,
        "Freedom to make life choices": 0.394,
        "Generosity": 0.173,
        "Perceptions of corruption": 0.052
    },
    {
        "A3 Code": "JOR",
        "Ladder score": 5.161,
        "Social support": 1.265,
        "Logged GDP per capita": 0.822,
        "Healthy life expectancy": 0.645,
        "Freedom to make life choices": 0.468,
        "Generosity": 0.13,
        "Perceptions of corruption": 0.134
    },
    {
        "A3 Code": "NGA",
        "Ladder score": 5.155,
        "Social support": 1.172,
        "Logged GDP per capita": 0.689,
        "Healthy life expectancy": 0.048,
        "Freedom to make life choices": 0.462,
        "Generosity": 0.201,
        "Perceptions of corruption": 0.032
    },
    {
        "A3 Code": "KGZ",
        "Ladder score": 5.131,
        "Social support": 1.416,
        "Logged GDP per capita": 0.53,
        "Healthy life expectancy": 0.594,
        "Freedom to make life choices": 0.54,
        "Generosity": 0.281,
        "Perceptions of corruption": 0.035
    },
    {
        "A3 Code": "BIH",
        "Ladder score": 5.129,
        "Social support": 1.078,
        "Logged GDP per capita": 0.915,
        "Healthy life expectancy": 0.758,
        "Freedom to make life choices": 0.28,
        "Generosity": 0.216,
        "Perceptions of corruption": 0
    },
    {
        "A3 Code": "MNG",
        "Ladder score": 5.125,
        "Social support": 1.517,
        "Logged GDP per capita": 0.914,
        "Healthy life expectancy": 0.575,
        "Freedom to make life choices": 0.395,
        "Generosity": 0.253,
        "Perceptions of corruption": 0.032
    },
    {
        "A3 Code": "VNM",
        "Ladder score": 5.103,
        "Social support": 1.365,
        "Logged GDP per capita": 0.715,
        "Healthy life expectancy": 0.702,
        "Freedom to make life choices": 0.618,
        "Generosity": 0.177,
        "Perceptions of corruption": 0.079
    },
    {
        "A3 Code": "IDN",
        "Ladder score": 5.093,
        "Social support": 1.215,
        "Logged GDP per capita": 0.899,
        "Healthy life expectancy": 0.522,
        "Freedom to make life choices": 0.538,
        "Generosity": 0.484,
        "Perceptions of corruption": 0.018
    },
    {
        "A3 Code": "CMR",
        "Ladder score": 4.975,
        "Social support": 0.891,
        "Logged GDP per capita": 0.535,
        "Healthy life expectancy": 0.182,
        "Freedom to make life choices": 0.454,
        "Generosity": 0.183,
        "Perceptions of corruption": 0.043
    },
    {
        "A3 Code": "BGR",
        "Ladder score": 4.933,
        "Social support": 1.515,
        "Logged GDP per capita": 1.054,
        "Healthy life expectancy": 0.712,
        "Freedom to make life choices": 0.359,
        "Generosity": 0.064,
        "Perceptions of corruption": 0.009
    },
    {
        "A3 Code": "NPL",
        "Ladder score": 4.88,
        "Social support": 1.228,
        "Logged GDP per capita": 0.425,
        "Healthy life expectancy": 0.539,
        "Freedom to make life choices": 0.526,
        "Generosity": 0.302,
        "Perceptions of corruption": 0.078
    },
    {
        "A3 Code": "VEN",
        "Ladder score": 4.806,
        "Social support": 1.469,
        "Logged GDP per capita": 0.996,
        "Healthy life expectancy": 0.657,
        "Freedom to make life choices": 0.133,
        "Generosity": 0.056,
        "Perceptions of corruption": 0.052
    },
    {
        "A3 Code": "GAB",
        "Ladder score": 4.758,
        "Social support": 1.164,
        "Logged GDP per capita": 1.036,
        "Healthy life expectancy": 0.404,
        "Freedom to make life choices": 0.356,
        "Generosity": 0.032,
        "Perceptions of corruption": 0.052
    },
    {
        "A3 Code": "PSE",
        "Ladder score": 4.743,
        "Social support": 1.217,
        "Logged GDP per capita": 0.642,
        "Healthy life expectancy": 0.602,
        "Freedom to make life choices": 0.266,
        "Generosity": 0.086,
        "Perceptions of corruption": 0.076
    },
    {
        "A3 Code": "ZAF",
        "Ladder score": 4.724,
        "Social support": 1.41,
        "Logged GDP per capita": 0.94,
        "Healthy life expectancy": 0.33,
        "Freedom to make life choices": 0.516,
        "Generosity": 0.103,
        "Perceptions of corruption": 0.056
    },
    {
        "A3 Code": "IRN",
        "Ladder score": 4.707,
        "Social support": 0.771,
        "Logged GDP per capita": 1.059,
        "Healthy life expectancy": 0.691,
        "Freedom to make life choices": 0.459,
        "Generosity": 0.282,
        "Perceptions of corruption": 0.129
    },
    {
        "A3 Code": "GHA",
        "Ladder score": 4.657,
        "Social support": 0.896,
        "Logged GDP per capita": 0.592,
        "Healthy life expectancy": 0.337,
        "Freedom to make life choices": 0.499,
        "Generosity": 0.212,
        "Perceptions of corruption": 0.029
    },
    {
        "A3 Code": "SEN",
        "Ladder score": 4.631,
        "Social support": 1.117,
        "Logged GDP per capita": 0.429,
        "Healthy life expectancy": 0.433,
        "Freedom to make life choices": 0.406,
        "Generosity": 0.138,
        "Perceptions of corruption": 0.082
    },
    {
        "A3 Code": "TUN",
        "Ladder score": 4.592,
        "Social support": 0.906,
        "Logged GDP per capita": 0.9,
        "Healthy life expectancy": 0.69,
        "Freedom to make life choices": 0.271,
        "Generosity": 0.04,
        "Perceptions of corruption": 0.063
    },
    {
        "A3 Code": "ALB",
        "Ladder score": 4.586,
        "Social support": 0.817,
        "Logged GDP per capita": 0.916,
        "Healthy life expectancy": 0.79,
        "Freedom to make life choices": 0.419,
        "Generosity": 0.149,
        "Perceptions of corruption": 0.032
    },
    {
        "A3 Code": "SLE",
        "Ladder score": 4.571,
        "Social support": 0.813,
        "Logged GDP per capita": 0.256,
        "Healthy life expectancy": 0,
        "Freedom to make life choices": 0.355,
        "Generosity": 0.238,
        "Perceptions of corruption": 0.053
    },
    {
        "A3 Code": "COD",
        "Ladder score": 4.559,
        "Social support": 0.811,
        "Logged GDP per capita": 0.682,
        "Healthy life expectancy": 0.343,
        "Freedom to make life choices": 0.514,
        "Generosity": 0.091,
        "Perceptions of corruption": 0.077
    },
    {
        "A3 Code": "BGD",
        "Ladder score": 4.5,
        "Social support": 0.85,
        "Logged GDP per capita": 0.532,
        "Healthy life expectancy": 0.579,
        "Freedom to make life choices": 0.58,
        "Generosity": 0.153,
        "Perceptions of corruption": 0.144
    },
    {
        "A3 Code": "LKA",
        "Ladder score": 4.471,
        "Social support": 1.314,
        "Logged GDP per capita": 0.918,
        "Healthy life expectancy": 0.672,
        "Freedom to make life choices": 0.585,
        "Generosity": 0.307,
        "Perceptions of corruption": 0.05
    },
    {
        "A3 Code": "IRQ",
        "Ladder score": 4.456,
        "Social support": 0.971,
        "Logged GDP per capita": 1.01,
        "Healthy life expectancy": 0.536,
        "Freedom to make life choices": 0.304,
        "Generosity": 0.148,
        "Perceptions of corruption": 0.095
    },
    {
        "A3 Code": "MLI",
        "Ladder score": 4.447,
        "Social support": 1.233,
        "Logged GDP per capita": 0.37,
        "Healthy life expectancy": 0.152,
        "Freedom to make life choices": 0.367,
        "Generosity": 0.139,
        "Perceptions of corruption": 0.056
    },
    {
        "A3 Code": "NAM",
        "Ladder score": 4.441,
        "Social support": 1.281,
        "Logged GDP per capita": 0.874,
        "Healthy life expectancy": 0.365,
        "Freedom to make life choices": 0.519,
        "Generosity": 0.051,
        "Perceptions of corruption": 0.064
    },
    {
        "A3 Code": "KHM",
        "Ladder score": 4.433,
        "Social support": 1.088,
        "Logged GDP per capita": 0.549,
        "Healthy life expectancy": 0.457,
        "Freedom to make life choices": 0.696,
        "Generosity": 0.256,
        "Perceptions of corruption": 0.065
    },
    {
        "A3 Code": "BFA",
        "Ladder score": 4.424,
        "Social support": 1.097,
        "Logged GDP per capita": 0.314,
        "Healthy life expectancy": 0.254,
        "Freedom to make life choices": 0.312,
        "Generosity": 0.175,
        "Perceptions of corruption": 0.128
    },
    {
        "A3 Code": "EGY",
        "Ladder score": 4.419,
        "Social support": 1.025,
        "Logged GDP per capita": 0.885,
        "Healthy life expectancy": 0.553,
        "Freedom to make life choices": 0.312,
        "Generosity": 0.092,
        "Perceptions of corruption": 0.107
    },
    {
        "A3 Code": "MOZ",
        "Ladder score": 4.417,
        "Social support": 0.902,
        "Logged GDP per capita": 0.198,
        "Healthy life expectancy": 0.173,
        "Freedom to make life choices": 0.531,
        "Generosity": 0.206,
        "Perceptions of corruption": 0.158
    },
    {
        "A3 Code": "KEN",
        "Ladder score": 4.41,
        "Social support": 1.048,
        "Logged GDP per capita": 0.493,
        "Healthy life expectancy": 0.454,
        "Freedom to make life choices": 0.504,
        "Generosity": 0.352,
        "Perceptions of corruption": 0.055
    },
    {
        "A3 Code": "ZMB",
        "Ladder score": 4.377,
        "Social support": 1.047,
        "Logged GDP per capita": 0.562,
        "Healthy life expectancy": 0.295,
        "Freedom to make life choices": 0.503,
        "Generosity": 0.221,
        "Perceptions of corruption": 0.082
    },
    {
        "A3 Code": "MRT",
        "Ladder score": 4.356,
        "Social support": 1.245,
        "Logged GDP per capita": 0.557,
        "Healthy life expectancy": 0.292,
        "Freedom to make life choices": 0.129,
        "Generosity": 0.134,
        "Perceptions of corruption": 0.093
    },
    {
        "A3 Code": "ETH",
        "Ladder score": 4.35,
        "Social support": 0.95,
        "Logged GDP per capita": 0.308,
        "Healthy life expectancy": 0.391,
        "Freedom to make life choices": 0.452,
        "Generosity": 0.22,
        "Perceptions of corruption": 0.146
    },
    {
        "A3 Code": "GEO",
        "Ladder score": 4.34,
        "Social support": 0.592,
        "Logged GDP per capita": 0.853,
        "Healthy life expectancy": 0.643,
        "Freedom to make life choices": 0.375,
        "Generosity": 0.038,
        "Perceptions of corruption": 0.215
    },
    {
        "A3 Code": "ARM",
        "Ladder score": 4.321,
        "Social support": 0.99,
        "Logged GDP per capita": 0.816,
        "Healthy life expectancy": 0.666,
        "Freedom to make life choices": 0.26,
        "Generosity": 0.077,
        "Perceptions of corruption": 0.028
    },
    {
        "A3 Code": "MMR",
        "Ladder score": 4.308,
        "Social support": 1.174,
        "Logged GDP per capita": 0.682,
        "Healthy life expectancy": 0.429,
        "Freedom to make life choices": 0.58,
        "Generosity": 0.598,
        "Perceptions of corruption": 0.178
    },
    {
        "A3 Code": "TCD",
        "Ladder score": 4.301,
        "Social support": 0.907,
        "Logged GDP per capita": 0.358,
        "Healthy life expectancy": 0.053,
        "Freedom to make life choices": 0.189,
        "Generosity": 0.181,
        "Perceptions of corruption": 0.06
    },
    {
        "A3 Code": "COG",
        "Ladder score": 4.245,
        "Social support": 1.136,
        "Logged GDP per capita": 0.069,
        "Healthy life expectancy": 0.204,
        "Freedom to make life choices": 0.312,
        "Generosity": 0.197,
        "Perceptions of corruption": 0.052
    },
    {
        "A3 Code": "IND",
        "Ladder score": 4.19,
        "Social support": 0.747,
        "Logged GDP per capita": 0.721,
        "Healthy life expectancy": 0.485,
        "Freedom to make life choices": 0.539,
        "Generosity": 0.172,
        "Perceptions of corruption": 0.093
    },
    {
        "A3 Code": "NER",
        "Ladder score": 4.166,
        "Social support": 0.867,
        "Logged GDP per capita": 0.131,
        "Healthy life expectancy": 0.221,
        "Freedom to make life choices": 0.39,
        "Generosity": 0.175,
        "Perceptions of corruption": 0.099
    },
    {
        "A3 Code": "UGA",
        "Ladder score": 4.161,
        "Social support": 1.09,
        "Logged GDP per capita": 0.322,
        "Healthy life expectancy": 0.237,
        "Freedom to make life choices": 0.45,
        "Generosity": 0.259,
        "Perceptions of corruption": 0.061
    },
    {
        "A3 Code": "BEN",
        "Ladder score": 4.141,
        "Social support": 0.372,
        "Logged GDP per capita": 0.378,
        "Healthy life expectancy": 0.24,
        "Freedom to make life choices": 0.44,
        "Generosity": 0.163,
        "Perceptions of corruption": 0.067
    },
    {
        "A3 Code": "UKR",
        "Ladder score": 4.103,
        "Social support": 1.413,
        "Logged GDP per capita": 0.793,
        "Healthy life expectancy": 0.609,
        "Freedom to make life choices": 0.163,
        "Generosity": 0.187,
        "Perceptions of corruption": 0.011
    },
    {
        "A3 Code": "TGO",
        "Ladder score": 3.999,
        "Social support": 0.474,
        "Logged GDP per capita": 0.259,
        "Healthy life expectancy": 0.253,
        "Freedom to make life choices": 0.434,
        "Generosity": 0.158,
        "Perceptions of corruption": 0.101
    },
    {
        "A3 Code": "GIN",
        "Ladder score": 3.964,
        "Social support": 0.792,
        "Logged GDP per capita": 0.344,
        "Healthy life expectancy": 0.211,
        "Freedom to make life choices": 0.394,
        "Generosity": 0.185,
        "Perceptions of corruption": 0.094
    },
    {
        "A3 Code": "LSO",
        "Ladder score": 3.808,
        "Social support": 1.215,
        "Logged GDP per capita": 0.472,
        "Healthy life expectancy": 0.079,
        "Freedom to make life choices": 0.423,
        "Generosity": 0.116,
        "Perceptions of corruption": 0.112
    },
    {
        "A3 Code": "MDG",
        "Ladder score": 3.774,
        "Social support": 0.908,
        "Logged GDP per capita": 0.262,
        "Healthy life expectancy": 0.402,
        "Freedom to make life choices": 0.221,
        "Generosity": 0.155,
        "Perceptions of corruption": 0.049
    },
    {
        "A3 Code": "ZWE",
        "Ladder score": 3.692,
        "Social support": 1.094,
        "Logged GDP per capita": 0.357,
        "Healthy life expectancy": 0.248,
        "Freedom to make life choices": 0.406,
        "Generosity": 0.132,
        "Perceptions of corruption": 0.099
    },
    {
        "A3 Code": "AFG",
        "Ladder score": 3.632,
        "Social support": 0.537,
        "Logged GDP per capita": 0.332,
        "Healthy life expectancy": 0.255,
        "Freedom to make life choices": 0.085,
        "Generosity": 0.191,
        "Perceptions of corruption": 0.036
    },
    {
        "A3 Code": "BWA",
        "Ladder score": 3.59,
        "Social support": 1.174,
        "Logged GDP per capita": 1.017,
        "Healthy life expectancy": 0.417,
        "Freedom to make life choices": 0.557,
        "Generosity": 0.042,
        "Perceptions of corruption": 0.092
    },
    {
        "A3 Code": "MWI",
        "Ladder score": 3.587,
        "Social support": 0.541,
        "Logged GDP per capita": 0.186,
        "Healthy life expectancy": 0.306,
        "Freedom to make life choices": 0.531,
        "Generosity": 0.21,
        "Perceptions of corruption": 0.08
    },
    {
        "A3 Code": "HTI",
        "Ladder score": 3.582,
        "Social support": 0.714,
        "Logged GDP per capita": 0.315,
        "Healthy life expectancy": 0.289,
        "Freedom to make life choices": 0.025,
        "Generosity": 0.392,
        "Perceptions of corruption": 0.104
    },
    {
        "A3 Code": "LBR",
        "Ladder score": 3.495,
        "Social support": 0.858,
        "Logged GDP per capita": 0.076,
        "Healthy life expectancy": 0.267,
        "Freedom to make life choices": 0.419,
        "Generosity": 0.206,
        "Perceptions of corruption": 0.03
    },
    {
        "A3 Code": "RWA",
        "Ladder score": 3.408,
        "Social support": 0.896,
        "Logged GDP per capita": 0.332,
        "Healthy life expectancy": 0.4,
        "Freedom to make life choices": 0.636,
        "Generosity": 0.2,
        "Perceptions of corruption": 0.444
    },
    {
        "A3 Code": "YEM",
        "Ladder score": 3.355,
        "Social support": 1.073,
        "Logged GDP per capita": 0.442,
        "Healthy life expectancy": 0.343,
        "Freedom to make life choices": 0.244,
        "Generosity": 0.083,
        "Perceptions of corruption": 0.064
    },
    {
        "A3 Code": "TZA",
        "Ladder score": 3.303,
        "Social support": 0.991,
        "Logged GDP per capita": 0.455,
        "Healthy life expectancy": 0.381,
        "Freedom to make life choices": 0.481,
        "Generosity": 0.27,
        "Perceptions of corruption": 0.097
    },
    {
        "A3 Code": "SSD",
        "Ladder score": 3.254,
        "Social support": 0.608,
        "Logged GDP per capita": 0.337,
        "Healthy life expectancy": 0.177,
        "Freedom to make life choices": 0.112,
        "Generosity": 0.224,
        "Perceptions of corruption": 0.106
    },
    {
        "A3 Code": "CAF",
        "Ladder score": 3.083,
        "Social support": 0,
        "Logged GDP per capita": 0.024,
        "Healthy life expectancy": 0.01,
        "Freedom to make life choices": 0.305,
        "Generosity": 0.218,
        "Perceptions of corruption": 0.038
    },
    {
        "A3 Code": "BDI",
        "Ladder score": 2.905,
        "Social support": 0.627,
        "Logged GDP per capita": 0.091,
        "Healthy life expectancy": 0.145,
        "Freedom to make life choices": 0.065,
        "Generosity": 0.149,
        "Perceptions of corruption": 0.076
    }
];

var data_2017 = [{
        "A3 Code": "NOR",
        "Ladder score": 7.537000179,
        "Social support": 1.53352356,
        "Logged GDP per capita": 1.616463184,
        "Healthy life expectancy": 0.796666503,
        "Freedom to make life choices": 0.635422587,
        "Generosity": 0.362012237,
        "Perceptions of corruption": 0.315963835
    },
    {
        "A3 Code": "DNK",
        "Ladder score": 7.521999836,
        "Social support": 1.551121593,
        "Logged GDP per capita": 1.482383013,
        "Healthy life expectancy": 0.792565525,
        "Freedom to make life choices": 0.626006722,
        "Generosity": 0.355280489,
        "Perceptions of corruption": 0.400770068
    },
    {
        "A3 Code": "ISL",
        "Ladder score": 7.504000187,
        "Social support": 1.610574007,
        "Logged GDP per capita": 1.48063302,
        "Healthy life expectancy": 0.833552122,
        "Freedom to make life choices": 0.627162635,
        "Generosity": 0.475540221,
        "Perceptions of corruption": 0.153526559
    },
    {
        "A3 Code": "CHE",
        "Ladder score": 7.493999958,
        "Social support": 1.516911745,
        "Logged GDP per capita": 1.564979553,
        "Healthy life expectancy": 0.858131289,
        "Freedom to make life choices": 0.620070577,
        "Generosity": 0.290549278,
        "Perceptions of corruption": 0.367007285
    },
    {
        "A3 Code": "FIN",
        "Ladder score": 7.468999863,
        "Social support": 1.540246725,
        "Logged GDP per capita": 1.443571925,
        "Healthy life expectancy": 0.80915767,
        "Freedom to make life choices": 0.617950857,
        "Generosity": 0.245482773,
        "Perceptions of corruption": 0.382611543
    },
    {
        "A3 Code": "NLD",
        "Ladder score": 7.376999855,
        "Social support": 1.428939223,
        "Logged GDP per capita": 1.503944635,
        "Healthy life expectancy": 0.810696125,
        "Freedom to make life choices": 0.585384488,
        "Generosity": 0.47048983,
        "Perceptions of corruption": 0.282661825
    },
    {
        "A3 Code": "CAN",
        "Ladder score": 7.315999985,
        "Social support": 1.481348991,
        "Logged GDP per capita": 1.479204416,
        "Healthy life expectancy": 0.834557652,
        "Freedom to make life choices": 0.611100912,
        "Generosity": 0.435539722,
        "Perceptions of corruption": 0.287371516
    },
    {
        "A3 Code": "NZL",
        "Ladder score": 7.31400013,
        "Social support": 1.548195124,
        "Logged GDP per capita": 1.405706048,
        "Healthy life expectancy": 0.816759706,
        "Freedom to make life choices": 0.61406213,
        "Generosity": 0.500005126,
        "Perceptions of corruption": 0.382816702
    },
    {
        "A3 Code": "SWE",
        "Ladder score": 7.28399992,
        "Social support": 1.478162169,
        "Logged GDP per capita": 1.494387269,
        "Healthy life expectancy": 0.830875158,
        "Freedom to make life choices": 0.612924099,
        "Generosity": 0.385399252,
        "Perceptions of corruption": 0.384398729
    },
    {
        "A3 Code": "AUS",
        "Ladder score": 7.28399992,
        "Social support": 1.510041952,
        "Logged GDP per capita": 1.484414935,
        "Healthy life expectancy": 0.843886793,
        "Freedom to make life choices": 0.601607382,
        "Generosity": 0.47769925,
        "Perceptions of corruption": 0.30118373
    },
    {
        "A3 Code": "ISR",
        "Ladder score": 7.212999821,
        "Social support": 1.376289964,
        "Logged GDP per capita": 1.375382423,
        "Healthy life expectancy": 0.838404,
        "Freedom to make life choices": 0.405988604,
        "Generosity": 0.330082655,
        "Perceptions of corruption": 0.0852421
    },
    {
        "A3 Code": "CRI",
        "Ladder score": 7.078999996,
        "Social support": 1.416403651,
        "Logged GDP per capita": 1.109706283,
        "Healthy life expectancy": 0.759509265,
        "Freedom to make life choices": 0.58013165,
        "Generosity": 0.214613229,
        "Perceptions of corruption": 0.100106589
    },
    {
        "A3 Code": "AUT",
        "Ladder score": 7.006000042,
        "Social support": 1.459944963,
        "Logged GDP per capita": 1.487097263,
        "Healthy life expectancy": 0.815328419,
        "Freedom to make life choices": 0.56776619,
        "Generosity": 0.316472322,
        "Perceptions of corruption": 0.221060365
    },
    {
        "A3 Code": "USA",
        "Ladder score": 6.993000031,
        "Social support": 1.419920564,
        "Logged GDP per capita": 1.546259284,
        "Healthy life expectancy": 0.774286628,
        "Freedom to make life choices": 0.505740523,
        "Generosity": 0.392578781,
        "Perceptions of corruption": 0.135638788
    },
    {
        "A3 Code": "IRL",
        "Ladder score": 6.977000237,
        "Social support": 1.558231115,
        "Logged GDP per capita": 1.535706639,
        "Healthy life expectancy": 0.809782624,
        "Freedom to make life choices": 0.573110342,
        "Generosity": 0.427858323,
        "Perceptions of corruption": 0.298388153
    },
    {
        "A3 Code": "DEU",
        "Ladder score": 6.951000214,
        "Social support": 1.472520351,
        "Logged GDP per capita": 1.487923384,
        "Healthy life expectancy": 0.798950732,
        "Freedom to make life choices": 0.562511384,
        "Generosity": 0.33626917,
        "Perceptions of corruption": 0.276731938
    },
    {
        "A3 Code": "BEL",
        "Ladder score": 6.890999794,
        "Social support": 1.462312698,
        "Logged GDP per capita": 1.463780761,
        "Healthy life expectancy": 0.818091869,
        "Freedom to make life choices": 0.539770722,
        "Generosity": 0.231503338,
        "Perceptions of corruption": 0.251343131
    },
    {
        "A3 Code": "LUX",
        "Ladder score": 6.862999916,
        "Social support": 1.457583666,
        "Logged GDP per capita": 1.741943598,
        "Healthy life expectancy": 0.845089495,
        "Freedom to make life choices": 0.596627891,
        "Generosity": 0.283180982,
        "Perceptions of corruption": 0.318834424
    },
    {
        "A3 Code": "GBR",
        "Ladder score": 6.714000225,
        "Social support": 1.49646008,
        "Logged GDP per capita": 1.44163394,
        "Healthy life expectancy": 0.805335939,
        "Freedom to make life choices": 0.508190036,
        "Generosity": 0.492774159,
        "Perceptions of corruption": 0.265428066
    },
    {
        "A3 Code": "CHL",
        "Ladder score": 6.65199995,
        "Social support": 1.284024954,
        "Logged GDP per capita": 1.25278461,
        "Healthy life expectancy": 0.819479704,
        "Freedom to make life choices": 0.376895279,
        "Generosity": 0.326662421,
        "Perceptions of corruption": 0.082287982
    },
    {
        "A3 Code": "ARE",
        "Ladder score": 6.647999763,
        "Social support": 1.266410232,
        "Logged GDP per capita": 1.626343369,
        "Healthy life expectancy": 0.726798236,
        "Freedom to make life choices": 0.60834527,
        "Generosity": 0.360941947,
        "Perceptions of corruption": 0.324489564
    },
    {
        "A3 Code": "BRA",
        "Ladder score": 6.635000229,
        "Social support": 1.431306005,
        "Logged GDP per capita": 1.10735321,
        "Healthy life expectancy": 0.616552353,
        "Freedom to make life choices": 0.437453747,
        "Generosity": 0.162349895,
        "Perceptions of corruption": 0.111092761
    },
    {
        "A3 Code": "CZE",
        "Ladder score": 6.609000206,
        "Social support": 1.433885217,
        "Logged GDP per capita": 1.352682352,
        "Healthy life expectancy": 0.754444003,
        "Freedom to make life choices": 0.490946174,
        "Generosity": 0.088106759,
        "Perceptions of corruption": 0.036872927
    },
    {
        "A3 Code": "ARG",
        "Ladder score": 6.598999977,
        "Social support": 1.440451145,
        "Logged GDP per capita": 1.185295463,
        "Healthy life expectancy": 0.695137084,
        "Freedom to make life choices": 0.494519204,
        "Generosity": 0.109457061,
        "Perceptions of corruption": 0.059739888
    },
    {
        "A3 Code": "MEX",
        "Ladder score": 6.578000069,
        "Social support": 1.21086216,
        "Logged GDP per capita": 1.153183818,
        "Healthy life expectancy": 0.709978998,
        "Freedom to make life choices": 0.412730008,
        "Generosity": 0.120990433,
        "Perceptions of corruption": 0.132774115
    },
    {
        "A3 Code": "SGP",
        "Ladder score": 6.572000027,
        "Social support": 1.353814363,
        "Logged GDP per capita": 1.69227767,
        "Healthy life expectancy": 0.949492395,
        "Freedom to make life choices": 0.549840569,
        "Generosity": 0.345965981,
        "Perceptions of corruption": 0.464307785
    },
    {
        "A3 Code": "MLT",
        "Ladder score": 6.52699995,
        "Social support": 1.488411665,
        "Logged GDP per capita": 1.343279839,
        "Healthy life expectancy": 0.821944237,
        "Freedom to make life choices": 0.588767052,
        "Generosity": 0.574730575,
        "Perceptions of corruption": 0.153066069
    },
    {
        "A3 Code": "URY",
        "Ladder score": 6.453999996,
        "Social support": 1.412227869,
        "Logged GDP per capita": 1.217559695,
        "Healthy life expectancy": 0.719216824,
        "Freedom to make life choices": 0.579392254,
        "Generosity": 0.175096929,
        "Perceptions of corruption": 0.178061873
    },
    {
        "A3 Code": "GTM",
        "Ladder score": 6.453999996,
        "Social support": 1.255585194,
        "Logged GDP per capita": 0.872001946,
        "Healthy life expectancy": 0.54023999,
        "Freedom to make life choices": 0.531310618,
        "Generosity": 0.283488393,
        "Perceptions of corruption": 0.077223279
    },
    {
        "A3 Code": "PAN",
        "Ladder score": 6.452000141,
        "Social support": 1.373192549,
        "Logged GDP per capita": 1.233748436,
        "Healthy life expectancy": 0.706156135,
        "Freedom to make life choices": 0.550026834,
        "Generosity": 0.210556939,
        "Perceptions of corruption": 0.070983924
    },
    {
        "A3 Code": "FRA",
        "Ladder score": 6.441999912,
        "Social support": 1.387776852,
        "Logged GDP per capita": 1.430923462,
        "Healthy life expectancy": 0.844465852,
        "Freedom to make life choices": 0.470222116,
        "Generosity": 0.129762307,
        "Perceptions of corruption": 0.172502428
    },
    {
        "A3 Code": "THA",
        "Ladder score": 6.423999786,
        "Social support": 1.425792456,
        "Logged GDP per capita": 1.127868772,
        "Healthy life expectancy": 0.647239029,
        "Freedom to make life choices": 0.580200732,
        "Generosity": 0.57212311,
        "Perceptions of corruption": 0.031612735
    },
    {
        "A3 Code": "TWN",
        "Ladder score": 6.421999931,
        "Social support": 1.384565353,
        "Logged GDP per capita": 1.433626533,
        "Healthy life expectancy": 0.793984234,
        "Freedom to make life choices": 0.361466587,
        "Generosity": 0.258360475,
        "Perceptions of corruption": 0.063829236
    },
    {
        "A3 Code": "ESP",
        "Ladder score": 6.402999878,
        "Social support": 1.532090902,
        "Logged GDP per capita": 1.384397864,
        "Healthy life expectancy": 0.8889606,
        "Freedom to make life choices": 0.40878123,
        "Generosity": 0.190133572,
        "Perceptions of corruption": 0.070914097
    },
    {
        "A3 Code": "COL",
        "Ladder score": 6.356999874,
        "Social support": 1.402182937,
        "Logged GDP per capita": 1.070622325,
        "Healthy life expectancy": 0.595027924,
        "Freedom to make life choices": 0.477487415,
        "Generosity": 0.149014473,
        "Perceptions of corruption": 0.046668742
    },
    {
        "A3 Code": "SAU",
        "Ladder score": 6.343999863,
        "Social support": 1.286677599,
        "Logged GDP per capita": 1.530623555,
        "Healthy life expectancy": 0.59014833,
        "Freedom to make life choices": 0.449750572,
        "Generosity": 0.147616014,
        "Perceptions of corruption": 0.273432255
    },
    {
        "A3 Code": "TTO",
        "Ladder score": 6.168000221,
        "Social support": 1.380228519,
        "Logged GDP per capita": 1.361355901,
        "Healthy life expectancy": 0.519983292,
        "Freedom to make life choices": 0.518630743,
        "Generosity": 0.325296462,
        "Perceptions of corruption": 0.008964816
    },
    {
        "A3 Code": "KWT",
        "Ladder score": 6.105000019,
        "Social support": 1.259698749,
        "Logged GDP per capita": 1.632952452,
        "Healthy life expectancy": 0.632105708,
        "Freedom to make life choices": 0.496337593,
        "Generosity": 0.228289798,
        "Perceptions of corruption": 0.21515955
    },
    {
        "A3 Code": "SVK",
        "Ladder score": 6.09800005,
        "Social support": 1.505059242,
        "Logged GDP per capita": 1.325393558,
        "Healthy life expectancy": 0.712732911,
        "Freedom to make life choices": 0.295817465,
        "Generosity": 0.136544481,
        "Perceptions of corruption": 0.024210852
    },
    {
        "A3 Code": "BHR",
        "Ladder score": 6.086999893,
        "Social support": 1.323110461,
        "Logged GDP per capita": 1.488412261,
        "Healthy life expectancy": 0.653133035,
        "Freedom to make life choices": 0.536746919,
        "Generosity": 0.172668487,
        "Perceptions of corruption": 0.25704217
    },
    {
        "A3 Code": "MYS",
        "Ladder score": 6.084000111,
        "Social support": 1.284646034,
        "Logged GDP per capita": 1.29121542,
        "Healthy life expectancy": 0.618784428,
        "Freedom to make life choices": 0.402264982,
        "Generosity": 0.41660893,
        "Perceptions of corruption": 0.065600708
    },
    {
        "A3 Code": "NIC",
        "Ladder score": 6.071000099,
        "Social support": 1.28721571,
        "Logged GDP per capita": 0.737299204,
        "Healthy life expectancy": 0.653095961,
        "Freedom to make life choices": 0.447551847,
        "Generosity": 0.301674217,
        "Perceptions of corruption": 0.130687982
    },
    {
        "A3 Code": "ECU",
        "Ladder score": 6.007999897,
        "Social support": 1.286168814,
        "Logged GDP per capita": 1.000820398,
        "Healthy life expectancy": 0.685636222,
        "Freedom to make life choices": 0.455198199,
        "Generosity": 0.150112465,
        "Perceptions of corruption": 0.140134647
    },
    {
        "A3 Code": "SLV",
        "Ladder score": 6.002999783,
        "Social support": 1.182125092,
        "Logged GDP per capita": 0.909784496,
        "Healthy life expectancy": 0.596018553,
        "Freedom to make life choices": 0.43245253,
        "Generosity": 0.078257985,
        "Perceptions of corruption": 0.08998096
    },
    {
        "A3 Code": "POL",
        "Ladder score": 5.97300005,
        "Social support": 1.44571197,
        "Logged GDP per capita": 1.291787863,
        "Healthy life expectancy": 0.699475348,
        "Freedom to make life choices": 0.520342112,
        "Generosity": 0.158465967,
        "Perceptions of corruption": 0.059307806
    },
    {
        "A3 Code": "UZB",
        "Ladder score": 5.971000195,
        "Social support": 1.54896915,
        "Logged GDP per capita": 0.786441088,
        "Healthy life expectancy": 0.498272628,
        "Freedom to make life choices": 0.658248663,
        "Generosity": 0.415983647,
        "Perceptions of corruption": 0.246528223
    },
    {
        "A3 Code": "ITA",
        "Ladder score": 5.964000225,
        "Social support": 1.444923282,
        "Logged GDP per capita": 1.395066619,
        "Healthy life expectancy": 0.853144348,
        "Freedom to make life choices": 0.256450713,
        "Generosity": 0.172789648,
        "Perceptions of corruption": 0.028028091
    },
    {
        "A3 Code": "RUS",
        "Ladder score": 5.962999821,
        "Social support": 1.469282389,
        "Logged GDP per capita": 1.281778097,
        "Healthy life expectancy": 0.547349334,
        "Freedom to make life choices": 0.373783112,
        "Generosity": 0.052263822,
        "Perceptions of corruption": 0.032962881
    },
    {
        "A3 Code": "JPN",
        "Ladder score": 5.920000076,
        "Social support": 1.436337829,
        "Logged GDP per capita": 1.416915178,
        "Healthy life expectancy": 0.913475871,
        "Freedom to make life choices": 0.505625546,
        "Generosity": 0.120572768,
        "Perceptions of corruption": 0.163760737
    },
    {
        "A3 Code": "LTU",
        "Ladder score": 5.90199995,
        "Social support": 1.473516107,
        "Logged GDP per capita": 1.314582348,
        "Healthy life expectancy": 0.62894994,
        "Freedom to make life choices": 0.234231785,
        "Generosity": 0.010164657,
        "Perceptions of corruption": 0.011865643
    },
    {
        "A3 Code": "DZA",
        "Ladder score": 5.872000217,
        "Social support": 1.146217465,
        "Logged GDP per capita": 1.091864467,
        "Healthy life expectancy": 0.617584646,
        "Freedom to make life choices": 0.233335808,
        "Generosity": 0.069436647,
        "Perceptions of corruption": 0.14609611
    },
    {
        "A3 Code": "LVA",
        "Ladder score": 5.849999905,
        "Social support": 1.404714942,
        "Logged GDP per capita": 1.260748625,
        "Healthy life expectancy": 0.638566971,
        "Freedom to make life choices": 0.325707912,
        "Generosity": 0.153074786,
        "Perceptions of corruption": 0.073842727
    },
    {
        "A3 Code": "KOR",
        "Ladder score": 5.837999821,
        "Social support": 1.128274441,
        "Logged GDP per capita": 1.401678443,
        "Healthy life expectancy": 0.900214076,
        "Freedom to make life choices": 0.257921666,
        "Generosity": 0.206674367,
        "Perceptions of corruption": 0.063282669
    },
    {
        "A3 Code": "MDA",
        "Ladder score": 5.837999821,
        "Social support": 1.251825571,
        "Logged GDP per capita": 0.72887063,
        "Healthy life expectancy": 0.589465201,
        "Freedom to make life choices": 0.240729049,
        "Generosity": 0.208779126,
        "Perceptions of corruption": 0.010091286
    },
    {
        "A3 Code": "ROU",
        "Ladder score": 5.824999809,
        "Social support": 1.15009129,
        "Logged GDP per capita": 1.217683911,
        "Healthy life expectancy": 0.685158312,
        "Freedom to make life choices": 0.457003742,
        "Generosity": 0.133519918,
        "Perceptions of corruption": 0.004387901
    },
    {
        "A3 Code": "BOL",
        "Ladder score": 5.822999954,
        "Social support": 1.227619052,
        "Logged GDP per capita": 0.833756566,
        "Healthy life expectancy": 0.47363025,
        "Freedom to make life choices": 0.558732927,
        "Generosity": 0.225560725,
        "Perceptions of corruption": 0.060477726
    },
    {
        "A3 Code": "TKM",
        "Ladder score": 5.822000027,
        "Social support": 1.493149161,
        "Logged GDP per capita": 1.130776763,
        "Healthy life expectancy": 0.43772608,
        "Freedom to make life choices": 0.418271929,
        "Generosity": 0.249924988,
        "Perceptions of corruption": 0.25927034
    },
    {
        "A3 Code": "KAZ",
        "Ladder score": 5.818999767,
        "Social support": 1.384369016,
        "Logged GDP per capita": 1.28455627,
        "Healthy life expectancy": 0.606041551,
        "Freedom to make life choices": 0.437454283,
        "Generosity": 0.201964423,
        "Perceptions of corruption": 0.119282886
    },
    {
        "A3 Code": "SVN",
        "Ladder score": 5.757999897,
        "Social support": 1.452518821,
        "Logged GDP per capita": 1.341205955,
        "Healthy life expectancy": 0.790828228,
        "Freedom to make life choices": 0.572575808,
        "Generosity": 0.242649093,
        "Perceptions of corruption": 0.045128979
    },
    {
        "A3 Code": "PER",
        "Ladder score": 5.715000153,
        "Social support": 1.218770385,
        "Logged GDP per capita": 1.035225272,
        "Healthy life expectancy": 0.630166113,
        "Freedom to make life choices": 0.450002879,
        "Generosity": 0.126819715,
        "Perceptions of corruption": 0.047049087
    },
    {
        "A3 Code": "MUS",
        "Ladder score": 5.629000187,
        "Social support": 1.20956099,
        "Logged GDP per capita": 1.189395547,
        "Healthy life expectancy": 0.638007462,
        "Freedom to make life choices": 0.491247326,
        "Generosity": 0.360933751,
        "Perceptions of corruption": 0.042181555
    },
    {
        "A3 Code": "CYP",
        "Ladder score": 5.620999813,
        "Social support": 1.131363273,
        "Logged GDP per capita": 1.355938077,
        "Healthy life expectancy": 0.844714701,
        "Freedom to make life choices": 0.355111539,
        "Generosity": 0.271254301,
        "Perceptions of corruption": 0.041237976
    },
    {
        "A3 Code": "EST",
        "Ladder score": 5.611000061,
        "Social support": 1.4766711,
        "Logged GDP per capita": 1.32087934,
        "Healthy life expectancy": 0.695168316,
        "Freedom to make life choices": 0.47913143,
        "Generosity": 0.098890811,
        "Perceptions of corruption": 0.183248922
    },
    {
        "A3 Code": "BLR",
        "Ladder score": 5.568999767,
        "Social support": 1.444945216,
        "Logged GDP per capita": 1.15655756,
        "Healthy life expectancy": 0.637714267,
        "Freedom to make life choices": 0.295400262,
        "Generosity": 0.155137509,
        "Perceptions of corruption": 0.156313822
    },
    {
        "A3 Code": "LBY",
        "Ladder score": 5.525000095,
        "Social support": 1.35756433,
        "Logged GDP per capita": 1.101803064,
        "Healthy life expectancy": 0.52016902,
        "Freedom to make life choices": 0.46573323,
        "Generosity": 0.152073666,
        "Perceptions of corruption": 0.09261021
    },
    {
        "A3 Code": "TUR",
        "Ladder score": 5.5,
        "Social support": 1.337753177,
        "Logged GDP per capita": 1.198274374,
        "Healthy life expectancy": 0.637605608,
        "Freedom to make life choices": 0.3007406,
        "Generosity": 0.046693042,
        "Perceptions of corruption": 0.09967158
    },
    {
        "A3 Code": "PRY",
        "Ladder score": 5.493000031,
        "Social support": 1.50728488,
        "Logged GDP per capita": 0.932537317,
        "Healthy life expectancy": 0.579250693,
        "Freedom to make life choices": 0.473507792,
        "Generosity": 0.224150658,
        "Perceptions of corruption": 0.091065913
    },
    {
        "A3 Code": "HKG",
        "Ladder score": 5.472000122,
        "Social support": 1.262790918,
        "Logged GDP per capita": 1.551674843,
        "Healthy life expectancy": 0.943062425,
        "Freedom to make life choices": 0.490968645,
        "Generosity": 0.374465793,
        "Perceptions of corruption": 0.293933749
    },
    {
        "A3 Code": "PHL",
        "Ladder score": 5.429999828,
        "Social support": 1.253917575,
        "Logged GDP per capita": 0.857699215,
        "Healthy life expectancy": 0.468009055,
        "Freedom to make life choices": 0.585214674,
        "Generosity": 0.193513423,
        "Perceptions of corruption": 0.099331893
    },
    {
        "A3 Code": "SRB",
        "Ladder score": 5.394999981,
        "Social support": 1.258189797,
        "Logged GDP per capita": 1.069317579,
        "Healthy life expectancy": 0.650784671,
        "Freedom to make life choices": 0.208715528,
        "Generosity": 0.220125884,
        "Perceptions of corruption": 0.040903781
    },
    {
        "A3 Code": "JOR",
        "Ladder score": 5.335999966,
        "Social support": 1.239088893,
        "Logged GDP per capita": 0.991012394,
        "Healthy life expectancy": 0.604590058,
        "Freedom to make life choices": 0.418421149,
        "Generosity": 0.17217046,
        "Perceptions of corruption": 0.119803272
    },
    {
        "A3 Code": "HUN",
        "Ladder score": 5.323999882,
        "Social support": 1.343133092,
        "Logged GDP per capita": 1.286011934,
        "Healthy life expectancy": 0.687763453,
        "Freedom to make life choices": 0.175863519,
        "Generosity": 0.078401662,
        "Perceptions of corruption": 0.036636937
    },
    {
        "A3 Code": "JAM",
        "Ladder score": 5.31099987,
        "Social support": 1.368218064,
        "Logged GDP per capita": 0.925579309,
        "Healthy life expectancy": 0.641022384,
        "Freedom to make life choices": 0.474307239,
        "Generosity": 0.233818337,
        "Perceptions of corruption": 0.055267781
    },
    {
        "A3 Code": "HRV",
        "Ladder score": 5.293000221,
        "Social support": 0.967983007,
        "Logged GDP per capita": 1.222556233,
        "Healthy life expectancy": 0.701288521,
        "Freedom to make life choices": 0.255772293,
        "Generosity": 0.248002976,
        "Perceptions of corruption": 0.04310311
    },
    {
        "A3 Code": "CHN",
        "Ladder score": 5.272999763,
        "Social support": 1.160837412,
        "Logged GDP per capita": 1.081165791,
        "Healthy life expectancy": 0.741415501,
        "Freedom to make life choices": 0.472787708,
        "Generosity": 0.028806841,
        "Perceptions of corruption": 0.022794275
    },
    {
        "A3 Code": "PAK",
        "Ladder score": 5.269000053,
        "Social support": 0.67269069,
        "Logged GDP per capita": 0.726883531,
        "Healthy life expectancy": 0.402047783,
        "Freedom to make life choices": 0.235215262,
        "Generosity": 0.315446019,
        "Perceptions of corruption": 0.124348067
    },
    {
        "A3 Code": "IDN",
        "Ladder score": 5.262000084,
        "Social support": 1.274444699,
        "Logged GDP per capita": 0.995538592,
        "Healthy life expectancy": 0.492345721,
        "Freedom to make life choices": 0.443323463,
        "Generosity": 0.611704588,
        "Perceptions of corruption": 0.015317135
    },
    {
        "A3 Code": "VEN",
        "Ladder score": 5.25,
        "Social support": 1.431337595,
        "Logged GDP per capita": 1.128431201,
        "Healthy life expectancy": 0.617144227,
        "Freedom to make life choices": 0.153997123,
        "Generosity": 0.06501963,
        "Perceptions of corruption": 0.064491123
    },
    {
        "A3 Code": "MNE",
        "Ladder score": 5.236999989,
        "Social support": 1.238376498,
        "Logged GDP per capita": 1.121129036,
        "Healthy life expectancy": 0.667464674,
        "Freedom to make life choices": 0.194989055,
        "Generosity": 0.197911024,
        "Perceptions of corruption": 0.088174194
    },
    {
        "A3 Code": "MAR",
        "Ladder score": 5.235000134,
        "Social support": 0.774864435,
        "Logged GDP per capita": 0.878114581,
        "Healthy life expectancy": 0.597710669,
        "Freedom to make life choices": 0.408158332,
        "Generosity": 0.032209955,
        "Perceptions of corruption": 0.087763183
    },
    {
        "A3 Code": "AZE",
        "Ladder score": 5.234000206,
        "Social support": 1.152400255,
        "Logged GDP per capita": 1.153601766,
        "Healthy life expectancy": 0.540775776,
        "Freedom to make life choices": 0.398155838,
        "Generosity": 0.04526934,
        "Perceptions of corruption": 0.180987507
    },
    {
        "A3 Code": "DOM",
        "Ladder score": 5.230000019,
        "Social support": 1.402416706,
        "Logged GDP per capita": 1.079373837,
        "Healthy life expectancy": 0.574873745,
        "Freedom to make life choices": 0.552589834,
        "Generosity": 0.18696785,
        "Perceptions of corruption": 0.113945253
    },
    {
        "A3 Code": "GRC",
        "Ladder score": 5.227000237,
        "Social support": 1.239414573,
        "Logged GDP per capita": 1.289487481,
        "Healthy life expectancy": 0.810198903,
        "Freedom to make life choices": 0.095731251,
        "Generosity": 0,
        "Perceptions of corruption": 0.043289777
    },
    {
        "A3 Code": "LBN",
        "Ladder score": 5.224999905,
        "Social support": 1.129624248,
        "Logged GDP per capita": 1.074987531,
        "Healthy life expectancy": 0.735081077,
        "Freedom to make life choices": 0.288515985,
        "Generosity": 0.264450759,
        "Perceptions of corruption": 0.03751383
    },
    {
        "A3 Code": "PRT",
        "Ladder score": 5.195000172,
        "Social support": 1.367043018,
        "Logged GDP per capita": 1.315175295,
        "Healthy life expectancy": 0.795843542,
        "Freedom to make life choices": 0.4984653,
        "Generosity": 0.095102713,
        "Perceptions of corruption": 0.015869452
    },
    {
        "A3 Code": "BIH",
        "Ladder score": 5.18200016,
        "Social support": 1.069335938,
        "Logged GDP per capita": 0.982409418,
        "Healthy life expectancy": 0.705186307,
        "Freedom to make life choices": 0.204403177,
        "Generosity": 0.328867495,
        "Perceptions of corruption": 0
    },
    {
        "A3 Code": "HND",
        "Ladder score": 5.181000233,
        "Social support": 1.143944979,
        "Logged GDP per capita": 0.730573118,
        "Healthy life expectancy": 0.58256948,
        "Freedom to make life choices": 0.34807986,
        "Generosity": 0.236188874,
        "Perceptions of corruption": 0.073345453
    },
    {
        "A3 Code": "MKD",
        "Ladder score": 5.175000191,
        "Social support": 1.207893014,
        "Logged GDP per capita": 1.064577937,
        "Healthy life expectancy": 0.644948184,
        "Freedom to make life choices": 0.325905979,
        "Generosity": 0.253760964,
        "Perceptions of corruption": 0.060277794
    },
    {
        "A3 Code": "VNM",
        "Ladder score": 5.073999882,
        "Social support": 1.277491331,
        "Logged GDP per capita": 0.788547575,
        "Healthy life expectancy": 0.652168989,
        "Freedom to make life choices": 0.571055591,
        "Generosity": 0.234968051,
        "Perceptions of corruption": 0.087633237
    },
    {
        "A3 Code": "NGA",
        "Ladder score": 5.073999882,
        "Social support": 1.215770483,
        "Logged GDP per capita": 0.783756256,
        "Healthy life expectancy": 0.05691573,
        "Freedom to make life choices": 0.394952565,
        "Generosity": 0.230947196,
        "Perceptions of corruption": 0.026121566
    },
    {
        "A3 Code": "TJK",
        "Ladder score": 5.040999889,
        "Social support": 1.271463275,
        "Logged GDP per capita": 0.524713635,
        "Healthy life expectancy": 0.529235125,
        "Freedom to make life choices": 0.471566707,
        "Generosity": 0.248997644,
        "Perceptions of corruption": 0.146377146
    },
    {
        "A3 Code": "KGZ",
        "Ladder score": 5.004000187,
        "Social support": 1.394238591,
        "Logged GDP per capita": 0.596220076,
        "Healthy life expectancy": 0.553457797,
        "Freedom to make life choices": 0.454943389,
        "Generosity": 0.428580374,
        "Perceptions of corruption": 0.039439179
    },
    {
        "A3 Code": "NPL",
        "Ladder score": 4.961999893,
        "Social support": 1.179283261,
        "Logged GDP per capita": 0.479820192,
        "Healthy life expectancy": 0.504130781,
        "Freedom to make life choices": 0.440305948,
        "Generosity": 0.394096166,
        "Perceptions of corruption": 0.072975546
    },
    {
        "A3 Code": "MNG",
        "Ladder score": 4.954999924,
        "Social support": 1.493011236,
        "Logged GDP per capita": 1.027235866,
        "Healthy life expectancy": 0.557783484,
        "Freedom to make life choices": 0.394143969,
        "Generosity": 0.33846423,
        "Perceptions of corruption": 0.032902289
    },
    {
        "A3 Code": "ZAF",
        "Ladder score": 4.828999996,
        "Social support": 1.384788632,
        "Logged GDP per capita": 1.054698706,
        "Healthy life expectancy": 0.18708007,
        "Freedom to make life choices": 0.479246736,
        "Generosity": 0.13936238,
        "Perceptions of corruption": 0.072509497
    },
    {
        "A3 Code": "TUN",
        "Ladder score": 4.804999828,
        "Social support": 0.86835146,
        "Logged GDP per capita": 1.007265806,
        "Healthy life expectancy": 0.613212049,
        "Freedom to make life choices": 0.28968069,
        "Generosity": 0.049693357,
        "Perceptions of corruption": 0.086723149
    },
    {
        "A3 Code": "PSE",
        "Ladder score": 4.775000095,
        "Social support": 1.155647159,
        "Logged GDP per capita": 0.716249228,
        "Healthy life expectancy": 0.565666974,
        "Freedom to make life choices": 0.254711062,
        "Generosity": 0.114173174,
        "Perceptions of corruption": 0.089282602
    },
    {
        "A3 Code": "EGY",
        "Ladder score": 4.735000134,
        "Social support": 0.997471392,
        "Logged GDP per capita": 0.989701807,
        "Healthy life expectancy": 0.520187259,
        "Freedom to make life choices": 0.282110155,
        "Generosity": 0.128631443,
        "Perceptions of corruption": 0.114381365
    },
    {
        "A3 Code": "BGR",
        "Ladder score": 4.714000225,
        "Social support": 1.434379458,
        "Logged GDP per capita": 1.161459088,
        "Healthy life expectancy": 0.70821768,
        "Freedom to make life choices": 0.289231718,
        "Generosity": 0.113177694,
        "Perceptions of corruption": 0.011051531
    },
    {
        "A3 Code": "SLE",
        "Ladder score": 4.709000111,
        "Social support": 0.984136045,
        "Logged GDP per capita": 0.368420929,
        "Healthy life expectancy": 0.005564754,
        "Freedom to make life choices": 0.318697691,
        "Generosity": 0.293040901,
        "Perceptions of corruption": 0.071095176
    },
    {
        "A3 Code": "CMR",
        "Ladder score": 4.695000172,
        "Social support": 0.946018219,
        "Logged GDP per capita": 0.564305365,
        "Healthy life expectancy": 0.132892117,
        "Freedom to make life choices": 0.430388749,
        "Generosity": 0.236298457,
        "Perceptions of corruption": 0.051306631
    },
    {
        "A3 Code": "IRN",
        "Ladder score": 4.691999912,
        "Social support": 0.711551249,
        "Logged GDP per capita": 1.156873107,
        "Healthy life expectancy": 0.639333189,
        "Freedom to make life choices": 0.249322608,
        "Generosity": 0.387242913,
        "Perceptions of corruption": 0.048761073
    },
    {
        "A3 Code": "ALB",
        "Ladder score": 4.644000053,
        "Social support": 0.803685248,
        "Logged GDP per capita": 0.996192753,
        "Healthy life expectancy": 0.731159747,
        "Freedom to make life choices": 0.381498635,
        "Generosity": 0.201312944,
        "Perceptions of corruption": 0.039864216
    },
    {
        "A3 Code": "BGD",
        "Ladder score": 4.607999802,
        "Social support": 0.735131741,
        "Logged GDP per capita": 0.586682975,
        "Healthy life expectancy": 0.533241034,
        "Freedom to make life choices": 0.478356659,
        "Generosity": 0.172255352,
        "Perceptions of corruption": 0.123717859
    },
    {
        "A3 Code": "NAM",
        "Ladder score": 4.573999882,
        "Social support": 1.098470807,
        "Logged GDP per capita": 0.964434326,
        "Healthy life expectancy": 0.338611811,
        "Freedom to make life choices": 0.520303547,
        "Generosity": 0.077133745,
        "Perceptions of corruption": 0.093146972
    },
    {
        "A3 Code": "KEN",
        "Ladder score": 4.552999973,
        "Social support": 1.067950726,
        "Logged GDP per capita": 0.560479462,
        "Healthy life expectancy": 0.30998835,
        "Freedom to make life choices": 0.452763766,
        "Generosity": 0.444860309,
        "Perceptions of corruption": 0.064641319
    },
    {
        "A3 Code": "MOZ",
        "Ladder score": 4.550000191,
        "Social support": 0.870701015,
        "Logged GDP per capita": 0.23430565,
        "Healthy life expectancy": 0.106654435,
        "Freedom to make life choices": 0.480791092,
        "Generosity": 0.322228104,
        "Perceptions of corruption": 0.179436386
    },
    {
        "A3 Code": "MMR",
        "Ladder score": 4.545000076,
        "Social support": 1.123235941,
        "Logged GDP per capita": 0.36711055,
        "Healthy life expectancy": 0.397522569,
        "Freedom to make life choices": 0.514492035,
        "Generosity": 0.838075161,
        "Perceptions of corruption": 0.188816205
    },
    {
        "A3 Code": "SEN",
        "Ladder score": 4.534999847,
        "Social support": 1.179691911,
        "Logged GDP per capita": 0.479309022,
        "Healthy life expectancy": 0.409362853,
        "Freedom to make life choices": 0.377922267,
        "Generosity": 0.183468893,
        "Perceptions of corruption": 0.115460448
    },
    {
        "A3 Code": "ZMB",
        "Ladder score": 4.513999939,
        "Social support": 1.003187299,
        "Logged GDP per capita": 0.636406779,
        "Healthy life expectancy": 0.257835895,
        "Freedom to make life choices": 0.461603492,
        "Generosity": 0.249580145,
        "Perceptions of corruption": 0.07821355
    },
    {
        "A3 Code": "IRQ",
        "Ladder score": 4.497000217,
        "Social support": 0.978613198,
        "Logged GDP per capita": 1.102710485,
        "Healthy life expectancy": 0.50118047,
        "Freedom to make life choices": 0.288555533,
        "Generosity": 0.199637264,
        "Perceptions of corruption": 0.107215755
    },
    {
        "A3 Code": "GAB",
        "Ladder score": 4.465000153,
        "Social support": 1.155620217,
        "Logged GDP per capita": 1.198210239,
        "Healthy life expectancy": 0.356578588,
        "Freedom to make life choices": 0.312328577,
        "Generosity": 0.043785378,
        "Perceptions of corruption": 0.076046787
    },
    {
        "A3 Code": "ETH",
        "Ladder score": 4.460000038,
        "Social support": 0.864669204,
        "Logged GDP per capita": 0.339233845,
        "Healthy life expectancy": 0.353409708,
        "Freedom to make life choices": 0.408842742,
        "Generosity": 0.31265074,
        "Perceptions of corruption": 0.165455714
    },
    {
        "A3 Code": "LKA",
        "Ladder score": 4.440000057,
        "Social support": 1.259976387,
        "Logged GDP per capita": 1.009850144,
        "Healthy life expectancy": 0.625130832,
        "Freedom to make life choices": 0.561213255,
        "Generosity": 0.490863562,
        "Perceptions of corruption": 0.073653966
    },
    {
        "A3 Code": "ARM",
        "Ladder score": 4.375999928,
        "Social support": 1.007483721,
        "Logged GDP per capita": 0.900596738,
        "Healthy life expectancy": 0.637524426,
        "Freedom to make life choices": 0.198303267,
        "Generosity": 0.083488092,
        "Perceptions of corruption": 0.026674422
    },
    {
        "A3 Code": "IND",
        "Ladder score": 4.315000057,
        "Social support": 0.754372597,
        "Logged GDP per capita": 0.792221248,
        "Healthy life expectancy": 0.455427617,
        "Freedom to make life choices": 0.469987005,
        "Generosity": 0.231538489,
        "Perceptions of corruption": 0.092226885
    },
    {
        "A3 Code": "MRT",
        "Ladder score": 4.291999817,
        "Social support": 1.27203083,
        "Logged GDP per capita": 0.648457289,
        "Healthy life expectancy": 0.28534928,
        "Freedom to make life choices": 0.096098043,
        "Generosity": 0.201870024,
        "Perceptions of corruption": 0.136957005
    },
    {
        "A3 Code": "COD",
        "Ladder score": 4.290999889,
        "Social support": 0.832044363,
        "Logged GDP per capita": 0.808964252,
        "Healthy life expectancy": 0.289957434,
        "Freedom to make life choices": 0.435025871,
        "Generosity": 0.120852128,
        "Perceptions of corruption": 0.079618134
    },
    {
        "A3 Code": "GEO",
        "Ladder score": 4.285999775,
        "Social support": 0.570614934,
        "Logged GDP per capita": 0.950612664,
        "Healthy life expectancy": 0.649546981,
        "Freedom to make life choices": 0.309410036,
        "Generosity": 0.054008815,
        "Perceptions of corruption": 0.251666635
    },
    {
        "A3 Code": "COG",
        "Ladder score": 4.28000021,
        "Social support": 1.229023457,
        "Logged GDP per capita": 0.092102349,
        "Healthy life expectancy": 0.191407025,
        "Freedom to make life choices": 0.235961348,
        "Generosity": 0.246455833,
        "Perceptions of corruption": 0.060241356
    },
    {
        "A3 Code": "MLI",
        "Ladder score": 4.190000057,
        "Social support": 1.281473398,
        "Logged GDP per capita": 0.476180494,
        "Healthy life expectancy": 0.169365674,
        "Freedom to make life choices": 0.306613743,
        "Generosity": 0.183354199,
        "Perceptions of corruption": 0.104970247
    },
    {
        "A3 Code": "KHM",
        "Ladder score": 4.168000221,
        "Social support": 1.006238341,
        "Logged GDP per capita": 0.601765096,
        "Healthy life expectancy": 0.429783404,
        "Freedom to make life choices": 0.633375823,
        "Generosity": 0.385922968,
        "Perceptions of corruption": 0.068105951
    },
    {
        "A3 Code": "GHA",
        "Ladder score": 4.119999886,
        "Social support": 0.873664737,
        "Logged GDP per capita": 0.667224824,
        "Healthy life expectancy": 0.295637727,
        "Freedom to make life choices": 0.423026294,
        "Generosity": 0.256923944,
        "Perceptions of corruption": 0.02533637
    },
    {
        "A3 Code": "UKR",
        "Ladder score": 4.096000195,
        "Social support": 1.394537568,
        "Logged GDP per capita": 0.894651949,
        "Healthy life expectancy": 0.575903952,
        "Freedom to make life choices": 0.122974776,
        "Generosity": 0.270061463,
        "Perceptions of corruption": 0.023029471
    },
    {
        "A3 Code": "UGA",
        "Ladder score": 4.080999851,
        "Social support": 1.129827738,
        "Logged GDP per capita": 0.381430715,
        "Healthy life expectancy": 0.217632607,
        "Freedom to make life choices": 0.443185955,
        "Generosity": 0.325766057,
        "Perceptions of corruption": 0.057069719
    },
    {
        "A3 Code": "BFA",
        "Ladder score": 4.032000065,
        "Social support": 1.043280005,
        "Logged GDP per capita": 0.350227714,
        "Healthy life expectancy": 0.215844259,
        "Freedom to make life choices": 0.324367851,
        "Generosity": 0.250864685,
        "Perceptions of corruption": 0.120328106
    },
    {
        "A3 Code": "NER",
        "Ladder score": 4.027999878,
        "Social support": 0.993025005,
        "Logged GDP per capita": 0.161925331,
        "Healthy life expectancy": 0.268505007,
        "Freedom to make life choices": 0.363658696,
        "Generosity": 0.228673846,
        "Perceptions of corruption": 0.138572946
    },
    {
        "A3 Code": "MWI",
        "Ladder score": 3.970000029,
        "Social support": 0.512568831,
        "Logged GDP per capita": 0.233442038,
        "Healthy life expectancy": 0.315089583,
        "Freedom to make life choices": 0.466914654,
        "Generosity": 0.28717047,
        "Perceptions of corruption": 0.072711654
    },
    {
        "A3 Code": "TCD",
        "Ladder score": 3.936000109,
        "Social support": 0.953855872,
        "Logged GDP per capita": 0.438012987,
        "Healthy life expectancy": 0.041134715,
        "Freedom to make life choices": 0.162342027,
        "Generosity": 0.21611385,
        "Perceptions of corruption": 0.053581882
    },
    {
        "A3 Code": "ZWE",
        "Ladder score": 3.875,
        "Social support": 1.083095908,
        "Logged GDP per capita": 0.375846535,
        "Healthy life expectancy": 0.196763754,
        "Freedom to make life choices": 0.336384207,
        "Generosity": 0.189143494,
        "Perceptions of corruption": 0.095375381
    },
    {
        "A3 Code": "LSO",
        "Ladder score": 3.808000088,
        "Social support": 1.190095186,
        "Logged GDP per capita": 0.521021247,
        "Healthy life expectancy": 0,
        "Freedom to make life choices": 0.390661299,
        "Generosity": 0.157497272,
        "Perceptions of corruption": 0.11909464
    },
    {
        "A3 Code": "AFG",
        "Ladder score": 3.79399991,
        "Social support": 0.581543326,
        "Logged GDP per capita": 0.401477218,
        "Healthy life expectancy": 0.180746779,
        "Freedom to make life choices": 0.10617952,
        "Generosity": 0.311870933,
        "Perceptions of corruption": 0.06115783
    },
    {
        "A3 Code": "BWA",
        "Ladder score": 3.766000032,
        "Social support": 1.221554995,
        "Logged GDP per capita": 1.122094154,
        "Healthy life expectancy": 0.341755509,
        "Freedom to make life choices": 0.505196333,
        "Generosity": 0.099348448,
        "Perceptions of corruption": 0.098583199
    },
    {
        "A3 Code": "BEN",
        "Ladder score": 3.657000065,
        "Social support": 0.435299844,
        "Logged GDP per capita": 0.431085408,
        "Healthy life expectancy": 0.209930211,
        "Freedom to make life choices": 0.425962776,
        "Generosity": 0.207948461,
        "Perceptions of corruption": 0.060929015
    },
    {
        "A3 Code": "MDG",
        "Ladder score": 3.644000053,
        "Social support": 0.913020372,
        "Logged GDP per capita": 0.305808693,
        "Healthy life expectancy": 0.375223309,
        "Freedom to make life choices": 0.189196765,
        "Generosity": 0.20873253,
        "Perceptions of corruption": 0.067231975
    },
    {
        "A3 Code": "HTI",
        "Ladder score": 3.602999926,
        "Social support": 0.640449822,
        "Logged GDP per capita": 0.368610263,
        "Healthy life expectancy": 0.27732113,
        "Freedom to make life choices": 0.030369857,
        "Generosity": 0.489203781,
        "Perceptions of corruption": 0.09987215
    },
    {
        "A3 Code": "YEM",
        "Ladder score": 3.592999935,
        "Social support": 0.935382247,
        "Logged GDP per capita": 0.591683447,
        "Healthy life expectancy": 0.310080916,
        "Freedom to make life choices": 0.249463722,
        "Generosity": 0.104125209,
        "Perceptions of corruption": 0.056767423
    },
    {
        "A3 Code": "SSD",
        "Ladder score": 3.59100008,
        "Social support": 0.601323128,
        "Logged GDP per capita": 0.397248626,
        "Healthy life expectancy": 0.163486004,
        "Freedom to make life choices": 0.147062436,
        "Generosity": 0.285670817,
        "Perceptions of corruption": 0.116793513
    },
    {
        "A3 Code": "LBR",
        "Ladder score": 3.532999992,
        "Social support": 0.872117937,
        "Logged GDP per capita": 0.119041793,
        "Healthy life expectancy": 0.229918197,
        "Freedom to make life choices": 0.332881182,
        "Generosity": 0.266549885,
        "Perceptions of corruption": 0.038948249
    },
    {
        "A3 Code": "GIN",
        "Ladder score": 3.506999969,
        "Social support": 0.791244686,
        "Logged GDP per capita": 0.24454993,
        "Healthy life expectancy": 0.194129139,
        "Freedom to make life choices": 0.348587513,
        "Generosity": 0.264815092,
        "Perceptions of corruption": 0.110937618
    },
    {
        "A3 Code": "TGO",
        "Ladder score": 3.494999886,
        "Social support": 0.43188253,
        "Logged GDP per capita": 0.305444717,
        "Healthy life expectancy": 0.247105569,
        "Freedom to make life choices": 0.380426139,
        "Generosity": 0.196896151,
        "Perceptions of corruption": 0.095665015
    },
    {
        "A3 Code": "RWA",
        "Ladder score": 3.470999956,
        "Social support": 0.945707023,
        "Logged GDP per capita": 0.368745893,
        "Healthy life expectancy": 0.326424807,
        "Freedom to make life choices": 0.581843853,
        "Generosity": 0.252756029,
        "Perceptions of corruption": 0.455220014
    },
    {
        "A3 Code": "TZA",
        "Ladder score": 3.348999977,
        "Social support": 1.041989803,
        "Logged GDP per capita": 0.511135876,
        "Healthy life expectancy": 0.364509284,
        "Freedom to make life choices": 0.390017778,
        "Generosity": 0.354256362,
        "Perceptions of corruption": 0.066035107
    },
    {
        "A3 Code": "BDI",
        "Ladder score": 2.904999971,
        "Social support": 0.629793584,
        "Logged GDP per capita": 0.091622569,
        "Healthy life expectancy": 0.151610792,
        "Freedom to make life choices": 0.059900753,
        "Generosity": 0.204435185,
        "Perceptions of corruption": 0.084147945
    },
    {
        "A3 Code": "CAF",
        "Ladder score": 2.693000078,
        "Social support": 0,
        "Logged GDP per capita": 0,
        "Healthy life expectancy": 0.018772686,
        "Freedom to make life choices": 0.270842046,
        "Generosity": 0.280876487,
        "Perceptions of corruption": 0.056565076
    }
];

var data_2016 = [{
        "A3 Code": "DNK",
        "Ladder score": 7.526,
        "Social support": 1.16374,
        "Logged GDP per capita": 1.44178,
        "Healthy life expectancy": 0.79504,
        "Freedom to make life choices": 0.57941,
        "Generosity": 0.36171,
        "Perceptions of corruption": 0.44453
    },
    {
        "A3 Code": "CHE",
        "Ladder score": 7.509,
        "Social support": 1.14524,
        "Logged GDP per capita": 1.52733,
        "Healthy life expectancy": 0.86303,
        "Freedom to make life choices": 0.58557,
        "Generosity": 0.28083,
        "Perceptions of corruption": 0.41203
    },
    {
        "A3 Code": "ISL",
        "Ladder score": 7.501,
        "Social support": 1.18326,
        "Logged GDP per capita": 1.42666,
        "Healthy life expectancy": 0.86733,
        "Freedom to make life choices": 0.56624,
        "Generosity": 0.47678,
        "Perceptions of corruption": 0.14975
    },
    {
        "A3 Code": "NOR",
        "Ladder score": 7.498,
        "Social support": 1.1269,
        "Logged GDP per capita": 1.57744,
        "Healthy life expectancy": 0.79579,
        "Freedom to make life choices": 0.59609,
        "Generosity": 0.37895,
        "Perceptions of corruption": 0.35776
    },
    {
        "A3 Code": "FIN",
        "Ladder score": 7.413,
        "Social support": 1.13464,
        "Logged GDP per capita": 1.40598,
        "Healthy life expectancy": 0.81091,
        "Freedom to make life choices": 0.57104,
        "Generosity": 0.25492,
        "Perceptions of corruption": 0.41004
    },
    {
        "A3 Code": "CAN",
        "Ladder score": 7.404,
        "Social support": 1.0961,
        "Logged GDP per capita": 1.44015,
        "Healthy life expectancy": 0.8276,
        "Freedom to make life choices": 0.5737,
        "Generosity": 0.44834,
        "Perceptions of corruption": 0.31329
    },
    {
        "A3 Code": "NLD",
        "Ladder score": 7.339,
        "Social support": 1.02912,
        "Logged GDP per capita": 1.46468,
        "Healthy life expectancy": 0.81231,
        "Freedom to make life choices": 0.55211,
        "Generosity": 0.47416,
        "Perceptions of corruption": 0.29927
    },
    {
        "A3 Code": "NZL",
        "Ladder score": 7.334,
        "Social support": 1.17278,
        "Logged GDP per capita": 1.36066,
        "Healthy life expectancy": 0.83096,
        "Freedom to make life choices": 0.58147,
        "Generosity": 0.49401,
        "Perceptions of corruption": 0.41904
    },
    {
        "A3 Code": "AUS",
        "Ladder score": 7.313,
        "Social support": 1.10476,
        "Logged GDP per capita": 1.44443,
        "Healthy life expectancy": 0.8512,
        "Freedom to make life choices": 0.56837,
        "Generosity": 0.47407,
        "Perceptions of corruption": 0.32331
    },
    {
        "A3 Code": "SWE",
        "Ladder score": 7.291,
        "Social support": 1.08764,
        "Logged GDP per capita": 1.45181,
        "Healthy life expectancy": 0.83121,
        "Freedom to make life choices": 0.58218,
        "Generosity": 0.38254,
        "Perceptions of corruption": 0.40867
    },
    {
        "A3 Code": "ISR",
        "Ladder score": 7.267,
        "Social support": 0.99537,
        "Logged GDP per capita": 1.33766,
        "Healthy life expectancy": 0.84917,
        "Freedom to make life choices": 0.36432,
        "Generosity": 0.32288,
        "Perceptions of corruption": 0.08728
    },
    {
        "A3 Code": "AUT",
        "Ladder score": 7.119,
        "Social support": 1.08383,
        "Logged GDP per capita": 1.45038,
        "Healthy life expectancy": 0.80565,
        "Freedom to make life choices": 0.54355,
        "Generosity": 0.32865,
        "Perceptions of corruption": 0.21348
    },
    {
        "A3 Code": "USA",
        "Ladder score": 7.104,
        "Social support": 1.04782,
        "Logged GDP per capita": 1.50796,
        "Healthy life expectancy": 0.779,
        "Freedom to make life choices": 0.48163,
        "Generosity": 0.41077,
        "Perceptions of corruption": 0.14868
    },
    {
        "A3 Code": "CRI",
        "Ladder score": 7.087,
        "Social support": 1.02152,
        "Logged GDP per capita": 1.06879,
        "Healthy life expectancy": 0.76146,
        "Freedom to make life choices": 0.55225,
        "Generosity": 0.22553,
        "Perceptions of corruption": 0.10547
    },
    {
        "A3 Code": "DEU",
        "Ladder score": 6.994,
        "Social support": 1.09774,
        "Logged GDP per capita": 1.44787,
        "Healthy life expectancy": 0.81487,
        "Freedom to make life choices": 0.53466,
        "Generosity": 0.30452,
        "Perceptions of corruption": 0.28551
    },
    {
        "A3 Code": "BRA",
        "Ladder score": 6.952,
        "Social support": 1.03938,
        "Logged GDP per capita": 1.08754,
        "Healthy life expectancy": 0.61415,
        "Freedom to make life choices": 0.40425,
        "Generosity": 0.15776,
        "Perceptions of corruption": 0.14166
    },
    {
        "A3 Code": "BEL",
        "Ladder score": 6.929,
        "Social support": 1.05249,
        "Logged GDP per capita": 1.42539,
        "Healthy life expectancy": 0.81959,
        "Freedom to make life choices": 0.51354,
        "Generosity": 0.2424,
        "Perceptions of corruption": 0.26248
    },
    {
        "A3 Code": "IRL",
        "Ladder score": 6.907,
        "Social support": 1.16157,
        "Logged GDP per capita": 1.48341,
        "Healthy life expectancy": 0.81455,
        "Freedom to make life choices": 0.54008,
        "Generosity": 0.44963,
        "Perceptions of corruption": 0.29754
    },
    {
        "A3 Code": "LUX",
        "Ladder score": 6.871,
        "Social support": 1.03999,
        "Logged GDP per capita": 1.69752,
        "Healthy life expectancy": 0.84542,
        "Freedom to make life choices": 0.5487,
        "Generosity": 0.27571,
        "Perceptions of corruption": 0.35329
    },
    {
        "A3 Code": "MEX",
        "Ladder score": 6.778,
        "Social support": 0.7146,
        "Logged GDP per capita": 1.11508,
        "Healthy life expectancy": 0.71143,
        "Freedom to make life choices": 0.37709,
        "Generosity": 0.11735,
        "Perceptions of corruption": 0.18355
    },
    {
        "A3 Code": "SGP",
        "Ladder score": 6.739,
        "Social support": 0.86758,
        "Logged GDP per capita": 1.64555,
        "Healthy life expectancy": 0.94719,
        "Freedom to make life choices": 0.4877,
        "Generosity": 0.32706,
        "Perceptions of corruption": 0.46987
    },
    {
        "A3 Code": "GBR",
        "Ladder score": 6.725,
        "Social support": 1.08672,
        "Logged GDP per capita": 1.40283,
        "Healthy life expectancy": 0.80991,
        "Freedom to make life choices": 0.50036,
        "Generosity": 0.50156,
        "Perceptions of corruption": 0.27399
    },
    {
        "A3 Code": "CHL",
        "Ladder score": 6.705,
        "Social support": 0.90587,
        "Logged GDP per capita": 1.2167,
        "Healthy life expectancy": 0.81883,
        "Freedom to make life choices": 0.37789,
        "Generosity": 0.31595,
        "Perceptions of corruption": 0.11451
    },
    {
        "A3 Code": "PAN",
        "Ladder score": 6.701,
        "Social support": 0.98912,
        "Logged GDP per capita": 1.18306,
        "Healthy life expectancy": 0.70835,
        "Freedom to make life choices": 0.48927,
        "Generosity": 0.2418,
        "Perceptions of corruption": 0.08423
    },
    {
        "A3 Code": "ARG",
        "Ladder score": 6.65,
        "Social support": 1.06612,
        "Logged GDP per capita": 1.15137,
        "Healthy life expectancy": 0.69711,
        "Freedom to make life choices": 0.42284,
        "Generosity": 0.10989,
        "Perceptions of corruption": 0.07296
    },
    {
        "A3 Code": "CZE",
        "Ladder score": 6.596,
        "Social support": 1.00793,
        "Logged GDP per capita": 1.30915,
        "Healthy life expectancy": 0.76376,
        "Freedom to make life choices": 0.41418,
        "Generosity": 0.09929,
        "Perceptions of corruption": 0.03986
    },
    {
        "A3 Code": "ARE",
        "Ladder score": 6.573,
        "Social support": 0.87114,
        "Logged GDP per capita": 1.57352,
        "Healthy life expectancy": 0.72993,
        "Freedom to make life choices": 0.56215,
        "Generosity": 0.26591,
        "Perceptions of corruption": 0.35561
    },
    {
        "A3 Code": "URY",
        "Ladder score": 6.545,
        "Social support": 1.03143,
        "Logged GDP per capita": 1.18157,
        "Healthy life expectancy": 0.72183,
        "Freedom to make life choices": 0.54388,
        "Generosity": 0.18056,
        "Perceptions of corruption": 0.21394
    },
    {
        "A3 Code": "MLT",
        "Ladder score": 6.488,
        "Social support": 1.09879,
        "Logged GDP per capita": 1.30782,
        "Healthy life expectancy": 0.80315,
        "Freedom to make life choices": 0.54994,
        "Generosity": 0.56237,
        "Perceptions of corruption": 0.17554
    },
    {
        "A3 Code": "COL",
        "Ladder score": 6.481,
        "Social support": 1.02169,
        "Logged GDP per capita": 1.03032,
        "Healthy life expectancy": 0.59659,
        "Freedom to make life choices": 0.44735,
        "Generosity": 0.15626,
        "Perceptions of corruption": 0.05399
    },
    {
        "A3 Code": "FRA",
        "Ladder score": 6.478,
        "Social support": 1.00508,
        "Logged GDP per capita": 1.39488,
        "Healthy life expectancy": 0.83795,
        "Freedom to make life choices": 0.46562,
        "Generosity": 0.1216,
        "Perceptions of corruption": 0.17808
    },
    {
        "A3 Code": "THA",
        "Ladder score": 6.474,
        "Social support": 1.04477,
        "Logged GDP per capita": 1.0893,
        "Healthy life expectancy": 0.64915,
        "Freedom to make life choices": 0.49553,
        "Generosity": 0.58696,
        "Perceptions of corruption": 0.02833
    },
    {
        "A3 Code": "SAU",
        "Ladder score": 6.379,
        "Social support": 0.84829,
        "Logged GDP per capita": 1.48953,
        "Healthy life expectancy": 0.59267,
        "Freedom to make life choices": 0.37904,
        "Generosity": 0.15457,
        "Perceptions of corruption": 0.30008
    },
    {
        "A3 Code": "TWN",
        "Ladder score": 6.379,
        "Social support": 0.92624,
        "Logged GDP per capita": 1.39729,
        "Healthy life expectancy": 0.79565,
        "Freedom to make life choices": 0.32377,
        "Generosity": 0.25495,
        "Perceptions of corruption": 0.0663
    },
    {
        "A3 Code": "ESP",
        "Ladder score": 6.361,
        "Social support": 1.12945,
        "Logged GDP per capita": 1.34253,
        "Healthy life expectancy": 0.87896,
        "Freedom to make life choices": 0.37545,
        "Generosity": 0.17665,
        "Perceptions of corruption": 0.06137
    },
    {
        "A3 Code": "DZA",
        "Ladder score": 6.355,
        "Social support": 0.83309,
        "Logged GDP per capita": 1.05266,
        "Healthy life expectancy": 0.61804,
        "Freedom to make life choices": 0.21006,
        "Generosity": 0.07044,
        "Perceptions of corruption": 0.16157
    },
    {
        "A3 Code": "GTM",
        "Ladder score": 6.324,
        "Social support": 0.87119,
        "Logged GDP per capita": 0.83454,
        "Healthy life expectancy": 0.54039,
        "Freedom to make life choices": 0.50379,
        "Generosity": 0.28808,
        "Perceptions of corruption": 0.08701
    },
    {
        "A3 Code": "KWT",
        "Ladder score": 6.239,
        "Social support": 0.87758,
        "Logged GDP per capita": 1.61714,
        "Healthy life expectancy": 0.63569,
        "Freedom to make life choices": 0.43166,
        "Generosity": 0.15965,
        "Perceptions of corruption": 0.23669
    },
    {
        "A3 Code": "BHR",
        "Ladder score": 6.218,
        "Social support": 0.94397,
        "Logged GDP per capita": 1.44024,
        "Healthy life expectancy": 0.65696,
        "Freedom to make life choices": 0.47375,
        "Generosity": 0.17147,
        "Perceptions of corruption": 0.25772
    },
    {
        "A3 Code": "TTO",
        "Ladder score": 6.168,
        "Social support": 0.98569,
        "Logged GDP per capita": 1.32572,
        "Healthy life expectancy": 0.52608,
        "Freedom to make life choices": 0.48453,
        "Generosity": 0.31935,
        "Perceptions of corruption": 0.01241
    },
    {
        "A3 Code": "VEN",
        "Ladder score": 6.084,
        "Social support": 1.03302,
        "Logged GDP per capita": 1.13367,
        "Healthy life expectancy": 0.61904,
        "Freedom to make life choices": 0.19847,
        "Generosity": 0.0425,
        "Perceptions of corruption": 0.08304
    },
    {
        "A3 Code": "SVK",
        "Ladder score": 6.078,
        "Social support": 1.08268,
        "Logged GDP per capita": 1.27973,
        "Healthy life expectancy": 0.70367,
        "Freedom to make life choices": 0.23391,
        "Generosity": 0.13837,
        "Perceptions of corruption": 0.02947
    },
    {
        "A3 Code": "SLV",
        "Ladder score": 6.068,
        "Social support": 0.80975,
        "Logged GDP per capita": 0.8737,
        "Healthy life expectancy": 0.596,
        "Freedom to make life choices": 0.37269,
        "Generosity": 0.08877,
        "Perceptions of corruption": 0.10613
    },
    {
        "A3 Code": "MYS",
        "Ladder score": 6.005,
        "Social support": 0.88025,
        "Logged GDP per capita": 1.25142,
        "Healthy life expectancy": 0.62366,
        "Freedom to make life choices": 0.39031,
        "Generosity": 0.41474,
        "Perceptions of corruption": 0.09081
    },
    {
        "A3 Code": "NIC",
        "Ladder score": 5.992,
        "Social support": 0.89521,
        "Logged GDP per capita": 0.69384,
        "Healthy life expectancy": 0.65213,
        "Freedom to make life choices": 0.46582,
        "Generosity": 0.29773,
        "Perceptions of corruption": 0.16292
    },
    {
        "A3 Code": "UZB",
        "Ladder score": 5.987,
        "Social support": 1.1681,
        "Logged GDP per capita": 0.73591,
        "Healthy life expectancy": 0.50163,
        "Freedom to make life choices": 0.60848,
        "Generosity": 0.34326,
        "Perceptions of corruption": 0.28333
    },
    {
        "A3 Code": "ITA",
        "Ladder score": 5.977,
        "Social support": 1.04167,
        "Logged GDP per capita": 1.35495,
        "Healthy life expectancy": 0.85102,
        "Freedom to make life choices": 0.18827,
        "Generosity": 0.16684,
        "Perceptions of corruption": 0.02556
    },
    {
        "A3 Code": "ECU",
        "Ladder score": 5.976,
        "Social support": 0.85974,
        "Logged GDP per capita": 0.97306,
        "Healthy life expectancy": 0.68613,
        "Freedom to make life choices": 0.4027,
        "Generosity": 0.10074,
        "Perceptions of corruption": 0.18037
    },
    {
        "A3 Code": "JPN",
        "Ladder score": 5.921,
        "Social support": 1.06054,
        "Logged GDP per capita": 1.38007,
        "Healthy life expectancy": 0.91491,
        "Freedom to make life choices": 0.46761,
        "Generosity": 0.10224,
        "Perceptions of corruption": 0.18985
    },
    {
        "A3 Code": "KAZ",
        "Ladder score": 5.919,
        "Social support": 0.95544,
        "Logged GDP per capita": 1.22943,
        "Healthy life expectancy": 0.57386,
        "Freedom to make life choices": 0.4052,
        "Generosity": 0.15011,
        "Perceptions of corruption": 0.11132
    },
    {
        "A3 Code": "MDA",
        "Ladder score": 5.897,
        "Social support": 0.83132,
        "Logged GDP per capita": 0.69177,
        "Healthy life expectancy": 0.52309,
        "Freedom to make life choices": 0.25202,
        "Generosity": 0.19997,
        "Perceptions of corruption": 0.01903
    },
    {
        "A3 Code": "RUS",
        "Ladder score": 5.856,
        "Social support": 1.05261,
        "Logged GDP per capita": 1.23228,
        "Healthy life expectancy": 0.58991,
        "Freedom to make life choices": 0.32682,
        "Generosity": 0.02736,
        "Perceptions of corruption": 0.03586
    },
    {
        "A3 Code": "POL",
        "Ladder score": 5.835,
        "Social support": 1.04685,
        "Logged GDP per capita": 1.24585,
        "Healthy life expectancy": 0.69058,
        "Freedom to make life choices": 0.4519,
        "Generosity": 0.14443,
        "Perceptions of corruption": 0.055
    },
    {
        "A3 Code": "KOR",
        "Ladder score": 5.835,
        "Social support": 0.72194,
        "Logged GDP per capita": 1.35948,
        "Healthy life expectancy": 0.88645,
        "Freedom to make life choices": 0.25168,
        "Generosity": 0.18824,
        "Perceptions of corruption": 0.07716
    },
    {
        "A3 Code": "BOL",
        "Ladder score": 5.822,
        "Social support": 0.83779,
        "Logged GDP per capita": 0.79422,
        "Healthy life expectancy": 0.4697,
        "Freedom to make life choices": 0.50961,
        "Generosity": 0.21698,
        "Perceptions of corruption": 0.07746
    },
    {
        "A3 Code": "LTU",
        "Ladder score": 5.813,
        "Social support": 1.06411,
        "Logged GDP per capita": 1.2692,
        "Healthy life expectancy": 0.64674,
        "Freedom to make life choices": 0.18929,
        "Generosity": 0.02025,
        "Perceptions of corruption": 0.0182
    },
    {
        "A3 Code": "BLR",
        "Ladder score": 5.802,
        "Social support": 1.04993,
        "Logged GDP per capita": 1.13062,
        "Healthy life expectancy": 0.63104,
        "Freedom to make life choices": 0.29091,
        "Generosity": 0.13942,
        "Perceptions of corruption": 0.17457
    },
    {
        "A3 Code": "SVN",
        "Ladder score": 5.768,
        "Social support": 1.05613,
        "Logged GDP per capita": 1.29947,
        "Healthy life expectancy": 0.79151,
        "Freedom to make life choices": 0.53164,
        "Generosity": 0.25738,
        "Perceptions of corruption": 0.03635
    },
    {
        "A3 Code": "PER",
        "Ladder score": 5.743,
        "Social support": 0.81255,
        "Logged GDP per capita": 0.99602,
        "Healthy life expectancy": 0.62994,
        "Freedom to make life choices": 0.37502,
        "Generosity": 0.14527,
        "Perceptions of corruption": 0.05292
    },
    {
        "A3 Code": "TKM",
        "Ladder score": 5.658,
        "Social support": 1.03817,
        "Logged GDP per capita": 1.08017,
        "Healthy life expectancy": 0.44006,
        "Freedom to make life choices": 0.37408,
        "Generosity": 0.22567,
        "Perceptions of corruption": 0.28467
    },
    {
        "A3 Code": "MUS",
        "Ladder score": 5.648,
        "Social support": 0.75695,
        "Logged GDP per capita": 1.14372,
        "Healthy life expectancy": 0.66189,
        "Freedom to make life choices": 0.46145,
        "Generosity": 0.36951,
        "Perceptions of corruption": 0.05203
    },
    {
        "A3 Code": "LBY",
        "Ladder score": 5.615,
        "Social support": 0.95076,
        "Logged GDP per capita": 1.06688,
        "Healthy life expectancy": 0.52304,
        "Freedom to make life choices": 0.40672,
        "Generosity": 0.17087,
        "Perceptions of corruption": 0.10339
    },
    {
        "A3 Code": "LVA",
        "Ladder score": 5.56,
        "Social support": 0.95025,
        "Logged GDP per capita": 1.21788,
        "Healthy life expectancy": 0.63952,
        "Freedom to make life choices": 0.27996,
        "Generosity": 0.17445,
        "Perceptions of corruption": 0.0889
    },
    {
        "A3 Code": "CYP",
        "Ladder score": 5.546,
        "Social support": 0.70697,
        "Logged GDP per capita": 1.31857,
        "Healthy life expectancy": 0.8488,
        "Freedom to make life choices": 0.29507,
        "Generosity": 0.27906,
        "Perceptions of corruption": 0.05228
    },
    {
        "A3 Code": "PRY",
        "Ladder score": 5.538,
        "Social support": 1.11111,
        "Logged GDP per capita": 0.89373,
        "Healthy life expectancy": 0.58295,
        "Freedom to make life choices": 0.46235,
        "Generosity": 0.25296,
        "Perceptions of corruption": 0.07396
    },
    {
        "A3 Code": "ROU",
        "Ladder score": 5.528,
        "Social support": 0.72803,
        "Logged GDP per capita": 1.1697,
        "Healthy life expectancy": 0.67602,
        "Freedom to make life choices": 0.36712,
        "Generosity": 0.12889,
        "Perceptions of corruption": 0.00679
    },
    {
        "A3 Code": "EST",
        "Ladder score": 5.517,
        "Social support": 1.05163,
        "Logged GDP per capita": 1.27964,
        "Healthy life expectancy": 0.68098,
        "Freedom to make life choices": 0.41511,
        "Generosity": 0.08423,
        "Perceptions of corruption": 0.18519
    },
    {
        "A3 Code": "JAM",
        "Ladder score": 5.51,
        "Social support": 0.96372,
        "Logged GDP per capita": 0.89333,
        "Healthy life expectancy": 0.59469,
        "Freedom to make life choices": 0.43597,
        "Generosity": 0.22245,
        "Perceptions of corruption": 0.04294
    },
    {
        "A3 Code": "HRV",
        "Ladder score": 5.488,
        "Social support": 0.60809,
        "Logged GDP per capita": 1.18649,
        "Healthy life expectancy": 0.70524,
        "Freedom to make life choices": 0.23907,
        "Generosity": 0.18434,
        "Perceptions of corruption": 0.04002
    },
    {
        "A3 Code": "HKG",
        "Ladder score": 5.458,
        "Social support": 0.87021,
        "Logged GDP per capita": 1.5107,
        "Healthy life expectancy": 0.95277,
        "Freedom to make life choices": 0.48079,
        "Generosity": 0.40097,
        "Perceptions of corruption": 0.31647
    },
    {
        "A3 Code": "TUR",
        "Ladder score": 5.389,
        "Social support": 0.87717,
        "Logged GDP per capita": 1.16492,
        "Healthy life expectancy": 0.64718,
        "Freedom to make life choices": 0.23889,
        "Generosity": 0.04707,
        "Perceptions of corruption": 0.12348
    },
    {
        "A3 Code": "IDN",
        "Ladder score": 5.314,
        "Social support": 0.87625,
        "Logged GDP per capita": 0.95104,
        "Healthy life expectancy": 0.49374,
        "Freedom to make life choices": 0.39237,
        "Generosity": 0.56521,
        "Perceptions of corruption": 0.00322
    },
    {
        "A3 Code": "JOR",
        "Ladder score": 5.303,
        "Social support": 0.86216,
        "Logged GDP per capita": 0.99673,
        "Healthy life expectancy": 0.60712,
        "Freedom to make life choices": 0.36023,
        "Generosity": 0.14262,
        "Perceptions of corruption": 0.13297
    },
    {
        "A3 Code": "AZE",
        "Ladder score": 5.291,
        "Social support": 0.76042,
        "Logged GDP per capita": 1.12373,
        "Healthy life expectancy": 0.54504,
        "Freedom to make life choices": 0.35327,
        "Generosity": 0.0564,
        "Perceptions of corruption": 0.17914
    },
    {
        "A3 Code": "PHL",
        "Ladder score": 5.279,
        "Social support": 0.87877,
        "Logged GDP per capita": 0.81217,
        "Healthy life expectancy": 0.47036,
        "Freedom to make life choices": 0.54854,
        "Generosity": 0.21674,
        "Perceptions of corruption": 0.11757
    },
    {
        "A3 Code": "CHN",
        "Ladder score": 5.245,
        "Social support": 0.79381,
        "Logged GDP per capita": 1.0278,
        "Healthy life expectancy": 0.73561,
        "Freedom to make life choices": 0.44012,
        "Generosity": 0.04959,
        "Perceptions of corruption": 0.02745
    },
    {
        "A3 Code": "KGZ",
        "Ladder score": 5.185,
        "Social support": 0.95434,
        "Logged GDP per capita": 0.56044,
        "Healthy life expectancy": 0.55449,
        "Freedom to make life choices": 0.40212,
        "Generosity": 0.38432,
        "Perceptions of corruption": 0.04762
    },
    {
        "A3 Code": "SRB",
        "Ladder score": 5.177,
        "Social support": 0.81329,
        "Logged GDP per capita": 1.03437,
        "Healthy life expectancy": 0.6458,
        "Freedom to make life choices": 0.15718,
        "Generosity": 0.20737,
        "Perceptions of corruption": 0.04339
    },
    {
        "A3 Code": "BIH",
        "Ladder score": 5.163,
        "Social support": 0.64367,
        "Logged GDP per capita": 0.93383,
        "Healthy life expectancy": 0.70766,
        "Freedom to make life choices": 0.09511,
        "Generosity": 0.29889,
        "Perceptions of corruption": 0
    },
    {
        "A3 Code": "MNE",
        "Ladder score": 5.161,
        "Social support": 0.74173,
        "Logged GDP per capita": 1.07838,
        "Healthy life expectancy": 0.63533,
        "Freedom to make life choices": 0.15111,
        "Generosity": 0.17191,
        "Perceptions of corruption": 0.12721
    },
    {
        "A3 Code": "DOM",
        "Ladder score": 5.155,
        "Social support": 0.99496,
        "Logged GDP per capita": 1.02787,
        "Healthy life expectancy": 0.57669,
        "Freedom to make life choices": 0.52259,
        "Generosity": 0.21286,
        "Perceptions of corruption": 0.12372
    },
    {
        "A3 Code": "MAR",
        "Ladder score": 5.151,
        "Social support": 0.38595,
        "Logged GDP per capita": 0.84058,
        "Healthy life expectancy": 0.59471,
        "Freedom to make life choices": 0.25646,
        "Generosity": 0.04053,
        "Perceptions of corruption": 0.08404
    },
    {
        "A3 Code": "HUN",
        "Ladder score": 5.145,
        "Social support": 0.93164,
        "Logged GDP per capita": 1.24142,
        "Healthy life expectancy": 0.67608,
        "Freedom to make life choices": 0.1977,
        "Generosity": 0.099,
        "Perceptions of corruption": 0.04472
    },
    {
        "A3 Code": "PAK",
        "Ladder score": 5.132,
        "Social support": 0.26135,
        "Logged GDP per capita": 0.68816,
        "Healthy life expectancy": 0.40306,
        "Freedom to make life choices": 0.14622,
        "Generosity": 0.31185,
        "Perceptions of corruption": 0.1388
    },
    {
        "A3 Code": "LBN",
        "Ladder score": 5.129,
        "Social support": 0.64184,
        "Logged GDP per capita": 1.12268,
        "Healthy life expectancy": 0.76171,
        "Freedom to make life choices": 0.26228,
        "Generosity": 0.23693,
        "Perceptions of corruption": 0.03061
    },
    {
        "A3 Code": "PRT",
        "Ladder score": 5.123,
        "Social support": 0.94367,
        "Logged GDP per capita": 1.27607,
        "Healthy life expectancy": 0.79363,
        "Freedom to make life choices": 0.44727,
        "Generosity": 0.11691,
        "Perceptions of corruption": 0.01521
    },
    {
        "A3 Code": "MKD",
        "Ladder score": 5.121,
        "Social support": 0.78236,
        "Logged GDP per capita": 1.0193,
        "Healthy life expectancy": 0.64738,
        "Freedom to make life choices": 0.27668,
        "Generosity": 0.23507,
        "Perceptions of corruption": 0.07047
    },
    {
        "A3 Code": "VNM",
        "Ladder score": 5.061,
        "Social support": 0.79117,
        "Logged GDP per capita": 0.74037,
        "Healthy life expectancy": 0.66157,
        "Freedom to make life choices": 0.55954,
        "Generosity": 0.25075,
        "Perceptions of corruption": 0.11556
    },
    {
        "A3 Code": "TUN",
        "Ladder score": 5.045,
        "Social support": 0.43165,
        "Logged GDP per capita": 0.97724,
        "Healthy life expectancy": 0.59577,
        "Freedom to make life choices": 0.23553,
        "Generosity": 0.03936,
        "Perceptions of corruption": 0.0817
    },
    {
        "A3 Code": "GRC",
        "Ladder score": 5.033,
        "Social support": 0.75473,
        "Logged GDP per capita": 1.24886,
        "Healthy life expectancy": 0.80029,
        "Freedom to make life choices": 0.05822,
        "Generosity": 0,
        "Perceptions of corruption": 0.04127
    },
    {
        "A3 Code": "TJK",
        "Ladder score": 4.996,
        "Social support": 0.75602,
        "Logged GDP per capita": 0.48835,
        "Healthy life expectancy": 0.53119,
        "Freedom to make life choices": 0.43408,
        "Generosity": 0.25998,
        "Perceptions of corruption": 0.13509
    },
    {
        "A3 Code": "MNG",
        "Ladder score": 4.907,
        "Social support": 1.08983,
        "Logged GDP per capita": 0.98853,
        "Healthy life expectancy": 0.55469,
        "Freedom to make life choices": 0.35972,
        "Generosity": 0.34539,
        "Perceptions of corruption": 0.03285
    },
    {
        "A3 Code": "NGA",
        "Ladder score": 4.875,
        "Social support": 0.64498,
        "Logged GDP per capita": 0.75216,
        "Healthy life expectancy": 0.05108,
        "Freedom to make life choices": 0.27854,
        "Generosity": 0.23219,
        "Perceptions of corruption": 0.0305
    },
    {
        "A3 Code": "HND",
        "Ladder score": 4.871,
        "Social support": 0.75596,
        "Logged GDP per capita": 0.69429,
        "Healthy life expectancy": 0.58383,
        "Freedom to make life choices": 0.26755,
        "Generosity": 0.2044,
        "Perceptions of corruption": 0.06906
    },
    {
        "A3 Code": "IRN",
        "Ladder score": 4.813,
        "Social support": 0.38857,
        "Logged GDP per capita": 1.11758,
        "Healthy life expectancy": 0.64232,
        "Freedom to make life choices": 0.22544,
        "Generosity": 0.38538,
        "Perceptions of corruption": 0.0557
    },
    {
        "A3 Code": "ZMB",
        "Ladder score": 4.795,
        "Social support": 0.6376,
        "Logged GDP per capita": 0.61202,
        "Healthy life expectancy": 0.23573,
        "Freedom to make life choices": 0.42662,
        "Generosity": 0.17866,
        "Perceptions of corruption": 0.11479
    },
    {
        "A3 Code": "NPL",
        "Ladder score": 4.793,
        "Social support": 0.69699,
        "Logged GDP per capita": 0.44626,
        "Healthy life expectancy": 0.50073,
        "Freedom to make life choices": 0.37012,
        "Generosity": 0.3816,
        "Perceptions of corruption": 0.07008
    },
    {
        "A3 Code": "PSE",
        "Ladder score": 4.754,
        "Social support": 0.71629,
        "Logged GDP per capita": 0.67024,
        "Healthy life expectancy": 0.56844,
        "Freedom to make life choices": 0.17744,
        "Generosity": 0.11154,
        "Perceptions of corruption": 0.10613
    },
    {
        "A3 Code": "ALB",
        "Ladder score": 4.655,
        "Social support": 0.50163,
        "Logged GDP per capita": 0.9553,
        "Healthy life expectancy": 0.73007,
        "Freedom to make life choices": 0.31866,
        "Generosity": 0.1684,
        "Perceptions of corruption": 0.05301
    },
    {
        "A3 Code": "BGD",
        "Ladder score": 4.643,
        "Social support": 0.24749,
        "Logged GDP per capita": 0.54177,
        "Healthy life expectancy": 0.52989,
        "Freedom to make life choices": 0.39778,
        "Generosity": 0.19132,
        "Perceptions of corruption": 0.12583
    },
    {
        "A3 Code": "SLE",
        "Ladder score": 4.635,
        "Social support": 0.628,
        "Logged GDP per capita": 0.36485,
        "Healthy life expectancy": 0,
        "Freedom to make life choices": 0.30685,
        "Generosity": 0.23897,
        "Perceptions of corruption": 0.08196
    },
    {
        "A3 Code": "IRQ",
        "Ladder score": 4.575,
        "Social support": 0.59205,
        "Logged GDP per capita": 1.07474,
        "Healthy life expectancy": 0.51076,
        "Freedom to make life choices": 0.24856,
        "Generosity": 0.19589,
        "Perceptions of corruption": 0.13636
    },
    {
        "A3 Code": "NAM",
        "Ladder score": 4.574,
        "Social support": 0.70362,
        "Logged GDP per capita": 0.93287,
        "Healthy life expectancy": 0.34745,
        "Freedom to make life choices": 0.48614,
        "Generosity": 0.07795,
        "Perceptions of corruption": 0.10398
    },
    {
        "A3 Code": "CMR",
        "Ladder score": 4.513,
        "Social support": 0.62542,
        "Logged GDP per capita": 0.52497,
        "Healthy life expectancy": 0.12698,
        "Freedom to make life choices": 0.42736,
        "Generosity": 0.2268,
        "Perceptions of corruption": 0.06126
    },
    {
        "A3 Code": "ETH",
        "Ladder score": 4.508,
        "Social support": 0.37932,
        "Logged GDP per capita": 0.29283,
        "Healthy life expectancy": 0.34578,
        "Freedom to make life choices": 0.36703,
        "Generosity": 0.29522,
        "Perceptions of corruption": 0.1717
    },
    {
        "A3 Code": "ZAF",
        "Ladder score": 4.459,
        "Social support": 0.96053,
        "Logged GDP per capita": 1.02416,
        "Healthy life expectancy": 0.18611,
        "Freedom to make life choices": 0.42483,
        "Generosity": 0.13656,
        "Perceptions of corruption": 0.08415
    },
    {
        "A3 Code": "LKA",
        "Ladder score": 4.415,
        "Social support": 0.84783,
        "Logged GDP per capita": 0.97318,
        "Healthy life expectancy": 0.62007,
        "Freedom to make life choices": 0.50817,
        "Generosity": 0.46978,
        "Perceptions of corruption": 0.07964
    },
    {
        "A3 Code": "IND",
        "Ladder score": 4.404,
        "Social support": 0.29247,
        "Logged GDP per capita": 0.74036,
        "Healthy life expectancy": 0.45091,
        "Freedom to make life choices": 0.40285,
        "Generosity": 0.25028,
        "Perceptions of corruption": 0.08722
    },
    {
        "A3 Code": "MMR",
        "Ladder score": 4.395,
        "Social support": 0.69981,
        "Logged GDP per capita": 0.34112,
        "Healthy life expectancy": 0.3988,
        "Freedom to make life choices": 0.42692,
        "Generosity": 0.81971,
        "Perceptions of corruption": 0.20243
    },
    {
        "A3 Code": "EGY",
        "Ladder score": 4.362,
        "Social support": 0.49813,
        "Logged GDP per capita": 0.95395,
        "Healthy life expectancy": 0.52116,
        "Freedom to make life choices": 0.18847,
        "Generosity": 0.12706,
        "Perceptions of corruption": 0.10393
    },
    {
        "A3 Code": "ARM",
        "Ladder score": 4.36,
        "Social support": 0.62477,
        "Logged GDP per capita": 0.86086,
        "Healthy life expectancy": 0.64083,
        "Freedom to make life choices": 0.14037,
        "Generosity": 0.07793,
        "Perceptions of corruption": 0.03616
    },
    {
        "A3 Code": "KEN",
        "Ladder score": 4.356,
        "Social support": 0.7624,
        "Logged GDP per capita": 0.52267,
        "Healthy life expectancy": 0.30147,
        "Freedom to make life choices": 0.40576,
        "Generosity": 0.41328,
        "Perceptions of corruption": 0.06686
    },
    {
        "A3 Code": "UKR",
        "Ladder score": 4.324,
        "Social support": 1.01413,
        "Logged GDP per capita": 0.87287,
        "Healthy life expectancy": 0.58628,
        "Freedom to make life choices": 0.12859,
        "Generosity": 0.20363,
        "Perceptions of corruption": 0.01829
    },
    {
        "A3 Code": "GHA",
        "Ladder score": 4.276,
        "Social support": 0.49353,
        "Logged GDP per capita": 0.63107,
        "Healthy life expectancy": 0.29681,
        "Freedom to make life choices": 0.40973,
        "Generosity": 0.21203,
        "Perceptions of corruption": 0.0326
    },
    {
        "A3 Code": "COG",
        "Ladder score": 4.272,
        "Social support": 0.80676,
        "Logged GDP per capita": 0.05661,
        "Healthy life expectancy": 0.188,
        "Freedom to make life choices": 0.15602,
        "Generosity": 0.25458,
        "Perceptions of corruption": 0.06075
    },
    {
        "A3 Code": "GEO",
        "Ladder score": 4.252,
        "Social support": 0.19249,
        "Logged GDP per capita": 0.83792,
        "Healthy life expectancy": 0.64035,
        "Freedom to make life choices": 0.32461,
        "Generosity": 0.06786,
        "Perceptions of corruption": 0.3188
    },
    {
        "A3 Code": "COD",
        "Ladder score": 4.236,
        "Social support": 0.47799,
        "Logged GDP per capita": 0.77109,
        "Healthy life expectancy": 0.28212,
        "Freedom to make life choices": 0.37938,
        "Generosity": 0.12077,
        "Perceptions of corruption": 0.09753
    },
    {
        "A3 Code": "SEN",
        "Ladder score": 4.219,
        "Social support": 0.77416,
        "Logged GDP per capita": 0.44314,
        "Healthy life expectancy": 0.40457,
        "Freedom to make life choices": 0.31056,
        "Generosity": 0.19103,
        "Perceptions of corruption": 0.11681
    },
    {
        "A3 Code": "BGR",
        "Ladder score": 4.217,
        "Social support": 0.92542,
        "Logged GDP per capita": 1.11306,
        "Healthy life expectancy": 0.67806,
        "Freedom to make life choices": 0.21219,
        "Generosity": 0.12793,
        "Perceptions of corruption": 0.00615
    },
    {
        "A3 Code": "MRT",
        "Ladder score": 4.201,
        "Social support": 0.84142,
        "Logged GDP per capita": 0.61391,
        "Healthy life expectancy": 0.28639,
        "Freedom to make life choices": 0.1268,
        "Generosity": 0.22686,
        "Perceptions of corruption": 0.17955
    },
    {
        "A3 Code": "ZWE",
        "Ladder score": 4.193,
        "Social support": 0.71478,
        "Logged GDP per capita": 0.35041,
        "Healthy life expectancy": 0.1595,
        "Freedom to make life choices": 0.25429,
        "Generosity": 0.18503,
        "Perceptions of corruption": 0.08582
    },
    {
        "A3 Code": "MWI",
        "Ladder score": 4.156,
        "Social support": 0.147,
        "Logged GDP per capita": 0.08709,
        "Healthy life expectancy": 0.29364,
        "Freedom to make life choices": 0.4143,
        "Generosity": 0.30968,
        "Perceptions of corruption": 0.07564
    },
    {
        "A3 Code": "GAB",
        "Ladder score": 4.121,
        "Social support": 0.72368,
        "Logged GDP per capita": 1.15851,
        "Healthy life expectancy": 0.3494,
        "Freedom to make life choices": 0.28098,
        "Generosity": 0.06244,
        "Perceptions of corruption": 0.09314
    },
    {
        "A3 Code": "MLI",
        "Ladder score": 4.073,
        "Social support": 0.86333,
        "Logged GDP per capita": 0.31292,
        "Healthy life expectancy": 0.16347,
        "Freedom to make life choices": 0.27544,
        "Generosity": 0.21064,
        "Perceptions of corruption": 0.13647
    },
    {
        "A3 Code": "HTI",
        "Ladder score": 4.028,
        "Social support": 0.29561,
        "Logged GDP per capita": 0.34097,
        "Healthy life expectancy": 0.27494,
        "Freedom to make life choices": 0.12072,
        "Generosity": 0.47958,
        "Perceptions of corruption": 0.14476
    },
    {
        "A3 Code": "BWA",
        "Ladder score": 3.974,
        "Social support": 0.89186,
        "Logged GDP per capita": 1.09426,
        "Healthy life expectancy": 0.34752,
        "Freedom to make life choices": 0.44089,
        "Generosity": 0.12425,
        "Perceptions of corruption": 0.10769
    },
    {
        "A3 Code": "COM",
        "Ladder score": 3.956,
        "Social support": 0.60323,
        "Logged GDP per capita": 0.27509,
        "Healthy life expectancy": 0.29981,
        "Freedom to make life choices": 0.15412,
        "Generosity": 0.1827,
        "Perceptions of corruption": 0.18437
    },
    {
        "A3 Code": "KHM",
        "Ladder score": 3.907,
        "Social support": 0.5375,
        "Logged GDP per capita": 0.55604,
        "Healthy life expectancy": 0.42494,
        "Freedom to make life choices": 0.58852,
        "Generosity": 0.40339,
        "Perceptions of corruption": 0.08092
    },
    {
        "A3 Code": "NER",
        "Ladder score": 3.856,
        "Social support": 0.6053,
        "Logged GDP per capita": 0.1327,
        "Healthy life expectancy": 0.26162,
        "Freedom to make life choices": 0.38041,
        "Generosity": 0.2097,
        "Perceptions of corruption": 0.17176
    },
    {
        "A3 Code": "SSD",
        "Ladder score": 3.832,
        "Social support": 0.18519,
        "Logged GDP per capita": 0.39394,
        "Healthy life expectancy": 0.15781,
        "Freedom to make life choices": 0.19662,
        "Generosity": 0.25899,
        "Perceptions of corruption": 0.13015
    },
    {
        "A3 Code": "TCD",
        "Ladder score": 3.763,
        "Social support": 0.63178,
        "Logged GDP per capita": 0.42214,
        "Healthy life expectancy": 0.03824,
        "Freedom to make life choices": 0.12807,
        "Generosity": 0.18667,
        "Perceptions of corruption": 0.04952
    },
    {
        "A3 Code": "BFA",
        "Ladder score": 3.739,
        "Social support": 0.63054,
        "Logged GDP per capita": 0.31995,
        "Healthy life expectancy": 0.21297,
        "Freedom to make life choices": 0.3337,
        "Generosity": 0.24353,
        "Perceptions of corruption": 0.12533
    },
    {
        "A3 Code": "UGA",
        "Ladder score": 3.739,
        "Social support": 0.90981,
        "Logged GDP per capita": 0.34719,
        "Healthy life expectancy": 0.19625,
        "Freedom to make life choices": 0.43653,
        "Generosity": 0.27102,
        "Perceptions of corruption": 0.06442
    },
    {
        "A3 Code": "YEM",
        "Ladder score": 3.724,
        "Social support": 0.47493,
        "Logged GDP per capita": 0.57939,
        "Healthy life expectancy": 0.31048,
        "Freedom to make life choices": 0.2287,
        "Generosity": 0.09821,
        "Perceptions of corruption": 0.05892
    },
    {
        "A3 Code": "MDG",
        "Ladder score": 3.695,
        "Social support": 0.46115,
        "Logged GDP per capita": 0.27954,
        "Healthy life expectancy": 0.37109,
        "Freedom to make life choices": 0.13684,
        "Generosity": 0.2204,
        "Perceptions of corruption": 0.07506
    },
    {
        "A3 Code": "TZA",
        "Ladder score": 3.666,
        "Social support": 0.77623,
        "Logged GDP per capita": 0.47155,
        "Healthy life expectancy": 0.357,
        "Freedom to make life choices": 0.3176,
        "Generosity": 0.31472,
        "Perceptions of corruption": 0.05099
    },
    {
        "A3 Code": "LBR",
        "Ladder score": 3.622,
        "Social support": 0.50353,
        "Logged GDP per capita": 0.10706,
        "Healthy life expectancy": 0.23165,
        "Freedom to make life choices": 0.25748,
        "Generosity": 0.24063,
        "Perceptions of corruption": 0.04852
    },
    {
        "A3 Code": "GIN",
        "Ladder score": 3.607,
        "Social support": 0.3109,
        "Logged GDP per capita": 0.22415,
        "Healthy life expectancy": 0.18829,
        "Freedom to make life choices": 0.30953,
        "Generosity": 0.29914,
        "Perceptions of corruption": 0.1192
    },
    {
        "A3 Code": "RWA",
        "Ladder score": 3.515,
        "Social support": 0.61586,
        "Logged GDP per capita": 0.32846,
        "Healthy life expectancy": 0.31865,
        "Freedom to make life choices": 0.5432,
        "Generosity": 0.23552,
        "Perceptions of corruption": 0.50521
    },
    {
        "A3 Code": "BEN",
        "Ladder score": 3.484,
        "Social support": 0.10419,
        "Logged GDP per capita": 0.39499,
        "Healthy life expectancy": 0.21028,
        "Freedom to make life choices": 0.39747,
        "Generosity": 0.2018,
        "Perceptions of corruption": 0.06681
    },
    {
        "A3 Code": "AFG",
        "Ladder score": 3.36,
        "Social support": 0.11037,
        "Logged GDP per capita": 0.38227,
        "Healthy life expectancy": 0.17344,
        "Freedom to make life choices": 0.1643,
        "Generosity": 0.31268,
        "Perceptions of corruption": 0.07112
    },
    {
        "A3 Code": "TGO",
        "Ladder score": 3.303,
        "Social support": 0,
        "Logged GDP per capita": 0.28123,
        "Healthy life expectancy": 0.24811,
        "Freedom to make life choices": 0.34678,
        "Generosity": 0.17517,
        "Perceptions of corruption": 0.11587
    },
    {
        "A3 Code": "BDI",
        "Ladder score": 2.905,
        "Social support": 0.23442,
        "Logged GDP per capita": 0.06831,
        "Healthy life expectancy": 0.15747,
        "Freedom to make life choices": 0.0432,
        "Generosity": 0.2029,
        "Perceptions of corruption": 0.09419
    }
];

var data_2015 = [{
        "A3 Code": "CHE",
        "Ladder score": 7.587,
        "Social support": 1.34951,
        "Logged GDP per capita": 1.39651,
        "Healthy life expectancy": 0.94143,
        "Freedom to make life choices": 0.66557,
        "Generosity": 0.29678,
        "Perceptions of corruption": 0.41978
    },
    {
        "A3 Code": "ISL",
        "Ladder score": 7.561,
        "Social support": 1.40223,
        "Logged GDP per capita": 1.30232,
        "Healthy life expectancy": 0.94784,
        "Freedom to make life choices": 0.62877,
        "Generosity": 0.4363,
        "Perceptions of corruption": 0.14145
    },
    {
        "A3 Code": "DNK",
        "Ladder score": 7.527,
        "Social support": 1.36058,
        "Logged GDP per capita": 1.32548,
        "Healthy life expectancy": 0.87464,
        "Freedom to make life choices": 0.64938,
        "Generosity": 0.34139,
        "Perceptions of corruption": 0.48357
    },
    {
        "A3 Code": "NOR",
        "Ladder score": 7.522,
        "Social support": 1.33095,
        "Logged GDP per capita": 1.459,
        "Healthy life expectancy": 0.88521,
        "Freedom to make life choices": 0.66973,
        "Generosity": 0.34699,
        "Perceptions of corruption": 0.36503
    },
    {
        "A3 Code": "CAN",
        "Ladder score": 7.427,
        "Social support": 1.32261,
        "Logged GDP per capita": 1.32629,
        "Healthy life expectancy": 0.90563,
        "Freedom to make life choices": 0.63297,
        "Generosity": 0.45811,
        "Perceptions of corruption": 0.32957
    },
    {
        "A3 Code": "FIN",
        "Ladder score": 7.406,
        "Social support": 1.31826,
        "Logged GDP per capita": 1.29025,
        "Healthy life expectancy": 0.88911,
        "Freedom to make life choices": 0.64169,
        "Generosity": 0.23351,
        "Perceptions of corruption": 0.41372
    },
    {
        "A3 Code": "NLD",
        "Ladder score": 7.378,
        "Social support": 1.28017,
        "Logged GDP per capita": 1.32944,
        "Healthy life expectancy": 0.89284,
        "Freedom to make life choices": 0.61576,
        "Generosity": 0.4761,
        "Perceptions of corruption": 0.31814
    },
    {
        "A3 Code": "SWE",
        "Ladder score": 7.364,
        "Social support": 1.28907,
        "Logged GDP per capita": 1.33171,
        "Healthy life expectancy": 0.91087,
        "Freedom to make life choices": 0.6598,
        "Generosity": 0.36262,
        "Perceptions of corruption": 0.43844
    },
    {
        "A3 Code": "NZL",
        "Ladder score": 7.286,
        "Social support": 1.31967,
        "Logged GDP per capita": 1.25018,
        "Healthy life expectancy": 0.90837,
        "Freedom to make life choices": 0.63938,
        "Generosity": 0.47501,
        "Perceptions of corruption": 0.42922
    },
    {
        "A3 Code": "AUS",
        "Ladder score": 7.284,
        "Social support": 1.30923,
        "Logged GDP per capita": 1.33358,
        "Healthy life expectancy": 0.93156,
        "Freedom to make life choices": 0.65124,
        "Generosity": 0.43562,
        "Perceptions of corruption": 0.35637
    },
    {
        "A3 Code": "ISR",
        "Ladder score": 7.278,
        "Social support": 1.22393,
        "Logged GDP per capita": 1.22857,
        "Healthy life expectancy": 0.91387,
        "Freedom to make life choices": 0.41319,
        "Generosity": 0.33172,
        "Perceptions of corruption": 0.07785
    },
    {
        "A3 Code": "CRI",
        "Ladder score": 7.226,
        "Social support": 1.23788,
        "Logged GDP per capita": 0.95578,
        "Healthy life expectancy": 0.86027,
        "Freedom to make life choices": 0.63376,
        "Generosity": 0.25497,
        "Perceptions of corruption": 0.10583
    },
    {
        "A3 Code": "AUT",
        "Ladder score": 7.2,
        "Social support": 1.29704,
        "Logged GDP per capita": 1.33723,
        "Healthy life expectancy": 0.89042,
        "Freedom to make life choices": 0.62433,
        "Generosity": 0.33088,
        "Perceptions of corruption": 0.18676
    },
    {
        "A3 Code": "MEX",
        "Ladder score": 7.187,
        "Social support": 0.91451,
        "Logged GDP per capita": 1.02054,
        "Healthy life expectancy": 0.81444,
        "Freedom to make life choices": 0.48181,
        "Generosity": 0.14074,
        "Perceptions of corruption": 0.21312
    },
    {
        "A3 Code": "USA",
        "Ladder score": 7.119,
        "Social support": 1.24711,
        "Logged GDP per capita": 1.39451,
        "Healthy life expectancy": 0.86179,
        "Freedom to make life choices": 0.54604,
        "Generosity": 0.40105,
        "Perceptions of corruption": 0.1589
    },
    {
        "A3 Code": "BRA",
        "Ladder score": 6.983,
        "Social support": 1.23287,
        "Logged GDP per capita": 0.98124,
        "Healthy life expectancy": 0.69702,
        "Freedom to make life choices": 0.49049,
        "Generosity": 0.14574,
        "Perceptions of corruption": 0.17521
    },
    {
        "A3 Code": "LUX",
        "Ladder score": 6.946,
        "Social support": 1.21963,
        "Logged GDP per capita": 1.56391,
        "Healthy life expectancy": 0.91894,
        "Freedom to make life choices": 0.61583,
        "Generosity": 0.28034,
        "Perceptions of corruption": 0.37798
    },
    {
        "A3 Code": "IRL",
        "Ladder score": 6.94,
        "Social support": 1.36948,
        "Logged GDP per capita": 1.33596,
        "Healthy life expectancy": 0.89533,
        "Freedom to make life choices": 0.61777,
        "Generosity": 0.45901,
        "Perceptions of corruption": 0.28703
    },
    {
        "A3 Code": "BEL",
        "Ladder score": 6.937,
        "Social support": 1.28566,
        "Logged GDP per capita": 1.30782,
        "Healthy life expectancy": 0.89667,
        "Freedom to make life choices": 0.5845,
        "Generosity": 0.2225,
        "Perceptions of corruption": 0.2254
    },
    {
        "A3 Code": "ARE",
        "Ladder score": 6.901,
        "Social support": 1.12575,
        "Logged GDP per capita": 1.42727,
        "Healthy life expectancy": 0.80925,
        "Freedom to make life choices": 0.64157,
        "Generosity": 0.26428,
        "Perceptions of corruption": 0.38583
    },
    {
        "A3 Code": "GBR",
        "Ladder score": 6.867,
        "Social support": 1.28548,
        "Logged GDP per capita": 1.26637,
        "Healthy life expectancy": 0.90943,
        "Freedom to make life choices": 0.59625,
        "Generosity": 0.51912,
        "Perceptions of corruption": 0.32067
    },
    {
        "A3 Code": "VEN",
        "Ladder score": 6.81,
        "Social support": 1.25596,
        "Logged GDP per capita": 1.04424,
        "Healthy life expectancy": 0.72052,
        "Freedom to make life choices": 0.42908,
        "Generosity": 0.05841,
        "Perceptions of corruption": 0.11069
    },
    {
        "A3 Code": "SGP",
        "Ladder score": 6.798,
        "Social support": 1.02,
        "Logged GDP per capita": 1.52186,
        "Healthy life expectancy": 1.02525,
        "Freedom to make life choices": 0.54252,
        "Generosity": 0.31105,
        "Perceptions of corruption": 0.4921
    },
    {
        "A3 Code": "PAN",
        "Ladder score": 6.786,
        "Social support": 1.1985,
        "Logged GDP per capita": 1.06353,
        "Healthy life expectancy": 0.79661,
        "Freedom to make life choices": 0.5421,
        "Generosity": 0.24434,
        "Perceptions of corruption": 0.0927
    },
    {
        "A3 Code": "DEU",
        "Ladder score": 6.75,
        "Social support": 1.29937,
        "Logged GDP per capita": 1.32792,
        "Healthy life expectancy": 0.89186,
        "Freedom to make life choices": 0.61477,
        "Generosity": 0.28214,
        "Perceptions of corruption": 0.21843
    },
    {
        "A3 Code": "CHL",
        "Ladder score": 6.67,
        "Social support": 1.12447,
        "Logged GDP per capita": 1.10715,
        "Healthy life expectancy": 0.85857,
        "Freedom to make life choices": 0.44132,
        "Generosity": 0.33363,
        "Perceptions of corruption": 0.12869
    },
    {
        "A3 Code": "FRA",
        "Ladder score": 6.575,
        "Social support": 1.26038,
        "Logged GDP per capita": 1.27778,
        "Healthy life expectancy": 0.94579,
        "Freedom to make life choices": 0.55011,
        "Generosity": 0.12332,
        "Perceptions of corruption": 0.20646
    },
    {
        "A3 Code": "ARG",
        "Ladder score": 6.574,
        "Social support": 1.24823,
        "Logged GDP per capita": 1.05351,
        "Healthy life expectancy": 0.78723,
        "Freedom to make life choices": 0.44974,
        "Generosity": 0.11451,
        "Perceptions of corruption": 0.08484
    },
    {
        "A3 Code": "CZE",
        "Ladder score": 6.505,
        "Social support": 1.20643,
        "Logged GDP per capita": 1.17898,
        "Healthy life expectancy": 0.84483,
        "Freedom to make life choices": 0.46364,
        "Generosity": 0.10686,
        "Perceptions of corruption": 0.02652
    },
    {
        "A3 Code": "URY",
        "Ladder score": 6.485,
        "Social support": 1.2089,
        "Logged GDP per capita": 1.06166,
        "Healthy life expectancy": 0.8116,
        "Freedom to make life choices": 0.60362,
        "Generosity": 0.2324,
        "Perceptions of corruption": 0.24558
    },
    {
        "A3 Code": "COL",
        "Ladder score": 6.477,
        "Social support": 1.24018,
        "Logged GDP per capita": 0.91861,
        "Healthy life expectancy": 0.69077,
        "Freedom to make life choices": 0.53466,
        "Generosity": 0.18401,
        "Perceptions of corruption": 0.0512
    },
    {
        "A3 Code": "THA",
        "Ladder score": 6.455,
        "Social support": 1.26504,
        "Logged GDP per capita": 0.9669,
        "Healthy life expectancy": 0.7385,
        "Freedom to make life choices": 0.55664,
        "Generosity": 0.5763,
        "Perceptions of corruption": 0.03187
    },
    {
        "A3 Code": "SAU",
        "Ladder score": 6.411,
        "Social support": 1.08393,
        "Logged GDP per capita": 1.39541,
        "Healthy life expectancy": 0.72025,
        "Freedom to make life choices": 0.31048,
        "Generosity": 0.13706,
        "Perceptions of corruption": 0.32524
    },
    {
        "A3 Code": "ESP",
        "Ladder score": 6.329,
        "Social support": 1.31379,
        "Logged GDP per capita": 1.23011,
        "Healthy life expectancy": 0.95562,
        "Freedom to make life choices": 0.45951,
        "Generosity": 0.18227,
        "Perceptions of corruption": 0.06398
    },
    {
        "A3 Code": "MLT",
        "Ladder score": 6.302,
        "Social support": 1.30203,
        "Logged GDP per capita": 1.2074,
        "Healthy life expectancy": 0.88721,
        "Freedom to make life choices": 0.60365,
        "Generosity": 0.51752,
        "Perceptions of corruption": 0.13586
    },
    {
        "A3 Code": "TWN",
        "Ladder score": 6.298,
        "Social support": 1.07617,
        "Logged GDP per capita": 1.29098,
        "Healthy life expectancy": 0.8753,
        "Freedom to make life choices": 0.3974,
        "Generosity": 0.25376,
        "Perceptions of corruption": 0.08129
    },
    {
        "A3 Code": "KWT",
        "Ladder score": 6.295,
        "Social support": 1.16594,
        "Logged GDP per capita": 1.55422,
        "Healthy life expectancy": 0.72492,
        "Freedom to make life choices": 0.55499,
        "Generosity": 0.16228,
        "Perceptions of corruption": 0.25609
    },
    {
        "A3 Code": "TTO",
        "Ladder score": 6.168,
        "Social support": 1.18354,
        "Logged GDP per capita": 1.21183,
        "Healthy life expectancy": 0.61483,
        "Freedom to make life choices": 0.55884,
        "Generosity": 0.31844,
        "Perceptions of corruption": 0.0114
    },
    {
        "A3 Code": "SLV",
        "Ladder score": 6.13,
        "Social support": 1.02507,
        "Logged GDP per capita": 0.76454,
        "Healthy life expectancy": 0.67737,
        "Freedom to make life choices": 0.4035,
        "Generosity": 0.10692,
        "Perceptions of corruption": 0.11776
    },
    {
        "A3 Code": "GTM",
        "Ladder score": 6.123,
        "Social support": 1.04356,
        "Logged GDP per capita": 0.74553,
        "Healthy life expectancy": 0.64425,
        "Freedom to make life choices": 0.57733,
        "Generosity": 0.27489,
        "Perceptions of corruption": 0.09472
    },
    {
        "A3 Code": "UZB",
        "Ladder score": 6.003,
        "Social support": 1.34043,
        "Logged GDP per capita": 0.63244,
        "Healthy life expectancy": 0.59772,
        "Freedom to make life choices": 0.65821,
        "Generosity": 0.22837,
        "Perceptions of corruption": 0.30826
    },
    {
        "A3 Code": "SVK",
        "Ladder score": 5.995,
        "Social support": 1.26999,
        "Logged GDP per capita": 1.16891,
        "Healthy life expectancy": 0.78902,
        "Freedom to make life choices": 0.31751,
        "Generosity": 0.16893,
        "Perceptions of corruption": 0.03431
    },
    {
        "A3 Code": "JPN",
        "Ladder score": 5.987,
        "Social support": 1.25712,
        "Logged GDP per capita": 1.27074,
        "Healthy life expectancy": 0.99111,
        "Freedom to make life choices": 0.49615,
        "Generosity": 0.10705,
        "Perceptions of corruption": 0.1806
    },
    {
        "A3 Code": "KOR",
        "Ladder score": 5.984,
        "Social support": 0.95774,
        "Logged GDP per capita": 1.24461,
        "Healthy life expectancy": 0.96538,
        "Freedom to make life choices": 0.33208,
        "Generosity": 0.18557,
        "Perceptions of corruption": 0.07857
    },
    {
        "A3 Code": "ECU",
        "Ladder score": 5.975,
        "Social support": 0.99903,
        "Logged GDP per capita": 0.86402,
        "Healthy life expectancy": 0.79075,
        "Freedom to make life choices": 0.48574,
        "Generosity": 0.11541,
        "Perceptions of corruption": 0.1809
    },
    {
        "A3 Code": "BHR",
        "Ladder score": 5.96,
        "Social support": 1.21624,
        "Logged GDP per capita": 1.32376,
        "Healthy life expectancy": 0.74716,
        "Freedom to make life choices": 0.45492,
        "Generosity": 0.17362,
        "Perceptions of corruption": 0.306
    },
    {
        "A3 Code": "ITA",
        "Ladder score": 5.948,
        "Social support": 1.19777,
        "Logged GDP per capita": 1.25114,
        "Healthy life expectancy": 0.95446,
        "Freedom to make life choices": 0.26236,
        "Generosity": 0.22823,
        "Perceptions of corruption": 0.02901
    },
    {
        "A3 Code": "BOL",
        "Ladder score": 5.89,
        "Social support": 0.97841,
        "Logged GDP per capita": 0.68133,
        "Healthy life expectancy": 0.5392,
        "Freedom to make life choices": 0.57414,
        "Generosity": 0.20536,
        "Perceptions of corruption": 0.088
    },
    {
        "A3 Code": "MDA",
        "Ladder score": 5.889,
        "Social support": 1.01528,
        "Logged GDP per capita": 0.59448,
        "Healthy life expectancy": 0.61826,
        "Freedom to make life choices": 0.32818,
        "Generosity": 0.20951,
        "Perceptions of corruption": 0.01615
    },
    {
        "A3 Code": "PRY",
        "Ladder score": 5.878,
        "Social support": 1.30477,
        "Logged GDP per capita": 0.75985,
        "Healthy life expectancy": 0.66098,
        "Freedom to make life choices": 0.53899,
        "Generosity": 0.3424,
        "Perceptions of corruption": 0.08242
    },
    {
        "A3 Code": "KAZ",
        "Ladder score": 5.855,
        "Social support": 1.12241,
        "Logged GDP per capita": 1.12254,
        "Healthy life expectancy": 0.64368,
        "Freedom to make life choices": 0.51649,
        "Generosity": 0.11827,
        "Perceptions of corruption": 0.08454
    },
    {
        "A3 Code": "SVN",
        "Ladder score": 5.848,
        "Social support": 1.27385,
        "Logged GDP per capita": 1.18498,
        "Healthy life expectancy": 0.87337,
        "Freedom to make life choices": 0.60855,
        "Generosity": 0.25328,
        "Perceptions of corruption": 0.03787
    },
    {
        "A3 Code": "LTU",
        "Ladder score": 5.833,
        "Social support": 1.25745,
        "Logged GDP per capita": 1.14723,
        "Healthy life expectancy": 0.73128,
        "Freedom to make life choices": 0.21342,
        "Generosity": 0.02641,
        "Perceptions of corruption": 0.01031
    },
    {
        "A3 Code": "NIC",
        "Ladder score": 5.828,
        "Social support": 1.14184,
        "Logged GDP per capita": 0.59325,
        "Healthy life expectancy": 0.74314,
        "Freedom to make life choices": 0.55475,
        "Generosity": 0.27815,
        "Perceptions of corruption": 0.19317
    },
    {
        "A3 Code": "PER",
        "Ladder score": 5.824,
        "Social support": 0.97459,
        "Logged GDP per capita": 0.90019,
        "Healthy life expectancy": 0.73017,
        "Freedom to make life choices": 0.41496,
        "Generosity": 0.14982,
        "Perceptions of corruption": 0.05989
    },
    {
        "A3 Code": "BLR",
        "Ladder score": 5.813,
        "Social support": 1.23289,
        "Logged GDP per capita": 1.03192,
        "Healthy life expectancy": 0.73608,
        "Freedom to make life choices": 0.37938,
        "Generosity": 0.11046,
        "Perceptions of corruption": 0.1909
    },
    {
        "A3 Code": "POL",
        "Ladder score": 5.791,
        "Social support": 1.27948,
        "Logged GDP per capita": 1.12555,
        "Healthy life expectancy": 0.77903,
        "Freedom to make life choices": 0.53122,
        "Generosity": 0.16759,
        "Perceptions of corruption": 0.04212
    },
    {
        "A3 Code": "MYS",
        "Ladder score": 5.77,
        "Social support": 1.07023,
        "Logged GDP per capita": 1.12486,
        "Healthy life expectancy": 0.72394,
        "Freedom to make life choices": 0.53024,
        "Generosity": 0.33075,
        "Perceptions of corruption": 0.10501
    },
    {
        "A3 Code": "HRV",
        "Ladder score": 5.759,
        "Social support": 0.79624,
        "Logged GDP per capita": 1.08254,
        "Healthy life expectancy": 0.78805,
        "Freedom to make life choices": 0.25883,
        "Generosity": 0.05444,
        "Perceptions of corruption": 0.0243
    },
    {
        "A3 Code": "LBY",
        "Ladder score": 5.754,
        "Social support": 1.11862,
        "Logged GDP per capita": 1.13145,
        "Healthy life expectancy": 0.7038,
        "Freedom to make life choices": 0.41668,
        "Generosity": 0.18295,
        "Perceptions of corruption": 0.11023
    },
    {
        "A3 Code": "RUS",
        "Ladder score": 5.716,
        "Social support": 1.23617,
        "Logged GDP per capita": 1.13764,
        "Healthy life expectancy": 0.66926,
        "Freedom to make life choices": 0.36679,
        "Generosity": 0.00199,
        "Perceptions of corruption": 0.03005
    },
    {
        "A3 Code": "JAM",
        "Ladder score": 5.709,
        "Social support": 1.15102,
        "Logged GDP per capita": 0.81038,
        "Healthy life expectancy": 0.68741,
        "Freedom to make life choices": 0.50442,
        "Generosity": 0.2123,
        "Perceptions of corruption": 0.02299
    },
    {
        "A3 Code": "CYP",
        "Ladder score": 5.689,
        "Social support": 0.89318,
        "Logged GDP per capita": 1.20813,
        "Healthy life expectancy": 0.92356,
        "Freedom to make life choices": 0.40672,
        "Generosity": 0.30638,
        "Perceptions of corruption": 0.06146
    },
    {
        "A3 Code": "DZA",
        "Ladder score": 5.605,
        "Social support": 1.07772,
        "Logged GDP per capita": 0.93929,
        "Healthy life expectancy": 0.61766,
        "Freedom to make life choices": 0.28579,
        "Generosity": 0.07822,
        "Perceptions of corruption": 0.17383
    },
    {
        "A3 Code": "TKM",
        "Ladder score": 5.548,
        "Social support": 1.22668,
        "Logged GDP per capita": 0.95847,
        "Healthy life expectancy": 0.53886,
        "Freedom to make life choices": 0.4761,
        "Generosity": 0.16979,
        "Perceptions of corruption": 0.30844
    },
    {
        "A3 Code": "MUS",
        "Ladder score": 5.477,
        "Social support": 0.98521,
        "Logged GDP per capita": 1.00761,
        "Healthy life expectancy": 0.7095,
        "Freedom to make life choices": 0.56066,
        "Generosity": 0.37744,
        "Perceptions of corruption": 0.07521
    },
    {
        "A3 Code": "HKG",
        "Ladder score": 5.474,
        "Social support": 1.05818,
        "Logged GDP per capita": 1.38604,
        "Healthy life expectancy": 1.01328,
        "Freedom to make life choices": 0.59608,
        "Generosity": 0.39478,
        "Perceptions of corruption": 0.37124
    },
    {
        "A3 Code": "EST",
        "Ladder score": 5.429,
        "Social support": 1.22791,
        "Logged GDP per capita": 1.15174,
        "Healthy life expectancy": 0.77361,
        "Freedom to make life choices": 0.44888,
        "Generosity": 0.0868,
        "Perceptions of corruption": 0.15184
    },
    {
        "A3 Code": "IDN",
        "Ladder score": 5.399,
        "Social support": 1.08708,
        "Logged GDP per capita": 0.82827,
        "Healthy life expectancy": 0.63793,
        "Freedom to make life choices": 0.46611,
        "Generosity": 0.51535,
        "Perceptions of corruption": 0
    },
    {
        "A3 Code": "VNM",
        "Ladder score": 5.36,
        "Social support": 0.91226,
        "Logged GDP per capita": 0.63216,
        "Healthy life expectancy": 0.74676,
        "Freedom to make life choices": 0.59444,
        "Generosity": 0.1686,
        "Perceptions of corruption": 0.10441
    },
    {
        "A3 Code": "TUR",
        "Ladder score": 5.332,
        "Social support": 0.94632,
        "Logged GDP per capita": 1.06098,
        "Healthy life expectancy": 0.73172,
        "Freedom to make life choices": 0.22815,
        "Generosity": 0.12253,
        "Perceptions of corruption": 0.15746
    },
    {
        "A3 Code": "KGZ",
        "Ladder score": 5.286,
        "Social support": 1.15115,
        "Logged GDP per capita": 0.47428,
        "Healthy life expectancy": 0.65088,
        "Freedom to make life choices": 0.43477,
        "Generosity": 0.3003,
        "Perceptions of corruption": 0.04232
    },
    {
        "A3 Code": "NGA",
        "Ladder score": 5.268,
        "Social support": 0.90432,
        "Logged GDP per capita": 0.65435,
        "Healthy life expectancy": 0.16007,
        "Freedom to make life choices": 0.34334,
        "Generosity": 0.27233,
        "Perceptions of corruption": 0.0403
    },
    {
        "A3 Code": "AZE",
        "Ladder score": 5.212,
        "Social support": 0.93793,
        "Logged GDP per capita": 1.02389,
        "Healthy life expectancy": 0.64045,
        "Freedom to make life choices": 0.3703,
        "Generosity": 0.07799,
        "Perceptions of corruption": 0.16065
    },
    {
        "A3 Code": "PAK",
        "Ladder score": 5.194,
        "Social support": 0.41411,
        "Logged GDP per capita": 0.59543,
        "Healthy life expectancy": 0.51466,
        "Freedom to make life choices": 0.12102,
        "Generosity": 0.33671,
        "Perceptions of corruption": 0.10464
    },
    {
        "A3 Code": "JOR",
        "Ladder score": 5.192,
        "Social support": 1.05392,
        "Logged GDP per capita": 0.90198,
        "Healthy life expectancy": 0.69639,
        "Freedom to make life choices": 0.40661,
        "Generosity": 0.11053,
        "Perceptions of corruption": 0.14293
    },
    {
        "A3 Code": "MNE",
        "Ladder score": 5.192,
        "Social support": 0.90557,
        "Logged GDP per capita": 0.97438,
        "Healthy life expectancy": 0.72521,
        "Freedom to make life choices": 0.1826,
        "Generosity": 0.1614,
        "Perceptions of corruption": 0.14296
    },
    {
        "A3 Code": "CHN",
        "Ladder score": 5.14,
        "Social support": 0.94675,
        "Logged GDP per capita": 0.89012,
        "Healthy life expectancy": 0.81658,
        "Freedom to make life choices": 0.51697,
        "Generosity": 0.08185,
        "Perceptions of corruption": 0.02781
    },
    {
        "A3 Code": "ZMB",
        "Ladder score": 5.129,
        "Social support": 0.91612,
        "Logged GDP per capita": 0.47038,
        "Healthy life expectancy": 0.29924,
        "Freedom to make life choices": 0.48827,
        "Generosity": 0.19591,
        "Perceptions of corruption": 0.12468
    },
    {
        "A3 Code": "ROU",
        "Ladder score": 5.124,
        "Social support": 0.88588,
        "Logged GDP per capita": 1.04345,
        "Healthy life expectancy": 0.7689,
        "Freedom to make life choices": 0.35068,
        "Generosity": 0.13748,
        "Perceptions of corruption": 0.00649
    },
    {
        "A3 Code": "SRB",
        "Ladder score": 5.123,
        "Social support": 1.00964,
        "Logged GDP per capita": 0.92053,
        "Healthy life expectancy": 0.74836,
        "Freedom to make life choices": 0.20107,
        "Generosity": 0.19231,
        "Perceptions of corruption": 0.02617
    },
    {
        "A3 Code": "PRT",
        "Ladder score": 5.102,
        "Social support": 1.13935,
        "Logged GDP per capita": 1.15991,
        "Healthy life expectancy": 0.87519,
        "Freedom to make life choices": 0.51469,
        "Generosity": 0.13719,
        "Perceptions of corruption": 0.01078
    },
    {
        "A3 Code": "LVA",
        "Ladder score": 5.098,
        "Social support": 1.09562,
        "Logged GDP per capita": 1.11312,
        "Healthy life expectancy": 0.72437,
        "Freedom to make life choices": 0.29671,
        "Generosity": 0.18226,
        "Perceptions of corruption": 0.06332
    },
    {
        "A3 Code": "PHL",
        "Ladder score": 5.073,
        "Social support": 1.03516,
        "Logged GDP per capita": 0.70532,
        "Healthy life expectancy": 0.58114,
        "Freedom to make life choices": 0.62545,
        "Generosity": 0.24991,
        "Perceptions of corruption": 0.12279
    },
    {
        "A3 Code": "MAR",
        "Ladder score": 5.013,
        "Social support": 0.64095,
        "Logged GDP per capita": 0.73479,
        "Healthy life expectancy": 0.60954,
        "Freedom to make life choices": 0.41691,
        "Generosity": 0.07172,
        "Perceptions of corruption": 0.08546
    },
    {
        "A3 Code": "MKD",
        "Ladder score": 5.007,
        "Social support": 1.00232,
        "Logged GDP per capita": 0.91851,
        "Healthy life expectancy": 0.73545,
        "Freedom to make life choices": 0.33457,
        "Generosity": 0.22359,
        "Perceptions of corruption": 0.05327
    },
    {
        "A3 Code": "MOZ",
        "Ladder score": 4.971,
        "Social support": 1.02626,
        "Logged GDP per capita": 0.08308,
        "Healthy life expectancy": 0.09131,
        "Freedom to make life choices": 0.34037,
        "Generosity": 0.22269,
        "Perceptions of corruption": 0.15603
    },
    {
        "A3 Code": "ALB",
        "Ladder score": 4.959,
        "Social support": 0.80434,
        "Logged GDP per capita": 0.87867,
        "Healthy life expectancy": 0.81325,
        "Freedom to make life choices": 0.35733,
        "Generosity": 0.14272,
        "Perceptions of corruption": 0.06413
    },
    {
        "A3 Code": "BIH",
        "Ladder score": 4.949,
        "Social support": 0.91916,
        "Logged GDP per capita": 0.83223,
        "Healthy life expectancy": 0.79081,
        "Freedom to make life choices": 0.09245,
        "Generosity": 0.24808,
        "Perceptions of corruption": 0.00227
    },
    {
        "A3 Code": "LSO",
        "Ladder score": 4.898,
        "Social support": 1.04103,
        "Logged GDP per capita": 0.37545,
        "Healthy life expectancy": 0.07612,
        "Freedom to make life choices": 0.31767,
        "Generosity": 0.16388,
        "Perceptions of corruption": 0.12504
    },
    {
        "A3 Code": "DOM",
        "Ladder score": 4.885,
        "Social support": 1.17202,
        "Logged GDP per capita": 0.89537,
        "Healthy life expectancy": 0.66825,
        "Freedom to make life choices": 0.57672,
        "Generosity": 0.21684,
        "Perceptions of corruption": 0.14234
    },
    {
        "A3 Code": "MNG",
        "Ladder score": 4.874,
        "Social support": 1.3006,
        "Logged GDP per capita": 0.82819,
        "Healthy life expectancy": 0.60268,
        "Freedom to make life choices": 0.43626,
        "Generosity": 0.3323,
        "Perceptions of corruption": 0.02666
    },
    {
        "A3 Code": "SWZ",
        "Ladder score": 4.867,
        "Social support": 1.07284,
        "Logged GDP per capita": 0.71206,
        "Healthy life expectancy": 0.07566,
        "Freedom to make life choices": 0.30658,
        "Generosity": 0.18259,
        "Perceptions of corruption": 0.0306
    },
    {
        "A3 Code": "GRC",
        "Ladder score": 4.857,
        "Social support": 0.92933,
        "Logged GDP per capita": 1.15406,
        "Healthy life expectancy": 0.88213,
        "Freedom to make life choices": 0.07699,
        "Generosity": 0,
        "Perceptions of corruption": 0.01397
    },
    {
        "A3 Code": "LBN",
        "Ladder score": 4.839,
        "Social support": 0.80001,
        "Logged GDP per capita": 1.02564,
        "Healthy life expectancy": 0.83947,
        "Freedom to make life choices": 0.33916,
        "Generosity": 0.21854,
        "Perceptions of corruption": 0.04582
    },
    {
        "A3 Code": "HUN",
        "Ladder score": 4.8,
        "Social support": 1.20215,
        "Logged GDP per capita": 1.12094,
        "Healthy life expectancy": 0.75905,
        "Freedom to make life choices": 0.32112,
        "Generosity": 0.128,
        "Perceptions of corruption": 0.02758
    },
    {
        "A3 Code": "HND",
        "Ladder score": 4.788,
        "Social support": 0.95348,
        "Logged GDP per capita": 0.59532,
        "Healthy life expectancy": 0.6951,
        "Freedom to make life choices": 0.40148,
        "Generosity": 0.23027,
        "Perceptions of corruption": 0.06825
    },
    {
        "A3 Code": "TJK",
        "Ladder score": 4.786,
        "Social support": 0.85563,
        "Logged GDP per capita": 0.39047,
        "Healthy life expectancy": 0.57379,
        "Freedom to make life choices": 0.47216,
        "Generosity": 0.22974,
        "Perceptions of corruption": 0.15072
    },
    {
        "A3 Code": "TUN",
        "Ladder score": 4.739,
        "Social support": 0.60429,
        "Logged GDP per capita": 0.88113,
        "Healthy life expectancy": 0.73793,
        "Freedom to make life choices": 0.26268,
        "Generosity": 0.06431,
        "Perceptions of corruption": 0.06358
    },
    {
        "A3 Code": "PSE",
        "Ladder score": 4.715,
        "Social support": 0.92558,
        "Logged GDP per capita": 0.59867,
        "Healthy life expectancy": 0.66015,
        "Freedom to make life choices": 0.24499,
        "Generosity": 0.11251,
        "Perceptions of corruption": 0.12905
    },
    {
        "A3 Code": "BGD",
        "Ladder score": 4.694,
        "Social support": 0.43106,
        "Logged GDP per capita": 0.39753,
        "Healthy life expectancy": 0.60164,
        "Freedom to make life choices": 0.4082,
        "Generosity": 0.21222,
        "Perceptions of corruption": 0.12569
    },
    {
        "A3 Code": "IRN",
        "Ladder score": 4.686,
        "Social support": 0.54447,
        "Logged GDP per capita": 1.0088,
        "Healthy life expectancy": 0.69805,
        "Freedom to make life choices": 0.30033,
        "Generosity": 0.38086,
        "Perceptions of corruption": 0.05863
    },
    {
        "A3 Code": "UKR",
        "Ladder score": 4.681,
        "Social support": 1.20278,
        "Logged GDP per capita": 0.79907,
        "Healthy life expectancy": 0.6739,
        "Freedom to make life choices": 0.25123,
        "Generosity": 0.15275,
        "Perceptions of corruption": 0.02961
    },
    {
        "A3 Code": "IRQ",
        "Ladder score": 4.677,
        "Social support": 0.81889,
        "Logged GDP per capita": 0.98549,
        "Healthy life expectancy": 0.60237,
        "Freedom to make life choices": 0,
        "Generosity": 0.17922,
        "Perceptions of corruption": 0.13788
    },
    {
        "A3 Code": "ZAF",
        "Ladder score": 4.642,
        "Social support": 1.18468,
        "Logged GDP per capita": 0.92049,
        "Healthy life expectancy": 0.27688,
        "Freedom to make life choices": 0.33207,
        "Generosity": 0.11973,
        "Perceptions of corruption": 0.08884
    },
    {
        "A3 Code": "GHA",
        "Ladder score": 4.633,
        "Social support": 0.67954,
        "Logged GDP per capita": 0.54558,
        "Healthy life expectancy": 0.40132,
        "Freedom to make life choices": 0.42342,
        "Generosity": 0.23087,
        "Perceptions of corruption": 0.04355
    },
    {
        "A3 Code": "ZWE",
        "Ladder score": 4.61,
        "Social support": 1.03276,
        "Logged GDP per capita": 0.271,
        "Healthy life expectancy": 0.33475,
        "Freedom to make life choices": 0.25861,
        "Generosity": 0.18987,
        "Perceptions of corruption": 0.08079
    },
    {
        "A3 Code": "LBR",
        "Ladder score": 4.571,
        "Social support": 0.78968,
        "Logged GDP per capita": 0.0712,
        "Healthy life expectancy": 0.34201,
        "Freedom to make life choices": 0.28531,
        "Generosity": 0.24362,
        "Perceptions of corruption": 0.06232
    },
    {
        "A3 Code": "IND",
        "Ladder score": 4.565,
        "Social support": 0.38174,
        "Logged GDP per capita": 0.64499,
        "Healthy life expectancy": 0.51529,
        "Freedom to make life choices": 0.39786,
        "Generosity": 0.26475,
        "Perceptions of corruption": 0.08492
    },
    {
        "A3 Code": "HTI",
        "Ladder score": 4.518,
        "Social support": 0.74302,
        "Logged GDP per capita": 0.26673,
        "Healthy life expectancy": 0.38847,
        "Freedom to make life choices": 0.24425,
        "Generosity": 0.46187,
        "Perceptions of corruption": 0.17175
    },
    {
        "A3 Code": "COG",
        "Ladder score": 4.517,
        "Social support": 1.0012,
        "Logged GDP per capita": 0,
        "Healthy life expectancy": 0.09806,
        "Freedom to make life choices": 0.22605,
        "Generosity": 0.24834,
        "Perceptions of corruption": 0.07625
    },
    {
        "A3 Code": "NPL",
        "Ladder score": 4.514,
        "Social support": 0.86449,
        "Logged GDP per capita": 0.35997,
        "Healthy life expectancy": 0.56874,
        "Freedom to make life choices": 0.38282,
        "Generosity": 0.32296,
        "Perceptions of corruption": 0.05907
    },
    {
        "A3 Code": "ETH",
        "Ladder score": 4.512,
        "Social support": 0.60406,
        "Logged GDP per capita": 0.19073,
        "Healthy life expectancy": 0.44055,
        "Freedom to make life choices": 0.4345,
        "Generosity": 0.24325,
        "Perceptions of corruption": 0.15048
    },
    {
        "A3 Code": "SLE",
        "Ladder score": 4.507,
        "Social support": 0.95571,
        "Logged GDP per capita": 0.33024,
        "Healthy life expectancy": 0,
        "Freedom to make life choices": 0.4084,
        "Generosity": 0.21488,
        "Perceptions of corruption": 0.08786
    },
    {
        "A3 Code": "MRT",
        "Ladder score": 4.436,
        "Social support": 0.86908,
        "Logged GDP per capita": 0.45407,
        "Healthy life expectancy": 0.35874,
        "Freedom to make life choices": 0.24232,
        "Generosity": 0.219,
        "Perceptions of corruption": 0.17461
    },
    {
        "A3 Code": "KEN",
        "Ladder score": 4.419,
        "Social support": 0.99876,
        "Logged GDP per capita": 0.36471,
        "Healthy life expectancy": 0.41435,
        "Freedom to make life choices": 0.42215,
        "Generosity": 0.37542,
        "Perceptions of corruption": 0.05839
    },
    {
        "A3 Code": "ARM",
        "Ladder score": 4.35,
        "Social support": 0.77711,
        "Logged GDP per capita": 0.76821,
        "Healthy life expectancy": 0.7299,
        "Freedom to make life choices": 0.19847,
        "Generosity": 0.07855,
        "Perceptions of corruption": 0.039
    },
    {
        "A3 Code": "BWA",
        "Ladder score": 4.332,
        "Social support": 1.10464,
        "Logged GDP per capita": 0.99355,
        "Healthy life expectancy": 0.04776,
        "Freedom to make life choices": 0.49495,
        "Generosity": 0.10461,
        "Perceptions of corruption": 0.12474
    },
    {
        "A3 Code": "MMR",
        "Ladder score": 4.307,
        "Social support": 0.70905,
        "Logged GDP per capita": 0.27108,
        "Healthy life expectancy": 0.48246,
        "Freedom to make life choices": 0.44017,
        "Generosity": 0.79588,
        "Perceptions of corruption": 0.19034
    },
    {
        "A3 Code": "GEO",
        "Ladder score": 4.297,
        "Social support": 0.38562,
        "Logged GDP per capita": 0.7419,
        "Healthy life expectancy": 0.72926,
        "Freedom to make life choices": 0.40577,
        "Generosity": 0.05547,
        "Perceptions of corruption": 0.38331
    },
    {
        "A3 Code": "MWI",
        "Ladder score": 4.292,
        "Social support": 0.41134,
        "Logged GDP per capita": 0.01604,
        "Healthy life expectancy": 0.22562,
        "Freedom to make life choices": 0.43054,
        "Generosity": 0.33128,
        "Perceptions of corruption": 0.06977
    },
    {
        "A3 Code": "LKA",
        "Ladder score": 4.271,
        "Social support": 1.01905,
        "Logged GDP per capita": 0.83524,
        "Healthy life expectancy": 0.70806,
        "Freedom to make life choices": 0.53726,
        "Generosity": 0.40828,
        "Perceptions of corruption": 0.09179
    },
    {
        "A3 Code": "CMR",
        "Ladder score": 4.252,
        "Social support": 0.88767,
        "Logged GDP per capita": 0.4225,
        "Healthy life expectancy": 0.23402,
        "Freedom to make life choices": 0.49309,
        "Generosity": 0.20618,
        "Perceptions of corruption": 0.05786
    },
    {
        "A3 Code": "BGR",
        "Ladder score": 4.218,
        "Social support": 1.10614,
        "Logged GDP per capita": 1.01216,
        "Healthy life expectancy": 0.76649,
        "Freedom to make life choices": 0.30587,
        "Generosity": 0.11921,
        "Perceptions of corruption": 0.00872
    },
    {
        "A3 Code": "EGY",
        "Ladder score": 4.194,
        "Social support": 0.747,
        "Logged GDP per capita": 0.8818,
        "Healthy life expectancy": 0.61712,
        "Freedom to make life choices": 0.17288,
        "Generosity": 0.11291,
        "Perceptions of corruption": 0.06324
    },
    {
        "A3 Code": "YEM",
        "Ladder score": 4.077,
        "Social support": 0.68093,
        "Logged GDP per capita": 0.54649,
        "Healthy life expectancy": 0.40064,
        "Freedom to make life choices": 0.35571,
        "Generosity": 0.09131,
        "Perceptions of corruption": 0.07854
    },
    {
        "A3 Code": "MLI",
        "Ladder score": 3.995,
        "Social support": 1.03526,
        "Logged GDP per capita": 0.26074,
        "Healthy life expectancy": 0.20583,
        "Freedom to make life choices": 0.38857,
        "Generosity": 0.18798,
        "Perceptions of corruption": 0.12352
    },
    {
        "A3 Code": "COD",
        "Ladder score": 3.989,
        "Social support": 0.6629,
        "Logged GDP per capita": 0.67866,
        "Healthy life expectancy": 0.31051,
        "Freedom to make life choices": 0.41466,
        "Generosity": 0.12388,
        "Perceptions of corruption": 0.11686
    },
    {
        "A3 Code": "COM",
        "Ladder score": 3.956,
        "Social support": 0.79273,
        "Logged GDP per capita": 0.23906,
        "Healthy life expectancy": 0.36315,
        "Freedom to make life choices": 0.22917,
        "Generosity": 0.17441,
        "Perceptions of corruption": 0.199
    },
    {
        "A3 Code": "UGA",
        "Ladder score": 3.931,
        "Social support": 1.13299,
        "Logged GDP per capita": 0.21102,
        "Healthy life expectancy": 0.33861,
        "Freedom to make life choices": 0.45727,
        "Generosity": 0.29066,
        "Perceptions of corruption": 0.07267
    },
    {
        "A3 Code": "SEN",
        "Ladder score": 3.904,
        "Social support": 0.97619,
        "Logged GDP per capita": 0.36498,
        "Healthy life expectancy": 0.4354,
        "Freedom to make life choices": 0.36772,
        "Generosity": 0.20843,
        "Perceptions of corruption": 0.10713
    },
    {
        "A3 Code": "GAB",
        "Ladder score": 3.896,
        "Social support": 0.90528,
        "Logged GDP per capita": 1.06024,
        "Healthy life expectancy": 0.43372,
        "Freedom to make life choices": 0.31914,
        "Generosity": 0.06822,
        "Perceptions of corruption": 0.11091
    },
    {
        "A3 Code": "NER",
        "Ladder score": 3.845,
        "Social support": 0.77265,
        "Logged GDP per capita": 0.0694,
        "Healthy life expectancy": 0.29707,
        "Freedom to make life choices": 0.47692,
        "Generosity": 0.19387,
        "Perceptions of corruption": 0.15639
    },
    {
        "A3 Code": "KHM",
        "Ladder score": 3.819,
        "Social support": 0.62736,
        "Logged GDP per capita": 0.46038,
        "Healthy life expectancy": 0.61114,
        "Freedom to make life choices": 0.66246,
        "Generosity": 0.40359,
        "Perceptions of corruption": 0.07247
    },
    {
        "A3 Code": "TZA",
        "Ladder score": 3.781,
        "Social support": 1.00268,
        "Logged GDP per capita": 0.2852,
        "Healthy life expectancy": 0.38215,
        "Freedom to make life choices": 0.32878,
        "Generosity": 0.34377,
        "Perceptions of corruption": 0.05747
    },
    {
        "A3 Code": "MDG",
        "Ladder score": 3.681,
        "Social support": 0.66801,
        "Logged GDP per capita": 0.20824,
        "Healthy life expectancy": 0.46721,
        "Freedom to make life choices": 0.19184,
        "Generosity": 0.21333,
        "Perceptions of corruption": 0.08124
    },
    {
        "A3 Code": "CAF",
        "Ladder score": 3.678,
        "Social support": 0,
        "Logged GDP per capita": 0.0785,
        "Healthy life expectancy": 0.06699,
        "Freedom to make life choices": 0.48879,
        "Generosity": 0.23835,
        "Perceptions of corruption": 0.08289
    },
    {
        "A3 Code": "TCD",
        "Ladder score": 3.667,
        "Social support": 0.76062,
        "Logged GDP per capita": 0.34193,
        "Healthy life expectancy": 0.1501,
        "Freedom to make life choices": 0.23501,
        "Generosity": 0.18386,
        "Perceptions of corruption": 0.05269
    },
    {
        "A3 Code": "GIN",
        "Ladder score": 3.656,
        "Social support": 0.46475,
        "Logged GDP per capita": 0.17417,
        "Healthy life expectancy": 0.24009,
        "Freedom to make life choices": 0.37725,
        "Generosity": 0.28657,
        "Perceptions of corruption": 0.12139
    },
    {
        "A3 Code": "BFA",
        "Ladder score": 3.587,
        "Social support": 0.85188,
        "Logged GDP per capita": 0.25812,
        "Healthy life expectancy": 0.27125,
        "Freedom to make life choices": 0.39493,
        "Generosity": 0.21747,
        "Perceptions of corruption": 0.12832
    },
    {
        "A3 Code": "AFG",
        "Ladder score": 3.575,
        "Social support": 0.30285,
        "Logged GDP per capita": 0.31982,
        "Healthy life expectancy": 0.30335,
        "Freedom to make life choices": 0.23414,
        "Generosity": 0.3651,
        "Perceptions of corruption": 0.09719
    },
    {
        "A3 Code": "RWA",
        "Ladder score": 3.465,
        "Social support": 0.7737,
        "Logged GDP per capita": 0.22208,
        "Healthy life expectancy": 0.42864,
        "Freedom to make life choices": 0.59201,
        "Generosity": 0.22628,
        "Perceptions of corruption": 0.55191
    },
    {
        "A3 Code": "BEN",
        "Ladder score": 3.34,
        "Social support": 0.35386,
        "Logged GDP per capita": 0.28665,
        "Healthy life expectancy": 0.3191,
        "Freedom to make life choices": 0.4845,
        "Generosity": 0.1826,
        "Perceptions of corruption": 0.0801
    },
    {
        "A3 Code": "BDI",
        "Ladder score": 2.905,
        "Social support": 0.41587,
        "Logged GDP per capita": 0.0153,
        "Healthy life expectancy": 0.22396,
        "Freedom to make life choices": 0.1185,
        "Generosity": 0.19727,
        "Perceptions of corruption": 0.10062
    },
    {
        "A3 Code": "TGO",
        "Ladder score": 2.839,
        "Social support": 0.13995,
        "Logged GDP per capita": 0.20868,
        "Healthy life expectancy": 0.28443,
        "Freedom to make life choices": 0.36453,
        "Generosity": 0.16681,
        "Perceptions of corruption": 0.10731
    }
]