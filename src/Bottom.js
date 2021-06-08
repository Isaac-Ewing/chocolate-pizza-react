import React from "react";
import vanPic from "./assets/van-pic.png";
import smallLogo from "./assets/small-logo.png";

export class Footer extends React.Component {
    render() {
        return (
            <section class="bottom-section">
                <section class="author">
                    <div class="about">
                        <img class="author-img" src={vanPic} alt=""/>
                        <div class="author-info">
                            <p class="author-text"><span>Vanessa Stevenson</span><br /><br />Food enthusiast, photography fan. Add a pinch of raw foodism and that's pretty much who I am.
                            </p>
                        </div>
                    </div>
                    <button>
                        Share Recipe
                    </button>
                </section>
                <footer>
                    <section class="hr-logo-hr">
                        <div class="hr-left">
                        </div>
                        <div>
                            <img src={smallLogo} alt=""/>
                        </div>
                        <div class="hr-right">
                        </div>
                    </section>
                    <section>
                        <p>Delicious © 2013 · All Rights Reserved.</p>
                        <p>Proudly published with Ghost.</p>
                    </section>
                </footer>
            </section>
        );
    }
}