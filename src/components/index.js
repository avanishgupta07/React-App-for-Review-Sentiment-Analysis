import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
    <a href="/">
        < img
            className="logo"
            alt="logo"
            src="https://numlabs.com/static/img/posts/twarze-pos-neg.jpg"
        />
    </a>


);
const Title2 = () => (
    <a >
        <h1><span>React App</span> for Review Sentiment Analysis</h1>
    </a>


);

const Header = () => {
    return (
        <div className="header">
            <Title />
            <Title2 />
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    )

};

const restrautList =
    [
        {
            "info": {
                "review_id": "123456",
                "reviewer_name": "Amgad",
                "content": "Exceptional\n\nExceptional Pros: beautiful location, staff so friendly special host Mss Duksin, fishing trip is very nice we catch fish and cocked in same Resturant it was amazing , food is very delicious and fresh",
                "raw_content": "Exceptional\n\nExceptional Pros: beautiful location, staff so friendly special host Mss Duksin, fishing trip is very nice we catch fish and cocked in same Resturant it was amazing , food is very delicious and fresh",
                "date": "06 May 2022",
                "rating_review_score": 10,
                "hotel_code": "ZMVLHIFF",
                "hotel_reply": "",
                "source_language": "en",
                "source_hotel_code_": "",
                "source_review_id": "838fa7fb77ff177d",
                "category": "food and drinks",
                "phrases": "fish|||fish",
                "sentences": "Pros: beautiful location, staff so friendly special host Mss Duksin, fishing trip is very nice we catch fish and cocked in same Resturant it was amazing , food is very",
                "topic": "food and drinks",
                "sentiment": "Positive",
                "out_of": 5,
                "review_url": "https://www.booking.com/hotel/mv/fushifaru-maldives.html",
                "source": {
                    "code": "2",
                    "name": "booking.com",
                    "icon": "http://devinnspire.accessai.co:8001/media/sources/booking3.png",
                    "image": "http://devinnspire.accessai.co:8001/media/sources/booking_img.com.png"
                },
                "bookmarked": false,
                "bookmark_pk": 0,
                "analytics": [
                    {
                        "category": "food and drinks",
                        "topic": "food and drinks",
                        "phrases": [
                            "fish",
                            "fish"
                        ],
                        "sentences": [
                            "Pros: beautiful location, staff so friendly special host Mss Duksin, fishing trip is very nice we catch fish and cocked in same Resturant it was amazing , food is very"
                        ],
                        "sentiment": "Positive",
                        "highlight_indices": [
                            [
                                25,
                                192,
                                "Positive"
                            ]
                        ]
                    }
                ],
                "highlight_indices": [
                    [
                        25,
                        192,
                        "Positive"
                    ]
                ]
            }
        },
        {
            "info": {
                "review_id": "123459",
                "reviewer_name": "Carole",
                "content": "Wonderful\n\nWonderful",
                "raw_content": "Wonderful\n\nWonderful",
                "date": "17 Apr 2022",
                "rating_review_score": 9,
                "hotel_code": "ZMVLHIFF",
                "hotel_reply": "",
                "source_language": "en",
                "source_hotel_code_": "",
                "source_review_id": "95f07a7dfceb595f",
                "category": null,
                "phrases": null,
                "sentences": null,
                "topic": null,
                "sentiment": null,
                "out_of": 5,
                "review_url": "https://www.booking.com/hotel/mv/fushifaru-maldives.html",
                "source": {
                    "code": "2",
                    "name": "booking.com",
                    "icon": "http://devinnspire.accessai.co:8001/media/sources/booking3.png",
                    "image": "http://devinnspire.accessai.co:8001/media/sources/booking_img.com.png"
                },
                "bookmarked": false,
                "bookmark_pk": 0,
                "analytics": []
            },
            "info": {
                "review_id": "1234512",
                "reviewer_name": "Cristina",
                "content": "The best service ever! Never found before a staff so professional and kind like in Fushifaru.\n\nThe best service ever! Never found before a staff so professional and kind like in Fushifaru.",
                "raw_content": "The best service ever! Never found before a staff so professional and kind like in Fushifaru.\n\nThe best service ever! Never found before a staff so professional and kind like in Fushifaru.",
                "date": "03 Apr 2022",
                "rating_review_score": 10,
                "hotel_code": "ZMVLHIFF",
                "hotel_reply": "",
                "source_language": "en",
                "source_hotel_code_": "",
                "source_review_id": "ba53bd7f135b98aa",
                "category": "service",
                "phrases": "service|||service|||service|||service",
                "sentences": "best service|||best service",
                "topic": "service",
                "sentiment": "Positive",
                "out_of": 5,
                "review_url": "https://www.booking.com/hotel/mv/fushifaru-maldives.html",
                "source": {
                    "code": "2",
                    "name": "booking.com",
                    "icon": "http://devinnspire.accessai.co:8001/media/sources/booking3.png",
                    "image": "http://devinnspire.accessai.co:8001/media/sources/booking_img.com.png"
                },
                "bookmarked": false,
                "bookmark_pk": 0,
                "analytics": [
                    {
                        "category": "service",
                        "topic": "service",
                        "phrases": [
                            "service",
                            "service",
                            "service",
                            "service"
                        ],
                        "sentences": [
                            "best service|||best service"
                        ],
                        "sentiment": "Positive",
                        "highlight_indices": [
                            [
                                -1,
                                26,
                                "Positive"
                            ]
                        ]
                    },
                    {
                        "category": "staff",
                        "topic": "staff",
                        "phrases": [
                            "staff",
                            "staff",
                            "staff",
                            "staff"
                        ],
                        "sentences": [
                            "found before a staff so professional and kind like in|||found before a staff so professional and kind like in"
                        ],
                        "sentiment": "Positive",
                        "highlight_indices": [
                            [
                                -1,
                                108,
                                "Positive"
                            ]
                        ]
                    }
                ],
                "highlight_indices": [
                    [
                        -1,
                        108,
                        "Positive"
                    ]
                ]
            }
        },
        {
            "info": {
                "review_id": "123457",
                "reviewer_name": "Vladimir",
                "content": "(Translated): don't go to Fushifara!!!! There are lots of other decent islands out there!!! (Original): не надо ехать на Фушифару!!!!  Есть много других приличных островов!!!\n\n(Translated): don't go to Fushifara!!!! There are lots of other decent islands out there!!! Cons: it's dirty, there are cockroaches in the villa of different sizes, it's full of Mosquitoes, neither the villa has ever been disinfected in 15 days. Very poor cleaning of the villa!!! The beach is very dirty: dangerous pieces of wire from the chain-link net, a lot of concrete pieces of construction waste and other rubbish! only 2 restaurants with a meager assortment, very few fruits, and no exotic ones at all: we will also eat bananas and apples in Moscow!!! (Original): не надо ехать на Фушифару!!!!  Есть много других приличных островов!!! Cons: грязно, тараканы в вилле разных размеров, полно Комаров, ни на территории не в вилле ни разу за 15 дней не проводились дезинфекционные мероприятия. очень плохая уборка виллы!!!  Пляж очень грязный: опасные куски проволоки от сетки рабицы, очень много бетонных кусков строительного мусора и прочего хлама!  всего 2 ресторана со скудным ассортиментом, очень мало фруктов, а экзотических нет вообще: бананы и яблоки мы и в Москве поедим!!!",
                "raw_content": "не надо ехать на Фушифару!!!!  Есть много других приличных островов!!!\n\nне надо ехать на Фушифару!!!!  Есть много других приличных островов!!! Cons: грязно, тараканы в вилле разных размеров, полно Комаров, ни на территории не в вилле ни разу за 15 дней не проводились дезинфекционные мероприятия. очень плохая уборка виллы!!!  Пляж очень грязный: опасные куски проволоки от сетки рабицы, очень много бетонных кусков строительного мусора и прочего хлама!  всего 2 ресторана со скудным ассортиментом, очень мало фруктов, а экзотических нет вообще: бананы и яблоки мы и в Москве поедим!!!",
                "date": "25 Jan 2022",
                "rating_review_score": 2,
                "hotel_code": "ZMVLHIFF",
                "hotel_reply": "",
                "source_language": "ru",
                "source_hotel_code_": "",
                "source_review_id": "57ce91782d03c4e2",
                "category": "beach",
                "phrases": "beach|||beach",
                "sentences": "beach is very dirty: dangerous pieces of wire from the chain-link net, a lot of concrete pieces of construction waste",
                "topic": "beach",
                "sentiment": "Negative",
                "out_of": 5,
                "review_url": "https://www.booking.com/hotel/mv/fushifaru-maldives.html",
                "source": {
                    "code": "2",
                    "name": "booking.com",
                    "icon": "http://devinnspire.accessai.co:8001/media/sources/booking3.png",
                    "image": "http://devinnspire.accessai.co:8001/media/sources/booking_img.com.png"
                },
                "bookmarked": false,
                "bookmark_pk": 0,
                "analytics": [
                    {
                        "category": "beach",
                        "topic": "beach",
                        "phrases": [
                            "beach",
                            "beach"
                        ],
                        "sentences": [
                            "beach is very dirty: dangerous pieces of wire from the chain-link net, a lot of concrete pieces of construction waste"
                        ],
                        "sentiment": "Negative",
                        "highlight_indices": [
                            [
                                461,
                                578,
                                "Negative"
                            ]
                        ]
                    }
                ],
                "highlight_indices": [
                    [
                        461,
                        578,
                        "Negative"
                    ]
                ]
            }
        },

        {

            "info": {
                "review_id": "123455",
                "reviewer_name": "Andressa",
                "content": "(Translated): Exceeded expectations! (Original): Superou as expectativas!\n\n(Translated): Exceeded expectations! Pros: The place is amazing in every way! Starting with service. The team, always present, calls us by name and, after the first contacts, they already know our preferences. Our island guide, Chelsea, besides being super pleasant and polite, was always available for a good conversation or to prepare any tour, dinner, or request we had. He and the whole team certainly made our season there something more than special! The island is super well located and allows for fantastic snorkeling. Marine life is rich and abundant, and we were able to be close to rays, sharks, fish of all colors, and Mantas! An incredible place to eat well, relax, and connect with nature. (Original): Superou as expectativas! Pros: O lugar é incrível em todos os aspectos! A começar pelo atendimento. A equipe, sempre presente, nos chama pelo nome e, após os primeiros contatos, já sabem de nossas preferências. Nosso guia da ilha, o Chelsea, além de super agradável e educado, estava sempre disponível para uma boa conversa ou para preparar qualquer passeio, jantar, ou pedido que tivéssemos. Ele e toda a equipe, com certeza, fizeram de nossa temporada lá algo mais que especial! A ilha é super bem localizada e permite fantásticos mergulhos de snorkel. A vida marinha é rica e abundante, e pudemos estar perto de arraias, tubarões, peixes de todas as cores e das Mantas! Um lugar incrível para comer bem, relaxar e conectar com a natureza.",
                "raw_content": "Superou as expectativas!\n\nSuperou as expectativas! Pros: O lugar é incrível em todos os aspectos! A começar pelo atendimento. A equipe, sempre presente, nos chama pelo nome e, após os primeiros contatos, já sabem de nossas preferências. Nosso guia da ilha, o Chelsea, além de super agradável e educado, estava sempre disponível para uma boa conversa ou para preparar qualquer passeio, jantar, ou pedido que tivéssemos. Ele e toda a equipe, com certeza, fizeram de nossa temporada lá algo mais que especial! A ilha é super bem localizada e permite fantásticos mergulhos de snorkel. A vida marinha é rica e abundante, e pudemos estar perto de arraias, tubarões, peixes de todas as cores e das Mantas! Um lugar incrível para comer bem, relaxar e conectar com a natureza.",
                "date": "25 Nov 2021",
                "rating_review_score": 10,
                "hotel_code": "ZMVLHIFF",
                "hotel_reply": "",
                "source_language": "pt",
                "source_hotel_code_": "",
                "source_review_id": "9c8c51a0d0d97b7d",
                "category": "staff",
                "phrases": "team|||guide|||team|||team|||guide|||team",
                "sentences": "team, always present, calls us by name and, after the first contacts, they already know our<_PHRASE_>island guide, Chelsea, besides being super pleasant and polite, was always available for a good conversation or to prepare any tour,<_PHRASE_>and the whole team certainly made our season there something more than",
                "topic": "staff",
                "sentiment": "Positive",
                "out_of": 5,
                "review_url": "https://www.booking.com/hotel/mv/fushifaru-maldives.html",
                "source": {
                    "code": "2",
                    "name": "booking.com",
                    "icon": "http://devinnspire.accessai.co:8001/media/sources/booking3.png",
                    "image": "http://devinnspire.accessai.co:8001/media/sources/booking_img.com.png"
                },
                "bookmarked": false,
                "bookmark_pk": 0,
                "analytics": [
                    {
                        "category": "staff",
                        "topic": "staff",
                        "phrases": [
                            "team",
                            "guide",
                            "team",
                            "team",
                            "guide",
                            "team"
                        ],
                        "sentences": [
                            "team, always present, calls us by name and, after the first contacts, they already know our",
                            "island guide, Chelsea, besides being super pleasant and polite, was always available for a good conversation or to prepare any tour,",
                            "and the whole team certainly made our season there something more than"
                        ],
                        "sentiment": "Positive",
                        "highlight_indices": [
                            [
                                180,
                                271,
                                "Positive"
                            ],
                            [
                                289,
                                421,
                                "Positive"
                            ],
                            [
                                452,
                                522,
                                "Positive"
                            ]
                        ]
                    },
                    {
                        "category": "service",
                        "topic": "service",
                        "phrases": [
                            "service",
                            "service"
                        ],
                        "sentences": [
                            "with service"
                        ],
                        "sentiment": "Positive",
                        "highlight_indices": [
                            [
                                162,
                                174,
                                "Positive"
                            ]
                        ]
                    },
                    {
                        "category": "food and drinks",
                        "topic": "food and drinks",
                        "phrases": [
                            "fish",
                            "fish"
                        ],
                        "sentences": [
                            "life is rich and abundant, and we were able to be close to rays, sharks, fish of all colors, and"
                        ],
                        "sentiment": "Positive",
                        "highlight_indices": [
                            [
                                609,
                                705,
                                "Positive"
                            ]
                        ]
                    }
                ],
                "highlight_indices": [
                    [
                        609,
                        705,
                        "Positive"
                    ]
                ]
            }

        },
        {

            "info": {
                "review_id": "1234511",
                "reviewer_name": "Torsten",
                "content": "Full recommendation. Incredible good.\n\nFull recommendation. Incredible good. Pros: The staff is incredible friendly and customer focused. Thank you, Chelsea, Tameel, Neelam, Thoha, Tami and all the others. It was a perfect stay with you. Cons: Nothing at all",
                "raw_content": "Full recommendation. Incredible good.\n\nFull recommendation. Incredible good. Pros: The staff is incredible friendly and customer focused. Thank you, Chelsea, Tameel, Neelam, Thoha, Tami and all the others. It was a perfect stay with you. Cons: Nothing at all",
                "date": "20 Nov 2021",
                "rating_review_score": 10,
                "hotel_code": "ZMVLHIFF",
                "hotel_reply": "",
                "source_language": "en",
                "source_hotel_code_": "",
                "source_review_id": "ba48331bbcd52f0a",
                "category": "experience",
                "phrases": "stay|||stay",
                "sentences": "was a perfect stay with",
                "topic": "experience",
                "sentiment": "Positive",
                "out_of": 5,
                "review_url": "https://www.booking.com/hotel/mv/fushifaru-maldives.html",
                "source": {
                    "code": "2",
                    "name": "booking.com",
                    "icon": "http://devinnspire.accessai.co:8001/media/sources/booking3.png",
                    "image": "http://devinnspire.accessai.co:8001/media/sources/booking_img.com.png"
                },
                "bookmarked": false,
                "bookmark_pk": 0,
                "analytics": [
                    {
                        "category": "experience",
                        "topic": "experience",
                        "phrases": [
                            "stay",
                            "stay"
                        ],
                        "sentences": [
                            "was a perfect stay with"
                        ],
                        "sentiment": "Positive",
                        "highlight_indices": [
                            [
                                209,
                                232,
                                "Positive"
                            ]
                        ]
                    },
                    {
                        "category": "staff",
                        "topic": "staff",
                        "phrases": [
                            "staff",
                            "staff"
                        ],
                        "sentences": [
                            "The staff is incredible friendly and customer"
                        ],
                        "sentiment": "Positive",
                        "highlight_indices": [
                            [
                                83,
                                128,
                                "Positive"
                            ]
                        ]
                    }
                ],
                "highlight_indices": [
                    [
                        83,
                        128,
                        "Positive"
                    ]

                ]
            }

        }
        ,

    ]
