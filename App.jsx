import { useState } from "react";

const LABELS = ["", "Poor", "Fair", "Good", "Great", "Excellent"];

export default function App() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const active = hover || rating;

  return (
    <main className="page">
      <section className="card">
        <h1>We&rsquo;d love your feedback</h1>
        <p className="subtitle">Your experience helps us improve</p>

        <div
          className="stars"
          role="radiogroup"
          aria-label="Star rating"
          onMouseLeave={() => setHover(0)}
        >
          {[1, 2, 3, 4, 5].map((value) => {
            const filled = value <= active;
            return (
              <button
                key={value}
                type="button"
                role="radio"
                aria-checked={rating === value}
                aria-label={`${value} star${value > 1 ? "s" : ""}`}
                className={`star ${filled ? "star--filled" : ""}`}
                onClick={() => setRating(value)}
                onMouseEnter={() => setHover(value)}
                onFocus={() => setHover(value)}
                onBlur={() => setHover(0)}
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              </button>
            );
          })}
        </div>

        <p className="message">
          {rating > 0
            ? `Thanks! You rated us ${rating}/5 — ${LABELS[rating]}.`
            : "Tap a star to rate your experience"}
        </p>
      </section>
    </main>
  );
}
