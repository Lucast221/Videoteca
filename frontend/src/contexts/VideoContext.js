import { createContext, useState } from "react";
import FormModal from "../components/FormModal";

import api from "../services/api";
import { useAxios } from "../hooks/useAxios";


export const VideoContext = createContext();

export function VideoContextProvider({ children }) {
    const { data, mutate } = useAxios('videos');

    const [openFormModal, setOpenFormModal] = useState(false);
    const [title, setTitle] = useState("");
    const [link, setLink] = useState("");
    const [id, setId] = useState(false);

    function handleAdd() {
        setOpenFormModal(true);
    }

    function handleClose() {
        if (title) {
            setTitle('');
        }
        if (link) {
            setLink('');
        }

        setOpenFormModal(false);
    }

    function titleHandler(event) {
        setTitle(event.target.value)
    }

    function linkHandler(event) {
        setLink(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault();

        const video = {
            title, link
        };

        if (id) {
            api.put(`videos/${id}`, video);

            const updatedVideos = {
                videos: data.videos?.map((video) => {
                    if (video._id === id) {
                        return { ...video, title, link };
                    }
                    return video;
                }),
            };
            mutate(updatedVideos, false);
        }

        else {
            api.post('videos', video);

            const updatedVideos = {
                videos: [...data.videos, video]
            }
            mutate(updatedVideos, false);
        }

        setOpenFormModal(false);
    }

    function handleLike(id) {
        api.patch(`videos/${id}`)

        const updatedVideos = {
            videos: data.videos?.map((video) => {
                if (video._id === id) {
                    return { ...video, title: video.title, link: video.link, liked: !video.liked }
                }
                return video;
            }),
        };

        mutate(updatedVideos, false);
    }

    function handleDelete(id) {
        api.delete(`videos/${id}`)

        const updatedVideos = {
            videos: data.videos?.filter((video) => video._id !== id),
        }
        mutate(updatedVideos, false);
    }

    function handleEdit(videoId, videoTitle, videoLink) {
        setTitle(videoTitle);
        setLink(videoLink);
        setId(videoId);

        setOpenFormModal(true);
    }

    return (
        <VideoContext.Provider value={{
            handleAdd,
            handleClose,
            title,
            setTitle,
            link,
            setLink,
            titleHandler,
            linkHandler,
            handleSubmit,
            handleEdit,
            handleDelete,
            handleLike,
            id,
            setId
        }}>
            {children}
            {openFormModal && <FormModal />}
        </VideoContext.Provider>
    )
}