const Body = () => {
    return (
        <div className="listname">
            {restrautList.map((restaurant, index) => (
                <RestaurantCard key={index} restaurant={restaurant} />
            ))}
        </div>
    );
};
const RestaurantCard = ({ restaurant }) => {
    const info = restaurant.info;

    if (!info) {
        return null;
    }

    // Define colors for each sentiment
    const sentimentColors = {
        Positive: "#D9F2DD",
        Negative: "#F2DBD9",
        Mixed: "#e8bd6d3d",
        Neutral: "#eaf09b6b"
    };

    return (
        <div className="card" style={{ backgroundColor: sentimentColors[info.analytics[0].sentiment] }}>
            <h2>{info.reviewer_name}</h2>
            <h3>{info.date}</h3>
            <p>{info.content}</p>
            <p>{info.raw_content}</p>
            <h3>Rating: {info.rating_review_score}/{info.out_of}</h3>
            <h3>Source: {info.source.name}</h3>
            <img src={info.source.icon} alt={info.source.name} />
            <h3>Language: {info.source_language}</h3>
            {info.analytics.map((analytics, index) => (
                <div key={index}>
                    <h4>Category: {analytics.category}</h4>
                    <h4>Topic: {analytics.topic}</h4>
                    <p>Phrases: {analytics.phrases.join(", ")}</p>
                    <p>Sentences: {analytics.sentences.join(", ")}</p>
                    <p style={{ color: sentimentColors[analytics.sentiment] }}>Sentiment: {analytics.sentiment}</p>
                    <p>
                        Highlighted Sentences:
                        {analytics.highlight_indices.map((indices, idx) => (
                            <span key={idx}>
                                {indices[2]}: {info.raw_content.substring(indices[0], indices[1])}
                            </span>
                        ))}
                    </p>
                </div>
            ))}
        </div>
    );
};

const Footer = () => {
    return <h4>Footer</h4>;
};

const AppLayout = () => {
    return (
        <React.Fragment>
            <Header />
            <Body />
            {/* <Footer /> */}
        </React.Fragment>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);     