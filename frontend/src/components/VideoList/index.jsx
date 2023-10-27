import React from "react";

import { useAxios } from "../../hooks/useAxios";
import AddVideo from "../AddVideo";
import Video from "../Video";

import { Container, VideoListWrapper } from "./styles";

export default function VideoList() {
    const { data } = useAxios('videos');

    return (
        <Container>
            <VideoListWrapper>
                {data?.videos?.map((video) => ( //vai mapaear o objeto chamado pelo axios e exibir um video para cada item do BD
                    <Video
                        key={video._id}
                        id={video._id}
                        title={video.title}
                        link={video.link}
                        liked={video.liked}
                    />
                ))}
                <AddVideo />
            </VideoListWrapper>
        </Container>
    );
}