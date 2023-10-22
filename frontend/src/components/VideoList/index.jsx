import React, { useEffect, useState } from "react";

import { Container, VideoListWrapper } from "./styles";

import AddVideo from "../AddVideo";
import Video from "../Video";

import api from "../../services/api";


export default function VideoList() {
    const [videos, setVideos] = useState([]);

    useEffect(() => { //captura no front os itens do BD
        api.get("videos").then(({ data }) => {
            setVideos(data.videos);
        });
        console.log(videos);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Container>
            <VideoListWrapper>
                {videos?.map((video) => ( //vai mapaear o objeto chamado pelo axios e exibir um video para cada item do BD
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