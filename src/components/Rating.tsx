import { useState } from "react";

const Rating = ({ prodRating }: any) => {
  const { count, rate } = prodRating;
  const [rating] = useState(rate);
  const [hoverValue] = useState(rate);

  const icons = {
    empty: "/assets/svg/empty.svg",
    filled: "/assets/svg/filled.svg",
    halfFilled: "/assets/svg/half.svg",
  };

  const renderIcons = () => {
    const iconsArray = [];
    for (let index = 0; index < 5; index++) {
      const isFilled =
        hoverValue !== null ? hoverValue > index : rating > index;

      console.log(hoverValue);
      const isHalfFilled =
        hoverValue !== null
          ? hoverValue === index + 0.5
          : rating === index + 0.5;
      const iconSrc = isHalfFilled
        ? icons.halfFilled
        : isFilled
        ? icons.filled
        : icons.empty;

      iconsArray.push(
        <img
          key={index}
          src={iconSrc}
          alt={`${index + 1} star`}
          data-testid="rating-icon"
          role="button"
          style={{
            cursor: "pointer",
            width: "16px",
            height: "16px",
          }}
        />
      );
    }
    return iconsArray;
  };

  return (
    <div
      data-testid="star-rating-container"
      // onKeyDown={handleKeyDown}
      role="radiogroup"
      className="flex items-center"
    >
      {rate} {renderIcons()}
      <span className="text-sm ml-2">({count} reviews)</span>
    </div>
  );
};

export default Rating;
