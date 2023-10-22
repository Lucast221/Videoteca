import React from "react";

import { IoTrashBin, IoThumbsUp, IoPencil } from "react-icons/io5"

import { Container, ButtonArea, Button } from "./styles";


export default function Video({ id, title, link, liked }) {
    return (
        <li>
            <Container>
                <h2>{title}</h2>
                <a href={link} target="">
                    {link}
                </a>
                <ButtonArea>
                    <Button liked={liked}>
                        <IoThumbsUp />
                    </Button>
                    <Button>
                        <IoPencil />
                    </Button>
                    <Button>
                        <IoTrashBin />
                    </Button>
                </ButtonArea>
            </Container>
        </li>
    );
}