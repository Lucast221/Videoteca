import React from "react";
import { Container, VideoListWrapper } from "./styles";
import AddVideo from "../AddVideo";

export default function VideoList() {
    return (
        <Container>
            <VideoListWrapper>
                <AddVideo />
            </VideoListWrapper>
        </Container>
    );
}