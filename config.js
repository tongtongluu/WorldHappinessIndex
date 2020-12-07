var config = {
    style: 'mapbox://styles/luq778/ckie26npe38lo1akuemaxhohi',
    accessToken: 'pk.eyJ1IjoibHVxNzc4IiwiYSI6ImNrMzdsZ3hxaDAwMHEzamxkdTJtcGppc3UifQ.oQP1bg5nLong5oE0dh8GgQ',
    showMarkers: true,
    markerColor: '#BB6BD9',
    theme: 'light',
    mapAnimation: 'flyTo',
    // title: 'The Title Text of this Story',
    // subtitle: 'A descriptive and interesting subtitle to draw in the reader',
    // byline: 'By a Digital Storyteller',
    footer: 'Source: source citations, etc.',
    chapters: [{
            id: 'slug-style-id',
            alignment: 'left',
            title: 'The World Happiness Report',
            image: './images/1.jpg',
            description: 'The World Happiness Report is a landmark survey of the state of global happiness that ranks 156 countries by how happy their citizens perceive themselves to be. The World Happiness Report 2020 for the first time ranks cities around the world by their subjective well-being and digs more deeply into how the social, urban and natural environments combine to affect our happiness.',
            location: {
                center: [-97.9222112121185, 39.3812661305678],
                zoom: 1,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '1',
            alignment: 'left',
            title: 'How are the measures weighted?',
            image: './images/2.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [121.46667, 31.16667],
                zoom: 1,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '2',
            alignment: 'left',
            title: 'Who is the happiest',
            image: './images/denmark.jpg',
            description: 'Over the past 5 years, Denmark was found to be the happiest nation.',
            location: {
                center: [10.0462968058278, 55.9633978748347],
                zoom: 3,
                pitch: 0,
                bearing: 10
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '3',
            alignment: 'left',
            title: 'Those who are unhappy',
            image: './images/cafrican.jpg',
            description: 'The Central African Republic has the lowest average happiness rank. Has a ongoing civil war, starting in 2012',
            location: {
                center: [20.4828261100212, 6.57134078462119],
                zoom: 3,
                pitch: 60,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '4',
            alignment: 'left',
            title: 'Who changed the most',
            image: './images/venezuela.jpg',
            description: 'Venezuela dropped from 23rd to 108th over the 5 years. Economic crisis, intensifying in 2015. Dropped in "Social Support" and "GDP Per Capita" ranks by over 20 places',
            location: {
                center: [-65.801997444749,7.61957014788959],
                zoom: 3,
                pitch: 60,
                bearing: 50
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '5',
            alignment: 'left',
            title: 'Happiness may related  with GDP, but its not always the case ',
            image: './images/gdp.png',
            description: 'Three countries and area, Hong Kong, Greece and Croatia, have an above average GDP per capita byt below average happiness score. All South/Latin American countries(except Haiti) have a high happiness score despite most having a below average GDP per capita.',
            location: {
                center: [23.8285537394706,38.5890212896367],
                zoom: 3,
                pitch: 60,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '6',
            alignment: 'left',
            title: 'the U.S. is suffering an epidemic of addictions, and that these addictions are leaving a rising portion of American society unhappy and a rising number clinically depressed ',
            //image: './images/gdp.png',
            description: 'Jeffrey D. Sachs, situates the decline of American well-being in the context of a mass-addiction society. A variety of interrelated evolutionary, socioeconomic, physiological, and regulatory factors are associated with rising addiction rates across areas including drugs and alcohol, food and obesity, and internet usage. The United States’ historical failure to implement public health policies that emphasize well-being over corporate interests must be addressed to respond to the addiction epidemic. Effective interventions might include a rapid scale-up of publicly financed mental health services and increased regulation of the prescriptive drug industry and other addictive products and activities.',
            location: {
                center: [-97.9222112121185, 39.3812661305678],
                zoom: 3,
                pitch: 60,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '7',
            alignment: 'left',
            title: 'Oh hello looking for your phones again? ',
            image: './images/phone.png',
            description: '',
            location: {
                center: [-73.9808,40.7648],
                zoom: 7,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};