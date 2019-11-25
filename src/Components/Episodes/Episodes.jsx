import React, { Component } from 'react';
import Fade from "react-reveal/Fade";
import Grid from '@material-ui/core/Grid';
import YouTube from 'react-youtube';
import './styles.scss';

class Episodes extends Component {


    render() {
        const opts = {
            height: '390',
            width: '640',
            playerVars: {
                autoplay: 1
            }
        };

        const _onReady = (event) => {
            // access to player in all event handlers via event.target
            event.target.pauseVideo();
        };

        function FormRow() {
            return (
                <React.Fragment>
                    <Grid item xs={4}>
                        <YouTube
                            videoId="2U_RKxc3an4"
                            opts={opts}
                            onReady={_onReady}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <YouTube
                            videoId="-reuzS53bsY"
                            opts={opts}
                            onReady={_onReady}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <YouTube
                            videoId="IGFvl1Nu2eo"
                            opts={opts}
                            onReady={_onReady}
                        />
                    </Grid>
                </React.Fragment>
            );
        }

        return (
            <div className="episodes-Container">
                <img className="background" src='/assets/Background_Dark.png' />
                <div className="fade-box">
                    <Fade bottom>
                        <div className="youtube-box">
                            <Grid container spacing={1}>
                                <Grid container item xs={12} spacing={3}>
                                    <FormRow />
                                </Grid>
                            </Grid>
                        </div>
                    </Fade>
                </div>
            </div>
        )
    }
}
export default Episodes
