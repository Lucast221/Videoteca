import React, { useEffect, useState } from "react";

import { Container, VideoListWrapper } from "./styles";

import AddVideo from "../AddVideo";
import Video from "../Video";

import api from "../../services/api";


export default function VideoList() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        api.get("videos").then(({ data }) => {
            setVideos(data.videos);
        });
        console.log(videos);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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