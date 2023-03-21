import { useSelector, useDispatch } from "react-redux";
import { setQueue, setCatalog } from "../../../features/focalpoints/focalpointSlice";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { StyledTbBinaryTree2 } from "./FeedCardElements";

export function RelatedVideos({insight}){
    const dispatch = useDispatch();
    const username = useSelector((state) => state.profile.username);
    const pathname = useLocation().pathname.split("/");
    const sightToken = useSelector((state) => state.profile.tokens.sightToken);
    const focalpointId = pathname[pathname.length - 1];
    let focalpointIndex = useSelector((state) => state.focalpoint.fp_array.findIndex(
        (focalpoint) => focalpoint._id === focalpointId
    ));
    async function handleInsightSelection(){
        console.log("insight: ", insight)
        console.log("focalpointId: ", focalpointId)

        const config = {
            headers: {
                'authorization': `Bearer ${sightToken}`,
                'content-Type': 'application/json',
            }
        };
        const response = await axios.post(`http://localhost:3000/youtube/related`,
            {
                videoId: insight.videoId,
            },
            config
        )
        dispatch(setCatalog({focalpointIndex: focalpointIndex, catalog: response.data}));
        const videos = [response.data[0], response.data[1], response.data[2]]
        const newQueue = {focalpointIndex: focalpointIndex, queue: videos};
        dispatch(setQueue(newQueue));
    }


    return (
        <StyledTbBinaryTree2 onClick={handleInsightSelection} />
    )


}