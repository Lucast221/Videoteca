import React from "react";
import Header from "../Header";
import { Container } from "./styles";
import Footer from "../Footer";
import VideoList from "../VideoList";

export default function Layout() {
    return (
        <Container>
            <Header />
            <VideoList />
            <Footer />
        </Container>
    )
}