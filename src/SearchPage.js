import React from 'react';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import './SearchPage.css';

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
            </div>
            <hr/>
            <ChannelRow 
                image="https://avatars2.githubusercontent.com/u/70435848?s=400&u=2209ca4705455c1e4181109f4734bf9805ad7fd1&v=4"
                channel="WinZcode Programmer"
                verified
                subs="60k"
                noOfVideos={38}
                description="You can watch Such a Cool Stuff of Advanced Programming here in this Channel. Lets smash the subscribe button and like after watching video"
            />

            <hr />
            <VideoRow
            title="🔴 HOW TO CLONE YOURSELF WITH THE HELP OF REACT.JS | 2020"
            timestamp="5 days ago"
            image="https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=1600"  
            views="1.4M"
            subs="60K"
            description="Watch this video and try to clone yourself"
            channel="WinZcode Programmer"
            />
            <VideoRow
            title="BUILD A ZOOM CLOUD WITH 🚀 NODE.JS FOR BEGINNERS 2020"
            image="https://images.unsplash.com/photo-1591522810783-a870802cbafe?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=1600"                
            views="1.4M"
            subs="60K"
            description="Zoom clone using node.js watch this video"
            timestamp="59 seconds ago"
            channel="WinZcode Programmer"
            />
            <VideoRow
            title="✈️ LET'S BUILD YOUTUBE CLONE WITH REACT.JS ✈️ | 2019"
            views="7"
            timestamp="39 seconds ago"
            image="https://images.unsplash.com/photo-1535551951406-a19828b0a76b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=1600"                
            subs="60K"
            description="LET'S BUILD YOUTUBE CLONE WITH REACT.JS then watch this video"
            channel="WinZcode Programmer"
            />
            <VideoRow
            title="Complete Java OOP'S Concept in 10 minutes for Begineers"
            timestamp="3 months ago"
            image="https://images.unsplash.com/photo-1555949963-aa79dcee981c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=1600"                
            views="200K"
            subs="60K"
            description="Watch this video on Complete Java OOP'S Concept in 10 minutes for Begineers"
            channel="WinZcode Programmer"
            />
            <VideoRow
            title="Become a Web Developer in 10 minutes | 2019/2020"
            timestamp="1 week ago"
            image="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=1600"                
            views="1.4M"
            subs="60K"
            description="Watch this video to Become a Web Developer in 10 minutes"
            channel="WinZcode Programmer"
            />
            <VideoRow
            title="🖥️ Short introducing to clone remote and programming instructions"
            timestamp="3 Months ago"
            views="1.2M"
            subs="60K"
            description="Watch this video on Short introducing to clone remote and programming instructions"
            channel="WinZcode Programmer"
            image="https://images.unsplash.com/photo-1534723328310-e82dad3ee43f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=900"                
            />
        </div>
    )
}

export default SearchPage
