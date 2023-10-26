import React, { useContext } from "react";

import { VideoContext } from "../../contexts/VideoContext";

import { IoTrashBin, IoThumbsUp, IoPencil } from "react-icons/io5"

import { Container, ButtonArea, Button } from "./styles";


export default function Video({ id, title, link, liked }) {
    const { handleEdit, handleDelete, handleLike } = useContext(VideoContext);


    return (
        <li>
            <Container>
                <h2>{title}</h2>
                <a href={link} target="">
                    {link}
                </a>
                <ButtonArea>
                    <Button liked={liked} onClick={() => handleLike(id)}>
                        <IoThumbsUp />
                    </Button>
                    <Button onClick={() => handleEdit(id, title, link)}>
                        <IoPencil />
                    </Button>
                    <Button onClick={() => handleDelete(id)}>
                        <IoTrashBin />
                    </Button>
                </ButtonArea>
            </Container>
        </li>
    );
}