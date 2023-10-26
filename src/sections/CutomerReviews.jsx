import ReviewCart from "../components/ReviewCart";
import { reviews } from "../constants";

const CutomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-center text-4xl font-bold">
        What our <span className="text-coral-red">Customers</span>
        Say ?
      </h3>

      <p className="info-text m-auto mt-4 max-w-lg text-center">
        Hear genuine stories from our satisfied customers about their
        exepctional experiences with us.
      </p>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review, index) => (
          <ReviewCart key={index} {...review} />
        ))}
      </div>
    </section>
  );
};

export default CutomerReviews;
