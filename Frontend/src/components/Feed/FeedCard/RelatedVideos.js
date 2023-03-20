import { useSelector, useDispatch } from "react-redux";
import { setQueue } from "../../../features/focalpoints/focalpointSlice";
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

        const response = await axios.post(`http://localhost:3000/youtube/related`, {
            sightToken: sightToken,
            videoId: insight.videoId,
        })
        console.log("response.data: ", response.data)
        const newQueue = {focalpointIndex: focalpointIndex, queue: response.data}
        dispatch(setQueue(newQueue));
    }


    return (
        <StyledTbBinaryTree2 onClick={handleInsightSelection} />
    )


}