import React, { useContext } from "react";
import { VideoContext } from "../../contexts/VideoContext";

import {
    Overlay,
    Container,
    Header,
    CloseIcon,
    FormContainer,
    FormMain,
    InputGroup,
    Footer,
    CheckIcon,
} from "./styles";

export default function FormModal() {
    const { handleClose, title, titleHandler, link, linkHandler, handleSubmit } = useContext(VideoContext);

    return (
        <Overlay>
            <Container>
                <Header>
                    <strong>Add a video</strong>
                    <button type="button" onClick={handleClose}>
                        <CloseIcon />
                    </button>
                </Header>
                <FormContainer onSubmit={handleSubmit}>
                    <FormMain>
                        <InputGroup>
                            <label htmlFor="title"> Title</label>
                            <input id="title" type="text" value={title} onChange={titleHandler} />
                        </InputGroup>
                        <InputGroup>
                            <label htmlFor="link"> Link</label>
                            <input id="link" type="text" value={link} onChange={linkHandler} />
                        </InputGroup>
                    </FormMain>
                    <Footer>
                        <button type="submit">
                            <CheckIcon />
                        </button>
                    </Footer>
                </FormContainer>
            </Container>
        </Overlay>
    )
}