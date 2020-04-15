import React, { Suspense } from "react";
import Preloader from "../components/common/Preloader/Preloader";

export const withSuspense = (Element) => { 
    return (props) => {
        return ( <Suspense fallback={<Preloader />}>
        <Element {...props}/>
      </Suspense>
      )
    }
}
