import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { flex } from "../Util/flex";
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import { Color } from "../../data/Color";
import RangeInput from "./RangeInput";

type styledType = {
  font?: string
  rating?: string | undefined | boolean
}


const Container = styled(flex) <styledType>`
  padding: 2rem;
  background-color: ${({ color }) => (color ? color : Color.red)};
  color: ${({ font }) => (font ? font : Color.black)};
  gap: 2rem;
  @media screen and (max-width: 900px) {
    flex-direction: column;
    height: auto;
    padding: 2rem 0;
  }
`;
const Wrapper = styled(flex)`
  width: min(90 vw, 1100 px);
  gap: 1rem;
  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

const Left = styled(flex)``;
const Right = styled.div`
  flex: 1;
  display: flex;
  gap: 1rem;
  padding: 2rem;
  align-items: center;
  width: min(90vw, 1000px);
  height: 390px;
  overflow-x: scroll;
  @media screen and (max-width: 900px) {
  }
  /* width */
  ::-webkit-scrollbar {
    display: none;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

const CardCont = styled(flex)`
  background: ${Color.white};
  padding: 3rem 3rem 4rem 3rem;
  border-radius: 1rem;
  box-shadow: 3px 3px 1px ${Color.lightBlack};
  flex-direction: column;
  gap: 2rem;
`;
const Stars = styled(flex) <styledType>`
  padding: ${(props) => (props.rating ? "0rem" : "1.25rem")};
  margin: 0.25rem;
  background: ${Color.gray};
  border-radius: 2rem;
  gap: 0.5rem;
  font-size: ${(props) => (props.rating ? "1rem" : "1.25rem")};

  @media screen and (max-width: 600px) {
    padding: ${(props) => (props.rating ? "0rem" : "0.5rem 1.25rem")};
  }
`;
const Group = styled(flex)`
  flex-direction: column;
  h2 {
    padding: 0;
    margin: 0;
  }
`;

const Yellow = styled(BsStarFill)`
  color: ${Color.orange};
`;

const YellowHalf = styled(BsStarHalf)`
  color: ${Color.orange};
`;

const StarGroup = styled(flex)``;
const InputGroup = styled(flex)`
  flex-direction: column;
  gap: 0.5rem;
`;

const User = styled.div`
  display: flex;
  flex-direction: column;
  background: ${Color.trueWhite};
  box-shadow: 3px 3px 1px ${Color.lightBlack};

  & > div {
    padding: 1rem 2rem;
    min-width: 300px;
    height: 300px;
  }
  a {
    margin-top: 5px;
    justify-self: flex-end;
    display: block;
    text-decoration: none;
    color: ${Color.green};
    transition: 300ms ease-in-out;
    &:hover {
      color: ${Color.orange};
    }
  }
  p {
    font-weight: 700;
    margin-bottom: 0;
  }
`;

interface REVIEW {
  title: string,
  date: string,
  rating: string,
  review: string,
  profile: string
}
const Review = ({ reviews }: { reviews: REVIEW[] }) => {
  const [average, setAverage] = useState<string | number>(5);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(reviews.length);
    let sum = 0;
    reviews.forEach(function (elem: REVIEW): number {
      return (sum += parseInt(elem.rating));
    });
    const mean = (sum / 10 / reviews.length).toFixed(1);
    setAverage(mean);
  }, [reviews, setAverage, setTotal]);

  const reviewStars = (value: string, rating: boolean) => {
    return (
      <Stars rating={rating}>
        <StarGroup>
          {displayStars(parseInt(value), rating).map((elem, index) =>
            elem ? (
              <Yellow key={index} />
            ) : elem === null ? (
              <YellowHalf key={index} />
            ) : (
              <BsStar key={index} />
            )
          )}
        </StarGroup>
        {rating ? `${parseInt(value) / 10} out of 5` : `${average} out of 5`}
      </Stars>
    );
  };
  function calculateReviewPercentage(rating: string) {
    return (
      (reviews.filter((review) => review.rating === rating).length / total) *
      100
    ).toFixed(0);
  }
  function displayStars(value: number, rating: boolean) {
    let mean = value;
    if (rating) {
      mean = value / 10;
    }
    let stars = new Array(5).fill(false);
    for (let i = 0; i <= mean - 1; i++) {
      if (i > mean - 1) {
        stars[i] = null;
      } else {
        stars[i] = true;
      }
    }
    return stars;
  }
  function truncateString(str: string, num: number) {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  }
  return (
    <Container>
      <Wrapper>
        <Left>
          <CardCont data-aos="fade-in" data-aos-duration="300">
            <Group>
              <h2>Customer Reviews</h2>
              {reviewStars(average.toString(), false)}
              <small>{total} customer ratings</small>
            </Group>
            <InputGroup>
              <RangeInput value={calculateReviewPercentage("50")} count={5} />
              <RangeInput value={calculateReviewPercentage("40")} count={4} />
              <RangeInput value={calculateReviewPercentage("30")} count={3} />
              <RangeInput value={calculateReviewPercentage("20")} count={2} />
              <RangeInput value={calculateReviewPercentage("10")} count={1} />
            </InputGroup>
          </CardCont>
        </Left>
        <Right>
          {reviews.map((curr, index) => (
            <User
              key={index}
              data-aos="fade-up"
              data-aos-delay={300 * index}
              data-offset="1000"
            >
              <div>
                {/* <img src={curr.profile} alt="profile" /> */}
                <p>{curr.title}</p>
                {reviewStars(curr.rating, true)}
                <small>{truncateString(curr.review, 200)}</small>
                <a
                  href="https://www.tripadvisor.co.uk/Restaurant_Review-g186338-d2693472-Reviews-Flamingo-London_England.html"
                  rel="nofollow"
                >
                  Read more
                </a>
              </div>
            </User>
          ))}
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Review;
