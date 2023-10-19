import React from "react";
import { Container, VideoListWrapper } from "./styles";
import AddVideo from "../AddVideo";
import Video from "../Video";


export default function VideoList() {
    return (
        <Container>
            <VideoListWrapper>
                <Video
                    id={1}
                    title="Title teste"
                    link="https://www.youtube.com/watch?v=BnnbP7pCIvQ&list=RDBnnbP7pCIvQ&start_radio=1"
                    liked={true}
                />
                <AddVideo />
            </VideoListWrapper>
        </Container>
    );
}