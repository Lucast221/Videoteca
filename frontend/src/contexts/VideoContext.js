import { createContext, useState } from "react";
import FormModal from "../components/FormModal";

import api from "../services/api";

export const VideoContext = createContext();

export function VideoContextProvider({ children }) {
    const [openFormModal, setOpenFormModal] = useState(false);
    const [title, setTitle] = useState("");
    const [link, setLink] = useState("");

    function handleAdd() {
        setOpenFormModal(true);
    }

    function handleClose() {
        setOpenFormModal(false)
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
        }
        api.post("http://localhost:3333/videos", video)
            .then((response) => {
                console.log(response)
            })

        setOpenFormModal(false);
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
            handleSubmit
        }}>
            {children}
            {openFormModal && <FormModal />}
        </VideoContext.Provider>
    )
}