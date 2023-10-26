import { createContext, useState } from "react";
import FormModal from "../components/FormModal";

import api from "../services/api";

export const VideoContext = createContext();

export function VideoContextProvider({ children }) {
    const [openFormModal, setOpenFormModal] = useState(false);
    const [title, setTitle] = useState("");
    const [link, setLink] = useState("");
    const [id, setId] = useState(false);

    function handleAdd() {
        setOpenFormModal(true);
    }

    function handleClose() {
        if (title) {
            setTitle("");

        }
        if (link) {
            setLink("");
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

        if (title) {
            setTitle("");

        }
        if (link) {
            setLink("");
        }

        const video = {
            title, link
        };

        if (id) {
            api.put(`videos/${id}`, video);
        }

        else {
            api.post('videos', video);
        }

        setOpenFormModal(false);
    }

    function handleLike(id) {
        api.patch(`videos/${id}`)
    }

    function handleDelete(id) {
        api.delete(`videos/${id}`)
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