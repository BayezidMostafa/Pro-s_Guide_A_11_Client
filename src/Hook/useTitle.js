const { useEffect } = require("react")

const useTitle = title => {
    useEffect(()=>{
        document.title = `${title} - PRO'S GUIDE`;
    }, [title])
}

export default useTitle;