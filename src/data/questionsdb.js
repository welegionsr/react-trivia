const questionsDB = {
    questions: [
        {
            question: "What day is it?",
            answers: ["Tomorrow", "Yesterday", "Someday", "Today"],
            correct: "Today",
            category: "Basic",
            difficulty: "Easy",
            imageUrl: "https://static.vecteezy.com/system/resources/previews/006/050/093/original/thinking-man-character-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-vector.jpg"
        },
        {
            question: "Which of the following is the capital city of Italy?",
            answers: ["Bologna", "Milan", "Venice", "Rome"],
            correct: "Rome",
            category: "Geography",
            difficulty: "Easy",
            imageUrl: "https://thumbs.dreamstime.com/x/italy-travel-map-icons-vector-illustration-95386245.jpg"
        },
        {
            question: "What animal is that?",
            answers: ["Bear", "Dog", "Cat", "Lizard"],
            correct: "Bear",
            category: "Nature",
            difficulty: "Easy",
            imageUrl: "https://wallup.net/wp-content/uploads/2016/01/139369-bears-nature-animals-river-baby_animals-Grizzly_Bears-Grizzly_bear.jpg"
        },
        {
            question: "Which of the following is the capital city of France?",
            answers: ["Paris", "Lyon", "Marseille", "Nice"],
            correct: "Paris",
            category: "Geography",
            difficulty: "Easy",
            imageUrl: "https://www.followmeaway.com/wp-content/uploads/2019/08/France-Road-Trip-France-Map.jpg"
        },
        {
            question: "What is the chemical symbol for water?",
            answers: ["O2", "H2O", "CO2", "HO2"],
            correct: "H2O",
            category: "Science",
            difficulty: "Easy",
            imageUrl: "https://images3.alphacoders.com/275/275367.jpg"
        },
        {
            question: "Who painted the famous artwork 'The Starry Night'?",
            answers: ["Pablo Picasso", "Leonardo da Vinci", "Vincent van Gogh", "Claude Monet"],
            correct: "Vincent van Gogh",
            category: "Art",
            difficulty: "Easy",
            imageUrl: "https://i.etsystatic.com/13726973/r/il/da91e3/3108270269/il_1080xN.3108270269_kz25.jpg"
        },
        {
            question: "In what year did the Titanic sink?",
            answers: ["1912", "1905", "1920", "1918"],
            correct: "1912",
            category: "History",
            difficulty: "Easy",
            imageUrl: "https://images.nationalgeographic.org/image/upload/v1638882458/EducationHub/photos/titanic-sinking.jpg"
        },
        {
            question: "Which planet is known as the Red Planet?",
            answers: ["Earth", "Mars", "Venus", "Jupiter"],
            correct: "Mars",
            category: "Science",
            difficulty: "Easy",
            imageUrl: "https://sonnen-sturm.info/wp-content/uploads/2019/03/Planet-Mars-Abbildung.jpg"
        },
        {
            question: "Who wrote the novel '1984'?",
            answers: ["George Orwell", "Aldous Huxley", "J.K. Rowling", "F. Scott Fitzgerald"],
            correct: "George Orwell",
            category: "Literature",
            difficulty: "Easy",
            imageUrl: "https://theobjectivestandard.com/wp-content/uploads/2023/02/The-Terrifying-Prescience-of-George-Orwells-1984-scaled.jpg"
        },
        {
            question: "Which country is home to the kangaroo?",
            answers: ["New Zealand", "South Africa", "Australia", "Brazil"],
            correct: "Australia",
            category: "Geography",
            difficulty: "Easy",
            imageUrl: "http://4.bp.blogspot.com/-eyXr5NdeTcQ/Umi-wBMxhUI/AAAAAAAANrw/67QpV8Z38KA/s1600/Australian+kangaroo+(3).jpg"
        },
        {
            question: "In football (soccer), how many players are on the field per team?",
            answers: ["11", "10", "9", "12"],
            correct: "11",
            category: "Sports",
            difficulty: "Easy",
            imageUrl: "http://steveonleadership.com/wp-content/uploads/2015/11/Kids-playing-soccer.jpg"
        },
        {
            question: "What is the main ingredient in guacamole?",
            answers: ["Avocado", "Tomato", "Cucumber", "Lettuce"],
            correct: "Avocado",
            category: "Food",
            difficulty: "Easy",
            imageUrl: "https://img.taste.com.au/eAW0Y3k4/taste/2016/11/vegetarian-nachos-with-guacamole-86796-1.jpeg"
        },
        {
            question: "Which famous scientist developed the theory of general relativity?",
            answers: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Marie Curie"],
            correct: "Albert Einstein",
            category: "Science",
            difficulty: "Easy",
            imageUrl: "https://i.pinimg.com/736x/ef/e1/e0/efe1e0d86102d18a0e6e4350cf9f6399.jpg"
        },
        {
            "question": "Which country was the first to reach space with a human astronaut?",
            "answers": ["USA", "Russia", "China", "Germany"],
            "correct": "Russia",
            "category": "History",
            "difficulty": "Medium",
            "imageUrl": "https://starlust.org/wp-content/uploads/2022/07/astronaut-floating-in-space.webp"
        },
        {
            "question": "Which element is necessary for combustion to occur?",
            "answers": ["Oxygen", "Hydrogen", "Carbon", "Nitrogen"],
            "correct": "Oxygen",
            "category": "Science",
            "difficulty": "Medium",
            "imageUrl": "https://images.all-free-download.com/images/graphiclarge/combustion_flame_picture_1_170474.jpg"
        },
        {
            "question": "Which artist painted the famous ceiling of the Sistine Chapel?",
            "answers": ["Leonardo da Vinci", "Michelangelo", "Raphael", "Donatello"],
            "correct": "Michelangelo",
            "category": "Art",
            "difficulty": "Medium",
            "imageUrl": "https://i.pinimg.com/originals/00/9a/91/009a9161e491a91e13f0baa79042b3d8.jpg"
        },
        {
            "question": "What is the capital of Canada?",
            "answers": ["Toronto", "Vancouver", "Montreal", "Ottawa"],
            "correct": "Ottawa",
            "category": "Geography",
            "difficulty": "Medium",
            "imageUrl": "https://canadamap360.com/img/1200/canada-tourist-map.jpg"
        },
        {
            "question": "Who wrote the play 'Hamlet'?",
            "answers": ["William Shakespeare", "Charles Dickens", "Homer", "Mark Twain"],
            "correct": "William Shakespeare",
            "category": "Literature",
            "difficulty": "Medium",
            "imageUrl": "https://i.ytimg.com/vi/Oq5HKX1vicM/maxresdefault.jpg"
        },
        {
            "question": "Which country hosted the 2016 Summer Olympics?",
            "answers": ["China", "Brazil", "Russia", "Japan"],
            "correct": "Brazil",
            "category": "Sports",
            "difficulty": "Medium",
            "imageUrl": "https://s.abcnews.com/images/International/olympic-history-01-gty-jrl-180104_16x9_1600.jpg"
        },
        {
            "question": "In which year did World War II end?",
            "answers": ["1940", "1942", "1945", "1948"],
            "correct": "1945",
            "category": "History",
            "difficulty": "Medium",
            "imageUrl": "https://cf-images.us-east-1.prod.boltdns.net/v1/static/3772599298001/4de0cc59-e2ca-4c72-b8aa-bf8261ed6e5e/be43aef8-39fb-4038-9492-3cc1a0f41e77/1280x720/match/image.jpg"
        },
        {
            "question": "Which gas do plants absorb from the atmosphere during photosynthesis?",
            "answers": ["Nitrogen", "Oxygen", "Carbon Dioxide", "Methane"],
            "correct": "Carbon Dioxide",
            "category": "Science",
            "difficulty": "Medium",
            "imageUrl": "https://homesteadfox.com/wp-content/uploads/2022/04/HF_Veg_Direct_Sunlight.png"
        },
        {
            "question": "What is the hardest natural substance on Earth?",
            "answers": ["Gold", "Iron", "Diamond", "Platinum"],
            "correct": "Diamond",
            "category": "Science",
            "difficulty": "Medium",
            "imageUrl": "https://www.moresuperhard.com/upfile/201911/2019111242147613.png"
        },
        {
            "question": "Which ocean is the largest by surface area?",
            "answers": ["Atlantic Ocean", "Indian Ocean", "Southern Ocean", "Pacific Ocean"],
            "correct": "Pacific Ocean",
            "category": "Geography",
            "difficulty": "Medium",
            "imageUrl": "https://pixnio.com/free-images/2017/05/07/2017-05-07-17-57-09.jpg"
        },
        {
            "question": "Which Greek philosopher was a student of Plato and tutor to Alexander the Great?",
            "answers": ["Socrates", "Aristotle", "Pythagoras", "Epicurus"],
            "correct": "Aristotle",
            "category": "Philosophy",
            "difficulty": "Medium",
            "imageUrl": "https://fromlight2art.com/wp-content/uploads/2023/09/szureikat_plato_and_Aristotle_viewing_a_beautiful_landscape_pla_8e98ee27-a01a-4f26-b3a7-0c6f01c21451.jpg"
        },
        {
            "question": "What is the chemical symbol for the element gold?",
            "answers": ["Au", "Ag", "Pb", "Fe"],
            "correct": "Au",
            "category": "Science",
            "difficulty": "Medium",
            "imageUrl": "https://www.thoughtco.com/thmb/c34lRp1d5i9OrydcJH2ei_5uCW0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/close-up-of-periodic-table-760294957-5a00794822fa3a0037921324.jpg"
        }
    ],
    count: 25
}

export default questionsDB;