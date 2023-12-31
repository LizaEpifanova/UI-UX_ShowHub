// Film.tsx
import { MovieList } from "@/lib/api";
import Link from "next/link";
import React from "react";
import { VscStarFull } from "react-icons/vsc";
import * as Style from "./index.styled";

const Film: React.FC<MovieList> = (props) => {
  return (
    <Style.Film>
      <Link href={`/movies/${props.id}`}>
        <Style.Content>
          <Style.Cards>
            <Style.Card2>
              <Style.Rating>
                <Style.RatingIcon>
                  <VscStarFull />
                </Style.RatingIcon>
                <Style.RatingText> {props.rating} / 10</Style.RatingText>
              </Style.Rating>

              {props.genres ? (
                <Style.Genres>
                  {props.genres.map((genre, index) => (
                    <Style.GenresText key={index}>
                      {genre.toUpperCase()}
                    </Style.GenresText>
                  ))}
                </Style.Genres>
              ) : (
                ""
              )}
            </Style.Card2>

            <Style.Card1
              src={
                props.medium_cover_image
                  ? props.medium_cover_image
                  : "https://klike.net/uploads/posts/2019-05/1556708032_1.jpg"
              }
              alt={props.medium_cover_image}
            ></Style.Card1>
          </Style.Cards>
        </Style.Content>
        <Style.Details>{props.title}</Style.Details>
      </Link>
    </Style.Film>
  );
};

export default Film;