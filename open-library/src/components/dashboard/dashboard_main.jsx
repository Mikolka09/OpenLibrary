import React from "react";

export default class DashBoardMain extends React.Component{
    render() {
        return(
            <main className="col bg-faded py-3 flex-grow-1">
                <h2>Example</h2>
                <p>
                    This is a Bootstrap 4 example layout that includes a Sidebar menu. On larger screen widths, the
                    Sidebar is on the
                    left side and consumes the entire page height. It's vertically positioned down the screen. On
                    smaller screen widths (like mobile phones and tablets), the Sidebar
                    moves to the top of the page, and becomes horizontally positioned across the page like a Navbar.
                    Only icons are shown
                    on mobile to limit use of screen real estate.
                </p>
                <p>
                    This Sidebar works using only Bootstrap CSS classes and doesn't require JavaScript. It utilizes the
                    responsive Navbar classes
                    to auto-magically switch the Sidebar orientation.
                </p>
            </main>
        )
    }
}