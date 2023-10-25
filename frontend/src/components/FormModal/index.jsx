import React from "react";

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

    return (
        <Overlay>
            <Container>
                <Header>
                    <strong>Add a video</strong>
                    <button type="button">
                        <CloseIcon />
                    </button>
                </Header>
                <FormContainer>
                    <FormMain>
                        <InputGroup>
                            <label htmlFor="title"> Title</label>
                            <input id="title" type="text" />
                        </InputGroup>
                        <InputGroup>
                            <label htmlFor="link"> Link</label>
                            <input id="link" type="text" />
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