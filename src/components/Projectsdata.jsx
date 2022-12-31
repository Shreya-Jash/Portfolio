import portfolio from "../images/portfolio.png"
import shoppingcart from "../images/shoppingcart.png"
import movierecommendation from "../images/movierecommendation.png"
import rpalloy from "../images/rpalloys.png"
import todolist from "../images/todo.png"
import motivatonalquote from "../images/motivationalquote.png"

const data = [
    {
        id: 1,
        title: 'Portfolio',
        img: portfolio,
        tech_used: 'React.js',
        source_code: 'https://github.com/Shreya-Jash/Portfolio',
        demo:'https://shreyajash-portfolio.netlify.app/'
    },
    {
        id: 2,
        title: 'E-commerce website',
        img: shoppingcart,
        tech_used: 'React.js',
        source_code: 'https://github.com/Shreya-Jash/Shopping_Cart',
        demo:'https://hardwareshoppingcart.netlify.app/'
    },
    {
        id: 3,
        title: 'Movie Webpage',
        img :movierecommendation,
        tech_used: 'React.js',
        source_code: 'https://github.com/Shreya-Jash/Movie-recommendation-app',
        demo:'https://movie-recommendation123.netlify.app/'
    },
    {
        id: 4,
        title: 'Responsive Webpage ',
        img: rpalloy,
        tech_used: 'HTML, CSS',
        source_code: 'https://github.com/Shreya-Jash/Industry-Website',
        demo:'https://shreya-jash.github.io/Industry-Website/'
    },
    {
        id: 5,
        title: 'Quote Generator',
        img: motivatonalquote,
        tech_used: 'HTML, CSS, Javascript',
        source_code: 'https://github.com/Shreya-Jash/Quote-Generator',
        demo:'https://shreya-jash.github.io/Quote-Generator/'
    },
    {
        id: 6,
        title: 'TO-DO List ',
        img: todolist,
        tech_used: 'HTML, CSS, Javascript',
        source_code: 'https://github.com/Shreya-Jash/ToDoList',
        demo:'https://shreya-jash.github.io/ToDoList/'
    }
]

export default data