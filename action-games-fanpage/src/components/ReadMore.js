import { useState } from "react";

function ReadMore({children}) {
    const summary = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => { setIsReadMore(!isReadMore); }

    return (
        <p>
            {isReadMore ? summary.slice(0, 125) : summary}
            <span onClick={toggleReadMore} className="read-or-hide">
                {isReadMore ? "...read more" : " show less"}
            </span>
        </p>
    );
}

export default ReadMore;
