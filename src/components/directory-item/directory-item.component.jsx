import { useNavigate } from "react-router-dom";
import { BackgroundImage, BodyContainer, DirectoryContainer } from "./directory-item.styles";

const DirectoryItem = ({ title, imageUrl, route }) => {
    const navigate = useNavigate();

    const onNavigateHandler = () => navigate(route);

    return (
        <DirectoryContainer onClick={onNavigateHandler}>
            <BackgroundImage imageurl={imageUrl}/>
            <BodyContainer>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </BodyContainer>
        </DirectoryContainer>
    )
}

export default DirectoryItem;