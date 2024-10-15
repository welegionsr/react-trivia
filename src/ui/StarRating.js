import './styles/StarRating.css';

export default function StarRating({stars}){
    const fullStar = '★';
    const emptyStar = '☆';
    
    // Ensure score is between 0 and 5
    const validScore = Math.min(Math.max(stars, 0), 5);

    // create an array to represent the stars
    const starsArray = Array(5).fill(fullStar)
        .map((star, index) => (index < validScore ? fullStar : emptyStar));

    return (
        <div className="stars-rating">
            {starsArray.join('')}
        </div>
    );
}