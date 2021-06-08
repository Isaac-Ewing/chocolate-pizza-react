import React from "react";
import logo from "./assets/logo.png"
import fbIcon from "./assets/fb-icon.png"
import twitIcon from "./assets/twit-icon.png"
import gpIcon from "./assets/gp-icon.png"
import instaIcon from "./assets/insta-icon.png"
import flicIcon from "./assets/flic-icon.png"
import pintIcon from "./assets/pint-icon.png"
import rssIcon from "./assets/rss-icon.png"
import mailIcon from "./assets/mail-icon.png"

class ButtonList extends React.Component {
    render() {
        return (
            <input type="image" src={this.props.source} alt=""/>
        )
    }
}

export class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="gutter-left-icons">
                    <img id="logo" style={{ width: 50, height: 50 }} src={logo} alt=""/>
                    <p>
                        <span><em>Delicious</em> <br />
                        </span>
                        <span>
                            THE BEST FOOD BLOG ON THE WEB
                        </span>
                    </p>
                </div>
                <div className="gutter-right-icons">
                    <ButtonList source={fbIcon}/>
                    <ButtonList source={twitIcon}/>
                    <ButtonList source={gpIcon}/>
                    <ButtonList source={instaIcon}/>
                    <ButtonList source={flicIcon}/>
                    <ButtonList source={pintIcon}/>
                    <ButtonList source={rssIcon}/>
                    <ButtonList source={mailIcon}/>
                </div>
            </header>
        );
    }
}