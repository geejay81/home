import React from 'react'
import { Timeline } from 'react-twitter-widgets'

const TwitterTimeline = () => {
    return (
        <Timeline
            dataSource={{sourceType:"profile", screenName:"gregparr"}}
            options={{username:"gregparr", height:"300"}} />
    )
}

export default TwitterTimeline