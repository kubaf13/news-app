import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import "./NewsCard.css";

const NewsCard = ({
  title,
  description,
  urlToImage,
  url,
  author,
  publishedAt,
}) => (
  <Card className="card" color="blue">
    <Image className="image" src={urlToImage} wrapped ui={false} alt={author} />
    <Card.Content>
      <Card.Header className="header">{title}</Card.Header>
      <Card.Meta>
        <span>{publishedAt.replace("T", " ").split("Z")}</span>
      </Card.Meta>
      <Card.Description
        dangerouslySetInnerHTML={{ __html: description }}
        className="text"
      ></Card.Description>
    </Card.Content>
    <Card.Content extra>
      <p>source: {author}</p>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <Icon name="eye" />
        Read the full article
      </a>
    </Card.Content>
  </Card>
);

export default NewsCard;
